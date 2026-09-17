# Sequence entity test

import json
import os
import time

import pytest

from hubspotautomation_sdk.utility.voxgig_struct import voxgig_struct as vs
from hubspotautomation_sdk import HubspotAutomationSDK
from hubspotautomation_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestSequenceEntity:

    def test_should_create_instance(self):
        testsdk = HubspotAutomationSDK.test(None, None)
        ent = testsdk.Sequence(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "sequence": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = HubspotAutomationSDK.test(seed, None)
        seen = list(base.Sequence(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from hubspotautomation_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = HubspotAutomationSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Sequence(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _sequence_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "sequence." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set HUBSPOT_AUTOMATION_TEST_SEQUENCE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        sequence_ref01_ent = client.Sequence(None)
        sequence_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.sequence"), "sequence_ref01"))

        sequence_ref01_data = helpers.to_map(runner.entity_data(sequence_ref01_ent.create(sequence_ref01_data, None)))
        assert sequence_ref01_data is not None
        assert sequence_ref01_data["id"] is not None

        # LIST
        sequence_ref01_match = {}

        sequence_ref01_list_result = sequence_ref01_ent.list(sequence_ref01_match, None)
        assert isinstance(sequence_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(sequence_ref01_list_result),
            {"id": sequence_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        sequence_ref01_data_up0_up = {
            "id": sequence_ref01_data["id"],
        }

        sequence_ref01_markdef_up0_name = "createdAt"
        sequence_ref01_markdef_up0_value = "Mark01-sequence_ref01_" + str(setup["now"])
        sequence_ref01_data_up0_up[sequence_ref01_markdef_up0_name] = sequence_ref01_markdef_up0_value

        sequence_ref01_resdata_up0 = helpers.to_map(runner.entity_data(sequence_ref01_ent.update(sequence_ref01_data_up0_up, None)))
        assert sequence_ref01_resdata_up0 is not None
        assert sequence_ref01_resdata_up0["id"] == sequence_ref01_data_up0_up["id"]
        assert sequence_ref01_resdata_up0[sequence_ref01_markdef_up0_name] == sequence_ref01_markdef_up0_value

        # LOAD
        sequence_ref01_match_dt0 = {
            "id": sequence_ref01_data["id"],
        }
        sequence_ref01_data_dt0_loaded = sequence_ref01_ent.load(sequence_ref01_match_dt0, None)
        sequence_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(sequence_ref01_data_dt0_loaded))
        assert sequence_ref01_data_dt0_load_result is not None
        assert sequence_ref01_data_dt0_load_result["id"] == sequence_ref01_data["id"]



def _sequence_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/sequence/SequenceTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = HubspotAutomationSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["sequence01", "sequence02", "sequence03"],
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
        "HUBSPOT_AUTOMATION_TEST_SEQUENCE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "HUBSPOT_AUTOMATION_TEST_SEQUENCE_ENTID": idmap,
        "HUBSPOT_AUTOMATION_TEST_LIVE": "FALSE",
        "HUBSPOT_AUTOMATION_TEST_EXPLAIN": "FALSE",
        "HUBSPOT_AUTOMATION_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("HUBSPOT_AUTOMATION_TEST_SEQUENCE_ENTID"))
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
