"use strict";
// HubspotAutomation Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.HubspotAutomationSDK = exports.HubspotAutomationEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const ActionsV4CollectionResponsePublicActionDefinitionForwardEntity_1 = require("./entity/ActionsV4CollectionResponsePublicActionDefinitionForwardEntity");
const ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity_1 = require("./entity/ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity");
const ActionsV4CollectionResponsePublicActionRevisionForwardEntity_1 = require("./entity/ActionsV4CollectionResponsePublicActionRevisionForwardEntity");
const ActionsV4PublicActionDefinitionEntity_1 = require("./entity/ActionsV4PublicActionDefinitionEntity");
const ActionsV4PublicActionDefinitionRequiresObjectEntity_1 = require("./entity/ActionsV4PublicActionDefinitionRequiresObjectEntity");
const ActionsV4PublicActionFunctionEntity_1 = require("./entity/ActionsV4PublicActionFunctionEntity");
const ActionsV4PublicActionFunctionIdentifierEntity_1 = require("./entity/ActionsV4PublicActionFunctionIdentifierEntity");
const ActionsV4PublicActionRevisionEntity_1 = require("./entity/ActionsV4PublicActionRevisionEntity");
const AutomationV4ApiFlowEntity_1 = require("./entity/AutomationV4ApiFlowEntity");
const AutomationV4BatchResponseApiFlowEntity_1 = require("./entity/AutomationV4BatchResponseApiFlowEntity");
const AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity_1 = require("./entity/AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity");
const AutomationV4CollectionResponseApiFlowEmailCampaignEntity_1 = require("./entity/AutomationV4CollectionResponseApiFlowEmailCampaignEntity");
const AutomationV4CollectionResponseApiFlowListingForwardPagingEntity_1 = require("./entity/AutomationV4CollectionResponseApiFlowListingForwardPagingEntity");
const AutomationV4CollectionResponseApiHistogramDataPointNoEntity_1 = require("./entity/AutomationV4CollectionResponseApiHistogramDataPointNoEntity");
const BasicEntity_1 = require("./entity/BasicEntity");
const CallbackEntity_1 = require("./entity/CallbackEntity");
const DefinitionEntity_1 = require("./entity/DefinitionEntity");
const EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity_1 = require("./entity/EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity");
const EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity_1 = require("./entity/EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity");
const EmailTemplatesPublicTemplateEntity_1 = require("./entity/EmailTemplatesPublicTemplateEntity");
const FunctionEntity_1 = require("./entity/FunctionEntity");
const SequenceEntity_1 = require("./entity/SequenceEntity");
const SequencesCollectionResponseWithTotalPublicSequenceLiteEntity_1 = require("./entity/SequencesCollectionResponseWithTotalPublicSequenceLiteEntity");
const SequencesPublicSequenceEntity_1 = require("./entity/SequencesPublicSequenceEntity");
const SequencesPublicSequenceEnrollmentEntity_1 = require("./entity/SequencesPublicSequenceEnrollmentEntity");
const SequencesPublicSequenceEnrollmentLiteEntity_1 = require("./entity/SequencesPublicSequenceEnrollmentLiteEntity");
const SequencesPublicSequencePerformanceEntity_1 = require("./entity/SequencesPublicSequencePerformanceEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const HubspotAutomationEntityBase_1 = require("./HubspotAutomationEntityBase");
Object.defineProperty(exports, "HubspotAutomationEntityBase", { enumerable: true, get: function () { return HubspotAutomationEntityBase_1.HubspotAutomationEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class HubspotAutomationSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        // Build spec directly from SDK options + user-provided fetch args.
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        // Merge user-provided headers over SDK defaults.
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        // Apply SDK auth (apikey, auth prefix, etc.)
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('HubspotAutomationSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path `direct` uses, with the
    // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report a
    // failed query as ok.
    //
    // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('HubspotAutomationSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('HubspotAutomationSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.ActionsV4CollectionResponsePublicActionDefinitionForward().list()` / `client.ActionsV4CollectionResponsePublicActionDefinitionForward().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsV4CollectionResponsePublicActionDefinitionForward(entopts) {
        const self = this;
        return new ActionsV4CollectionResponsePublicActionDefinitionForwardEntity_1.ActionsV4CollectionResponsePublicActionDefinitionForwardEntity(self, entopts);
    }
    // Entity access: `client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo().list()` / `client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsV4CollectionResponsePublicActionFunctionIdentifierNo(entopts) {
        const self = this;
        return new ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity_1.ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity(self, entopts);
    }
    // Entity access: `client.ActionsV4CollectionResponsePublicActionRevisionForward().list()` / `client.ActionsV4CollectionResponsePublicActionRevisionForward().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsV4CollectionResponsePublicActionRevisionForward(entopts) {
        const self = this;
        return new ActionsV4CollectionResponsePublicActionRevisionForwardEntity_1.ActionsV4CollectionResponsePublicActionRevisionForwardEntity(self, entopts);
    }
    // Entity access: `client.ActionsV4PublicActionDefinition().list()` / `client.ActionsV4PublicActionDefinition().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsV4PublicActionDefinition(entopts) {
        const self = this;
        return new ActionsV4PublicActionDefinitionEntity_1.ActionsV4PublicActionDefinitionEntity(self, entopts);
    }
    // Entity access: `client.ActionsV4PublicActionDefinitionRequiresObject().list()` / `client.ActionsV4PublicActionDefinitionRequiresObject().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsV4PublicActionDefinitionRequiresObject(entopts) {
        const self = this;
        return new ActionsV4PublicActionDefinitionRequiresObjectEntity_1.ActionsV4PublicActionDefinitionRequiresObjectEntity(self, entopts);
    }
    // Entity access: `client.ActionsV4PublicActionFunction().list()` / `client.ActionsV4PublicActionFunction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsV4PublicActionFunction(entopts) {
        const self = this;
        return new ActionsV4PublicActionFunctionEntity_1.ActionsV4PublicActionFunctionEntity(self, entopts);
    }
    // Entity access: `client.ActionsV4PublicActionFunctionIdentifier().list()` / `client.ActionsV4PublicActionFunctionIdentifier().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsV4PublicActionFunctionIdentifier(entopts) {
        const self = this;
        return new ActionsV4PublicActionFunctionIdentifierEntity_1.ActionsV4PublicActionFunctionIdentifierEntity(self, entopts);
    }
    // Entity access: `client.ActionsV4PublicActionRevision().list()` / `client.ActionsV4PublicActionRevision().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ActionsV4PublicActionRevision(entopts) {
        const self = this;
        return new ActionsV4PublicActionRevisionEntity_1.ActionsV4PublicActionRevisionEntity(self, entopts);
    }
    // Entity access: `client.AutomationV4ApiFlow().list()` / `client.AutomationV4ApiFlow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutomationV4ApiFlow(entopts) {
        const self = this;
        return new AutomationV4ApiFlowEntity_1.AutomationV4ApiFlowEntity(self, entopts);
    }
    // Entity access: `client.AutomationV4BatchResponseApiFlow().list()` / `client.AutomationV4BatchResponseApiFlow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutomationV4BatchResponseApiFlow(entopts) {
        const self = this;
        return new AutomationV4BatchResponseApiFlowEntity_1.AutomationV4BatchResponseApiFlowEntity(self, entopts);
    }
    // Entity access: `client.AutomationV4BatchResponseFlowIdWorkflowIdMapping().list()` / `client.AutomationV4BatchResponseFlowIdWorkflowIdMapping().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutomationV4BatchResponseFlowIdWorkflowIdMapping(entopts) {
        const self = this;
        return new AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity_1.AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity(self, entopts);
    }
    // Entity access: `client.AutomationV4CollectionResponseApiFlowEmailCampaign().list()` / `client.AutomationV4CollectionResponseApiFlowEmailCampaign().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutomationV4CollectionResponseApiFlowEmailCampaign(entopts) {
        const self = this;
        return new AutomationV4CollectionResponseApiFlowEmailCampaignEntity_1.AutomationV4CollectionResponseApiFlowEmailCampaignEntity(self, entopts);
    }
    // Entity access: `client.AutomationV4CollectionResponseApiFlowListingForwardPaging().list()` / `client.AutomationV4CollectionResponseApiFlowListingForwardPaging().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutomationV4CollectionResponseApiFlowListingForwardPaging(entopts) {
        const self = this;
        return new AutomationV4CollectionResponseApiFlowListingForwardPagingEntity_1.AutomationV4CollectionResponseApiFlowListingForwardPagingEntity(self, entopts);
    }
    // Entity access: `client.AutomationV4CollectionResponseApiHistogramDataPointNo().list()` / `client.AutomationV4CollectionResponseApiHistogramDataPointNo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutomationV4CollectionResponseApiHistogramDataPointNo(entopts) {
        const self = this;
        return new AutomationV4CollectionResponseApiHistogramDataPointNoEntity_1.AutomationV4CollectionResponseApiHistogramDataPointNoEntity(self, entopts);
    }
    // Entity access: `client.Basic().list()` / `client.Basic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Basic(entopts) {
        const self = this;
        return new BasicEntity_1.BasicEntity(self, entopts);
    }
    // Entity access: `client.Callback().list()` / `client.Callback().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Callback(entopts) {
        const self = this;
        return new CallbackEntity_1.CallbackEntity(self, entopts);
    }
    // Entity access: `client.Definition().list()` / `client.Definition().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Definition(entopts) {
        const self = this;
        return new DefinitionEntity_1.DefinitionEntity(self, entopts);
    }
    // Entity access: `client.EmailTemplatesCollectionResponsePublicFolderForwardPaging().list()` / `client.EmailTemplatesCollectionResponsePublicFolderForwardPaging().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmailTemplatesCollectionResponsePublicFolderForwardPaging(entopts) {
        const self = this;
        return new EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity_1.EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity(self, entopts);
    }
    // Entity access: `client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging().list()` / `client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmailTemplatesCollectionResponsePublicTemplateForwardPaging(entopts) {
        const self = this;
        return new EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity_1.EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity(self, entopts);
    }
    // Entity access: `client.EmailTemplatesPublicTemplate().list()` / `client.EmailTemplatesPublicTemplate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmailTemplatesPublicTemplate(entopts) {
        const self = this;
        return new EmailTemplatesPublicTemplateEntity_1.EmailTemplatesPublicTemplateEntity(self, entopts);
    }
    // Entity access: `client.Function().list()` / `client.Function().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Function(entopts) {
        const self = this;
        return new FunctionEntity_1.FunctionEntity(self, entopts);
    }
    // Entity access: `client.Sequence().list()` / `client.Sequence().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Sequence(entopts) {
        const self = this;
        return new SequenceEntity_1.SequenceEntity(self, entopts);
    }
    // Entity access: `client.SequencesCollectionResponseWithTotalPublicSequenceLite().list()` / `client.SequencesCollectionResponseWithTotalPublicSequenceLite().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SequencesCollectionResponseWithTotalPublicSequenceLite(entopts) {
        const self = this;
        return new SequencesCollectionResponseWithTotalPublicSequenceLiteEntity_1.SequencesCollectionResponseWithTotalPublicSequenceLiteEntity(self, entopts);
    }
    // Entity access: `client.SequencesPublicSequence().list()` / `client.SequencesPublicSequence().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SequencesPublicSequence(entopts) {
        const self = this;
        return new SequencesPublicSequenceEntity_1.SequencesPublicSequenceEntity(self, entopts);
    }
    // Entity access: `client.SequencesPublicSequenceEnrollment().list()` / `client.SequencesPublicSequenceEnrollment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SequencesPublicSequenceEnrollment(entopts) {
        const self = this;
        return new SequencesPublicSequenceEnrollmentEntity_1.SequencesPublicSequenceEnrollmentEntity(self, entopts);
    }
    // Entity access: `client.SequencesPublicSequenceEnrollmentLite().list()` / `client.SequencesPublicSequenceEnrollmentLite().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SequencesPublicSequenceEnrollmentLite(entopts) {
        const self = this;
        return new SequencesPublicSequenceEnrollmentLiteEntity_1.SequencesPublicSequenceEnrollmentLiteEntity(self, entopts);
    }
    // Entity access: `client.SequencesPublicSequencePerformance().list()` / `client.SequencesPublicSequencePerformance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SequencesPublicSequencePerformance(entopts) {
        const self = this;
        return new SequencesPublicSequencePerformanceEntity_1.SequencesPublicSequencePerformanceEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new HubspotAutomationSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return HubspotAutomationSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'HubspotAutomation' };
    }
    toString() {
        return 'HubspotAutomation ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.HubspotAutomationSDK = HubspotAutomationSDK;
const SDK = HubspotAutomationSDK;
exports.SDK = SDK;
//# sourceMappingURL=HubspotAutomationSDK.js.map