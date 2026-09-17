# AutomationV4ApiFlow entity test

import json
import os
import time

import pytest

from hubspotautomation_sdk.utility.voxgig_struct import voxgig_struct as vs
from hubspotautomation_sdk import HubspotAutomationSDK
from hubspotautomation_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestAutomationV4ApiFlowEntity:

    def test_should_create_instance(self):
        testsdk = HubspotAutomationSDK.test(None, None)
        ent = testsdk.AutomationV4ApiFlow(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _automation_v4_api_flow_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "automation_v4_api_flow." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_API_FLOW_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        automation_v4_api_flow_ref01_ent = client.AutomationV4ApiFlow(None)
        automation_v4_api_flow_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.automation_v4_api_flow"), "automation_v4_api_flow_ref01"))

        automation_v4_api_flow_ref01_data = helpers.to_map(runner.entity_data(automation_v4_api_flow_ref01_ent.create(automation_v4_api_flow_ref01_data, None)))
        assert automation_v4_api_flow_ref01_data is not None
        assert automation_v4_api_flow_ref01_data["id"] is not None

        # UPDATE
        automation_v4_api_flow_ref01_data_up0_up = {
            "id": automation_v4_api_flow_ref01_data["id"],
        }

        automation_v4_api_flow_ref01_resdata_up0 = helpers.to_map(runner.entity_data(automation_v4_api_flow_ref01_ent.update(automation_v4_api_flow_ref01_data_up0_up, None)))
        assert automation_v4_api_flow_ref01_resdata_up0 is not None
        assert automation_v4_api_flow_ref01_resdata_up0["id"] == automation_v4_api_flow_ref01_data_up0_up["id"]

        # LOAD
        automation_v4_api_flow_ref01_match_dt0 = {
            "id": automation_v4_api_flow_ref01_data["id"],
        }
        automation_v4_api_flow_ref01_data_dt0_loaded = automation_v4_api_flow_ref01_ent.load(automation_v4_api_flow_ref01_match_dt0, None)
        automation_v4_api_flow_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(automation_v4_api_flow_ref01_data_dt0_loaded))
        assert automation_v4_api_flow_ref01_data_dt0_load_result is not None
        assert automation_v4_api_flow_ref01_data_dt0_load_result["id"] == automation_v4_api_flow_ref01_data["id"]



def _automation_v4_api_flow_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/automation_v4_api_flow/AutomationV4ApiFlowTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = HubspotAutomationSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["automation_v4_api_flow01", "automation_v4_api_flow02", "automation_v4_api_flow03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_API_FLOW_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_API_FLOW_ENTID": idmap,
        "HUBSPOT_AUTOMATION_TEST_LIVE": "FALSE",
        "HUBSPOT_AUTOMATION_TEST_EXPLAIN": "FALSE",
        "HUBSPOT_AUTOMATION_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_API_FLOW_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("HUBSPOT_AUTOMATION_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("HUBSPOT_AUTOMATION_APIKEY"),
            },
            extra or {},
        ])
        client = HubspotAutomationSDK(helpers.to_map(merged_opts))

    _live = env.get("HUBSPOT_AUTOMATION_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("HUBSPOT_AUTOMATION_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
