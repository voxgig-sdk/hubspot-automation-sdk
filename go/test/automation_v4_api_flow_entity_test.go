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

func TestAutomationV4ApiFlowEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AutomationV4ApiFlow(nil)
		if ent == nil {
			t.Fatal("expected non-nil AutomationV4ApiFlowEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := automation_v4_api_flowBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "automation_v4_api_flow." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_API_FLOW_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		automationV4ApiFlowRef01Ent := client.AutomationV4ApiFlow(nil)
		automationV4ApiFlowRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "automation_v4_api_flow"}), "automation_v4_api_flow_ref01"))

		automationV4ApiFlowRef01DataResult, err := automationV4ApiFlowRef01Ent.Create(automationV4ApiFlowRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		automationV4ApiFlowRef01Data = core.ToMapAny(entityData(automationV4ApiFlowRef01DataResult))
		if automationV4ApiFlowRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if automationV4ApiFlowRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		automationV4ApiFlowRef01DataUp0Up := map[string]any{
			"id": automationV4ApiFlowRef01Data["id"],
		}

		automationV4ApiFlowRef01ResdataUp0Result, err := automationV4ApiFlowRef01Ent.Update(automationV4ApiFlowRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		automationV4ApiFlowRef01ResdataUp0 := core.ToMapAny(entityData(automationV4ApiFlowRef01ResdataUp0Result))
		if automationV4ApiFlowRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if automationV4ApiFlowRef01ResdataUp0["id"] != automationV4ApiFlowRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}

		// LOAD
		automationV4ApiFlowRef01MatchDt0 := map[string]any{
			"id": automationV4ApiFlowRef01Data["id"],
		}
		automationV4ApiFlowRef01DataDt0Loaded, err := automationV4ApiFlowRef01Ent.Load(automationV4ApiFlowRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		automationV4ApiFlowRef01DataDt0LoadResult := core.ToMapAny(entityData(automationV4ApiFlowRef01DataDt0Loaded))
		if automationV4ApiFlowRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if automationV4ApiFlowRef01DataDt0LoadResult["id"] != automationV4ApiFlowRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func automation_v4_api_flowBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "automation_v4_api_flow", "AutomationV4ApiFlowTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read automation_v4_api_flow test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse automation_v4_api_flow test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"automation_v4_api_flow01", "automation_v4_api_flow02", "automation_v4_api_flow03"},
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
	entidEnvRaw := os.Getenv("HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_API_FLOW_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_API_FLOW_ENTID": idmap,
		"HUBSPOT_AUTOMATION_TEST_LIVE":      "FALSE",
		"HUBSPOT_AUTOMATION_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_AUTOMATION_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_API_FLOW_ENTID"])
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
