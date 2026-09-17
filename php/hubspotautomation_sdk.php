<?php
declare(strict_types=1);

// HubspotAutomation SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class HubspotAutomationSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new HubspotAutomationUtility();
        $this->_utility = $utility;

        $config = HubspotAutomationConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = HubspotAutomationHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = HubspotAutomationHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!HubspotAutomationFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, HubspotAutomationFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return HubspotAutomationUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = HubspotAutomationHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = HubspotAutomationHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = HubspotAutomationHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new HubspotAutomationSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new HubspotAutomationError($op . "_allow",
                "HubspotAutomationSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = HubspotAutomationHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = HubspotAutomationHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new HubspotAutomationError("graphql_error",
                "HubspotAutomationSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_actions_v4_collection_response_public_action_definition_forward = null;

    // Canonical facade: $client->ActionsV4CollectionResponsePublicActionDefinitionForward()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_v4_collection_response_public_action_definition_forward()
    // resolves here too.
    public function ActionsV4CollectionResponsePublicActionDefinitionForward($data = null)
    {
        require_once __DIR__ . '/entity/actions_v4_collection_response_public_action_definition_forward_entity.php';
        if ($data === null) {
            if ($this->_actions_v4_collection_response_public_action_definition_forward === null) {
                $this->_actions_v4_collection_response_public_action_definition_forward = new ActionsV4CollectionResponsePublicActionDefinitionForwardEntity($this, null);
            }
            return $this->_actions_v4_collection_response_public_action_definition_forward;
        }
        return new ActionsV4CollectionResponsePublicActionDefinitionForwardEntity($this, $data);
    }


    private $_actions_v4_collection_response_public_action_function_identifier_no = null;

    // Canonical facade: $client->ActionsV4CollectionResponsePublicActionFunctionIdentifierNo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_v4_collection_response_public_action_function_identifier_no()
    // resolves here too.
    public function ActionsV4CollectionResponsePublicActionFunctionIdentifierNo($data = null)
    {
        require_once __DIR__ . '/entity/actions_v4_collection_response_public_action_function_identifier_no_entity.php';
        if ($data === null) {
            if ($this->_actions_v4_collection_response_public_action_function_identifier_no === null) {
                $this->_actions_v4_collection_response_public_action_function_identifier_no = new ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity($this, null);
            }
            return $this->_actions_v4_collection_response_public_action_function_identifier_no;
        }
        return new ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity($this, $data);
    }


    private $_actions_v4_collection_response_public_action_revision_forward = null;

    // Canonical facade: $client->ActionsV4CollectionResponsePublicActionRevisionForward()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_v4_collection_response_public_action_revision_forward()
    // resolves here too.
    public function ActionsV4CollectionResponsePublicActionRevisionForward($data = null)
    {
        require_once __DIR__ . '/entity/actions_v4_collection_response_public_action_revision_forward_entity.php';
        if ($data === null) {
            if ($this->_actions_v4_collection_response_public_action_revision_forward === null) {
                $this->_actions_v4_collection_response_public_action_revision_forward = new ActionsV4CollectionResponsePublicActionRevisionForwardEntity($this, null);
            }
            return $this->_actions_v4_collection_response_public_action_revision_forward;
        }
        return new ActionsV4CollectionResponsePublicActionRevisionForwardEntity($this, $data);
    }


    private $_actions_v4_public_action_definition = null;

    // Canonical facade: $client->ActionsV4PublicActionDefinition()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_v4_public_action_definition()
    // resolves here too.
    public function ActionsV4PublicActionDefinition($data = null)
    {
        require_once __DIR__ . '/entity/actions_v4_public_action_definition_entity.php';
        if ($data === null) {
            if ($this->_actions_v4_public_action_definition === null) {
                $this->_actions_v4_public_action_definition = new ActionsV4PublicActionDefinitionEntity($this, null);
            }
            return $this->_actions_v4_public_action_definition;
        }
        return new ActionsV4PublicActionDefinitionEntity($this, $data);
    }


    private $_actions_v4_public_action_definition_requires_object = null;

    // Canonical facade: $client->ActionsV4PublicActionDefinitionRequiresObject()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_v4_public_action_definition_requires_object()
    // resolves here too.
    public function ActionsV4PublicActionDefinitionRequiresObject($data = null)
    {
        require_once __DIR__ . '/entity/actions_v4_public_action_definition_requires_object_entity.php';
        if ($data === null) {
            if ($this->_actions_v4_public_action_definition_requires_object === null) {
                $this->_actions_v4_public_action_definition_requires_object = new ActionsV4PublicActionDefinitionRequiresObjectEntity($this, null);
            }
            return $this->_actions_v4_public_action_definition_requires_object;
        }
        return new ActionsV4PublicActionDefinitionRequiresObjectEntity($this, $data);
    }


    private $_actions_v4_public_action_function = null;

    // Canonical facade: $client->ActionsV4PublicActionFunction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_v4_public_action_function()
    // resolves here too.
    public function ActionsV4PublicActionFunction($data = null)
    {
        require_once __DIR__ . '/entity/actions_v4_public_action_function_entity.php';
        if ($data === null) {
            if ($this->_actions_v4_public_action_function === null) {
                $this->_actions_v4_public_action_function = new ActionsV4PublicActionFunctionEntity($this, null);
            }
            return $this->_actions_v4_public_action_function;
        }
        return new ActionsV4PublicActionFunctionEntity($this, $data);
    }


    private $_actions_v4_public_action_function_identifier = null;

    // Canonical facade: $client->ActionsV4PublicActionFunctionIdentifier()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_v4_public_action_function_identifier()
    // resolves here too.
    public function ActionsV4PublicActionFunctionIdentifier($data = null)
    {
        require_once __DIR__ . '/entity/actions_v4_public_action_function_identifier_entity.php';
        if ($data === null) {
            if ($this->_actions_v4_public_action_function_identifier === null) {
                $this->_actions_v4_public_action_function_identifier = new ActionsV4PublicActionFunctionIdentifierEntity($this, null);
            }
            return $this->_actions_v4_public_action_function_identifier;
        }
        return new ActionsV4PublicActionFunctionIdentifierEntity($this, $data);
    }


    private $_actions_v4_public_action_revision = null;

    // Canonical facade: $client->ActionsV4PublicActionRevision()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->actions_v4_public_action_revision()
    // resolves here too.
    public function ActionsV4PublicActionRevision($data = null)
    {
        require_once __DIR__ . '/entity/actions_v4_public_action_revision_entity.php';
        if ($data === null) {
            if ($this->_actions_v4_public_action_revision === null) {
                $this->_actions_v4_public_action_revision = new ActionsV4PublicActionRevisionEntity($this, null);
            }
            return $this->_actions_v4_public_action_revision;
        }
        return new ActionsV4PublicActionRevisionEntity($this, $data);
    }


    private $_automation_v4_api_flow = null;

    // Canonical facade: $client->AutomationV4ApiFlow()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->automation_v4_api_flow()
    // resolves here too.
    public function AutomationV4ApiFlow($data = null)
    {
        require_once __DIR__ . '/entity/automation_v4_api_flow_entity.php';
        if ($data === null) {
            if ($this->_automation_v4_api_flow === null) {
                $this->_automation_v4_api_flow = new AutomationV4ApiFlowEntity($this, null);
            }
            return $this->_automation_v4_api_flow;
        }
        return new AutomationV4ApiFlowEntity($this, $data);
    }


    private $_automation_v4_batch_response_api_flow = null;

    // Canonical facade: $client->AutomationV4BatchResponseApiFlow()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->automation_v4_batch_response_api_flow()
    // resolves here too.
    public function AutomationV4BatchResponseApiFlow($data = null)
    {
        require_once __DIR__ . '/entity/automation_v4_batch_response_api_flow_entity.php';
        if ($data === null) {
            if ($this->_automation_v4_batch_response_api_flow === null) {
                $this->_automation_v4_batch_response_api_flow = new AutomationV4BatchResponseApiFlowEntity($this, null);
            }
            return $this->_automation_v4_batch_response_api_flow;
        }
        return new AutomationV4BatchResponseApiFlowEntity($this, $data);
    }


    private $_automation_v4_batch_response_flow_id_workflow_id_mapping = null;

    // Canonical facade: $client->AutomationV4BatchResponseFlowIdWorkflowIdMapping()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->automation_v4_batch_response_flow_id_workflow_id_mapping()
    // resolves here too.
    public function AutomationV4BatchResponseFlowIdWorkflowIdMapping($data = null)
    {
        require_once __DIR__ . '/entity/automation_v4_batch_response_flow_id_workflow_id_mapping_entity.php';
        if ($data === null) {
            if ($this->_automation_v4_batch_response_flow_id_workflow_id_mapping === null) {
                $this->_automation_v4_batch_response_flow_id_workflow_id_mapping = new AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity($this, null);
            }
            return $this->_automation_v4_batch_response_flow_id_workflow_id_mapping;
        }
        return new AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity($this, $data);
    }


    private $_automation_v4_collection_response_api_flow_email_campaign = null;

    // Canonical facade: $client->AutomationV4CollectionResponseApiFlowEmailCampaign()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->automation_v4_collection_response_api_flow_email_campaign()
    // resolves here too.
    public function AutomationV4CollectionResponseApiFlowEmailCampaign($data = null)
    {
        require_once __DIR__ . '/entity/automation_v4_collection_response_api_flow_email_campaign_entity.php';
        if ($data === null) {
            if ($this->_automation_v4_collection_response_api_flow_email_campaign === null) {
                $this->_automation_v4_collection_response_api_flow_email_campaign = new AutomationV4CollectionResponseApiFlowEmailCampaignEntity($this, null);
            }
            return $this->_automation_v4_collection_response_api_flow_email_campaign;
        }
        return new AutomationV4CollectionResponseApiFlowEmailCampaignEntity($this, $data);
    }


    private $_automation_v4_collection_response_api_flow_listing_forward_paging = null;

    // Canonical facade: $client->AutomationV4CollectionResponseApiFlowListingForwardPaging()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->automation_v4_collection_response_api_flow_listing_forward_paging()
    // resolves here too.
    public function AutomationV4CollectionResponseApiFlowListingForwardPaging($data = null)
    {
        require_once __DIR__ . '/entity/automation_v4_collection_response_api_flow_listing_forward_paging_entity.php';
        if ($data === null) {
            if ($this->_automation_v4_collection_response_api_flow_listing_forward_paging === null) {
                $this->_automation_v4_collection_response_api_flow_listing_forward_paging = new AutomationV4CollectionResponseApiFlowListingForwardPagingEntity($this, null);
            }
            return $this->_automation_v4_collection_response_api_flow_listing_forward_paging;
        }
        return new AutomationV4CollectionResponseApiFlowListingForwardPagingEntity($this, $data);
    }


    private $_automation_v4_collection_response_api_histogram_data_point_no = null;

    // Canonical facade: $client->AutomationV4CollectionResponseApiHistogramDataPointNo()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->automation_v4_collection_response_api_histogram_data_point_no()
    // resolves here too.
    public function AutomationV4CollectionResponseApiHistogramDataPointNo($data = null)
    {
        require_once __DIR__ . '/entity/automation_v4_collection_response_api_histogram_data_point_no_entity.php';
        if ($data === null) {
            if ($this->_automation_v4_collection_response_api_histogram_data_point_no === null) {
                $this->_automation_v4_collection_response_api_histogram_data_point_no = new AutomationV4CollectionResponseApiHistogramDataPointNoEntity($this, null);
            }
            return $this->_automation_v4_collection_response_api_histogram_data_point_no;
        }
        return new AutomationV4CollectionResponseApiHistogramDataPointNoEntity($this, $data);
    }


    private $_basic = null;

    // Canonical facade: $client->Basic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->basic()
    // resolves here too.
    public function Basic($data = null)
    {
        require_once __DIR__ . '/entity/basic_entity.php';
        if ($data === null) {
            if ($this->_basic === null) {
                $this->_basic = new BasicEntity($this, null);
            }
            return $this->_basic;
        }
        return new BasicEntity($this, $data);
    }


    private $_callback = null;

    // Canonical facade: $client->Callback()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->callback()
    // resolves here too.
    public function Callback($data = null)
    {
        require_once __DIR__ . '/entity/callback_entity.php';
        if ($data === null) {
            if ($this->_callback === null) {
                $this->_callback = new CallbackEntity($this, null);
            }
            return $this->_callback;
        }
        return new CallbackEntity($this, $data);
    }


    private $_definition = null;

    // Canonical facade: $client->Definition()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->definition()
    // resolves here too.
    public function Definition($data = null)
    {
        require_once __DIR__ . '/entity/definition_entity.php';
        if ($data === null) {
            if ($this->_definition === null) {
                $this->_definition = new DefinitionEntity($this, null);
            }
            return $this->_definition;
        }
        return new DefinitionEntity($this, $data);
    }


    private $_email_templates_collection_response_public_folder_forward_paging = null;

    // Canonical facade: $client->EmailTemplatesCollectionResponsePublicFolderForwardPaging()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->email_templates_collection_response_public_folder_forward_paging()
    // resolves here too.
    public function EmailTemplatesCollectionResponsePublicFolderForwardPaging($data = null)
    {
        require_once __DIR__ . '/entity/email_templates_collection_response_public_folder_forward_paging_entity.php';
        if ($data === null) {
            if ($this->_email_templates_collection_response_public_folder_forward_paging === null) {
                $this->_email_templates_collection_response_public_folder_forward_paging = new EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity($this, null);
            }
            return $this->_email_templates_collection_response_public_folder_forward_paging;
        }
        return new EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity($this, $data);
    }


    private $_email_templates_collection_response_public_template_forward_paging = null;

    // Canonical facade: $client->EmailTemplatesCollectionResponsePublicTemplateForwardPaging()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->email_templates_collection_response_public_template_forward_paging()
    // resolves here too.
    public function EmailTemplatesCollectionResponsePublicTemplateForwardPaging($data = null)
    {
        require_once __DIR__ . '/entity/email_templates_collection_response_public_template_forward_paging_entity.php';
        if ($data === null) {
            if ($this->_email_templates_collection_response_public_template_forward_paging === null) {
                $this->_email_templates_collection_response_public_template_forward_paging = new EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity($this, null);
            }
            return $this->_email_templates_collection_response_public_template_forward_paging;
        }
        return new EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity($this, $data);
    }


    private $_email_templates_public_template = null;

    // Canonical facade: $client->EmailTemplatesPublicTemplate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->email_templates_public_template()
    // resolves here too.
    public function EmailTemplatesPublicTemplate($data = null)
    {
        require_once __DIR__ . '/entity/email_templates_public_template_entity.php';
        if ($data === null) {
            if ($this->_email_templates_public_template === null) {
                $this->_email_templates_public_template = new EmailTemplatesPublicTemplateEntity($this, null);
            }
            return $this->_email_templates_public_template;
        }
        return new EmailTemplatesPublicTemplateEntity($this, $data);
    }


    private $_function = null;

    // Canonical facade: $client->Function()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->function()
    // resolves here too.
    public function Function($data = null)
    {
        require_once __DIR__ . '/entity/function_entity.php';
        if ($data === null) {
            if ($this->_function === null) {
                $this->_function = new FunctionEntity($this, null);
            }
            return $this->_function;
        }
        return new FunctionEntity($this, $data);
    }


    private $_sequence = null;

    // Canonical facade: $client->Sequence()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sequence()
    // resolves here too.
    public function Sequence($data = null)
    {
        require_once __DIR__ . '/entity/sequence_entity.php';
        if ($data === null) {
            if ($this->_sequence === null) {
                $this->_sequence = new SequenceEntity($this, null);
            }
            return $this->_sequence;
        }
        return new SequenceEntity($this, $data);
    }


    private $_sequences_collection_response_with_total_public_sequence_lite = null;

    // Canonical facade: $client->SequencesCollectionResponseWithTotalPublicSequenceLite()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sequences_collection_response_with_total_public_sequence_lite()
    // resolves here too.
    public function SequencesCollectionResponseWithTotalPublicSequenceLite($data = null)
    {
        require_once __DIR__ . '/entity/sequences_collection_response_with_total_public_sequence_lite_entity.php';
        if ($data === null) {
            if ($this->_sequences_collection_response_with_total_public_sequence_lite === null) {
                $this->_sequences_collection_response_with_total_public_sequence_lite = new SequencesCollectionResponseWithTotalPublicSequenceLiteEntity($this, null);
            }
            return $this->_sequences_collection_response_with_total_public_sequence_lite;
        }
        return new SequencesCollectionResponseWithTotalPublicSequenceLiteEntity($this, $data);
    }


    private $_sequences_public_sequence = null;

    // Canonical facade: $client->SequencesPublicSequence()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sequences_public_sequence()
    // resolves here too.
    public function SequencesPublicSequence($data = null)
    {
        require_once __DIR__ . '/entity/sequences_public_sequence_entity.php';
        if ($data === null) {
            if ($this->_sequences_public_sequence === null) {
                $this->_sequences_public_sequence = new SequencesPublicSequenceEntity($this, null);
            }
            return $this->_sequences_public_sequence;
        }
        return new SequencesPublicSequenceEntity($this, $data);
    }


    private $_sequences_public_sequence_enrollment = null;

    // Canonical facade: $client->SequencesPublicSequenceEnrollment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sequences_public_sequence_enrollment()
    // resolves here too.
    public function SequencesPublicSequenceEnrollment($data = null)
    {
        require_once __DIR__ . '/entity/sequences_public_sequence_enrollment_entity.php';
        if ($data === null) {
            if ($this->_sequences_public_sequence_enrollment === null) {
                $this->_sequences_public_sequence_enrollment = new SequencesPublicSequenceEnrollmentEntity($this, null);
            }
            return $this->_sequences_public_sequence_enrollment;
        }
        return new SequencesPublicSequenceEnrollmentEntity($this, $data);
    }


    private $_sequences_public_sequence_enrollment_lite = null;

    // Canonical facade: $client->SequencesPublicSequenceEnrollmentLite()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sequences_public_sequence_enrollment_lite()
    // resolves here too.
    public function SequencesPublicSequenceEnrollmentLite($data = null)
    {
        require_once __DIR__ . '/entity/sequences_public_sequence_enrollment_lite_entity.php';
        if ($data === null) {
            if ($this->_sequences_public_sequence_enrollment_lite === null) {
                $this->_sequences_public_sequence_enrollment_lite = new SequencesPublicSequenceEnrollmentLiteEntity($this, null);
            }
            return $this->_sequences_public_sequence_enrollment_lite;
        }
        return new SequencesPublicSequenceEnrollmentLiteEntity($this, $data);
    }


    private $_sequences_public_sequence_performance = null;

    // Canonical facade: $client->SequencesPublicSequencePerformance()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sequences_public_sequence_performance()
    // resolves here too.
    public function SequencesPublicSequencePerformance($data = null)
    {
        require_once __DIR__ . '/entity/sequences_public_sequence_performance_entity.php';
        if ($data === null) {
            if ($this->_sequences_public_sequence_performance === null) {
                $this->_sequences_public_sequence_performance = new SequencesPublicSequencePerformanceEntity($this, null);
            }
            return $this->_sequences_public_sequence_performance;
        }
        return new SequencesPublicSequencePerformanceEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new HubspotAutomationSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
