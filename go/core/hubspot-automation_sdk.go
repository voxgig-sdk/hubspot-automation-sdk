package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/hubspot-automation-sdk/go/utility/struct"
)

type HubspotAutomationSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewHubspotAutomationSDK(options map[string]any) *HubspotAutomationSDK {
	sdk := &HubspotAutomationSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *HubspotAutomationSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *HubspotAutomationSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *HubspotAutomationSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *HubspotAutomationSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *HubspotAutomationSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *HubspotAutomationSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *HubspotAutomationSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("HubspotAutomationSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *HubspotAutomationSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *HubspotAutomationSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("HubspotAutomationSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// ActionsV4CollectionResponsePublicActionDefinitionForward returns a ActionsV4CollectionResponsePublicActionDefinitionForward entity bound to this client.
// Idiomatic usage: client.ActionsV4CollectionResponsePublicActionDefinitionForward(nil).List(nil, nil) or
// client.ActionsV4CollectionResponsePublicActionDefinitionForward(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) ActionsV4CollectionResponsePublicActionDefinitionForward(data map[string]any) HubspotAutomationEntity {
	return NewActionsV4CollectionResponsePublicActionDefinitionForwardEntityFunc(sdk, data)
}


// ActionsV4CollectionResponsePublicActionFunctionIdentifierNo returns a ActionsV4CollectionResponsePublicActionFunctionIdentifierNo entity bound to this client.
// Idiomatic usage: client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo(nil).List(nil, nil) or
// client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) ActionsV4CollectionResponsePublicActionFunctionIdentifierNo(data map[string]any) HubspotAutomationEntity {
	return NewActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntityFunc(sdk, data)
}


// ActionsV4CollectionResponsePublicActionRevisionForward returns a ActionsV4CollectionResponsePublicActionRevisionForward entity bound to this client.
// Idiomatic usage: client.ActionsV4CollectionResponsePublicActionRevisionForward(nil).List(nil, nil) or
// client.ActionsV4CollectionResponsePublicActionRevisionForward(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) ActionsV4CollectionResponsePublicActionRevisionForward(data map[string]any) HubspotAutomationEntity {
	return NewActionsV4CollectionResponsePublicActionRevisionForwardEntityFunc(sdk, data)
}


// ActionsV4PublicActionDefinition returns a ActionsV4PublicActionDefinition entity bound to this client.
// Idiomatic usage: client.ActionsV4PublicActionDefinition(nil).List(nil, nil) or
// client.ActionsV4PublicActionDefinition(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) ActionsV4PublicActionDefinition(data map[string]any) HubspotAutomationEntity {
	return NewActionsV4PublicActionDefinitionEntityFunc(sdk, data)
}


// ActionsV4PublicActionDefinitionRequiresObject returns a ActionsV4PublicActionDefinitionRequiresObject entity bound to this client.
// Idiomatic usage: client.ActionsV4PublicActionDefinitionRequiresObject(nil).List(nil, nil) or
// client.ActionsV4PublicActionDefinitionRequiresObject(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) ActionsV4PublicActionDefinitionRequiresObject(data map[string]any) HubspotAutomationEntity {
	return NewActionsV4PublicActionDefinitionRequiresObjectEntityFunc(sdk, data)
}


// ActionsV4PublicActionFunction returns a ActionsV4PublicActionFunction entity bound to this client.
// Idiomatic usage: client.ActionsV4PublicActionFunction(nil).List(nil, nil) or
// client.ActionsV4PublicActionFunction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) ActionsV4PublicActionFunction(data map[string]any) HubspotAutomationEntity {
	return NewActionsV4PublicActionFunctionEntityFunc(sdk, data)
}


// ActionsV4PublicActionFunctionIdentifier returns a ActionsV4PublicActionFunctionIdentifier entity bound to this client.
// Idiomatic usage: client.ActionsV4PublicActionFunctionIdentifier(nil).List(nil, nil) or
// client.ActionsV4PublicActionFunctionIdentifier(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) ActionsV4PublicActionFunctionIdentifier(data map[string]any) HubspotAutomationEntity {
	return NewActionsV4PublicActionFunctionIdentifierEntityFunc(sdk, data)
}


// ActionsV4PublicActionRevision returns a ActionsV4PublicActionRevision entity bound to this client.
// Idiomatic usage: client.ActionsV4PublicActionRevision(nil).List(nil, nil) or
// client.ActionsV4PublicActionRevision(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) ActionsV4PublicActionRevision(data map[string]any) HubspotAutomationEntity {
	return NewActionsV4PublicActionRevisionEntityFunc(sdk, data)
}


