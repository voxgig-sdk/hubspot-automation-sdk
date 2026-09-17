# Typed models for the HubspotAutomation SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class ActionsV4CollectionResponsePublicActionDefinitionForwardRequired(TypedDict):
    results: list


class ActionsV4CollectionResponsePublicActionDefinitionForward(ActionsV4CollectionResponsePublicActionDefinitionForwardRequired, total=False):
    paging: dict


class ActionsV4CollectionResponsePublicActionDefinitionForwardLoadMatchRequired(TypedDict):
    app_id: int


class ActionsV4CollectionResponsePublicActionDefinitionForwardLoadMatch(ActionsV4CollectionResponsePublicActionDefinitionForwardLoadMatchRequired, total=False):
    after: str
    archived: bool
    limit: int


class ActionsV4CollectionResponsePublicActionFunctionIdentifierNoRequired(TypedDict):
    functionType: str


class ActionsV4CollectionResponsePublicActionFunctionIdentifierNo(ActionsV4CollectionResponsePublicActionFunctionIdentifierNoRequired, total=False):
    id: str


class ActionsV4CollectionResponsePublicActionFunctionIdentifierNoListMatch(TypedDict):
    app_id: int
    definition_id: str


class ActionsV4CollectionResponsePublicActionRevisionForward(TypedDict):
    createdAt: str
    definition: dict
    id: str
    revisionId: str


class ActionsV4CollectionResponsePublicActionRevisionForwardListMatchRequired(TypedDict):
    app_id: int
    definition_id: str


class ActionsV4CollectionResponsePublicActionRevisionForwardListMatch(ActionsV4CollectionResponsePublicActionRevisionForwardListMatchRequired, total=False):
    after: str
    limit: int


class ActionsV4PublicActionDefinitionRequired(TypedDict):
    actionUrl: str
    functions: list
    id: str
    inputFields: list
    labels: dict
    objectRequestOptions: dict
    objectTypes: list
    published: bool
    revisionId: str


class ActionsV4PublicActionDefinition(ActionsV4PublicActionDefinitionRequired, total=False):
    archivedAt: int
    executionRules: list
    inputFieldDependencies: list
    outputFields: list


class ActionsV4PublicActionDefinitionLoadMatchRequired(TypedDict):
    app_id: int
    definition_id: str


class ActionsV4PublicActionDefinitionLoadMatch(ActionsV4PublicActionDefinitionLoadMatchRequired, total=False):
    archived: bool


class ActionsV4PublicActionDefinitionCreateDataRequired(TypedDict):
    app_id: int
    actionUrl: str
    functions: list
    id: str
    inputFields: list
    labels: dict
    objectRequestOptions: dict
    objectTypes: list
    published: bool
    revisionId: str


class ActionsV4PublicActionDefinitionCreateData(ActionsV4PublicActionDefinitionCreateDataRequired, total=False):
    archivedAt: int
    executionRules: list
    inputFieldDependencies: list
    outputFields: list


class ActionsV4PublicActionDefinitionUpdateDataRequired(TypedDict):
    app_id: int
    definition_id: str


class ActionsV4PublicActionDefinitionUpdateData(ActionsV4PublicActionDefinitionUpdateDataRequired, total=False):
    actionUrl: str
    archivedAt: int
    executionRules: list
    functions: list
    id: str
    inputFieldDependencies: list
    inputFields: list
    labels: dict
    objectRequestOptions: dict
    objectTypes: list
    outputFields: list
    published: bool
    revisionId: str


class ActionsV4PublicActionDefinitionRequiresObject(TypedDict):
    requiresObject: bool


class ActionsV4PublicActionDefinitionRequiresObjectLoadMatch(TypedDict):
    app_id: int
    definition_id: str


class ActionsV4PublicActionFunctionRequired(TypedDict):
    functionSource: str
    functionType: str


