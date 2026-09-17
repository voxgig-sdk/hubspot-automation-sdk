package voxgighubspotautomationsdk

import (
	"github.com/voxgig-sdk/hubspot-automation-sdk/go/core"
	"github.com/voxgig-sdk/hubspot-automation-sdk/go/entity"
	"github.com/voxgig-sdk/hubspot-automation-sdk/go/feature"
	_ "github.com/voxgig-sdk/hubspot-automation-sdk/go/utility"
)

// Type aliases preserve external API.
type HubspotAutomationSDK = core.HubspotAutomationSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type HubspotAutomationEntity = core.HubspotAutomationEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type HubspotAutomationError = core.HubspotAutomationError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewActionsV4CollectionResponsePublicActionDefinitionForwardEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewActionsV4CollectionResponsePublicActionDefinitionForwardEntity(client, entopts)
	}
	core.NewActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity(client, entopts)
	}
	core.NewActionsV4CollectionResponsePublicActionRevisionForwardEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewActionsV4CollectionResponsePublicActionRevisionForwardEntity(client, entopts)
	}
	core.NewActionsV4PublicActionDefinitionEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewActionsV4PublicActionDefinitionEntity(client, entopts)
	}
	core.NewActionsV4PublicActionDefinitionRequiresObjectEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewActionsV4PublicActionDefinitionRequiresObjectEntity(client, entopts)
	}
	core.NewActionsV4PublicActionFunctionEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewActionsV4PublicActionFunctionEntity(client, entopts)
	}
	core.NewActionsV4PublicActionFunctionIdentifierEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewActionsV4PublicActionFunctionIdentifierEntity(client, entopts)
	}
	core.NewActionsV4PublicActionRevisionEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewActionsV4PublicActionRevisionEntity(client, entopts)
	}
	core.NewAutomationV4ApiFlowEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewAutomationV4ApiFlowEntity(client, entopts)
	}
	core.NewAutomationV4BatchResponseApiFlowEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewAutomationV4BatchResponseApiFlowEntity(client, entopts)
	}
	core.NewAutomationV4BatchResponseFlowIdWorkflowIdMappingEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewAutomationV4BatchResponseFlowIdWorkflowIdMappingEntity(client, entopts)
	}
	core.NewAutomationV4CollectionResponseApiFlowEmailCampaignEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewAutomationV4CollectionResponseApiFlowEmailCampaignEntity(client, entopts)
	}
	core.NewAutomationV4CollectionResponseApiFlowListingForwardPagingEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewAutomationV4CollectionResponseApiFlowListingForwardPagingEntity(client, entopts)
	}
	core.NewAutomationV4CollectionResponseApiHistogramDataPointNoEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewAutomationV4CollectionResponseApiHistogramDataPointNoEntity(client, entopts)
	}
	core.NewBasicEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewBasicEntity(client, entopts)
	}
	core.NewCallbackEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewCallbackEntity(client, entopts)
	}
	core.NewDefinitionEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewDefinitionEntity(client, entopts)
	}
	core.NewEmailTemplatesCollectionResponsePublicFolderForwardPagingEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewEmailTemplatesCollectionResponsePublicFolderForwardPagingEntity(client, entopts)
	}
	core.NewEmailTemplatesCollectionResponsePublicTemplateForwardPagingEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewEmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity(client, entopts)
	}
	core.NewEmailTemplatesPublicTemplateEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewEmailTemplatesPublicTemplateEntity(client, entopts)
	}
	core.NewFunctionEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewFunctionEntity(client, entopts)
	}
	core.NewSequenceEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewSequenceEntity(client, entopts)
	}
	core.NewSequencesCollectionResponseWithTotalPublicSequenceLiteEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewSequencesCollectionResponseWithTotalPublicSequenceLiteEntity(client, entopts)
	}
	core.NewSequencesPublicSequenceEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewSequencesPublicSequenceEntity(client, entopts)
	}
	core.NewSequencesPublicSequenceEnrollmentEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewSequencesPublicSequenceEnrollmentEntity(client, entopts)
	}
	core.NewSequencesPublicSequenceEnrollmentLiteEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewSequencesPublicSequenceEnrollmentLiteEntity(client, entopts)
	}
	core.NewSequencesPublicSequencePerformanceEntityFunc = func(client *core.HubspotAutomationSDK, entopts map[string]any) core.HubspotAutomationEntity {
		return entity.NewSequencesPublicSequencePerformanceEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewHubspotAutomationSDK = core.NewHubspotAutomationSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewHubspotAutomationSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *HubspotAutomationSDK  { return NewHubspotAutomationSDK(nil) }
func Test() *HubspotAutomationSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