// AutomationV4ApiFlow returns a AutomationV4ApiFlow entity bound to this client.
// Idiomatic usage: client.AutomationV4ApiFlow(nil).List(nil, nil) or
// client.AutomationV4ApiFlow(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) AutomationV4ApiFlow(data map[string]any) HubspotAutomationEntity {
	return NewAutomationV4ApiFlowEntityFunc(sdk, data)
}


// AutomationV4BatchResponseApiFlow returns a AutomationV4BatchResponseApiFlow entity bound to this client.
// Idiomatic usage: client.AutomationV4BatchResponseApiFlow(nil).List(nil, nil) or
// client.AutomationV4BatchResponseApiFlow(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) AutomationV4BatchResponseApiFlow(data map[string]any) HubspotAutomationEntity {
	return NewAutomationV4BatchResponseApiFlowEntityFunc(sdk, data)
}


// AutomationV4BatchResponseFlowIdWorkflowIdMapping returns a AutomationV4BatchResponseFlowIdWorkflowIdMapping entity bound to this client.
// Idiomatic usage: client.AutomationV4BatchResponseFlowIdWorkflowIdMapping(nil).List(nil, nil) or
// client.AutomationV4BatchResponseFlowIdWorkflowIdMapping(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) AutomationV4BatchResponseFlowIdWorkflowIdMapping(data map[string]any) HubspotAutomationEntity {
	return NewAutomationV4BatchResponseFlowIdWorkflowIdMappingEntityFunc(sdk, data)
}


// AutomationV4CollectionResponseApiFlowEmailCampaign returns a AutomationV4CollectionResponseApiFlowEmailCampaign entity bound to this client.
// Idiomatic usage: client.AutomationV4CollectionResponseApiFlowEmailCampaign(nil).List(nil, nil) or
// client.AutomationV4CollectionResponseApiFlowEmailCampaign(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) AutomationV4CollectionResponseApiFlowEmailCampaign(data map[string]any) HubspotAutomationEntity {
	return NewAutomationV4CollectionResponseApiFlowEmailCampaignEntityFunc(sdk, data)
}


// AutomationV4CollectionResponseApiFlowListingForwardPaging returns a AutomationV4CollectionResponseApiFlowListingForwardPaging entity bound to this client.
// Idiomatic usage: client.AutomationV4CollectionResponseApiFlowListingForwardPaging(nil).List(nil, nil) or
// client.AutomationV4CollectionResponseApiFlowListingForwardPaging(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) AutomationV4CollectionResponseApiFlowListingForwardPaging(data map[string]any) HubspotAutomationEntity {
	return NewAutomationV4CollectionResponseApiFlowListingForwardPagingEntityFunc(sdk, data)
}


// AutomationV4CollectionResponseApiHistogramDataPointNo returns a AutomationV4CollectionResponseApiHistogramDataPointNo entity bound to this client.
// Idiomatic usage: client.AutomationV4CollectionResponseApiHistogramDataPointNo(nil).List(nil, nil) or
// client.AutomationV4CollectionResponseApiHistogramDataPointNo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) AutomationV4CollectionResponseApiHistogramDataPointNo(data map[string]any) HubspotAutomationEntity {
	return NewAutomationV4CollectionResponseApiHistogramDataPointNoEntityFunc(sdk, data)
}


// Basic returns a Basic entity bound to this client.
// Idiomatic usage: client.Basic(nil).List(nil, nil) or
// client.Basic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) Basic(data map[string]any) HubspotAutomationEntity {
	return NewBasicEntityFunc(sdk, data)
}


// Callback returns a Callback entity bound to this client.
// Idiomatic usage: client.Callback(nil).List(nil, nil) or
// client.Callback(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) Callback(data map[string]any) HubspotAutomationEntity {
	return NewCallbackEntityFunc(sdk, data)
}


// Definition returns a Definition entity bound to this client.
// Idiomatic usage: client.Definition(nil).List(nil, nil) or
// client.Definition(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) Definition(data map[string]any) HubspotAutomationEntity {
	return NewDefinitionEntityFunc(sdk, data)
}


