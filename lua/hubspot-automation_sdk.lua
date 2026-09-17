-- HubspotAutomation SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("hubspot-automation_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local HubspotAutomationSDK = {}
HubspotAutomationSDK.__index = HubspotAutomationSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

HubspotAutomationSDK._make_feature = _make_feature


function HubspotAutomationSDK.new(options)
  local self = setmetatable({}, HubspotAutomationSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function HubspotAutomationSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function HubspotAutomationSDK:get_utility()
  return Utility.copy(self._utility)
end


function HubspotAutomationSDK:get_root_ctx()
  return self._rootctx
end


function HubspotAutomationSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function HubspotAutomationSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function HubspotAutomationSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function HubspotAutomationSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "HubspotAutomationSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function HubspotAutomationSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function HubspotAutomationSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "HubspotAutomationSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:ActionsV4CollectionResponsePublicActionDefinitionForward():list() / client:ActionsV4CollectionResponsePublicActionDefinitionForward():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:ActionsV4CollectionResponsePublicActionDefinitionForward(data)
  local EntityMod = require("entity.actions_v4_collection_response_public_action_definition_forward_entity")
  if data == nil then
    if self._actions_v4_collection_response_public_action_definition_forward == nil then
      self._actions_v4_collection_response_public_action_definition_forward = EntityMod.new(self, nil)
    end
    return self._actions_v4_collection_response_public_action_definition_forward
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsV4CollectionResponsePublicActionFunctionIdentifierNo():list() / client:ActionsV4CollectionResponsePublicActionFunctionIdentifierNo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:ActionsV4CollectionResponsePublicActionFunctionIdentifierNo(data)
  local EntityMod = require("entity.actions_v4_collection_response_public_action_function_identifier_no_entity")
  if data == nil then
    if self._actions_v4_collection_response_public_action_function_identifier_no == nil then
      self._actions_v4_collection_response_public_action_function_identifier_no = EntityMod.new(self, nil)
    end
    return self._actions_v4_collection_response_public_action_function_identifier_no
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsV4CollectionResponsePublicActionRevisionForward():list() / client:ActionsV4CollectionResponsePublicActionRevisionForward():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:ActionsV4CollectionResponsePublicActionRevisionForward(data)
  local EntityMod = require("entity.actions_v4_collection_response_public_action_revision_forward_entity")
  if data == nil then
    if self._actions_v4_collection_response_public_action_revision_forward == nil then
      self._actions_v4_collection_response_public_action_revision_forward = EntityMod.new(self, nil)
    end
    return self._actions_v4_collection_response_public_action_revision_forward
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsV4PublicActionDefinition():list() / client:ActionsV4PublicActionDefinition():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:ActionsV4PublicActionDefinition(data)
  local EntityMod = require("entity.actions_v4_public_action_definition_entity")
  if data == nil then
    if self._actions_v4_public_action_definition == nil then
      self._actions_v4_public_action_definition = EntityMod.new(self, nil)
    end
    return self._actions_v4_public_action_definition
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsV4PublicActionDefinitionRequiresObject():list() / client:ActionsV4PublicActionDefinitionRequiresObject():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:ActionsV4PublicActionDefinitionRequiresObject(data)
  local EntityMod = require("entity.actions_v4_public_action_definition_requires_object_entity")
  if data == nil then
    if self._actions_v4_public_action_definition_requires_object == nil then
      self._actions_v4_public_action_definition_requires_object = EntityMod.new(self, nil)
    end
    return self._actions_v4_public_action_definition_requires_object
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsV4PublicActionFunction():list() / client:ActionsV4PublicActionFunction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:ActionsV4PublicActionFunction(data)
  local EntityMod = require("entity.actions_v4_public_action_function_entity")
  if data == nil then
    if self._actions_v4_public_action_function == nil then
      self._actions_v4_public_action_function = EntityMod.new(self, nil)
    end
    return self._actions_v4_public_action_function
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsV4PublicActionFunctionIdentifier():list() / client:ActionsV4PublicActionFunctionIdentifier():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:ActionsV4PublicActionFunctionIdentifier(data)
  local EntityMod = require("entity.actions_v4_public_action_function_identifier_entity")
  if data == nil then
    if self._actions_v4_public_action_function_identifier == nil then
      self._actions_v4_public_action_function_identifier = EntityMod.new(self, nil)
    end
    return self._actions_v4_public_action_function_identifier
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionsV4PublicActionRevision():list() / client:ActionsV4PublicActionRevision():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:ActionsV4PublicActionRevision(data)
  local EntityMod = require("entity.actions_v4_public_action_revision_entity")
  if data == nil then
    if self._actions_v4_public_action_revision == nil then
      self._actions_v4_public_action_revision = EntityMod.new(self, nil)
    end
    return self._actions_v4_public_action_revision
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AutomationV4ApiFlow():list() / client:AutomationV4ApiFlow():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:AutomationV4ApiFlow(data)
  local EntityMod = require("entity.automation_v4_api_flow_entity")
  if data == nil then
    if self._automation_v4_api_flow == nil then
      self._automation_v4_api_flow = EntityMod.new(self, nil)
    end
    return self._automation_v4_api_flow
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AutomationV4BatchResponseApiFlow():list() / client:AutomationV4BatchResponseApiFlow():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:AutomationV4BatchResponseApiFlow(data)
  local EntityMod = require("entity.automation_v4_batch_response_api_flow_entity")
  if data == nil then
    if self._automation_v4_batch_response_api_flow == nil then
      self._automation_v4_batch_response_api_flow = EntityMod.new(self, nil)
    end
    return self._automation_v4_batch_response_api_flow
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AutomationV4BatchResponseFlowIdWorkflowIdMapping():list() / client:AutomationV4BatchResponseFlowIdWorkflowIdMapping():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:AutomationV4BatchResponseFlowIdWorkflowIdMapping(data)
  local EntityMod = require("entity.automation_v4_batch_response_flow_id_workflow_id_mapping_entity")
  if data == nil then
    if self._automation_v4_batch_response_flow_id_workflow_id_mapping == nil then
      self._automation_v4_batch_response_flow_id_workflow_id_mapping = EntityMod.new(self, nil)
    end
    return self._automation_v4_batch_response_flow_id_workflow_id_mapping
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AutomationV4CollectionResponseApiFlowEmailCampaign():list() / client:AutomationV4CollectionResponseApiFlowEmailCampaign():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:AutomationV4CollectionResponseApiFlowEmailCampaign(data)
  local EntityMod = require("entity.automation_v4_collection_response_api_flow_email_campaign_entity")
  if data == nil then
    if self._automation_v4_collection_response_api_flow_email_campaign == nil then
      self._automation_v4_collection_response_api_flow_email_campaign = EntityMod.new(self, nil)
    end
    return self._automation_v4_collection_response_api_flow_email_campaign
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AutomationV4CollectionResponseApiFlowListingForwardPaging():list() / client:AutomationV4CollectionResponseApiFlowListingForwardPaging():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:AutomationV4CollectionResponseApiFlowListingForwardPaging(data)
  local EntityMod = require("entity.automation_v4_collection_response_api_flow_listing_forward_paging_entity")
  if data == nil then
    if self._automation_v4_collection_response_api_flow_listing_forward_paging == nil then
      self._automation_v4_collection_response_api_flow_listing_forward_paging = EntityMod.new(self, nil)
    end
    return self._automation_v4_collection_response_api_flow_listing_forward_paging
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AutomationV4CollectionResponseApiHistogramDataPointNo():list() / client:AutomationV4CollectionResponseApiHistogramDataPointNo():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:AutomationV4CollectionResponseApiHistogramDataPointNo(data)
  local EntityMod = require("entity.automation_v4_collection_response_api_histogram_data_point_no_entity")
  if data == nil then
    if self._automation_v4_collection_response_api_histogram_data_point_no == nil then
      self._automation_v4_collection_response_api_histogram_data_point_no = EntityMod.new(self, nil)
    end
    return self._automation_v4_collection_response_api_histogram_data_point_no
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Basic():list() / client:Basic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:Basic(data)
  local EntityMod = require("entity.basic_entity")
  if data == nil then
    if self._basic == nil then
      self._basic = EntityMod.new(self, nil)
    end
    return self._basic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Callback():list() / client:Callback():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:Callback(data)
  local EntityMod = require("entity.callback_entity")
  if data == nil then
    if self._callback == nil then
      self._callback = EntityMod.new(self, nil)
    end
    return self._callback
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Definition():list() / client:Definition():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:Definition(data)
  local EntityMod = require("entity.definition_entity")
  if data == nil then
    if self._definition == nil then
      self._definition = EntityMod.new(self, nil)
    end
    return self._definition
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmailTemplatesCollectionResponsePublicFolderForwardPaging():list() / client:EmailTemplatesCollectionResponsePublicFolderForwardPaging():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:EmailTemplatesCollectionResponsePublicFolderForwardPaging(data)
  local EntityMod = require("entity.email_templates_collection_response_public_folder_forward_paging_entity")
  if data == nil then
    if self._email_templates_collection_response_public_folder_forward_paging == nil then
      self._email_templates_collection_response_public_folder_forward_paging = EntityMod.new(self, nil)
    end
    return self._email_templates_collection_response_public_folder_forward_paging
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmailTemplatesCollectionResponsePublicTemplateForwardPaging():list() / client:EmailTemplatesCollectionResponsePublicTemplateForwardPaging():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:EmailTemplatesCollectionResponsePublicTemplateForwardPaging(data)
  local EntityMod = require("entity.email_templates_collection_response_public_template_forward_paging_entity")
  if data == nil then
    if self._email_templates_collection_response_public_template_forward_paging == nil then
      self._email_templates_collection_response_public_template_forward_paging = EntityMod.new(self, nil)
    end
    return self._email_templates_collection_response_public_template_forward_paging
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmailTemplatesPublicTemplate():list() / client:EmailTemplatesPublicTemplate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:EmailTemplatesPublicTemplate(data)
  local EntityMod = require("entity.email_templates_public_template_entity")
  if data == nil then
    if self._email_templates_public_template == nil then
      self._email_templates_public_template = EntityMod.new(self, nil)
    end
    return self._email_templates_public_template
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Function():list() / client:Function():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:Function(data)
  local EntityMod = require("entity.function_entity")
  if data == nil then
    if self._function == nil then
      self._function = EntityMod.new(self, nil)
    end
    return self._function
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Sequence():list() / client:Sequence():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:Sequence(data)
  local EntityMod = require("entity.sequence_entity")
  if data == nil then
    if self._sequence == nil then
      self._sequence = EntityMod.new(self, nil)
    end
    return self._sequence
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SequencesCollectionResponseWithTotalPublicSequenceLite():list() / client:SequencesCollectionResponseWithTotalPublicSequenceLite():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:SequencesCollectionResponseWithTotalPublicSequenceLite(data)
  local EntityMod = require("entity.sequences_collection_response_with_total_public_sequence_lite_entity")
  if data == nil then
    if self._sequences_collection_response_with_total_public_sequence_lite == nil then
      self._sequences_collection_response_with_total_public_sequence_lite = EntityMod.new(self, nil)
    end
    return self._sequences_collection_response_with_total_public_sequence_lite
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SequencesPublicSequence():list() / client:SequencesPublicSequence():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:SequencesPublicSequence(data)
  local EntityMod = require("entity.sequences_public_sequence_entity")
  if data == nil then
    if self._sequences_public_sequence == nil then
      self._sequences_public_sequence = EntityMod.new(self, nil)
    end
    return self._sequences_public_sequence
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SequencesPublicSequenceEnrollment():list() / client:SequencesPublicSequenceEnrollment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:SequencesPublicSequenceEnrollment(data)
  local EntityMod = require("entity.sequences_public_sequence_enrollment_entity")
  if data == nil then
    if self._sequences_public_sequence_enrollment == nil then
      self._sequences_public_sequence_enrollment = EntityMod.new(self, nil)
    end
    return self._sequences_public_sequence_enrollment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SequencesPublicSequenceEnrollmentLite():list() / client:SequencesPublicSequenceEnrollmentLite():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:SequencesPublicSequenceEnrollmentLite(data)
  local EntityMod = require("entity.sequences_public_sequence_enrollment_lite_entity")
  if data == nil then
    if self._sequences_public_sequence_enrollment_lite == nil then
      self._sequences_public_sequence_enrollment_lite = EntityMod.new(self, nil)
    end
    return self._sequences_public_sequence_enrollment_lite
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SequencesPublicSequencePerformance():list() / client:SequencesPublicSequencePerformance():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function HubspotAutomationSDK:SequencesPublicSequencePerformance(data)
  local EntityMod = require("entity.sequences_public_sequence_performance_entity")
  if data == nil then
    if self._sequences_public_sequence_performance == nil then
      self._sequences_public_sequence_performance = EntityMod.new(self, nil)
    end
    return self._sequences_public_sequence_performance
  end
  return EntityMod.new(self, data)
end




function HubspotAutomationSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = HubspotAutomationSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return HubspotAutomationSDK
