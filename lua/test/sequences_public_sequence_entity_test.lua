-- SequencesPublicSequence entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("hubspot-automation_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("SequencesPublicSequenceEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:SequencesPublicSequence(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = sequences_public_sequence_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "sequences_public_sequence." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set HUBSPOT_AUTOMATION_TEST_SEQUENCES_PUBLIC_SEQUENCE_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local sequences_public_sequence_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.sequences_public_sequence")))
    local sequences_public_sequence_ref01_data = nil
    if #sequences_public_sequence_ref01_data_raw > 0 then
      sequences_public_sequence_ref01_data = helpers.to_map(sequences_public_sequence_ref01_data_raw[1][2])
    end

    -- LOAD
    local sequences_public_sequence_ref01_ent = client:SequencesPublicSequence(nil)
    local sequences_public_sequence_ref01_match_dt0 = {
      id = sequences_public_sequence_ref01_data["id"],
    }
    local sequences_public_sequence_ref01_data_dt0_loaded, err = sequences_public_sequence_ref01_ent:load(sequences_public_sequence_ref01_match_dt0, nil)
    assert.is_nil(err)
    local sequences_public_sequence_ref01_data_dt0_load_result = helpers.to_map(type(sequences_public_sequence_ref01_data_dt0_loaded) == 'table' and sequences_public_sequence_ref01_data_dt0_loaded.data_get and sequences_public_sequence_ref01_data_dt0_loaded:data_get() or sequences_public_sequence_ref01_data_dt0_loaded)
    assert.is_not_nil(sequences_public_sequence_ref01_data_dt0_load_result)
    assert.are.equal(sequences_public_sequence_ref01_data_dt0_load_result["id"], sequences_public_sequence_ref01_data["id"])

  end)
end)

function sequences_public_sequence_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/sequences_public_sequence/SequencesPublicSequenceTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read sequences_public_sequence test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "sequences_public_sequence01", "sequences_public_sequence02", "sequences_public_sequence03", "2026_0901", "2026_0902", "2026_0903" },
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
  local entid_env_raw = os.getenv("HUBSPOT_AUTOMATION_TEST_SEQUENCES_PUBLIC_SEQUENCE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["HUBSPOT_AUTOMATION_TEST_SEQUENCES_PUBLIC_SEQUENCE_ENTID"] = idmap,
    ["HUBSPOT_AUTOMATION_TEST_LIVE"] = "FALSE",
    ["HUBSPOT_AUTOMATION_TEST_EXPLAIN"] = "FALSE",
    ["HUBSPOT_AUTOMATION_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["HUBSPOT_AUTOMATION_TEST_SEQUENCES_PUBLIC_SEQUENCE_ENTID"])
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
