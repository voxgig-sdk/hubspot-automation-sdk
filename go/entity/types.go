// Typed models for the HubspotAutomation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/hubspot-automation-sdk/go/core"
)

// ActionsV4CollectionResponsePublicActionDefinitionForward is the typed data model for the actions_v4_collection_response_public_action_definition_forward entity.
type ActionsV4CollectionResponsePublicActionDefinitionForward struct {
	Paging *map[string]any `json:"paging,omitempty"`
	Results []any `json:"results"`
}

// ActionsV4CollectionResponsePublicActionDefinitionForwardLoadMatch is the typed request payload for ActionsV4CollectionResponsePublicActionDefinitionForward.LoadTyped.
type ActionsV4CollectionResponsePublicActionDefinitionForwardLoadMatch struct {
	AppId int `json:"app_id"`
	After *string `json:"after,omitempty"`
	Archived *bool `json:"archived,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// ActionsV4CollectionResponsePublicActionFunctionIdentifierNo is the typed data model for the actions_v4_collection_response_public_action_function_identifier_no entity.
type ActionsV4CollectionResponsePublicActionFunctionIdentifierNo struct {
	FunctionType string `json:"functionType"`
	Id *string `json:"id,omitempty"`
}

// ActionsV4CollectionResponsePublicActionFunctionIdentifierNoListMatch is the typed request payload for ActionsV4CollectionResponsePublicActionFunctionIdentifierNo.ListTyped.
type ActionsV4CollectionResponsePublicActionFunctionIdentifierNoListMatch struct {
	AppId int `json:"app_id"`
	DefinitionId string `json:"definition_id"`
}

// ActionsV4CollectionResponsePublicActionRevisionForward is the typed data model for the actions_v4_collection_response_public_action_revision_forward entity.
type ActionsV4CollectionResponsePublicActionRevisionForward struct {
	CreatedAt string `json:"createdAt"`
	Definition map[string]any `json:"definition"`
	Id string `json:"id"`
	RevisionId string `json:"revisionId"`
}

// ActionsV4CollectionResponsePublicActionRevisionForwardListMatch is the typed request payload for ActionsV4CollectionResponsePublicActionRevisionForward.ListTyped.
type ActionsV4CollectionResponsePublicActionRevisionForwardListMatch struct {
	AppId int `json:"app_id"`
	DefinitionId string `json:"definition_id"`
	After *string `json:"after,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// ActionsV4PublicActionDefinition is the typed data model for the actions_v4_public_action_definition entity.
type ActionsV4PublicActionDefinition struct {
	ActionUrl string `json:"actionUrl"`
	ArchivedAt *int `json:"archivedAt,omitempty"`
	ExecutionRules *[]any `json:"executionRules,omitempty"`
	Functions []any `json:"functions"`
	Id string `json:"id"`
	InputFieldDependencies *[]any `json:"inputFieldDependencies,omitempty"`
	InputFields []any `json:"inputFields"`
	Labels map[string]any `json:"labels"`
	ObjectRequestOptions map[string]any `json:"objectRequestOptions"`
	ObjectTypes []any `json:"objectTypes"`
	OutputFields *[]any `json:"outputFields,omitempty"`
	Published bool `json:"published"`
	RevisionId string `json:"revisionId"`
}

// ActionsV4PublicActionDefinitionLoadMatch is the typed request payload for ActionsV4PublicActionDefinition.LoadTyped.
type ActionsV4PublicActionDefinitionLoadMatch struct {
	AppId int `json:"app_id"`
	DefinitionId string `json:"definition_id"`
	Archived *bool `json:"archived,omitempty"`
}

// ActionsV4PublicActionDefinitionCreateData is the typed request payload for ActionsV4PublicActionDefinition.CreateTyped.
type ActionsV4PublicActionDefinitionCreateData struct {
	AppId int `json:"app_id"`
	ActionUrl string `json:"actionUrl"`
	ArchivedAt *int `json:"archivedAt,omitempty"`
	ExecutionRules *[]any `json:"executionRules,omitempty"`
	Functions []any `json:"functions"`
	Id string `json:"id"`
	InputFieldDependencies *[]any `json:"inputFieldDependencies,omitempty"`
	InputFields []any `json:"inputFields"`
	Labels map[string]any `json:"labels"`
	ObjectRequestOptions map[string]any `json:"objectRequestOptions"`
	ObjectTypes []any `json:"objectTypes"`
	OutputFields *[]any `json:"outputFields,omitempty"`
	Published bool `json:"published"`
	RevisionId string `json:"revisionId"`
}

// ActionsV4PublicActionDefinitionUpdateData is the typed request payload for ActionsV4PublicActionDefinition.UpdateTyped.
type ActionsV4PublicActionDefinitionUpdateData struct {
	AppId int `json:"app_id"`
	DefinitionId string `json:"definition_id"`
	ActionUrl *string `json:"actionUrl,omitempty"`
	ArchivedAt *int `json:"archivedAt,omitempty"`
	ExecutionRules *[]any `json:"executionRules,omitempty"`
	Functions *[]any `json:"functions,omitempty"`
	Id *string `json:"id,omitempty"`
	InputFieldDependencies *[]any `json:"inputFieldDependencies,omitempty"`
	InputFields *[]any `json:"inputFields,omitempty"`
	Labels *map[string]any `json:"labels,omitempty"`
	ObjectRequestOptions *map[string]any `json:"objectRequestOptions,omitempty"`
	ObjectTypes *[]any `json:"objectTypes,omitempty"`
	OutputFields *[]any `json:"outputFields,omitempty"`
	Published *bool `json:"published,omitempty"`
	RevisionId *string `json:"revisionId,omitempty"`
}

// ActionsV4PublicActionDefinitionRequiresObject is the typed data model for the actions_v4_public_action_definition_requires_object entity.
type ActionsV4PublicActionDefinitionRequiresObject struct {
	RequiresObject bool `json:"requiresObject"`
}

// ActionsV4PublicActionDefinitionRequiresObjectLoadMatch is the typed request payload for ActionsV4PublicActionDefinitionRequiresObject.LoadTyped.
type ActionsV4PublicActionDefinitionRequiresObjectLoadMatch struct {
	AppId int `json:"app_id"`
	DefinitionId string `json:"definition_id"`
}

// ActionsV4PublicActionFunction is the typed data model for the actions_v4_public_action_function entity.
type ActionsV4PublicActionFunction struct {
	FunctionSource string `json:"functionSource"`
	FunctionType string `json:"functionType"`
	Id *string `json:"id,omitempty"`
}

// ActionsV4PublicActionFunctionLoadMatch is the typed request payload for ActionsV4PublicActionFunction.LoadTyped.
type ActionsV4PublicActionFunctionLoadMatch struct {
	AppId int `json:"app_id"`
	DefinitionId string `json:"definition_id"`
	FunctionId *string `json:"function_id,omitempty"`
	FunctionType *string `json:"function_type,omitempty"`
	Id *string `json:"id,omitempty"`
}

// ActionsV4PublicActionFunctionIdentifier is the typed data model for the actions_v4_public_action_function_identifier entity.
type ActionsV4PublicActionFunctionIdentifier struct {
	FunctionType string `json:"functionType"`
	Id *string `json:"id,omitempty"`
}

// ActionsV4PublicActionFunctionIdentifierUpdateData is the typed request payload for ActionsV4PublicActionFunctionIdentifier.UpdateTyped.
type ActionsV4PublicActionFunctionIdentifierUpdateData struct {
	AppId int `json:"app_id"`
	DefinitionId string `json:"definition_id"`
	FunctionId *string `json:"function_id,omitempty"`
	FunctionType string `json:"function_type"`
	FunctionType2 *string `json:"functionType,omitempty"`
	Id *string `json:"id,omitempty"`
}

// ActionsV4PublicActionRevision is the typed data model for the actions_v4_public_action_revision entity.
type ActionsV4PublicActionRevision struct {
	ActionUrl string `json:"actionUrl"`
	ArchivedAt *int `json:"archivedAt,omitempty"`
	ExecutionRules *[]any `json:"executionRules,omitempty"`
	Functions []any `json:"functions"`
	Id string `json:"id"`
	InputFieldDependencies *[]any `json:"inputFieldDependencies,omitempty"`
	InputFields []any `json:"inputFields"`
	Labels map[string]any `json:"labels"`
	ObjectRequestOptions map[string]any `json:"objectRequestOptions"`
	ObjectTypes []any `json:"objectTypes"`
	OutputFields *[]any `json:"outputFields,omitempty"`
	Published bool `json:"published"`
	RevisionId string `json:"revisionId"`
}

// ActionsV4PublicActionRevisionLoadMatch is the typed request payload for ActionsV4PublicActionRevision.LoadTyped.
type ActionsV4PublicActionRevisionLoadMatch struct {
	AppId int `json:"app_id"`
	DefinitionId string `json:"definition_id"`
	Id string `json:"id"`
}

// AutomationV4ApiFlow is the typed data model for the automation_v4_api_flow entity.
type AutomationV4ApiFlow struct {
	Id *string `json:"id,omitempty"`
}

// AutomationV4ApiFlowLoadMatch is the typed request payload for AutomationV4ApiFlow.LoadTyped.
type AutomationV4ApiFlowLoadMatch struct {
	Id string `json:"id"`
}

// AutomationV4ApiFlowCreateData is the typed request payload for AutomationV4ApiFlow.CreateTyped.
type AutomationV4ApiFlowCreateData struct {
	Id *string `json:"id,omitempty"`
}

// AutomationV4ApiFlowUpdateData is the typed request payload for AutomationV4ApiFlow.UpdateTyped.
type AutomationV4ApiFlowUpdateData struct {
	Id string `json:"id"`
}

// AutomationV4BatchResponseApiFlow is the typed data model for the automation_v4_batch_response_api_flow entity.
type AutomationV4BatchResponseApiFlow struct {
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// AutomationV4BatchResponseApiFlowCreateData is the typed request payload for AutomationV4BatchResponseApiFlow.CreateTyped.
type AutomationV4BatchResponseApiFlowCreateData struct {
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// AutomationV4BatchResponseFlowIdWorkflowIdMapping is the typed data model for the automation_v4_batch_response_flow_id_workflow_id_mapping entity.
type AutomationV4BatchResponseFlowIdWorkflowIdMapping struct {
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// AutomationV4BatchResponseFlowIdWorkflowIdMappingCreateData is the typed request payload for AutomationV4BatchResponseFlowIdWorkflowIdMapping.CreateTyped.
type AutomationV4BatchResponseFlowIdWorkflowIdMappingCreateData struct {
	CompletedAt string `json:"completedAt"`
	Inputs []any `json:"inputs"`
	Links *map[string]any `json:"links,omitempty"`
	RequestedAt *string `json:"requestedAt,omitempty"`
	Results []any `json:"results"`
	StartedAt string `json:"startedAt"`
	Status string `json:"status"`
}

// AutomationV4CollectionResponseApiFlowEmailCampaign is the typed data model for the automation_v4_collection_response_api_flow_email_campaign entity.
type AutomationV4CollectionResponseApiFlowEmailCampaign struct {
	EmailCampaignId string `json:"emailCampaignId"`
	EmailContentId string `json:"emailContentId"`
	FlowId string `json:"flowId"`
}

// AutomationV4CollectionResponseApiFlowEmailCampaignListMatch is the typed request payload for AutomationV4CollectionResponseApiFlowEmailCampaign.ListTyped.
type AutomationV4CollectionResponseApiFlowEmailCampaignListMatch struct {
	After *string `json:"after,omitempty"`
	Before *string `json:"before,omitempty"`
	FlowId *[]any `json:"flow_id,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// AutomationV4CollectionResponseApiFlowListingForwardPaging is the typed data model for the automation_v4_collection_response_api_flow_listing_forward_paging entity.
type AutomationV4CollectionResponseApiFlowListingForwardPaging struct {
	CreatedAt string `json:"createdAt"`
	FlowType string `json:"flowType"`
	Id string `json:"id"`
	IsEnabled bool `json:"isEnabled"`
	Name *string `json:"name,omitempty"`
	ObjectTypeId string `json:"objectTypeId"`
	RevisionId string `json:"revisionId"`
	UpdatedAt string `json:"updatedAt"`
	Uuid *string `json:"uuid,omitempty"`
}

// AutomationV4CollectionResponseApiFlowListingForwardPagingListMatch is the typed request payload for AutomationV4CollectionResponseApiFlowListingForwardPaging.ListTyped.
type AutomationV4CollectionResponseApiFlowListingForwardPagingListMatch struct {
	After *string `json:"after,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// AutomationV4CollectionResponseApiHistogramDataPointNo is the typed data model for the automation_v4_collection_response_api_histogram_data_point_no entity.
type AutomationV4CollectionResponseApiHistogramDataPointNo struct {
	Results []any `json:"results"`
}

// AutomationV4CollectionResponseApiHistogramDataPointNoLoadMatch is the typed request payload for AutomationV4CollectionResponseApiHistogramDataPointNo.LoadTyped.
type AutomationV4CollectionResponseApiHistogramDataPointNoLoadMatch struct {
	FlowId string `json:"flow_id"`
	BucketType *string `json:"bucket_type,omitempty"`
	End *int `json:"end,omitempty"`
	FirstDay *string `json:"first_day,omitempty"`
	Start *int `json:"start,omitempty"`
}

// Basic is the typed data model for the basic entity.
type Basic struct {
}

// BasicRemoveMatch is the typed request payload for Basic.RemoveTyped.
type BasicRemoveMatch struct {
	FlowId int `json:"flow_id"`
}

// Callback is the typed data model for the callback entity.
type Callback struct {
	FailureReasonType *string `json:"failureReasonType,omitempty"`
	Inputs []any `json:"inputs"`
	OutputFields map[string]any `json:"outputFields"`
	RequestContext *any `json:"requestContext,omitempty"`
	TypedOutputs map[string]any `json:"typedOutputs"`
}

// CallbackCreateData is the typed request payload for Callback.CreateTyped.
type CallbackCreateData struct {
	FailureReasonType *string `json:"failureReasonType,omitempty"`
	Inputs []any `json:"inputs"`
	OutputFields map[string]any `json:"outputFields"`
	RequestContext *any `json:"requestContext,omitempty"`
	TypedOutputs map[string]any `json:"typedOutputs"`
}

// Definition is the typed data model for the definition entity.
type Definition struct {
	Id *string `json:"id,omitempty"`
	RequiresObject bool `json:"requiresObject"`
}

// DefinitionCreateData is the typed request payload for Definition.CreateTyped.
type DefinitionCreateData struct {
	AppId int `json:"app_id"`
	DefinitionId string `json:"definition_id"`
	Id *string `json:"id,omitempty"`
	RequiresObject bool `json:"requiresObject"`
}

// DefinitionRemoveMatch is the typed request payload for Definition.RemoveTyped.
type DefinitionRemoveMatch struct {
	AppId int `json:"app_id"`
	DefinitionId string `json:"definition_id"`
}

// EmailTemplatesCollectionResponsePublicFolderForwardPaging is the typed data model for the email_templates_collection_response_public_folder_forward_paging entity.
type EmailTemplatesCollectionResponsePublicFolderForwardPaging struct {
	CreatedAt *int `json:"createdAt,omitempty"`
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
	UpdatedAt *int `json:"updatedAt,omitempty"`
}

// EmailTemplatesCollectionResponsePublicFolderForwardPagingListMatch is the typed request payload for EmailTemplatesCollectionResponsePublicFolderForwardPaging.ListTyped.
type EmailTemplatesCollectionResponsePublicFolderForwardPagingListMatch struct {
	After *string `json:"after,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// EmailTemplatesCollectionResponsePublicTemplateForwardPaging is the typed data model for the email_templates_collection_response_public_template_forward_paging entity.
type EmailTemplatesCollectionResponsePublicTemplateForwardPaging struct {
	Body *string `json:"body,omitempty"`
	CreatedAt *int `json:"createdAt,omitempty"`
	FolderId *string `json:"folderId,omitempty"`
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
	OwnerId *string `json:"ownerId,omitempty"`
	Subject *string `json:"subject,omitempty"`
	UpdatedAt *int `json:"updatedAt,omitempty"`
}

// EmailTemplatesCollectionResponsePublicTemplateForwardPagingListMatch is the typed request payload for EmailTemplatesCollectionResponsePublicTemplateForwardPaging.ListTyped.
type EmailTemplatesCollectionResponsePublicTemplateForwardPagingListMatch struct {
	After *string `json:"after,omitempty"`
	Limit *int `json:"limit,omitempty"`
}

// EmailTemplatesPublicTemplate is the typed data model for the email_templates_public_template entity.
type EmailTemplatesPublicTemplate struct {
	Body *string `json:"body,omitempty"`
	CreatedAt *int `json:"createdAt,omitempty"`
	FolderId *string `json:"folderId,omitempty"`
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
	OwnerId *string `json:"ownerId,omitempty"`
	Subject *string `json:"subject,omitempty"`
	UpdatedAt *int `json:"updatedAt,omitempty"`
}

// EmailTemplatesPublicTemplateLoadMatch is the typed request payload for EmailTemplatesPublicTemplate.LoadTyped.
type EmailTemplatesPublicTemplateLoadMatch struct {
	TemplateId int `json:"template_id"`
}

// EmailTemplatesPublicTemplateCreateData is the typed request payload for EmailTemplatesPublicTemplate.CreateTyped.
type EmailTemplatesPublicTemplateCreateData struct {
	Body *string `json:"body,omitempty"`
	CreatedAt *int `json:"createdAt,omitempty"`
	FolderId *string `json:"folderId,omitempty"`
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
	OwnerId *string `json:"ownerId,omitempty"`
	Subject *string `json:"subject,omitempty"`
	UpdatedAt *int `json:"updatedAt,omitempty"`
}

// EmailTemplatesPublicTemplateUpdateData is the typed request payload for EmailTemplatesPublicTemplate.UpdateTyped.
type EmailTemplatesPublicTemplateUpdateData struct {
	TemplateId int `json:"template_id"`
	Body *string `json:"body,omitempty"`
	CreatedAt *int `json:"createdAt,omitempty"`
	FolderId *string `json:"folderId,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	OwnerId *string `json:"ownerId,omitempty"`
	Subject *string `json:"subject,omitempty"`
	UpdatedAt *int `json:"updatedAt,omitempty"`
}

// Function is the typed data model for the function entity.
type Function struct {
	Id *string `json:"id,omitempty"`
}

// FunctionRemoveMatch is the typed request payload for Function.RemoveTyped.
type FunctionRemoveMatch struct {
	AppId int `json:"app_id"`
	DefinitionId string `json:"definition_id"`
	FunctionId *string `json:"function_id,omitempty"`
	FunctionType *string `json:"function_type,omitempty"`
	Id *string `json:"id,omitempty"`
}

// Sequence is the typed data model for the sequence entity.
type Sequence struct {
	CreatedAt string `json:"createdAt"`
	Dependencies []any `json:"dependencies"`
	Dynamic bool `json:"dynamic"`
	EngagementTriggers *map[string]any `json:"engagementTriggers,omitempty"`
	FolderId *string `json:"folderId,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	Sequence map[string]any `json:"sequence"`
	Settings map[string]any `json:"settings"`
	Steps []any `json:"steps"`
	UpdatedAt string `json:"updatedAt"`
	UserId string `json:"userId"`
	UserView *map[string]any `json:"userView,omitempty"`
}

// SequenceLoadMatch is the typed request payload for Sequence.LoadTyped.
type SequenceLoadMatch struct {
	Id string `json:"id"`
}

// SequenceListMatch is the typed request payload for Sequence.ListTyped.
type SequenceListMatch struct {
	After *string `json:"after,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Name *string `json:"name,omitempty"`
}

// SequenceCreateData is the typed request payload for Sequence.CreateTyped.
type SequenceCreateData struct {
	CreatedAt string `json:"createdAt"`
	Dependencies []any `json:"dependencies"`
	Dynamic bool `json:"dynamic"`
	EngagementTriggers *map[string]any `json:"engagementTriggers,omitempty"`
	FolderId *string `json:"folderId,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	Sequence map[string]any `json:"sequence"`
	Settings map[string]any `json:"settings"`
	Steps []any `json:"steps"`
	UpdatedAt string `json:"updatedAt"`
	UserId string `json:"userId"`
	UserView *map[string]any `json:"userView,omitempty"`
}

// SequenceUpdateData is the typed request payload for Sequence.UpdateTyped.
type SequenceUpdateData struct {
	Id string `json:"id"`
	CreatedAt *string `json:"createdAt,omitempty"`
	Dependencies *[]any `json:"dependencies,omitempty"`
	Dynamic *bool `json:"dynamic,omitempty"`
	EngagementTriggers *map[string]any `json:"engagementTriggers,omitempty"`
	FolderId *string `json:"folderId,omitempty"`
	Name *string `json:"name,omitempty"`
	Sequence *map[string]any `json:"sequence,omitempty"`
	Settings *map[string]any `json:"settings,omitempty"`
	Steps *[]any `json:"steps,omitempty"`
	UpdatedAt *string `json:"updatedAt,omitempty"`
	UserId *string `json:"userId,omitempty"`
	UserView *map[string]any `json:"userView,omitempty"`
}

// SequencesCollectionResponseWithTotalPublicSequenceLite is the typed data model for the sequences_collection_response_with_total_public_sequence_lite entity.
type SequencesCollectionResponseWithTotalPublicSequenceLite struct {
	CreatedAt string `json:"createdAt"`
	FolderId *string `json:"folderId,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	UpdatedAt string `json:"updatedAt"`
	UserId string `json:"userId"`
}

// SequencesCollectionResponseWithTotalPublicSequenceLiteListMatch is the typed request payload for SequencesCollectionResponseWithTotalPublicSequenceLite.ListTyped.
type SequencesCollectionResponseWithTotalPublicSequenceLiteListMatch struct {
	After *string `json:"after,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Name *string `json:"name,omitempty"`
	UserId string `json:"user_id"`
}

// SequencesPublicSequence is the typed data model for the sequences_public_sequence entity.
type SequencesPublicSequence struct {
	CreatedAt string `json:"createdAt"`
	Dependencies []any `json:"dependencies"`
	FolderId *string `json:"folderId,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	Settings map[string]any `json:"settings"`
	Steps []any `json:"steps"`
	UpdatedAt string `json:"updatedAt"`
	UserId string `json:"userId"`
}

// SequencesPublicSequenceLoadMatch is the typed request payload for SequencesPublicSequence.LoadTyped.
type SequencesPublicSequenceLoadMatch struct {
	SequenceId string `json:"sequence_id"`
	UserId string `json:"user_id"`
}

// SequencesPublicSequenceEnrollment is the typed data model for the sequences_public_sequence_enrollment entity.
type SequencesPublicSequenceEnrollment struct {
	EnrolledAt string `json:"enrolledAt"`
	EnrolledBy string `json:"enrolledBy"`
	EnrolledByEmail string `json:"enrolledByEmail"`
	Id string `json:"id"`
	SequenceId string `json:"sequenceId"`
	SequenceName string `json:"sequenceName"`
	ToEmail string `json:"toEmail"`
	UpdatedAt string `json:"updatedAt"`
}

// SequencesPublicSequenceEnrollmentLoadMatch is the typed request payload for SequencesPublicSequenceEnrollment.LoadTyped.
type SequencesPublicSequenceEnrollmentLoadMatch struct {
	ContactId string `json:"contact_id"`
}

// SequencesPublicSequenceEnrollmentLite is the typed data model for the sequences_public_sequence_enrollment_lite entity.
type SequencesPublicSequenceEnrollmentLite struct {
	ContactId string `json:"contactId"`
	EnrolledAt string `json:"enrolledAt"`
	Id string `json:"id"`
	SenderAliasAddress *string `json:"senderAliasAddress,omitempty"`
	SenderEmail string `json:"senderEmail"`
	SequenceId string `json:"sequenceId"`
	ToEmail string `json:"toEmail"`
	UpdatedAt string `json:"updatedAt"`
}

// SequencesPublicSequenceEnrollmentLiteCreateData is the typed request payload for SequencesPublicSequenceEnrollmentLite.CreateTyped.
type SequencesPublicSequenceEnrollmentLiteCreateData struct {
	UserId string `json:"user_id"`
	ContactId string `json:"contactId"`
	EnrolledAt string `json:"enrolledAt"`
	Id string `json:"id"`
	SenderAliasAddress *string `json:"senderAliasAddress,omitempty"`
	SenderEmail string `json:"senderEmail"`
	SequenceId string `json:"sequenceId"`
	ToEmail string `json:"toEmail"`
	UpdatedAt string `json:"updatedAt"`
}

// SequencesPublicSequencePerformance is the typed data model for the sequences_public_sequence_performance entity.
type SequencesPublicSequencePerformance struct {
	CompanyMetrics map[string]any `json:"companyMetrics"`
	SequenceId string `json:"sequenceId"`
	StatusByStep []any `json:"statusByStep"`
	Steps []any `json:"steps"`
	Summary map[string]any `json:"summary"`
	Timeline []any `json:"timeline"`
}

// SequencesPublicSequencePerformanceListMatch is the typed request payload for SequencesPublicSequencePerformance.ListTyped.
type SequencesPublicSequencePerformanceListMatch struct {
	SequenceId string `json:"sequence_id"`
	TimelineInterval *string `json:"timeline_interval,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
