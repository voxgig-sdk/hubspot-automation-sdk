// Typed models for the HubspotAutomation SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} ActionsV4CollectionResponsePublicActionDefinitionForward
 * @property {Object} [paging]
 * @property {Array} results
 */

/**
 * @typedef {Object} ActionsV4CollectionResponsePublicActionDefinitionForwardLoadMatch
 * @property {number} app_id
 * @property {string} [after]
 * @property {boolean} [archived]
 * @property {number} [limit]
 */

/**
 * @typedef {Object} ActionsV4CollectionResponsePublicActionFunctionIdentifierNo
 * @property {string} functionType
 * @property {string} [id]
 */

/**
 * @typedef {Object} ActionsV4CollectionResponsePublicActionFunctionIdentifierNoListMatch
 * @property {number} app_id
 * @property {string} definition_id
 */

/**
 * @typedef {Object} ActionsV4CollectionResponsePublicActionRevisionForward
 * @property {string} createdAt
 * @property {Object} definition
 * @property {string} id
 * @property {string} revisionId
 */

/**
 * @typedef {Object} ActionsV4CollectionResponsePublicActionRevisionForwardListMatch
 * @property {number} app_id
 * @property {string} definition_id
 * @property {string} [after]
 * @property {number} [limit]
 */

/**
 * @typedef {Object} ActionsV4PublicActionDefinition
 * @property {string} actionUrl
 * @property {number} [archivedAt]
 * @property {Array} [executionRules]
 * @property {Array} functions
 * @property {string} id
 * @property {Array} [inputFieldDependencies]
 * @property {Array} inputFields
 * @property {Object} labels
 * @property {Object} objectRequestOptions
 * @property {Array} objectTypes
 * @property {Array} [outputFields]
 * @property {boolean} published
 * @property {string} revisionId
 */

/**
 * @typedef {Object} ActionsV4PublicActionDefinitionLoadMatch
 * @property {number} app_id
 * @property {string} definition_id
 * @property {boolean} [archived]
 */

/**
 * @typedef {Object} ActionsV4PublicActionDefinitionCreateData
 * @property {number} app_id
 * @property {string} actionUrl
 * @property {number} [archivedAt]
 * @property {Array} [executionRules]
 * @property {Array} functions
 * @property {string} id
 * @property {Array} [inputFieldDependencies]
 * @property {Array} inputFields
 * @property {Object} labels
 * @property {Object} objectRequestOptions
 * @property {Array} objectTypes
 * @property {Array} [outputFields]
 * @property {boolean} published
 * @property {string} revisionId
 */

/**
 * @typedef {Object} ActionsV4PublicActionDefinitionUpdateData
 * @property {number} app_id
 * @property {string} definition_id
 * @property {string} [actionUrl]
 * @property {number} [archivedAt]
 * @property {Array} [executionRules]
 * @property {Array} [functions]
 * @property {string} [id]
 * @property {Array} [inputFieldDependencies]
 * @property {Array} [inputFields]
 * @property {Object} [labels]
 * @property {Object} [objectRequestOptions]
 * @property {Array} [objectTypes]
 * @property {Array} [outputFields]
 * @property {boolean} [published]
 * @property {string} [revisionId]
 */

/**
 * @typedef {Object} ActionsV4PublicActionDefinitionRequiresObject
 * @property {boolean} requiresObject
 */

/**
 * @typedef {Object} ActionsV4PublicActionDefinitionRequiresObjectLoadMatch
 * @property {number} app_id
 * @property {string} definition_id
 */

/**
 * @typedef {Object} ActionsV4PublicActionFunction
 * @property {string} functionSource
 * @property {string} functionType
 * @property {string} [id]
 */

/**
 * @typedef {Object} ActionsV4PublicActionFunctionLoadMatch
 * @property {number} app_id
 * @property {string} definition_id
 * @property {string} [function_id]
 * @property {string} [function_type]
 * @property {string} [id]
 */

/**
 * @typedef {Object} ActionsV4PublicActionFunctionIdentifier
 * @property {string} functionType
 * @property {string} [id]
 */

/**
 * @typedef {Object} ActionsV4PublicActionFunctionIdentifierUpdateData
 * @property {number} app_id
 * @property {string} definition_id
 * @property {string} [function_id]
 * @property {string} function_type
 * @property {string} [functionType]
 * @property {string} [id]
 */

/**
 * @typedef {Object} ActionsV4PublicActionRevision
 * @property {string} actionUrl
 * @property {number} [archivedAt]
 * @property {Array} [executionRules]
 * @property {Array} functions
 * @property {string} id
 * @property {Array} [inputFieldDependencies]
 * @property {Array} inputFields
 * @property {Object} labels
 * @property {Object} objectRequestOptions
 * @property {Array} objectTypes
 * @property {Array} [outputFields]
 * @property {boolean} published
 * @property {string} revisionId
 */

