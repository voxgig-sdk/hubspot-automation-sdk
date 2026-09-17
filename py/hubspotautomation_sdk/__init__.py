# HubspotAutomation SDK

from hubspotautomation_sdk.utility.voxgig_struct import voxgig_struct as vs
from hubspotautomation_sdk.core.utility_type import HubspotAutomationUtility
from hubspotautomation_sdk.core.spec import HubspotAutomationSpec
from hubspotautomation_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from hubspotautomation_sdk.utility import register

# Load features
from hubspotautomation_sdk.feature.base_feature import HubspotAutomationBaseFeature
from hubspotautomation_sdk.features import _has_feature, _make_feature


class HubspotAutomationSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = HubspotAutomationUtility()
        self._utility = utility

        from hubspotautomation_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return HubspotAutomationUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = HubspotAutomationSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "HubspotAutomationSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("HubspotAutomationSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def ActionsV4CollectionResponsePublicActionDefinitionForward(self, data=None) -> "ActionsV4CollectionResponsePublicActionDefinitionForwardEntity":
        """Entity factory: client.ActionsV4CollectionResponsePublicActionDefinitionForward().list() / client.ActionsV4CollectionResponsePublicActionDefinitionForward().load({"id": ...})."""
        from hubspotautomation_sdk.entity.actions_v4_collection_response_public_action_definition_forward_entity import ActionsV4CollectionResponsePublicActionDefinitionForwardEntity
        return ActionsV4CollectionResponsePublicActionDefinitionForwardEntity(self, data)


    def ActionsV4CollectionResponsePublicActionFunctionIdentifierNo(self, data=None) -> "ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity":
        """Entity factory: client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo().list() / client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo().load({"id": ...})."""
        from hubspotautomation_sdk.entity.actions_v4_collection_response_public_action_function_identifier_no_entity import ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity
        return ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity(self, data)


    def ActionsV4CollectionResponsePublicActionRevisionForward(self, data=None) -> "ActionsV4CollectionResponsePublicActionRevisionForwardEntity":
        """Entity factory: client.ActionsV4CollectionResponsePublicActionRevisionForward().list() / client.ActionsV4CollectionResponsePublicActionRevisionForward().load({"id": ...})."""
        from hubspotautomation_sdk.entity.actions_v4_collection_response_public_action_revision_forward_entity import ActionsV4CollectionResponsePublicActionRevisionForwardEntity
        return ActionsV4CollectionResponsePublicActionRevisionForwardEntity(self, data)


    def ActionsV4PublicActionDefinition(self, data=None) -> "ActionsV4PublicActionDefinitionEntity":
        """Entity factory: client.ActionsV4PublicActionDefinition().list() / client.ActionsV4PublicActionDefinition().load({"id": ...})."""
        from hubspotautomation_sdk.entity.actions_v4_public_action_definition_entity import ActionsV4PublicActionDefinitionEntity
        return ActionsV4PublicActionDefinitionEntity(self, data)


    def ActionsV4PublicActionDefinitionRequiresObject(self, data=None) -> "ActionsV4PublicActionDefinitionRequiresObjectEntity":
        """Entity factory: client.ActionsV4PublicActionDefinitionRequiresObject().list() / client.ActionsV4PublicActionDefinitionRequiresObject().load({"id": ...})."""
        from hubspotautomation_sdk.entity.actions_v4_public_action_definition_requires_object_entity import ActionsV4PublicActionDefinitionRequiresObjectEntity
        return ActionsV4PublicActionDefinitionRequiresObjectEntity(self, data)


    def ActionsV4PublicActionFunction(self, data=None) -> "ActionsV4PublicActionFunctionEntity":
        """Entity factory: client.ActionsV4PublicActionFunction().list() / client.ActionsV4PublicActionFunction().load({"id": ...})."""
        from hubspotautomation_sdk.entity.actions_v4_public_action_function_entity import ActionsV4PublicActionFunctionEntity
        return ActionsV4PublicActionFunctionEntity(self, data)


    def ActionsV4PublicActionFunctionIdentifier(self, data=None) -> "ActionsV4PublicActionFunctionIdentifierEntity":
        """Entity factory: client.ActionsV4PublicActionFunctionIdentifier().list() / client.ActionsV4PublicActionFunctionIdentifier().load({"id": ...})."""
        from hubspotautomation_sdk.entity.actions_v4_public_action_function_identifier_entity import ActionsV4PublicActionFunctionIdentifierEntity
        return ActionsV4PublicActionFunctionIdentifierEntity(self, data)


    def ActionsV4PublicActionRevision(self, data=None) -> "ActionsV4PublicActionRevisionEntity":
        """Entity factory: client.ActionsV4PublicActionRevision().list() / client.ActionsV4PublicActionRevision().load({"id": ...})."""
        from hubspotautomation_sdk.entity.actions_v4_public_action_revision_entity import ActionsV4PublicActionRevisionEntity
        return ActionsV4PublicActionRevisionEntity(self, data)


    def AutomationV4ApiFlow(self, data=None) -> "AutomationV4ApiFlowEntity":
        """Entity factory: client.AutomationV4ApiFlow().list() / client.AutomationV4ApiFlow().load({"id": ...})."""
        from hubspotautomation_sdk.entity.automation_v4_api_flow_entity import AutomationV4ApiFlowEntity
        return AutomationV4ApiFlowEntity(self, data)


    def AutomationV4BatchResponseApiFlow(self, data=None) -> "AutomationV4BatchResponseApiFlowEntity":
        """Entity factory: client.AutomationV4BatchResponseApiFlow().list() / client.AutomationV4BatchResponseApiFlow().load({"id": ...})."""
        from hubspotautomation_sdk.entity.automation_v4_batch_response_api_flow_entity import AutomationV4BatchResponseApiFlowEntity
        return AutomationV4BatchResponseApiFlowEntity(self, data)


    def AutomationV4BatchResponseFlowIdWorkflowIdMapping(self, data=None) -> "AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity":
        """Entity factory: client.AutomationV4BatchResponseFlowIdWorkflowIdMapping().list() / client.AutomationV4BatchResponseFlowIdWorkflowIdMapping().load({"id": ...})."""
        from hubspotautomation_sdk.entity.automation_v4_batch_response_flow_id_workflow_id_mapping_entity import AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity
        return AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity(self, data)


    def AutomationV4CollectionResponseApiFlowEmailCampaign(self, data=None) -> "AutomationV4CollectionResponseApiFlowEmailCampaignEntity":
        """Entity factory: client.AutomationV4CollectionResponseApiFlowEmailCampaign().list() / client.AutomationV4CollectionResponseApiFlowEmailCampaign().load({"id": ...})."""
        from hubspotautomation_sdk.entity.automation_v4_collection_response_api_flow_email_campaign_entity import AutomationV4CollectionResponseApiFlowEmailCampaignEntity
        return AutomationV4CollectionResponseApiFlowEmailCampaignEntity(self, data)


    def AutomationV4CollectionResponseApiFlowListingForwardPaging(self, data=None) -> "AutomationV4CollectionResponseApiFlowListingForwardPagingEntity":
        """Entity factory: client.AutomationV4CollectionResponseApiFlowListingForwardPaging().list() / client.AutomationV4CollectionResponseApiFlowListingForwardPaging().load({"id": ...})."""
        from hubspotautomation_sdk.entity.automation_v4_collection_response_api_flow_listing_forward_paging_entity import AutomationV4CollectionResponseApiFlowListingForwardPagingEntity
        return AutomationV4CollectionResponseApiFlowListingForwardPagingEntity(self, data)


    def AutomationV4CollectionResponseApiHistogramDataPointNo(self, data=None) -> "AutomationV4CollectionResponseApiHistogramDataPointNoEntity":
        """Entity factory: client.AutomationV4CollectionResponseApiHistogramDataPointNo().list() / client.AutomationV4CollectionResponseApiHistogramDataPointNo().load({"id": ...})."""
        from hubspotautomation_sdk.entity.automation_v4_collection_response_api_histogram_data_point_no_entity import AutomationV4CollectionResponseApiHistogramDataPointNoEntity
        return AutomationV4CollectionResponseApiHistogramDataPointNoEntity(self, data)


    def Basic(self, data=None) -> "BasicEntity":
        """Entity factory: client.Basic().list() / client.Basic().load({"id": ...})."""
        from hubspotautomation_sdk.entity.basic_entity import BasicEntity
        return BasicEntity(self, data)


    def Callback(self, data=None) -> "CallbackEntity":
        """Entity factory: client.Callback().list() / client.Callback().load({"id": ...})."""
        from hubspotautomation_sdk.entity.callback_entity import CallbackEntity
        return CallbackEntity(self, data)


    def Definition(self, data=None) -> "DefinitionEntity":
        """Entity factory: client.Definition().list() / client.Definition().load({"id": ...})."""
        from hubspotautomation_sdk.entity.definition_entity import DefinitionEntity
        return DefinitionEntity(self, data)


    def EmailTemplatesCollectionResponsePublicFolderForwardPaging(self, data=None) -> "EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity":
        """Entity factory: client.EmailTemplatesCollectionResponsePublicFolderForwardPaging().list() / client.EmailTemplatesCollectionResponsePublicFolderForwardPaging().load({"id": ...})."""
        from hubspotautomation_sdk.entity.email_templates_collection_response_public_folder_forward_paging_entity import EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity
        return EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity(self, data)


    def EmailTemplatesCollectionResponsePublicTemplateForwardPaging(self, data=None) -> "EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity":
        """Entity factory: client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging().list() / client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging().load({"id": ...})."""
        from hubspotautomation_sdk.entity.email_templates_collection_response_public_template_forward_paging_entity import EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity
        return EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity(self, data)


    def EmailTemplatesPublicTemplate(self, data=None) -> "EmailTemplatesPublicTemplateEntity":
        """Entity factory: client.EmailTemplatesPublicTemplate().list() / client.EmailTemplatesPublicTemplate().load({"id": ...})."""
        from hubspotautomation_sdk.entity.email_templates_public_template_entity import EmailTemplatesPublicTemplateEntity
        return EmailTemplatesPublicTemplateEntity(self, data)


    def Function(self, data=None) -> "FunctionEntity":
        """Entity factory: client.Function().list() / client.Function().load({"id": ...})."""
        from hubspotautomation_sdk.entity.function_entity import FunctionEntity
        return FunctionEntity(self, data)


    def Sequence(self, data=None) -> "SequenceEntity":
        """Entity factory: client.Sequence().list() / client.Sequence().load({"id": ...})."""
        from hubspotautomation_sdk.entity.sequence_entity import SequenceEntity
        return SequenceEntity(self, data)


    def SequencesCollectionResponseWithTotalPublicSequenceLite(self, data=None) -> "SequencesCollectionResponseWithTotalPublicSequenceLiteEntity":
        """Entity factory: client.SequencesCollectionResponseWithTotalPublicSequenceLite().list() / client.SequencesCollectionResponseWithTotalPublicSequenceLite().load({"id": ...})."""
        from hubspotautomation_sdk.entity.sequences_collection_response_with_total_public_sequence_lite_entity import SequencesCollectionResponseWithTotalPublicSequenceLiteEntity
        return SequencesCollectionResponseWithTotalPublicSequenceLiteEntity(self, data)


    def SequencesPublicSequence(self, data=None) -> "SequencesPublicSequenceEntity":
        """Entity factory: client.SequencesPublicSequence().list() / client.SequencesPublicSequence().load({"id": ...})."""
        from hubspotautomation_sdk.entity.sequences_public_sequence_entity import SequencesPublicSequenceEntity
        return SequencesPublicSequenceEntity(self, data)


    def SequencesPublicSequenceEnrollment(self, data=None) -> "SequencesPublicSequenceEnrollmentEntity":
        """Entity factory: client.SequencesPublicSequenceEnrollment().list() / client.SequencesPublicSequenceEnrollment().load({"id": ...})."""
        from hubspotautomation_sdk.entity.sequences_public_sequence_enrollment_entity import SequencesPublicSequenceEnrollmentEntity
        return SequencesPublicSequenceEnrollmentEntity(self, data)


    def SequencesPublicSequenceEnrollmentLite(self, data=None) -> "SequencesPublicSequenceEnrollmentLiteEntity":
        """Entity factory: client.SequencesPublicSequenceEnrollmentLite().list() / client.SequencesPublicSequenceEnrollmentLite().load({"id": ...})."""
        from hubspotautomation_sdk.entity.sequences_public_sequence_enrollment_lite_entity import SequencesPublicSequenceEnrollmentLiteEntity
        return SequencesPublicSequenceEnrollmentLiteEntity(self, data)


    def SequencesPublicSequencePerformance(self, data=None) -> "SequencesPublicSequencePerformanceEntity":
        """Entity factory: client.SequencesPublicSequencePerformance().list() / client.SequencesPublicSequencePerformance().load({"id": ...})."""
        from hubspotautomation_sdk.entity.sequences_public_sequence_performance_entity import SequencesPublicSequencePerformanceEntity
        return SequencesPublicSequencePerformanceEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "HubspotAutomationSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from hubspotautomation_sdk.entity.actions_v4_collection_response_public_action_definition_forward_entity import ActionsV4CollectionResponsePublicActionDefinitionForwardEntity
    from hubspotautomation_sdk.entity.actions_v4_collection_response_public_action_function_identifier_no_entity import ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity
    from hubspotautomation_sdk.entity.actions_v4_collection_response_public_action_revision_forward_entity import ActionsV4CollectionResponsePublicActionRevisionForwardEntity
    from hubspotautomation_sdk.entity.actions_v4_public_action_definition_entity import ActionsV4PublicActionDefinitionEntity
    from hubspotautomation_sdk.entity.actions_v4_public_action_definition_requires_object_entity import ActionsV4PublicActionDefinitionRequiresObjectEntity
    from hubspotautomation_sdk.entity.actions_v4_public_action_function_entity import ActionsV4PublicActionFunctionEntity
    from hubspotautomation_sdk.entity.actions_v4_public_action_function_identifier_entity import ActionsV4PublicActionFunctionIdentifierEntity
    from hubspotautomation_sdk.entity.actions_v4_public_action_revision_entity import ActionsV4PublicActionRevisionEntity
    from hubspotautomation_sdk.entity.automation_v4_api_flow_entity import AutomationV4ApiFlowEntity
    from hubspotautomation_sdk.entity.automation_v4_batch_response_api_flow_entity import AutomationV4BatchResponseApiFlowEntity
    from hubspotautomation_sdk.entity.automation_v4_batch_response_flow_id_workflow_id_mapping_entity import AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity
    from hubspotautomation_sdk.entity.automation_v4_collection_response_api_flow_email_campaign_entity import AutomationV4CollectionResponseApiFlowEmailCampaignEntity
    from hubspotautomation_sdk.entity.automation_v4_collection_response_api_flow_listing_forward_paging_entity import AutomationV4CollectionResponseApiFlowListingForwardPagingEntity
    from hubspotautomation_sdk.entity.automation_v4_collection_response_api_histogram_data_point_no_entity import AutomationV4CollectionResponseApiHistogramDataPointNoEntity
    from hubspotautomation_sdk.entity.basic_entity import BasicEntity
    from hubspotautomation_sdk.entity.callback_entity import CallbackEntity
    from hubspotautomation_sdk.entity.definition_entity import DefinitionEntity
    from hubspotautomation_sdk.entity.email_templates_collection_response_public_folder_forward_paging_entity import EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity
    from hubspotautomation_sdk.entity.email_templates_collection_response_public_template_forward_paging_entity import EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity
    from hubspotautomation_sdk.entity.email_templates_public_template_entity import EmailTemplatesPublicTemplateEntity
    from hubspotautomation_sdk.entity.function_entity import FunctionEntity
    from hubspotautomation_sdk.entity.sequence_entity import SequenceEntity
    from hubspotautomation_sdk.entity.sequences_collection_response_with_total_public_sequence_lite_entity import SequencesCollectionResponseWithTotalPublicSequenceLiteEntity
    from hubspotautomation_sdk.entity.sequences_public_sequence_entity import SequencesPublicSequenceEntity
    from hubspotautomation_sdk.entity.sequences_public_sequence_enrollment_entity import SequencesPublicSequenceEnrollmentEntity
    from hubspotautomation_sdk.entity.sequences_public_sequence_enrollment_lite_entity import SequencesPublicSequenceEnrollmentLiteEntity
    from hubspotautomation_sdk.entity.sequences_public_sequence_performance_entity import SequencesPublicSequencePerformanceEntity
