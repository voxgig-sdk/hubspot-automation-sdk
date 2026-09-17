-- Typed models for the HubspotAutomation SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class ActionsV4CollectionResponsePublicActionDefinitionForward
---@field paging? table
---@field results table

---@class ActionsV4CollectionResponsePublicActionDefinitionForwardLoadMatch
---@field app_id number
---@field after? string
---@field archived? boolean
---@field limit? number

---@class ActionsV4CollectionResponsePublicActionFunctionIdentifierNo
---@field functionType string
---@field id? string

---@class ActionsV4CollectionResponsePublicActionFunctionIdentifierNoListMatch
---@field app_id number
---@field definition_id string

---@class ActionsV4CollectionResponsePublicActionRevisionForward
---@field createdAt string
---@field definition table
---@field id string
---@field revisionId string

---@class ActionsV4CollectionResponsePublicActionRevisionForwardListMatch
---@field app_id number
---@field definition_id string
---@field after? string
---@field limit? number

---@class ActionsV4PublicActionDefinition
---@field actionUrl string
---@field archivedAt? number
---@field executionRules? table
---@field functions table
---@field id string
---@field inputFieldDependencies? table
---@field inputFields table
---@field labels table
---@field objectRequestOptions table
---@field objectTypes table
---@field outputFields? table
---@field published boolean
---@field revisionId string

---@class ActionsV4PublicActionDefinitionLoadMatch
---@field app_id number
---@field definition_id string
---@field archived? boolean

---@class ActionsV4PublicActionDefinitionCreateData
---@field app_id number
---@field actionUrl string
---@field archivedAt? number
---@field executionRules? table
---@field functions table
---@field id string
---@field inputFieldDependencies? table
---@field inputFields table
---@field labels table
---@field objectRequestOptions table
---@field objectTypes table
---@field outputFields? table
---@field published boolean
---@field revisionId string

---@class ActionsV4PublicActionDefinitionUpdateData
---@field app_id number
---@field definition_id string
---@field actionUrl? string
---@field archivedAt? number
---@field executionRules? table
---@field functions? table
---@field id? string
---@field inputFieldDependencies? table
---@field inputFields? table
---@field labels? table
---@field objectRequestOptions? table
---@field objectTypes? table
---@field outputFields? table
---@field published? boolean
---@field revisionId? string

---@class ActionsV4PublicActionDefinitionRequiresObject
---@field requiresObject boolean

---@class ActionsV4PublicActionDefinitionRequiresObjectLoadMatch
---@field app_id number
---@field definition_id string

---@class ActionsV4PublicActionFunction
---@field functionSource string
---@field functionType string
---@field id? string

---@class ActionsV4PublicActionFunctionLoadMatch
---@field app_id number
---@field definition_id string
---@field function_id? string
---@field function_type? string
---@field id? string

---@class ActionsV4PublicActionFunctionIdentifier
---@field functionType string
---@field id? string

---@class ActionsV4PublicActionFunctionIdentifierUpdateData
---@field app_id number
---@field definition_id string
---@field function_id? string
---@field function_type string
---@field functionType? string
---@field id? string

---@class ActionsV4PublicActionRevision
---@field actionUrl string
---@field archivedAt? number
---@field executionRules? table
---@field functions table
---@field id string
---@field inputFieldDependencies? table
---@field inputFields table
---@field labels table
---@field objectRequestOptions table
---@field objectTypes table
---@field outputFields? table
---@field published boolean
---@field revisionId string

---@class ActionsV4PublicActionRevisionLoadMatch
---@field app_id number
---@field definition_id string
---@field id string

---@class AutomationV4ApiFlow
---@field id? string

---@class AutomationV4ApiFlowLoadMatch
---@field id string

---@class AutomationV4ApiFlowCreateData
---@field id? string

---@class AutomationV4ApiFlowUpdateData
---@field id string

---@class AutomationV4BatchResponseApiFlow
---@field completedAt string
---@field inputs table
---@field links? table
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class AutomationV4BatchResponseApiFlowCreateData
---@field completedAt string
---@field inputs table
---@field links? table
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class AutomationV4BatchResponseFlowIdWorkflowIdMapping
---@field completedAt string
---@field inputs table
---@field links? table
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class AutomationV4BatchResponseFlowIdWorkflowIdMappingCreateData
---@field completedAt string
---@field inputs table
---@field links? table
---@field requestedAt? string
---@field results table
---@field startedAt string
---@field status string

---@class AutomationV4CollectionResponseApiFlowEmailCampaign
---@field emailCampaignId string
---@field emailContentId string
---@field flowId string

---@class AutomationV4CollectionResponseApiFlowEmailCampaignListMatch
---@field after? string
---@field before? string
---@field flow_id? table
---@field limit? number

---@class AutomationV4CollectionResponseApiFlowListingForwardPaging
---@field createdAt string
---@field flowType string
---@field id string
---@field isEnabled boolean
---@field name? string
---@field objectTypeId string
---@field revisionId string
---@field updatedAt string
---@field uuid? string

---@class AutomationV4CollectionResponseApiFlowListingForwardPagingListMatch
---@field after? string
---@field limit? number

---@class AutomationV4CollectionResponseApiHistogramDataPointNo
---@field results table

