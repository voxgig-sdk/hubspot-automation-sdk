export interface ActionsV4CollectionResponsePublicActionDefinitionForward {
    paging?: Record<string, any>;
    results: any[];
}
export interface ActionsV4CollectionResponsePublicActionDefinitionForwardLoadMatch {
    app_id: number;
    after?: string;
    archived?: boolean;
    limit?: number;
}
export interface ActionsV4CollectionResponsePublicActionFunctionIdentifierNo {
    functionType: string;
    id?: string;
}
export interface ActionsV4CollectionResponsePublicActionFunctionIdentifierNoListMatch {
    app_id: number;
    definition_id: string;
}
export interface ActionsV4CollectionResponsePublicActionRevisionForward {
    createdAt: string;
    definition: Record<string, any>;
    id: string;
    revisionId: string;
}
export interface ActionsV4CollectionResponsePublicActionRevisionForwardListMatch {
    app_id: number;
    definition_id: string;
    after?: string;
    limit?: number;
}
export interface ActionsV4PublicActionDefinition {
    actionUrl: string;
    archivedAt?: number;
    executionRules?: any[];
    functions: any[];
    id: string;
    inputFieldDependencies?: any[];
    inputFields: any[];
    labels: Record<string, any>;
    objectRequestOptions: Record<string, any>;
    objectTypes: any[];
    outputFields?: any[];
    published: boolean;
    revisionId: string;
}
export interface ActionsV4PublicActionDefinitionLoadMatch {
    app_id: number;
    definition_id: string;
    archived?: boolean;
}
export interface ActionsV4PublicActionDefinitionCreateData {
    app_id: number;
    actionUrl: string;
    archivedAt?: number;
    executionRules?: any[];
    functions: any[];
    id: string;
    inputFieldDependencies?: any[];
    inputFields: any[];
    labels: Record<string, any>;
    objectRequestOptions: Record<string, any>;
    objectTypes: any[];
    outputFields?: any[];
    published: boolean;
    revisionId: string;
}
export interface ActionsV4PublicActionDefinitionUpdateData {
    app_id: number;
    definition_id: string;
    actionUrl?: string;
    archivedAt?: number;
    executionRules?: any[];
    functions?: any[];
    id?: string;
    inputFieldDependencies?: any[];
    inputFields?: any[];
    labels?: Record<string, any>;
    objectRequestOptions?: Record<string, any>;
    objectTypes?: any[];
    outputFields?: any[];
    published?: boolean;
    revisionId?: string;
}
export interface ActionsV4PublicActionDefinitionRequiresObject {
    requiresObject: boolean;
}
export interface ActionsV4PublicActionDefinitionRequiresObjectLoadMatch {
    app_id: number;
    definition_id: string;
}
export interface ActionsV4PublicActionFunction {
    functionSource: string;
    functionType: string;
    id?: string;
}
export interface ActionsV4PublicActionFunctionLoadMatch {
    app_id: number;
    definition_id: string;
    function_id?: string;
    function_type?: string;
    id?: string;
}
export interface ActionsV4PublicActionFunctionIdentifier {
    functionType: string;
    id?: string;
}
export interface ActionsV4PublicActionFunctionIdentifierUpdateData {
    app_id: number;
    definition_id: string;
    function_id?: string;
    function_type: string;
    functionType?: string;
    id?: string;
}
export interface ActionsV4PublicActionRevision {
    actionUrl: string;
    archivedAt?: number;
    executionRules?: any[];
    functions: any[];
    id: string;
    inputFieldDependencies?: any[];
    inputFields: any[];
    labels: Record<string, any>;
    objectRequestOptions: Record<string, any>;
    objectTypes: any[];
    outputFields?: any[];
    published: boolean;
    revisionId: string;
}
export interface ActionsV4PublicActionRevisionLoadMatch {
    app_id: number;
    definition_id: string;
    id: string;
}
export interface AutomationV4ApiFlow {
    id?: string;
}
export interface AutomationV4ApiFlowLoadMatch {
    id: string;
}
export interface AutomationV4ApiFlowCreateData {
    id?: string;
}
export interface AutomationV4ApiFlowUpdateData {
    id: string;
}
export interface AutomationV4BatchResponseApiFlow {
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface AutomationV4BatchResponseApiFlowCreateData {
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface AutomationV4BatchResponseFlowIdWorkflowIdMapping {
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface AutomationV4BatchResponseFlowIdWorkflowIdMappingCreateData {
    completedAt: string;
    inputs: any[];
    links?: Record<string, any>;
    requestedAt?: string;
    results: any[];
    startedAt: string;
    status: string;
}
export interface AutomationV4CollectionResponseApiFlowEmailCampaign {
    emailCampaignId: string;
    emailContentId: string;
    flowId: string;
}
export interface AutomationV4CollectionResponseApiFlowEmailCampaignListMatch {
    after?: string;
    before?: string;
    flow_id?: any[];
    limit?: number;
}
export interface AutomationV4CollectionResponseApiFlowListingForwardPaging {
    createdAt: string;
    flowType: string;
    id: string;
    isEnabled: boolean;
    name?: string;
    objectTypeId: string;
    revisionId: string;
    updatedAt: string;
    uuid?: string;
}
export interface AutomationV4CollectionResponseApiFlowListingForwardPagingListMatch {
    after?: string;
    limit?: number;
}
export interface AutomationV4CollectionResponseApiHistogramDataPointNo {
    results: any[];
}
export interface AutomationV4CollectionResponseApiHistogramDataPointNoLoadMatch {
    flow_id: string;
    bucket_type?: string;
    end?: number;
    first_day?: string;
    start?: number;
}
export interface Basic {
}
export interface BasicRemoveMatch {
    flow_id: number;
}
export interface Callback {
    failureReasonType?: string;
    inputs: any[];
    outputFields: Record<string, any>;
    requestContext?: any;
    typedOutputs: Record<string, any>;
}
export interface CallbackCreateData {
    failureReasonType?: string;
    inputs: any[];
    outputFields: Record<string, any>;
    requestContext?: any;
    typedOutputs: Record<string, any>;
}
export interface Definition {
    id?: string;
    requiresObject: boolean;
}
export interface DefinitionCreateData {
    app_id: number;
    definition_id: string;
    id?: string;
    requiresObject: boolean;
}
export interface DefinitionRemoveMatch {
    app_id: number;
    definition_id: string;
}
export interface EmailTemplatesCollectionResponsePublicFolderForwardPaging {
    createdAt?: number;
    id: string;
    name?: string;
    updatedAt?: number;
}
export interface EmailTemplatesCollectionResponsePublicFolderForwardPagingListMatch {
    after?: string;
    limit?: number;
}
export interface EmailTemplatesCollectionResponsePublicTemplateForwardPaging {
    body?: string;
    createdAt?: number;
    folderId?: string;
    id: string;
    name?: string;
    ownerId?: string;
    subject?: string;
    updatedAt?: number;
}
export interface EmailTemplatesCollectionResponsePublicTemplateForwardPagingListMatch {
    after?: string;
    limit?: number;
}
export interface EmailTemplatesPublicTemplate {
    body?: string;
    createdAt?: number;
    folderId?: string;
    id: string;
    name?: string;
    ownerId?: string;
    subject?: string;
    updatedAt?: number;
}
export interface EmailTemplatesPublicTemplateLoadMatch {
    template_id: number;
}
export interface EmailTemplatesPublicTemplateCreateData {
    body?: string;
    createdAt?: number;
    folderId?: string;
    id: string;
    name?: string;
    ownerId?: string;
    subject?: string;
    updatedAt?: number;
}
export interface EmailTemplatesPublicTemplateUpdateData {
    template_id: number;
    body?: string;
    createdAt?: number;
    folderId?: string;
    id?: string;
    name?: string;
    ownerId?: string;
    subject?: string;
    updatedAt?: number;
}
export interface FunctionType {
    id?: string;
}
export interface FunctionRemoveMatch {
    app_id: number;
    definition_id: string;
    function_id?: string;
    function_type?: string;
    id?: string;
}
export interface Sequence {
    createdAt: string;
    dependencies: any[];
    dynamic: boolean;
    engagementTriggers?: Record<string, any>;
    folderId?: string;
    id: string;
    name: string;
    sequence: Record<string, any>;
    settings: Record<string, any>;
    steps: any[];
    updatedAt: string;
    userId: string;
    userView?: Record<string, any>;
}
export interface SequenceLoadMatch {
    id: string;
}
export interface SequenceListMatch {
    after?: string;
    limit?: number;
    name?: string;
}
export interface SequenceCreateData {
    createdAt: string;
    dependencies: any[];
    dynamic: boolean;
    engagementTriggers?: Record<string, any>;
    folderId?: string;
    id: string;
    name: string;
    sequence: Record<string, any>;
    settings: Record<string, any>;
    steps: any[];
    updatedAt: string;
    userId: string;
    userView?: Record<string, any>;
}
export interface SequenceUpdateData {
    id: string;
    createdAt?: string;
    dependencies?: any[];
    dynamic?: boolean;
    engagementTriggers?: Record<string, any>;
    folderId?: string;
    name?: string;
    sequence?: Record<string, any>;
    settings?: Record<string, any>;
    steps?: any[];
    updatedAt?: string;
    userId?: string;
    userView?: Record<string, any>;
}
export interface SequencesCollectionResponseWithTotalPublicSequenceLite {
    createdAt: string;
    folderId?: string;
    id: string;
    name: string;
    updatedAt: string;
    userId: string;
}
export interface SequencesCollectionResponseWithTotalPublicSequenceLiteListMatch {
    after?: string;
    limit?: number;
    name?: string;
    user_id: string;
}
export interface SequencesPublicSequence {
    createdAt: string;
    dependencies: any[];
    folderId?: string;
    id: string;
    name: string;
    settings: Record<string, any>;
    steps: any[];
    updatedAt: string;
    userId: string;
}
export interface SequencesPublicSequenceLoadMatch {
    sequence_id: string;
    user_id: string;
}
export interface SequencesPublicSequenceEnrollment {
    enrolledAt: string;
    enrolledBy: string;
    enrolledByEmail: string;
    id: string;
    sequenceId: string;
    sequenceName: string;
    toEmail: string;
    updatedAt: string;
}
export interface SequencesPublicSequenceEnrollmentLoadMatch {
    contact_id: string;
}
export interface SequencesPublicSequenceEnrollmentLite {
    contactId: string;
    enrolledAt: string;
    id: string;
    senderAliasAddress?: string;
    senderEmail: string;
    sequenceId: string;
    toEmail: string;
    updatedAt: string;
}
export interface SequencesPublicSequenceEnrollmentLiteCreateData {
    user_id: string;
    contactId: string;
    enrolledAt: string;
    id: string;
    senderAliasAddress?: string;
    senderEmail: string;
    sequenceId: string;
    toEmail: string;
    updatedAt: string;
}
export interface SequencesPublicSequencePerformance {
    companyMetrics: Record<string, any>;
    sequenceId: string;
    statusByStep: any[];
    steps: any[];
    summary: Record<string, any>;
    timeline: any[];
}
export interface SequencesPublicSequencePerformanceListMatch {
    sequence_id: string;
    timeline_interval?: string;
}
