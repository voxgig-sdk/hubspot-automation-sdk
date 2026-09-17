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

func TestActionsV4PublicActionDefinitionRequiresObjectEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ActionsV4PublicActionDefinitionRequiresObject(nil)
		if ent == nil {
			t.Fatal("expected non-nil ActionsV4PublicActionDefinitionRequiresObjectEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := actions_v4_public_action_definition_requires_objectBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "actions_v4_public_action_definition_requires_object." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_DEFINITION_REQUIRES_OBJECT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		actionsV4PublicActionDefinitionRequiresObjectRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.actions_v4_public_action_definition_requires_object")))
		var actionsV4PublicActionDefinitionRequiresObjectRef01Data map[string]any
		if len(actionsV4PublicActionDefinitionRequiresObjectRef01DataRaw) > 0 {
			actionsV4PublicActionDefinitionRequiresObjectRef01Data = core.ToMapAny(actionsV4PublicActionDefinitionRequiresObjectRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = actionsV4PublicActionDefinitionRequiresObjectRef01Data

		// LOAD
		actionsV4PublicActionDefinitionRequiresObjectRef01Ent := client.ActionsV4PublicActionDefinitionRequiresObject(nil)
		actionsV4PublicActionDefinitionRequiresObjectRef01MatchDt0 := map[string]any{}
		actionsV4PublicActionDefinitionRequiresObjectRef01DataDt0Loaded, err := actionsV4PublicActionDefinitionRequiresObjectRef01Ent.Load(actionsV4PublicActionDefinitionRequiresObjectRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if actionsV4PublicActionDefinitionRequiresObjectRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func actions_v4_public_action_definition_requires_objectBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "actions_v4_public_action_definition_requires_object", "ActionsV4PublicActionDefinitionRequiresObjectTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read actions_v4_public_action_definition_requires_object test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse actions_v4_public_action_definition_requires_object test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"actions_v4_public_action_definition_requires_object01", "actions_v4_public_action_definition_requires_object02", "actions_v4_public_action_definition_requires_object03", "2026_0901", "2026_0902", "2026_0903", "app01"},
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
	entidEnvRaw := os.Getenv("HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_DEFINITION_REQUIRES_OBJECT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_DEFINITION_REQUIRES_OBJECT_ENTID": idmap,
		"HUBSPOT_AUTOMATION_TEST_LIVE":      "FALSE",
		"HUBSPOT_AUTOMATION_TEST_EXPLAIN":   "FALSE",
		"HUBSPOT_AUTOMATION_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_DEFINITION_REQUIRES_OBJECT_ENTID"])
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