// EmailTemplatesCollectionResponsePublicFolderForwardPaging returns a EmailTemplatesCollectionResponsePublicFolderForwardPaging entity bound to this client.
// Idiomatic usage: client.EmailTemplatesCollectionResponsePublicFolderForwardPaging(nil).List(nil, nil) or
// client.EmailTemplatesCollectionResponsePublicFolderForwardPaging(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) EmailTemplatesCollectionResponsePublicFolderForwardPaging(data map[string]any) HubspotAutomationEntity {
	return NewEmailTemplatesCollectionResponsePublicFolderForwardPagingEntityFunc(sdk, data)
}


// EmailTemplatesCollectionResponsePublicTemplateForwardPaging returns a EmailTemplatesCollectionResponsePublicTemplateForwardPaging entity bound to this client.
// Idiomatic usage: client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging(nil).List(nil, nil) or
// client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) EmailTemplatesCollectionResponsePublicTemplateForwardPaging(data map[string]any) HubspotAutomationEntity {
	return NewEmailTemplatesCollectionResponsePublicTemplateForwardPagingEntityFunc(sdk, data)
}


// EmailTemplatesPublicTemplate returns a EmailTemplatesPublicTemplate entity bound to this client.
// Idiomatic usage: client.EmailTemplatesPublicTemplate(nil).List(nil, nil) or
// client.EmailTemplatesPublicTemplate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) EmailTemplatesPublicTemplate(data map[string]any) HubspotAutomationEntity {
	return NewEmailTemplatesPublicTemplateEntityFunc(sdk, data)
}


// Function returns a Function entity bound to this client.
// Idiomatic usage: client.Function(nil).List(nil, nil) or
// client.Function(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) Function(data map[string]any) HubspotAutomationEntity {
	return NewFunctionEntityFunc(sdk, data)
}


// Sequence returns a Sequence entity bound to this client.
// Idiomatic usage: client.Sequence(nil).List(nil, nil) or
// client.Sequence(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) Sequence(data map[string]any) HubspotAutomationEntity {
	return NewSequenceEntityFunc(sdk, data)
}


// SequencesCollectionResponseWithTotalPublicSequenceLite returns a SequencesCollectionResponseWithTotalPublicSequenceLite entity bound to this client.
// Idiomatic usage: client.SequencesCollectionResponseWithTotalPublicSequenceLite(nil).List(nil, nil) or
// client.SequencesCollectionResponseWithTotalPublicSequenceLite(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) SequencesCollectionResponseWithTotalPublicSequenceLite(data map[string]any) HubspotAutomationEntity {
	return NewSequencesCollectionResponseWithTotalPublicSequenceLiteEntityFunc(sdk, data)
}


// SequencesPublicSequence returns a SequencesPublicSequence entity bound to this client.
// Idiomatic usage: client.SequencesPublicSequence(nil).List(nil, nil) or
// client.SequencesPublicSequence(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) SequencesPublicSequence(data map[string]any) HubspotAutomationEntity {
	return NewSequencesPublicSequenceEntityFunc(sdk, data)
}


// SequencesPublicSequenceEnrollment returns a SequencesPublicSequenceEnrollment entity bound to this client.
// Idiomatic usage: client.SequencesPublicSequenceEnrollment(nil).List(nil, nil) or
// client.SequencesPublicSequenceEnrollment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) SequencesPublicSequenceEnrollment(data map[string]any) HubspotAutomationEntity {
	return NewSequencesPublicSequenceEnrollmentEntityFunc(sdk, data)
}


// SequencesPublicSequenceEnrollmentLite returns a SequencesPublicSequenceEnrollmentLite entity bound to this client.
// Idiomatic usage: client.SequencesPublicSequenceEnrollmentLite(nil).List(nil, nil) or
// client.SequencesPublicSequenceEnrollmentLite(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) SequencesPublicSequenceEnrollmentLite(data map[string]any) HubspotAutomationEntity {
	return NewSequencesPublicSequenceEnrollmentLiteEntityFunc(sdk, data)
}


// SequencesPublicSequencePerformance returns a SequencesPublicSequencePerformance entity bound to this client.
// Idiomatic usage: client.SequencesPublicSequencePerformance(nil).List(nil, nil) or
// client.SequencesPublicSequencePerformance(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *HubspotAutomationSDK) SequencesPublicSequencePerformance(data map[string]any) HubspotAutomationEntity {
	return NewSequencesPublicSequencePerformanceEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *HubspotAutomationSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewHubspotAutomationSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
