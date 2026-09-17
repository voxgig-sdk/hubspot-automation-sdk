package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestActionsV4PublicActionDefinitionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ActionsV4PublicActionDefinition(nil)
		if ent == nil {
			t.Fatal("expected non-nil ActionsV4PublicActionDefinitionEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := actions_v4_public_action_definitionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "actions_v4_public_action_definition." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_DEFINITION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		actionsV4PublicActionDefinitionRef01Ent := client.ActionsV4PublicActionDefinition(nil)
		actionsV4PublicActionDefinitionRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "actions_v4_public_action_definition"}), "actions_v4_public_action_definition_ref01"))
		actionsV4PublicActionDefinitionRef01Data["app_id"] = setup.idmap["app01"]

		actionsV4PublicActionDefinitionRef01DataResult, err := actionsV4PublicActionDefinitionRef01Ent.Create(actionsV4PublicActionDefinitionRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		actionsV4PublicActionDefinitionRef01Data = core.ToMapAny(entityData(actionsV4PublicActionDefinitionRef01DataResult))
		if actionsV4PublicActionDefinitionRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if actionsV4PublicActionDefinitionRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		actionsV4PublicActionDefinitionRef01DataUp0Up := map[string]any{
			"id": actionsV4PublicActionDefinitionRef01Data["id"],
			"app_id": setup.idmap["app_id"],
		}

		actionsV4PublicActionDefinitionRef01MarkdefUp0Name := "actionUrl"
		actionsV4PublicActionDefinitionRef01MarkdefUp0Value := fmt.Sprintf("Mark01-actions_v4_public_action_definition_ref01_%d", setup.now)
		actionsV4PublicActionDefinitionRef01DataUp0Up[actionsV4PublicActionDefinitionRef01MarkdefUp0Name] = actionsV4PublicActionDefinitionRef01MarkdefUp0Value

		actionsV4PublicActionDefinitionRef01ResdataUp0Result, err := actionsV4PublicActionDefinitionRef01Ent.Update(actionsV4PublicActionDefinitionRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		actionsV4PublicActionDefinitionRef01ResdataUp0 := core.ToMapAny(entityData(actionsV4PublicActionDefinitionRef01ResdataUp0Result))
		if actionsV4PublicActionDefinitionRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if actionsV4PublicActionDefinitionRef01ResdataUp0["id"] != actionsV4PublicActionDefinitionRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if actionsV4PublicActionDefinitionRef01ResdataUp0[actionsV4PublicActionDefinitionRef01MarkdefUp0Name] != actionsV4PublicActionDefinitionRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", actionsV4PublicActionDefinitionRef01MarkdefUp0Name, actionsV4PublicActionDefinitionRef01ResdataUp0[actionsV4PublicActionDefinitionRef01MarkdefUp0Name])
		}

		// LOAD
		actionsV4PublicActionDefinitionRef01MatchDt0 := map[string]any{
			"id": actionsV4PublicActionDefinitionRef01Data["id"],
		}
		actionsV4PublicActionDefinitionRef01DataDt0Loaded, err := actionsV4PublicActionDefinitionRef01Ent.Load(actionsV4PublicActionDefinitionRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		actionsV4PublicActionDefinitionRef01DataDt0LoadResult := core.ToMapAny(entityData(actionsV4PublicActionDefinitionRef01DataDt0Loaded))
		if actionsV4PublicActionDefinitionRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if actionsV4PublicActionDefinitionRef01DataDt0LoadResult["id"] != actionsV4PublicActionDefinitionRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func actions_v4_public_action_definitionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "actions_v4_public_action_definition", "ActionsV4PublicActionDefinitionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read actions_v4_public_action_definition test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse actions_v4_public_action_definition test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"actions_v4_public_action_definition01", "actions_v4_public_action_definition02", "actions_v4_public_action_definition03", "2026_0901", "2026_0902", "2026_0903", "app01"},
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
	entidEnvRaw := os.Getenv("HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_DEFINITION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_DEFINITION_ENTID": idmap,
		"HUBSPOT_AUTOMATION_TEST_LIVE":      "FALSE",
		"HUBSPOT_AUTOMATION_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_AUTOMATION_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_DEFINITION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add app_id alias for update test.
	if idmapResolved["app_id"] == nil {
		idmapResolved["app_id"] = idmapResolved["app01"]
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