/**
 * @typedef {Object} ActionsV4PublicActionRevisionLoadMatch
 * @property {number} app_id
 * @property {string} definition_id
 * @property {string} id
 */

/**
 * @typedef {Object} AutomationV4ApiFlow
 * @property {string} [id]
 */

/**
 * @typedef {Object} AutomationV4ApiFlowLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AutomationV4ApiFlowCreateData
 * @property {string} [id]
 */

/**
 * @typedef {Object} AutomationV4ApiFlowUpdateData
 * @property {string} id
 */

/**
 * @typedef {Object} AutomationV4BatchResponseApiFlow
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} AutomationV4BatchResponseApiFlowCreateData
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} AutomationV4BatchResponseFlowIdWorkflowIdMapping
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} AutomationV4BatchResponseFlowIdWorkflowIdMappingCreateData
 * @property {string} completedAt
 * @property {Array} inputs
 * @property {Object} [links]
 * @property {string} [requestedAt]
 * @property {Array} results
 * @property {string} startedAt
 * @property {string} status
 */

/**
 * @typedef {Object} AutomationV4CollectionResponseApiFlowEmailCampaign
 * @property {string} emailCampaignId
 * @property {string} emailContentId
 * @property {string} flowId
 */

/**
 * @typedef {Object} AutomationV4CollectionResponseApiFlowEmailCampaignListMatch
 * @property {string} [after]
 * @property {string} [before]
 * @property {Array} [flow_id]
 * @property {number} [limit]
 */

/**
 * @typedef {Object} AutomationV4CollectionResponseApiFlowListingForwardPaging
 * @property {string} createdAt
 * @property {string} flowType
 * @property {string} id
 * @property {boolean} isEnabled
 * @property {string} [name]
 * @property {string} objectTypeId
 * @property {string} revisionId
 * @property {string} updatedAt
 * @property {string} [uuid]
 */

/**
 * @typedef {Object} AutomationV4CollectionResponseApiFlowListingForwardPagingListMatch
 * @property {string} [after]
 * @property {number} [limit]
 */

/**
 * @typedef {Object} AutomationV4CollectionResponseApiHistogramDataPointNo
 * @property {Array} results
 */

/**
 * @typedef {Object} AutomationV4CollectionResponseApiHistogramDataPointNoLoadMatch
 * @property {string} flow_id
 * @property {string} [bucket_type]
 * @property {number} [end]
 * @property {string} [first_day]
 * @property {number} [start]
 */

/**
 * @typedef {Object} Basic
 */

/**
 * @typedef {Object} BasicRemoveMatch
 * @property {number} flow_id
 */

/**
 * @typedef {Object} Callback
 * @property {string} [failureReasonType]
 * @property {Array} inputs
 * @property {Object} outputFields
 * @property {*} [requestContext]
 * @property {Object} typedOutputs
 */

/**
 * @typedef {Object} CallbackCreateData
 * @property {string} [failureReasonType]
 * @property {Array} inputs
 * @property {Object} outputFields
 * @property {*} [requestContext]
 * @property {Object} typedOutputs
 */

/**
 * @typedef {Object} Definition
 * @property {string} [id]
 * @property {boolean} requiresObject
 */

/**
 * @typedef {Object} DefinitionCreateData
 * @property {number} app_id
 * @property {string} definition_id
 * @property {string} [id]
 * @property {boolean} requiresObject
 */

/**
 * @typedef {Object} DefinitionRemoveMatch
 * @property {number} app_id
 * @property {string} definition_id
 */

/**
 * @typedef {Object} EmailTemplatesCollectionResponsePublicFolderForwardPaging
 * @property {number} [createdAt]
 * @property {string} id
 * @property {string} [name]
 * @property {number} [updatedAt]
 */

/**
 * @typedef {Object} EmailTemplatesCollectionResponsePublicFolderForwardPagingListMatch
 * @property {string} [after]
 * @property {number} [limit]
 */

/**
 * @typedef {Object} EmailTemplatesCollectionResponsePublicTemplateForwardPaging
 * @property {string} [body]
 * @property {number} [createdAt]
 * @property {string} [folderId]
 * @property {string} id
 * @property {string} [name]
 * @property {string} [ownerId]
 * @property {string} [subject]
 * @property {number} [updatedAt]
 */

/**
 * @typedef {Object} EmailTemplatesCollectionResponsePublicTemplateForwardPagingListMatch
 * @property {string} [after]
 * @property {number} [limit]
 */

/**
 * @typedef {Object} EmailTemplatesPublicTemplate
 * @property {string} [body]
 * @property {number} [createdAt]
 * @property {string} [folderId]
 * @property {string} id
 * @property {string} [name]
 * @property {string} [ownerId]
 * @property {string} [subject]
 * @property {number} [updatedAt]
 */

/**
 * @typedef {Object} EmailTemplatesPublicTemplateLoadMatch
 * @property {number} template_id
 */

