<?php
declare(strict_types=1);

// Typed models for the HubspotAutomation SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** ActionsV4CollectionResponsePublicActionDefinitionForward entity data model. */
class ActionsV4CollectionResponsePublicActionDefinitionForward
{
    public ?array $paging = null;
    public array $results;
}

/** Request payload for ActionsV4CollectionResponsePublicActionDefinitionForward#load. */
class ActionsV4CollectionResponsePublicActionDefinitionForwardLoadMatch
{
    public int $app_id;
    public ?string $after = null;
    public ?bool $archived = null;
    public ?int $limit = null;
}

/** ActionsV4CollectionResponsePublicActionFunctionIdentifierNo entity data model. */
class ActionsV4CollectionResponsePublicActionFunctionIdentifierNo
{
    public string $functionType;
    public ?string $id = null;
}

/** Request payload for ActionsV4CollectionResponsePublicActionFunctionIdentifierNo#list. */
class ActionsV4CollectionResponsePublicActionFunctionIdentifierNoListMatch
{
    public int $app_id;
    public string $definition_id;
}

/** ActionsV4CollectionResponsePublicActionRevisionForward entity data model. */
class ActionsV4CollectionResponsePublicActionRevisionForward
{
    public string $createdAt;
    public array $definition;
    public string $id;
    public string $revisionId;
}

/** Request payload for ActionsV4CollectionResponsePublicActionRevisionForward#list. */
class ActionsV4CollectionResponsePublicActionRevisionForwardListMatch
{
    public int $app_id;
    public string $definition_id;
    public ?string $after = null;
    public ?int $limit = null;
}

/** ActionsV4PublicActionDefinition entity data model. */
class ActionsV4PublicActionDefinition
{
    public string $actionUrl;
    public ?int $archivedAt = null;
    public ?array $executionRules = null;
    public array $functions;
    public string $id;
    public ?array $inputFieldDependencies = null;
    public array $inputFields;
    public array $labels;
    public array $objectRequestOptions;
    public array $objectTypes;
    public ?array $outputFields = null;
    public bool $published;
    public string $revisionId;
}

/** Request payload for ActionsV4PublicActionDefinition#load. */
class ActionsV4PublicActionDefinitionLoadMatch
{
    public int $app_id;
    public string $definition_id;
    public ?bool $archived = null;
}

/** Request payload for ActionsV4PublicActionDefinition#create. */
class ActionsV4PublicActionDefinitionCreateData
{
    public int $app_id;
    public string $actionUrl;
    public ?int $archivedAt = null;
    public ?array $executionRules = null;
    public array $functions;
    public string $id;
    public ?array $inputFieldDependencies = null;
    public array $inputFields;
    public array $labels;
    public array $objectRequestOptions;
    public array $objectTypes;
    public ?array $outputFields = null;
    public bool $published;
    public string $revisionId;
}

/** Request payload for ActionsV4PublicActionDefinition#update. */
class ActionsV4PublicActionDefinitionUpdateData
{
    public int $app_id;
    public string $definition_id;
    public ?string $actionUrl = null;
    public ?int $archivedAt = null;
    public ?array $executionRules = null;
    public ?array $functions = null;
    public ?string $id = null;
    public ?array $inputFieldDependencies = null;
    public ?array $inputFields = null;
    public ?array $labels = null;
    public ?array $objectRequestOptions = null;
    public ?array $objectTypes = null;
    public ?array $outputFields = null;
    public ?bool $published = null;
    public ?string $revisionId = null;
}

/** ActionsV4PublicActionDefinitionRequiresObject entity data model. */
class ActionsV4PublicActionDefinitionRequiresObject
{
    public bool $requiresObject;
}

/** Request payload for ActionsV4PublicActionDefinitionRequiresObject#load. */
class ActionsV4PublicActionDefinitionRequiresObjectLoadMatch
{
    public int $app_id;
    public string $definition_id;
}

/** ActionsV4PublicActionFunction entity data model. */
class ActionsV4PublicActionFunction
{
    public string $functionSource;
    public string $functionType;
    public ?string $id = null;
}