class ActionsV4PublicActionFunction(ActionsV4PublicActionFunctionRequired, total=False):
    id: str


class ActionsV4PublicActionFunctionLoadMatchRequired(TypedDict):
    app_id: int
    definition_id: str


class ActionsV4PublicActionFunctionLoadMatch(ActionsV4PublicActionFunctionLoadMatchRequired, total=False):
    function_id: str
    function_type: str
    id: str


class ActionsV4PublicActionFunctionIdentifierRequired(TypedDict):
    functionType: str


class ActionsV4PublicActionFunctionIdentifier(ActionsV4PublicActionFunctionIdentifierRequired, total=False):
    id: str


class ActionsV4PublicActionFunctionIdentifierUpdateDataRequired(TypedDict):
    app_id: int
    definition_id: str
    function_type: str


class ActionsV4PublicActionFunctionIdentifierUpdateData(ActionsV4PublicActionFunctionIdentifierUpdateDataRequired, total=False):
    function_id: str
    functionType: str
    id: str


class ActionsV4PublicActionRevisionRequired(TypedDict):
    actionUrl: str
    functions: list
    id: str
    inputFields: list
    labels: dict
    objectRequestOptions: dict
    objectTypes: list
    published: bool
    revisionId: str


class ActionsV4PublicActionRevision(ActionsV4PublicActionRevisionRequired, total=False):
    archivedAt: int
    executionRules: list
    inputFieldDependencies: list
    outputFields: list


class ActionsV4PublicActionRevisionLoadMatch(TypedDict):
    app_id: int
    definition_id: str
    id: str


class AutomationV4ApiFlow(TypedDict, total=False):
    id: str


class AutomationV4ApiFlowLoadMatch(TypedDict):
    id: str


class AutomationV4ApiFlowCreateData(TypedDict, total=False):
    id: str


class AutomationV4ApiFlowUpdateData(TypedDict):
    id: str


class AutomationV4BatchResponseApiFlowRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class AutomationV4BatchResponseApiFlow(AutomationV4BatchResponseApiFlowRequired, total=False):
    links: dict
    requestedAt: str


class AutomationV4BatchResponseApiFlowCreateDataRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class AutomationV4BatchResponseApiFlowCreateData(AutomationV4BatchResponseApiFlowCreateDataRequired, total=False):
    links: dict
    requestedAt: str


class AutomationV4BatchResponseFlowIdWorkflowIdMappingRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class AutomationV4BatchResponseFlowIdWorkflowIdMapping(AutomationV4BatchResponseFlowIdWorkflowIdMappingRequired, total=False):
    links: dict
    requestedAt: str


class AutomationV4BatchResponseFlowIdWorkflowIdMappingCreateDataRequired(TypedDict):
    completedAt: str
    inputs: list
    results: list
    startedAt: str
    status: str


class AutomationV4BatchResponseFlowIdWorkflowIdMappingCreateData(AutomationV4BatchResponseFlowIdWorkflowIdMappingCreateDataRequired, total=False):
    links: dict
    requestedAt: str


class AutomationV4CollectionResponseApiFlowEmailCampaign(TypedDict):
    emailCampaignId: str
    emailContentId: str
    flowId: str


class AutomationV4CollectionResponseApiFlowEmailCampaignListMatch(TypedDict, total=False):
    after: str
    before: str
    flow_id: list
    limit: int


class AutomationV4CollectionResponseApiFlowListingForwardPagingRequired(TypedDict):
    createdAt: str
    flowType: str
    id: str
    isEnabled: bool
    objectTypeId: str
    revisionId: str
    updatedAt: str


class AutomationV4CollectionResponseApiFlowListingForwardPaging(AutomationV4CollectionResponseApiFlowListingForwardPagingRequired, total=False):
    name: str
    uuid: str


class AutomationV4CollectionResponseApiFlowListingForwardPagingListMatch(TypedDict, total=False):
    after: str
    limit: int


