-- AutomationV4ApiFlow entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("hubspot-automation_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("AutomationV4ApiFlowEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:AutomationV4ApiFlow(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = automation_v4_api_flow_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "automation_v4_api_flow." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_API_FLOW_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local automation_v4_api_flow_ref01_ent = client:AutomationV4ApiFlow(nil)
    local automation_v4_api_flow_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.automation_v4_api_flow"), "automation_v4_api_flow_ref01"))

    local automation_v4_api_flow_ref01_data_result, err = automation_v4_api_flow_ref01_ent:create(automation_v4_api_flow_ref01_data, nil)
    assert.is_nil(err)
    automation_v4_api_flow_ref01_data = helpers.to_map(type(automation_v4_api_flow_ref01_data_result) == 'table' and automation_v4_api_flow_ref01_data_result.data_get and automation_v4_api_flow_ref01_data_result:data_get() or automation_v4_api_flow_ref01_data_result)
    assert.is_not_nil(automation_v4_api_flow_ref01_data)
    assert.is_not_nil(automation_v4_api_flow_ref01_data["id"])

    -- UPDATE
    local automation_v4_api_flow_ref01_data_up0_up = {
      id = automation_v4_api_flow_ref01_data["id"],
    }

    local automation_v4_api_flow_ref01_resdata_up0_result, err = automation_v4_api_flow_ref01_ent:update(automation_v4_api_flow_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local automation_v4_api_flow_ref01_resdata_up0 = helpers.to_map(type(automation_v4_api_flow_ref01_resdata_up0_result) == 'table' and automation_v4_api_flow_ref01_resdata_up0_result.data_get and automation_v4_api_flow_ref01_resdata_up0_result:data_get() or automation_v4_api_flow_ref01_resdata_up0_result)
    assert.is_not_nil(automation_v4_api_flow_ref01_resdata_up0)
    assert.are.equal(automation_v4_api_flow_ref01_resdata_up0["id"], automation_v4_api_flow_ref01_data_up0_up["id"])

    -- LOAD
    local automation_v4_api_flow_ref01_match_dt0 = {
      id = automation_v4_api_flow_ref01_data["id"],
    }
    local automation_v4_api_flow_ref01_data_dt0_loaded, err = automation_v4_api_flow_ref01_ent:load(automation_v4_api_flow_ref01_match_dt0, nil)
    assert.is_nil(err)
    local automation_v4_api_flow_ref01_data_dt0_load_result = helpers.to_map(type(automation_v4_api_flow_ref01_data_dt0_loaded) == 'table' and automation_v4_api_flow_ref01_data_dt0_loaded.data_get and automation_v4_api_flow_ref01_data_dt0_loaded:data_get() or automation_v4_api_flow_ref01_data_dt0_loaded)
    assert.is_not_nil(automation_v4_api_flow_ref01_data_dt0_load_result)
    assert.are.equal(automation_v4_api_flow_ref01_data_dt0_load_result["id"], automation_v4_api_flow_ref01_data["id"])

  end)
end)

function automation_v4_api_flow_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/automation_v4_api_flow/AutomationV4ApiFlowTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read automation_v4_api_flow test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "automation_v4_api_flow01", "automation_v4_api_flow02", "automation_v4_api_flow03" },
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
  local entid_env_raw = os.getenv("HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_API_FLOW_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_API_FLOW_ENTID"] = idmap,
    ["HUBSPOT_AUTOMATION_TEST_LIVE"] = "FALSE",
    ["HUBSPOT_AUTOMATION_TEST_EXPLAIN"] = "FALSE",
    ["HUBSPOT_AUTOMATION_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_API_FLOW_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
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
