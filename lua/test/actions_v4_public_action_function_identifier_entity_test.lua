-- ActionsV4PublicActionFunctionIdentifier entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("hubspot-automation_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("ActionsV4PublicActionFunctionIdentifierEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:ActionsV4PublicActionFunctionIdentifier(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = actions_v4_public_action_function_identifier_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "actions_v4_public_action_function_identifier." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_FUNCTION_IDENTIFIER_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local actions_v4_public_action_function_identifier_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.actions_v4_public_action_function_identifier")))
    local actions_v4_public_action_function_identifier_ref01_data = nil
    if #actions_v4_public_action_function_identifier_ref01_data_raw > 0 then
      actions_v4_public_action_function_identifier_ref01_data = helpers.to_map(actions_v4_public_action_function_identifier_ref01_data_raw[1][2])
    end

    -- UPDATE
    local actions_v4_public_action_function_identifier_ref01_ent = client:ActionsV4PublicActionFunctionIdentifier(nil)
    local actions_v4_public_action_function_identifier_ref01_data_up0_up = {
      id = actions_v4_public_action_function_identifier_ref01_data["id"],
      ["app_id"] = setup.idmap["app_id"],
      ["definition_id"] = setup.idmap["definition_id"],
    }

    local actions_v4_public_action_function_identifier_ref01_markdef_up0_name = "functionType"
    local actions_v4_public_action_function_identifier_ref01_markdef_up0_value = "Mark01-actions_v4_public_action_function_identifier_ref01_" .. tostring(setup.now)
    actions_v4_public_action_function_identifier_ref01_data_up0_up[actions_v4_public_action_function_identifier_ref01_markdef_up0_name] = actions_v4_public_action_function_identifier_ref01_markdef_up0_value

    local actions_v4_public_action_function_identifier_ref01_resdata_up0_result, err = actions_v4_public_action_function_identifier_ref01_ent:update(actions_v4_public_action_function_identifier_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local actions_v4_public_action_function_identifier_ref01_resdata_up0 = helpers.to_map(type(actions_v4_public_action_function_identifier_ref01_resdata_up0_result) == 'table' and actions_v4_public_action_function_identifier_ref01_resdata_up0_result.data_get and actions_v4_public_action_function_identifier_ref01_resdata_up0_result:data_get() or actions_v4_public_action_function_identifier_ref01_resdata_up0_result)
    assert.is_not_nil(actions_v4_public_action_function_identifier_ref01_resdata_up0)
    assert.are.equal(actions_v4_public_action_function_identifier_ref01_resdata_up0["id"], actions_v4_public_action_function_identifier_ref01_data_up0_up["id"])
    assert.are.equal(actions_v4_public_action_function_identifier_ref01_resdata_up0[actions_v4_public_action_function_identifier_ref01_markdef_up0_name], actions_v4_public_action_function_identifier_ref01_markdef_up0_value)

  end)
end)

function actions_v4_public_action_function_identifier_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/actions_v4_public_action_function_identifier/ActionsV4PublicActionFunctionIdentifierTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read actions_v4_public_action_function_identifier test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "actions_v4_public_action_function_identifier01", "actions_v4_public_action_function_identifier02", "actions_v4_public_action_function_identifier03", "2026_0901", "2026_0902", "2026_0903", "function01", "function02", "function03", "app01", "definition01" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_FUNCTION_IDENTIFIER_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_FUNCTION_IDENTIFIER_ENTID"] = idmap,
    ["HUBSPOT_AUTOMATION_TEST_LIVE"] = "FALSE",
    ["HUBSPOT_AUTOMATION_TEST_EXPLAIN"] = "FALSE",
    ["HUBSPOT_AUTOMATION_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_FUNCTION_IDENTIFIER_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["app_id"] == nil then
    idmap_resolved["app_id"] = idmap_resolved["app01"]
  end
  if idmap_resolved["definition_id"] == nil then
    idmap_resolved["definition_id"] = idmap_resolved["definition01"]
  end

  if env["HUBSPOT_AUTOMATION_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["HUBSPOT_AUTOMATION_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["HUBSPOT_AUTOMATION_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["HUBSPOT_AUTOMATION_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