/** Request payload for ActionsV4PublicActionFunction#load. */
class ActionsV4PublicActionFunctionLoadMatch
{
    public int $app_id;
    public string $definition_id;
    public ?string $function_id = null;
    public ?string $function_type = null;
    public ?string $id = null;
}

/** ActionsV4PublicActionFunctionIdentifier entity data model. */
class ActionsV4PublicActionFunctionIdentifier
{
    public string $functionType;
    public ?string $id = null;
}

/** Request payload for ActionsV4PublicActionFunctionIdentifier#update. */
class ActionsV4PublicActionFunctionIdentifierUpdateData
{
    public int $app_id;
    public string $definition_id;
    public ?string $function_id = null;
    public string $function_type;
    public ?string $functionType = null;
    public ?string $id = null;
}

/** ActionsV4PublicActionRevision entity data model. */
class ActionsV4PublicActionRevision
{
    public string $actionUrl;
    public ?int $archivedAt = null;
    public ?array $executionRules = null;
    public array $functions;
    public string $id;
    public ?array $inputFieldDependencies = null;
    public array $inputFields;
    public array $labels;
    public array $objectRequestOptions;
    public array $objectTypes;
    public ?array $outputFields = null;
    public bool $published;
    public string $revisionId;
}

/** Request payload for ActionsV4PublicActionRevision#load. */
class ActionsV4PublicActionRevisionLoadMatch
{
    public int $app_id;
    public string $definition_id;
    public string $id;
}

/** AutomationV4ApiFlow entity data model. */
class AutomationV4ApiFlow
{
    public ?string $id = null;
}

/** Request payload for AutomationV4ApiFlow#load. */
class AutomationV4ApiFlowLoadMatch
{
    public string $id;
}

/** Request payload for AutomationV4ApiFlow#create. */
class AutomationV4ApiFlowCreateData
{
    public ?string $id = null;
}

/** Request payload for AutomationV4ApiFlow#update. */
class AutomationV4ApiFlowUpdateData
{
    public string $id;
}

/** AutomationV4BatchResponseApiFlow entity data model. */
class AutomationV4BatchResponseApiFlow
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for AutomationV4BatchResponseApiFlow#create. */
class AutomationV4BatchResponseApiFlowCreateData
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** AutomationV4BatchResponseFlowIdWorkflowIdMapping entity data model. */
class AutomationV4BatchResponseFlowIdWorkflowIdMapping
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** Request payload for AutomationV4BatchResponseFlowIdWorkflowIdMapping#create. */
class AutomationV4BatchResponseFlowIdWorkflowIdMappingCreateData
{
    public string $completedAt;
    public array $inputs;
    public ?array $links = null;
    public ?string $requestedAt = null;
    public array $results;
    public string $startedAt;
    public string $status;
}

/** AutomationV4CollectionResponseApiFlowEmailCampaign entity data model. */
class AutomationV4CollectionResponseApiFlowEmailCampaign
{
    public string $emailCampaignId;
    public string $emailContentId;
    public string $flowId;
}

/** Request payload for AutomationV4CollectionResponseApiFlowEmailCampaign#list. */
class AutomationV4CollectionResponseApiFlowEmailCampaignListMatch
{
    public ?string $after = null;
    public ?string $before = null;
    public ?array $flow_id = null;
    public ?int $limit = null;
}

/** AutomationV4CollectionResponseApiFlowListingForwardPaging entity data model. */
class AutomationV4CollectionResponseApiFlowListingForwardPaging
{
    public string $createdAt;
    public string $flowType;
    public string $id;
    public bool $isEnabled;
    public ?string $name = null;
    public string $objectTypeId;
    public string $revisionId;
    public string $updatedAt;
    public ?string $uuid = null;
}

/** Request payload for AutomationV4CollectionResponseApiFlowListingForwardPaging#list. */
class AutomationV4CollectionResponseApiFlowListingForwardPagingListMatch
{
    public ?string $after = null;
    public ?int $limit = null;
}

/** AutomationV4CollectionResponseApiHistogramDataPointNo entity data model. */
class AutomationV4CollectionResponseApiHistogramDataPointNo
{
    public array $results;
}

