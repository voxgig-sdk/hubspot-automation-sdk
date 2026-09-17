<?php
declare(strict_types=1);

// ActionsV4PublicActionFunction entity test

require_once __DIR__ . '/../hubspotautomation_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ActionsV4PublicActionFunctionEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = HubspotAutomationSDK::test(null, null);
        $ent = $testsdk->ActionsV4PublicActionFunction(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = actions_v4_public_action_function_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "actions_v4_public_action_function." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_FUNCTION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $actions_v4_public_action_function_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.actions_v4_public_action_function")));
        $actions_v4_public_action_function_ref01_data = null;
        if (count($actions_v4_public_action_function_ref01_data_raw) > 0) {
            $actions_v4_public_action_function_ref01_data = Helpers::to_map($actions_v4_public_action_function_ref01_data_raw[0][1]);
        }

        // LOAD
        $actions_v4_public_action_function_ref01_ent = $client->ActionsV4PublicActionFunction(null);
        $actions_v4_public_action_function_ref01_match_dt0 = [
            "id" => $actions_v4_public_action_function_ref01_data["id"],
        ];
        $actions_v4_public_action_function_ref01_data_dt0_loaded = $actions_v4_public_action_function_ref01_ent->load($actions_v4_public_action_function_ref01_match_dt0, null);
        $actions_v4_public_action_function_ref01_data_dt0_load_result = Helpers::to_map(is_object($actions_v4_public_action_function_ref01_data_dt0_loaded) && method_exists($actions_v4_public_action_function_ref01_data_dt0_loaded, 'data_get') ? $actions_v4_public_action_function_ref01_data_dt0_loaded->data_get() : $actions_v4_public_action_function_ref01_data_dt0_loaded);
        $this->assertNotNull($actions_v4_public_action_function_ref01_data_dt0_load_result);
        $this->assertEquals($actions_v4_public_action_function_ref01_data_dt0_load_result["id"], $actions_v4_public_action_function_ref01_data["id"]);

    }
}

function actions_v4_public_action_function_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/actions_v4_public_action_function/ActionsV4PublicActionFunctionTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = HubspotAutomationSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["actions_v4_public_action_function01", "actions_v4_public_action_function02", "actions_v4_public_action_function03", "2026_0901", "2026_0902", "2026_0903", "function01", "function02", "function03", "app01", "definition01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_FUNCTION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_FUNCTION_ENTID" => $idmap,
        "HUBSPOT_AUTOMATION_TEST_LIVE" => "FALSE",
        "HUBSPOT_AUTOMATION_TEST_EXPLAIN" => "FALSE",
        "HUBSPOT_AUTOMATION_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_FUNCTION_ENTID"]);
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