class AutomationV4CollectionResponseApiHistogramDataPointNo(TypedDict):
    results: list


class AutomationV4CollectionResponseApiHistogramDataPointNoLoadMatchRequired(TypedDict):
    flow_id: str


class AutomationV4CollectionResponseApiHistogramDataPointNoLoadMatch(AutomationV4CollectionResponseApiHistogramDataPointNoLoadMatchRequired, total=False):
    bucket_type: str
    end: int
    first_day: str
    start: int


class Basic(TypedDict):
    pass


class BasicRemoveMatch(TypedDict):
    flow_id: int


class CallbackRequired(TypedDict):
    inputs: list
    outputFields: dict
    typedOutputs: dict


class Callback(CallbackRequired, total=False):
    failureReasonType: str
    requestContext: Any


class CallbackCreateDataRequired(TypedDict):
    inputs: list
    outputFields: dict
    typedOutputs: dict


class CallbackCreateData(CallbackCreateDataRequired, total=False):
    failureReasonType: str
    requestContext: Any


class DefinitionRequired(TypedDict):
    requiresObject: bool


class Definition(DefinitionRequired, total=False):
    id: str


class DefinitionCreateDataRequired(TypedDict):
    app_id: int
    definition_id: str
    requiresObject: bool


class DefinitionCreateData(DefinitionCreateDataRequired, total=False):
    id: str


class DefinitionRemoveMatch(TypedDict):
    app_id: int
    definition_id: str


class EmailTemplatesCollectionResponsePublicFolderForwardPagingRequired(TypedDict):
    id: str


class EmailTemplatesCollectionResponsePublicFolderForwardPaging(EmailTemplatesCollectionResponsePublicFolderForwardPagingRequired, total=False):
    createdAt: int
    name: str
    updatedAt: int


class EmailTemplatesCollectionResponsePublicFolderForwardPagingListMatch(TypedDict, total=False):
    after: str
    limit: int


class EmailTemplatesCollectionResponsePublicTemplateForwardPagingRequired(TypedDict):
    id: str


class EmailTemplatesCollectionResponsePublicTemplateForwardPaging(EmailTemplatesCollectionResponsePublicTemplateForwardPagingRequired, total=False):
    body: str
    createdAt: int
    folderId: str
    name: str
    ownerId: str
    subject: str
    updatedAt: int


class EmailTemplatesCollectionResponsePublicTemplateForwardPagingListMatch(TypedDict, total=False):
    after: str
    limit: int


class EmailTemplatesPublicTemplateRequired(TypedDict):
    id: str


class EmailTemplatesPublicTemplate(EmailTemplatesPublicTemplateRequired, total=False):
    body: str
    createdAt: int
    folderId: str
    name: str
    ownerId: str
    subject: str
    updatedAt: int


class EmailTemplatesPublicTemplateLoadMatch(TypedDict):
    template_id: int


class EmailTemplatesPublicTemplateCreateDataRequired(TypedDict):
    id: str


class EmailTemplatesPublicTemplateCreateData(EmailTemplatesPublicTemplateCreateDataRequired, total=False):
    body: str
    createdAt: int
    folderId: str
    name: str
    ownerId: str
    subject: str
    updatedAt: int


class EmailTemplatesPublicTemplateUpdateDataRequired(TypedDict):
    template_id: int


class EmailTemplatesPublicTemplateUpdateData(EmailTemplatesPublicTemplateUpdateDataRequired, total=False):
    body: str
    createdAt: int
    folderId: str
    id: str
    name: str
    ownerId: str
    subject: str
    updatedAt: int


class Function(TypedDict, total=False):
    id: str


class FunctionRemoveMatchRequired(TypedDict):
    app_id: int
    definition_id: str


class FunctionRemoveMatch(FunctionRemoveMatchRequired, total=False):
    function_id: str
    function_type: str
    id: str