/** Request payload for AutomationV4CollectionResponseApiHistogramDataPointNo#load. */
class AutomationV4CollectionResponseApiHistogramDataPointNoLoadMatch
{
    public string $flow_id;
    public ?string $bucket_type = null;
    public ?int $end = null;
    public ?string $first_day = null;
    public ?int $start = null;
}

/** Basic entity data model. */
class Basic
{
}

/** Request payload for Basic#remove. */
class BasicRemoveMatch
{
    public int $flow_id;
}

/** Callback entity data model. */
class Callback
{
    public ?string $failureReasonType = null;
    public array $inputs;
    public array $outputFields;
    public mixed $requestContext = null;
    public array $typedOutputs;
}

/** Request payload for Callback#create. */
class CallbackCreateData
{
    public ?string $failureReasonType = null;
    public array $inputs;
    public array $outputFields;
    public mixed $requestContext = null;
    public array $typedOutputs;
}

/** Definition entity data model. */
class Definition
{
    public ?string $id = null;
    public bool $requiresObject;
}

/** Request payload for Definition#create. */
class DefinitionCreateData
{
    public int $app_id;
    public string $definition_id;
    public ?string $id = null;
    public bool $requiresObject;
}

/** Request payload for Definition#remove. */
class DefinitionRemoveMatch
{
    public int $app_id;
    public string $definition_id;
}

/** EmailTemplatesCollectionResponsePublicFolderForwardPaging entity data model. */
class EmailTemplatesCollectionResponsePublicFolderForwardPaging
{
    public ?int $createdAt = null;
    public string $id;
    public ?string $name = null;
    public ?int $updatedAt = null;
}

/** Request payload for EmailTemplatesCollectionResponsePublicFolderForwardPaging#list. */
class EmailTemplatesCollectionResponsePublicFolderForwardPagingListMatch
{
    public ?string $after = null;
    public ?int $limit = null;
}

/** EmailTemplatesCollectionResponsePublicTemplateForwardPaging entity data model. */
class EmailTemplatesCollectionResponsePublicTemplateForwardPaging
{
    public ?string $body = null;
    public ?int $createdAt = null;
    public ?string $folderId = null;
    public string $id;
    public ?string $name = null;
    public ?string $ownerId = null;
    public ?string $subject = null;
    public ?int $updatedAt = null;
}

/** Request payload for EmailTemplatesCollectionResponsePublicTemplateForwardPaging#list. */
class EmailTemplatesCollectionResponsePublicTemplateForwardPagingListMatch
{
    public ?string $after = null;
    public ?int $limit = null;
}

/** EmailTemplatesPublicTemplate entity data model. */
class EmailTemplatesPublicTemplate
{
    public ?string $body = null;
    public ?int $createdAt = null;
    public ?string $folderId = null;
    public string $id;
    public ?string $name = null;
    public ?string $ownerId = null;
    public ?string $subject = null;
    public ?int $updatedAt = null;
}

/** Request payload for EmailTemplatesPublicTemplate#load. */
class EmailTemplatesPublicTemplateLoadMatch
{
    public int $template_id;
}

/** Request payload for EmailTemplatesPublicTemplate#create. */
class EmailTemplatesPublicTemplateCreateData
{
    public ?string $body = null;
    public ?int $createdAt = null;
    public ?string $folderId = null;
    public string $id;
    public ?string $name = null;
    public ?string $ownerId = null;
    public ?string $subject = null;
    public ?int $updatedAt = null;
}

/** Request payload for EmailTemplatesPublicTemplate#update. */
class EmailTemplatesPublicTemplateUpdateData
{
    public int $template_id;
    public ?string $body = null;
    public ?int $createdAt = null;
    public ?string $folderId = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $ownerId = null;
    public ?string $subject = null;
    public ?int $updatedAt = null;
}

/** Function entity data model. */
class FunctionType
{
    public ?string $id = null;
}

/** Request payload for Function#remove. */
class FunctionRemoveMatch
{
    public int $app_id;
    public string $definition_id;
    public ?string $function_id = null;
    public ?string $function_type = null;
    public ?string $id = null;
}

