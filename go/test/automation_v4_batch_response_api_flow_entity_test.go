package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/hubspot-automation-sdk/go"
	"github.com/voxgig-sdk/hubspot-automation-sdk/go/core"

	vs "github.com/voxgig-sdk/hubspot-automation-sdk/go/utility/struct"
)

func TestAutomationV4BatchResponseApiFlowEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AutomationV4BatchResponseApiFlow(nil)
		if ent == nil {
			t.Fatal("expected non-nil AutomationV4BatchResponseApiFlowEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := automation_v4_batch_response_api_flowBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "automation_v4_batch_response_api_flow." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_BATCH_RESPONSE_API_FLOW_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		automationV4BatchResponseApiFlowRef01Ent := client.AutomationV4BatchResponseApiFlow(nil)
		automationV4BatchResponseApiFlowRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "automation_v4_batch_response_api_flow"}), "automation_v4_batch_response_api_flow_ref01"))

		automationV4BatchResponseApiFlowRef01DataResult, err := automationV4BatchResponseApiFlowRef01Ent.Create(automationV4BatchResponseApiFlowRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		automationV4BatchResponseApiFlowRef01Data = core.ToMapAny(entityData(automationV4BatchResponseApiFlowRef01DataResult))
		if automationV4BatchResponseApiFlowRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func automation_v4_batch_response_api_flowBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "automation_v4_batch_response_api_flow", "AutomationV4BatchResponseApiFlowTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read automation_v4_batch_response_api_flow test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse automation_v4_batch_response_api_flow test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"automation_v4_batch_response_api_flow01", "automation_v4_batch_response_api_flow02", "automation_v4_batch_response_api_flow03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_BATCH_RESPONSE_API_FLOW_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_BATCH_RESPONSE_API_FLOW_ENTID": idmap,
		"HUBSPOT_AUTOMATION_TEST_LIVE":      "FALSE",
		"HUBSPOT_AUTOMATION_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_AUTOMATION_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_BATCH_RESPONSE_API_FLOW_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["HUBSPOT_AUTOMATION_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["HUBSPOT_AUTOMATION_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewHubspotAutomationSDK(core.ToMapAny(mergedOpts))
	}

	live := env["HUBSPOT_AUTOMATION_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["HUBSPOT_AUTOMATION_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
