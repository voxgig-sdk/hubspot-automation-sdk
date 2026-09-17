<?php
declare(strict_types=1);

// Sequence entity test

require_once __DIR__ . '/../hubspotautomation_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class SequenceEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = HubspotAutomationSDK::test(null, null);
        $ent = $testsdk->Sequence(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "sequence" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = HubspotAutomationSDK::test($seed, null);
        $seen = iterator_to_array($base->Sequence(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = HubspotAutomationConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = HubspotAutomationSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Sequence(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = sequence_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "sequence." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set HUBSPOT_AUTOMATION_TEST_SEQUENCE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $sequence_ref01_ent = $client->Sequence(null);
        $sequence_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.sequence"), "sequence_ref01"));

        $sequence_ref01_data_result = $sequence_ref01_ent->create($sequence_ref01_data, null);
        $sequence_ref01_data = Helpers::to_map(is_object($sequence_ref01_data_result) && method_exists($sequence_ref01_data_result, 'data_get') ? $sequence_ref01_data_result->data_get() : $sequence_ref01_data_result);
        $this->assertNotNull($sequence_ref01_data);
        $this->assertNotNull($sequence_ref01_data["id"]);

        // LIST
        $sequence_ref01_match = [];

        $sequence_ref01_list_result = $sequence_ref01_ent->list($sequence_ref01_match, null);
        $this->assertIsArray($sequence_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($sequence_ref01_list_result),
            ["id" => $sequence_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $sequence_ref01_data_up0_up = [
            "id" => $sequence_ref01_data["id"],
        ];

        $sequence_ref01_markdef_up0_name = "createdAt";
        $sequence_ref01_markdef_up0_value = "Mark01-sequence_ref01_" . $setup["now"];
        $sequence_ref01_data_up0_up[$sequence_ref01_markdef_up0_name] = $sequence_ref01_markdef_up0_value;

        $sequence_ref01_resdata_up0_result = $sequence_ref01_ent->update($sequence_ref01_data_up0_up, null);
        $sequence_ref01_resdata_up0 = Helpers::to_map(is_object($sequence_ref01_resdata_up0_result) && method_exists($sequence_ref01_resdata_up0_result, 'data_get') ? $sequence_ref01_resdata_up0_result->data_get() : $sequence_ref01_resdata_up0_result);
        $this->assertNotNull($sequence_ref01_resdata_up0);
        $this->assertEquals($sequence_ref01_resdata_up0["id"], $sequence_ref01_data_up0_up["id"]);
        $this->assertEquals($sequence_ref01_resdata_up0[$sequence_ref01_markdef_up0_name], $sequence_ref01_markdef_up0_value);

        // LOAD
        $sequence_ref01_match_dt0 = [
            "id" => $sequence_ref01_data["id"],
        ];
        $sequence_ref01_data_dt0_loaded = $sequence_ref01_ent->load($sequence_ref01_match_dt0, null);
        $sequence_ref01_data_dt0_load_result = Helpers::to_map(is_object($sequence_ref01_data_dt0_loaded) && method_exists($sequence_ref01_data_dt0_loaded, 'data_get') ? $sequence_ref01_data_dt0_loaded->data_get() : $sequence_ref01_data_dt0_loaded);
        $this->assertNotNull($sequence_ref01_data_dt0_load_result);
        $this->assertEquals($sequence_ref01_data_dt0_load_result["id"], $sequence_ref01_data["id"]);

    }
}

function sequence_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/sequence/SequenceTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = HubspotAutomationSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["sequence01", "sequence02", "sequence03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("HUBSPOT_AUTOMATION_TEST_SEQUENCE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "HUBSPOT_AUTOMATION_TEST_SEQUENCE_ENTID" => $idmap,
        "HUBSPOT_AUTOMATION_TEST_LIVE" => "FALSE",
        "HUBSPOT_AUTOMATION_TEST_EXPLAIN" => "FALSE",
        "HUBSPOT_AUTOMATION_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["HUBSPOT_AUTOMATION_TEST_SEQUENCE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["HUBSPOT_AUTOMATION_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["HUBSPOT_AUTOMATION_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new HubspotAutomationSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["HUBSPOT_AUTOMATION_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["HUBSPOT_AUTOMATION_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