/** Sequence entity data model. */
class Sequence
{
    public string $createdAt;
    public array $dependencies;
    public bool $dynamic;
    public ?array $engagementTriggers = null;
    public ?string $folderId = null;
    public string $id;
    public string $name;
    public array $sequence;
    public array $settings;
    public array $steps;
    public string $updatedAt;
    public string $userId;
    public ?array $userView = null;
}

/** Request payload for Sequence#load. */
class SequenceLoadMatch
{
    public string $id;
}

/** Request payload for Sequence#list. */
class SequenceListMatch
{
    public ?string $after = null;
    public ?int $limit = null;
    public ?string $name = null;
}

/** Request payload for Sequence#create. */
class SequenceCreateData
{
    public string $createdAt;
    public array $dependencies;
    public bool $dynamic;
    public ?array $engagementTriggers = null;
    public ?string $folderId = null;
    public string $id;
    public string $name;
    public array $sequence;
    public array $settings;
    public array $steps;
    public string $updatedAt;
    public string $userId;
    public ?array $userView = null;
}

/** Request payload for Sequence#update. */
class SequenceUpdateData
{
    public string $id;
    public ?string $createdAt = null;
    public ?array $dependencies = null;
    public ?bool $dynamic = null;
    public ?array $engagementTriggers = null;
    public ?string $folderId = null;
    public ?string $name = null;
    public ?array $sequence = null;
    public ?array $settings = null;
    public ?array $steps = null;
    public ?string $updatedAt = null;
    public ?string $userId = null;
    public ?array $userView = null;
}

/** SequencesCollectionResponseWithTotalPublicSequenceLite entity data model. */
class SequencesCollectionResponseWithTotalPublicSequenceLite
{
    public string $createdAt;
    public ?string $folderId = null;
    public string $id;
    public string $name;
    public string $updatedAt;
    public string $userId;
}

/** Request payload for SequencesCollectionResponseWithTotalPublicSequenceLite#list. */
class SequencesCollectionResponseWithTotalPublicSequenceLiteListMatch
{
    public ?string $after = null;
    public ?int $limit = null;
    public ?string $name = null;
    public string $user_id;
}

/** SequencesPublicSequence entity data model. */
class SequencesPublicSequence
{
    public string $createdAt;
    public array $dependencies;
    public ?string $folderId = null;
    public string $id;
    public string $name;
    public array $settings;
    public array $steps;
    public string $updatedAt;
    public string $userId;
}

/** Request payload for SequencesPublicSequence#load. */
class SequencesPublicSequenceLoadMatch
{
    public string $sequence_id;
    public string $user_id;
}

/** SequencesPublicSequenceEnrollment entity data model. */
class SequencesPublicSequenceEnrollment
{
    public string $enrolledAt;
    public string $enrolledBy;
    public string $enrolledByEmail;
    public string $id;
    public string $sequenceId;
    public string $sequenceName;
    public string $toEmail;
    public string $updatedAt;
}

/** Request payload for SequencesPublicSequenceEnrollment#load. */
class SequencesPublicSequenceEnrollmentLoadMatch
{
    public string $contact_id;
}

/** SequencesPublicSequenceEnrollmentLite entity data model. */
class SequencesPublicSequenceEnrollmentLite
{
    public string $contactId;
    public string $enrolledAt;
    public string $id;
    public ?string $senderAliasAddress = null;
    public string $senderEmail;
    public string $sequenceId;
    public string $toEmail;
    public string $updatedAt;
}

/** Request payload for SequencesPublicSequenceEnrollmentLite#create. */
class SequencesPublicSequenceEnrollmentLiteCreateData
{
    public string $user_id;
    public string $contactId;
    public string $enrolledAt;
    public string $id;
    public ?string $senderAliasAddress = null;
    public string $senderEmail;
    public string $sequenceId;
    public string $toEmail;
    public string $updatedAt;
}

/** SequencesPublicSequencePerformance entity data model. */
class SequencesPublicSequencePerformance
{
    public array $companyMetrics;
    public string $sequenceId;
    public array $statusByStep;
    public array $steps;
    public array $summary;
    public array $timeline;
}

/** Request payload for SequencesPublicSequencePerformance#list. */
class SequencesPublicSequencePerformanceListMatch
{
    public string $sequence_id;
    public ?string $timeline_interval = null;
}