---@class AutomationV4CollectionResponseApiHistogramDataPointNoLoadMatch
---@field flow_id string
---@field bucket_type? string
---@field end? number
---@field first_day? string
---@field start? number

---@class Basic

---@class BasicRemoveMatch
---@field flow_id number

---@class Callback
---@field failureReasonType? string
---@field inputs table
---@field outputFields table
---@field requestContext? any
---@field typedOutputs table

---@class CallbackCreateData
---@field failureReasonType? string
---@field inputs table
---@field outputFields table
---@field requestContext? any
---@field typedOutputs table

---@class Definition
---@field id? string
---@field requiresObject boolean

---@class DefinitionCreateData
---@field app_id number
---@field definition_id string
---@field id? string
---@field requiresObject boolean

---@class DefinitionRemoveMatch
---@field app_id number
---@field definition_id string

---@class EmailTemplatesCollectionResponsePublicFolderForwardPaging
---@field createdAt? number
---@field id string
---@field name? string
---@field updatedAt? number

---@class EmailTemplatesCollectionResponsePublicFolderForwardPagingListMatch
---@field after? string
---@field limit? number

---@class EmailTemplatesCollectionResponsePublicTemplateForwardPaging
---@field body? string
---@field createdAt? number
---@field folderId? string
---@field id string
---@field name? string
---@field ownerId? string
---@field subject? string
---@field updatedAt? number

---@class EmailTemplatesCollectionResponsePublicTemplateForwardPagingListMatch
---@field after? string
---@field limit? number

---@class EmailTemplatesPublicTemplate
---@field body? string
---@field createdAt? number
---@field folderId? string
---@field id string
---@field name? string
---@field ownerId? string
---@field subject? string
---@field updatedAt? number

---@class EmailTemplatesPublicTemplateLoadMatch
---@field template_id number

---@class EmailTemplatesPublicTemplateCreateData
---@field body? string
---@field createdAt? number
---@field folderId? string
---@field id string
---@field name? string
---@field ownerId? string
---@field subject? string
---@field updatedAt? number

---@class EmailTemplatesPublicTemplateUpdateData
---@field template_id number
---@field body? string
---@field createdAt? number
---@field folderId? string
---@field id? string
---@field name? string
---@field ownerId? string
---@field subject? string
---@field updatedAt? number

---@class Function
---@field id? string

---@class FunctionRemoveMatch
---@field app_id number
---@field definition_id string
---@field function_id? string
---@field function_type? string
---@field id? string

---@class Sequence
---@field createdAt string
---@field dependencies table
---@field dynamic boolean
---@field engagementTriggers? table
---@field folderId? string
---@field id string
---@field name string
---@field sequence table
---@field settings table
---@field steps table
---@field updatedAt string
---@field userId string
---@field userView? table

---@class SequenceLoadMatch
---@field id string

---@class SequenceListMatch
---@field after? string
---@field limit? number
---@field name? string

---@class SequenceCreateData
---@field createdAt string
---@field dependencies table
---@field dynamic boolean
---@field engagementTriggers? table
---@field folderId? string
---@field id string
---@field name string
---@field sequence table
---@field settings table
---@field steps table
---@field updatedAt string
---@field userId string
---@field userView? table

---@class SequenceUpdateData
---@field id string
---@field createdAt? string
---@field dependencies? table
---@field dynamic? boolean
---@field engagementTriggers? table
---@field folderId? string
---@field name? string
---@field sequence? table
---@field settings? table
---@field steps? table
---@field updatedAt? string
---@field userId? string
---@field userView? table

---@class SequencesCollectionResponseWithTotalPublicSequenceLite
---@field createdAt string
---@field folderId? string
---@field id string
---@field name string
---@field updatedAt string
---@field userId string

---@class SequencesCollectionResponseWithTotalPublicSequenceLiteListMatch
---@field after? string
---@field limit? number
---@field name? string
---@field user_id string

---@class SequencesPublicSequence
---@field createdAt string
---@field dependencies table
---@field folderId? string
---@field id string
---@field name string
---@field settings table
---@field steps table
---@field updatedAt string
---@field userId string

---@class SequencesPublicSequenceLoadMatch
---@field sequence_id string
---@field user_id string

---@class SequencesPublicSequenceEnrollment
---@field enrolledAt string
---@field enrolledBy string
---@field enrolledByEmail string
---@field id string
---@field sequenceId string
---@field sequenceName string
---@field toEmail string
---@field updatedAt string

---@class SequencesPublicSequenceEnrollmentLoadMatch
---@field contact_id string

---@class SequencesPublicSequenceEnrollmentLite
---@field contactId string
---@field enrolledAt string
---@field id string
---@field senderAliasAddress? string
---@field senderEmail string
---@field sequenceId string
---@field toEmail string
---@field updatedAt string

---@class SequencesPublicSequenceEnrollmentLiteCreateData
---@field user_id string
---@field contactId string
---@field enrolledAt string
---@field id string
---@field senderAliasAddress? string
---@field senderEmail string
---@field sequenceId string
---@field toEmail string
---@field updatedAt string

---@class SequencesPublicSequencePerformance
---@field companyMetrics table
---@field sequenceId string
---@field statusByStep table
---@field steps table
---@field summary table
---@field timeline table

---@class SequencesPublicSequencePerformanceListMatch
---@field sequence_id string
---@field timeline_interval? string

local M = {}

return M