class SequenceRequired(TypedDict):
    createdAt: str
    dependencies: list
    dynamic: bool
    id: str
    name: str
    sequence: dict
    settings: dict
    steps: list
    updatedAt: str
    userId: str


class Sequence(SequenceRequired, total=False):
    engagementTriggers: dict
    folderId: str
    userView: dict


class SequenceLoadMatch(TypedDict):
    id: str


class SequenceListMatch(TypedDict, total=False):
    after: str
    limit: int
    name: str


class SequenceCreateDataRequired(TypedDict):
    createdAt: str
    dependencies: list
    dynamic: bool
    id: str
    name: str
    sequence: dict
    settings: dict
    steps: list
    updatedAt: str
    userId: str


class SequenceCreateData(SequenceCreateDataRequired, total=False):
    engagementTriggers: dict
    folderId: str
    userView: dict


class SequenceUpdateDataRequired(TypedDict):
    id: str


class SequenceUpdateData(SequenceUpdateDataRequired, total=False):
    createdAt: str
    dependencies: list
    dynamic: bool
    engagementTriggers: dict
    folderId: str
    name: str
    sequence: dict
    settings: dict
    steps: list
    updatedAt: str
    userId: str
    userView: dict


class SequencesCollectionResponseWithTotalPublicSequenceLiteRequired(TypedDict):
    createdAt: str
    id: str
    name: str
    updatedAt: str
    userId: str


class SequencesCollectionResponseWithTotalPublicSequenceLite(SequencesCollectionResponseWithTotalPublicSequenceLiteRequired, total=False):
    folderId: str


class SequencesCollectionResponseWithTotalPublicSequenceLiteListMatchRequired(TypedDict):
    user_id: str


class SequencesCollectionResponseWithTotalPublicSequenceLiteListMatch(SequencesCollectionResponseWithTotalPublicSequenceLiteListMatchRequired, total=False):
    after: str
    limit: int
    name: str


class SequencesPublicSequenceRequired(TypedDict):
    createdAt: str
    dependencies: list
    id: str
    name: str
    settings: dict
    steps: list
    updatedAt: str
    userId: str


class SequencesPublicSequence(SequencesPublicSequenceRequired, total=False):
    folderId: str


class SequencesPublicSequenceLoadMatch(TypedDict):
    sequence_id: str
    user_id: str


class SequencesPublicSequenceEnrollment(TypedDict):
    enrolledAt: str
    enrolledBy: str
    enrolledByEmail: str
    id: str
    sequenceId: str
    sequenceName: str
    toEmail: str
    updatedAt: str


class SequencesPublicSequenceEnrollmentLoadMatch(TypedDict):
    contact_id: str


class SequencesPublicSequenceEnrollmentLiteRequired(TypedDict):
    contactId: str
    enrolledAt: str
    id: str
    senderEmail: str
    sequenceId: str
    toEmail: str
    updatedAt: str


class SequencesPublicSequenceEnrollmentLite(SequencesPublicSequenceEnrollmentLiteRequired, total=False):
    senderAliasAddress: str


class SequencesPublicSequenceEnrollmentLiteCreateDataRequired(TypedDict):
    user_id: str
    contactId: str
    enrolledAt: str
    id: str
    senderEmail: str
    sequenceId: str
    toEmail: str
    updatedAt: str


class SequencesPublicSequenceEnrollmentLiteCreateData(SequencesPublicSequenceEnrollmentLiteCreateDataRequired, total=False):
    senderAliasAddress: str


class SequencesPublicSequencePerformance(TypedDict):
    companyMetrics: dict
    sequenceId: str
    statusByStep: list
    steps: list
    summary: dict
    timeline: list


class SequencesPublicSequencePerformanceListMatchRequired(TypedDict):
    sequence_id: str


class SequencesPublicSequencePerformanceListMatch(SequencesPublicSequencePerformanceListMatchRequired, total=False):
    timeline_interval: str