/**
 * @typedef {Object} EmailTemplatesPublicTemplateCreateData
 * @property {string} [body]
 * @property {number} [createdAt]
 * @property {string} [folderId]
 * @property {string} id
 * @property {string} [name]
 * @property {string} [ownerId]
 * @property {string} [subject]
 * @property {number} [updatedAt]
 */

/**
 * @typedef {Object} EmailTemplatesPublicTemplateUpdateData
 * @property {number} template_id
 * @property {string} [body]
 * @property {number} [createdAt]
 * @property {string} [folderId]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [ownerId]
 * @property {string} [subject]
 * @property {number} [updatedAt]
 */

/**
 * @typedef {Object} Function
 * @property {string} [id]
 */

/**
 * @typedef {Object} FunctionRemoveMatch
 * @property {number} app_id
 * @property {string} definition_id
 * @property {string} [function_id]
 * @property {string} [function_type]
 * @property {string} [id]
 */

/**
 * @typedef {Object} Sequence
 * @property {string} createdAt
 * @property {Array} dependencies
 * @property {boolean} dynamic
 * @property {Object} [engagementTriggers]
 * @property {string} [folderId]
 * @property {string} id
 * @property {string} name
 * @property {Object} sequence
 * @property {Object} settings
 * @property {Array} steps
 * @property {string} updatedAt
 * @property {string} userId
 * @property {Object} [userView]
 */

/**
 * @typedef {Object} SequenceLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} SequenceListMatch
 * @property {string} [after]
 * @property {number} [limit]
 * @property {string} [name]
 */

/**
 * @typedef {Object} SequenceCreateData
 * @property {string} createdAt
 * @property {Array} dependencies
 * @property {boolean} dynamic
 * @property {Object} [engagementTriggers]
 * @property {string} [folderId]
 * @property {string} id
 * @property {string} name
 * @property {Object} sequence
 * @property {Object} settings
 * @property {Array} steps
 * @property {string} updatedAt
 * @property {string} userId
 * @property {Object} [userView]
 */

/**
 * @typedef {Object} SequenceUpdateData
 * @property {string} id
 * @property {string} [createdAt]
 * @property {Array} [dependencies]
 * @property {boolean} [dynamic]
 * @property {Object} [engagementTriggers]
 * @property {string} [folderId]
 * @property {string} [name]
 * @property {Object} [sequence]
 * @property {Object} [settings]
 * @property {Array} [steps]
 * @property {string} [updatedAt]
 * @property {string} [userId]
 * @property {Object} [userView]
 */

/**
 * @typedef {Object} SequencesCollectionResponseWithTotalPublicSequenceLite
 * @property {string} createdAt
 * @property {string} [folderId]
 * @property {string} id
 * @property {string} name
 * @property {string} updatedAt
 * @property {string} userId
 */

/**
 * @typedef {Object} SequencesCollectionResponseWithTotalPublicSequenceLiteListMatch
 * @property {string} [after]
 * @property {number} [limit]
 * @property {string} [name]
 * @property {string} user_id
 */

/**
 * @typedef {Object} SequencesPublicSequence
 * @property {string} createdAt
 * @property {Array} dependencies
 * @property {string} [folderId]
 * @property {string} id
 * @property {string} name
 * @property {Object} settings
 * @property {Array} steps
 * @property {string} updatedAt
 * @property {string} userId
 */

/**
 * @typedef {Object} SequencesPublicSequenceLoadMatch
 * @property {string} sequence_id
 * @property {string} user_id
 */

/**
 * @typedef {Object} SequencesPublicSequenceEnrollment
 * @property {string} enrolledAt
 * @property {string} enrolledBy
 * @property {string} enrolledByEmail
 * @property {string} id
 * @property {string} sequenceId
 * @property {string} sequenceName
 * @property {string} toEmail
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} SequencesPublicSequenceEnrollmentLoadMatch
 * @property {string} contact_id
 */

/**
 * @typedef {Object} SequencesPublicSequenceEnrollmentLite
 * @property {string} contactId
 * @property {string} enrolledAt
 * @property {string} id
 * @property {string} [senderAliasAddress]
 * @property {string} senderEmail
 * @property {string} sequenceId
 * @property {string} toEmail
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} SequencesPublicSequenceEnrollmentLiteCreateData
 * @property {string} user_id
 * @property {string} contactId
 * @property {string} enrolledAt
 * @property {string} id
 * @property {string} [senderAliasAddress]
 * @property {string} senderEmail
 * @property {string} sequenceId
 * @property {string} toEmail
 * @property {string} updatedAt
 */

/**
 * @typedef {Object} SequencesPublicSequencePerformance
 * @property {Object} companyMetrics
 * @property {string} sequenceId
 * @property {Array} statusByStep
 * @property {Array} steps
 * @property {Object} summary
 * @property {Array} timeline
 */

/**
 * @typedef {Object} SequencesPublicSequencePerformanceListMatch
 * @property {string} sequence_id
 * @property {string} [timeline_interval]
 */

