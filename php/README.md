# HubspotAutomation PHP SDK



The PHP SDK for the HubspotAutomation API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->ActionsV4CollectionResponsePublicActionDefinitionForward()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/hubspot-automation-sdk/releases](https://github.com/voxgig-sdk/hubspot-automation-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'hubspotautomation_sdk.php';

$client = new HubspotAutomationSDK([
    "apikey" => getenv("HUBSPOT_AUTOMATION_APIKEY"),
]);
```

### 3. Load an actionsv4collectionresponsepublicactiondefinitionforward

ActionsV4CollectionResponsePublicActionDefinitionForward is nested under app, so provide the `app_id`.

```php
try {
    // load() returns the ENTITY — call data_get() for the ActionsV4CollectionResponsePublicActionDefinitionForward record (throws on error).
    $actionsv4collectionresponsepublicactiondefinitionforward = $client->ActionsV4CollectionResponsePublicActionDefinitionForward()->load(["app_id" => 1]);
    print_r($actionsv4collectionresponsepublicactiondefinitionforward->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $sequencescollectionresponsewithtotalpublicsequencelites = $client->SequencesCollectionResponseWithTotalPublicSequenceLite()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = HubspotAutomationSDK::test([
    "entity" => ["actionsv4publicactionfunction" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$actionsv4publicactionfunction = $client->ActionsV4PublicActionFunction()->load(["id" => "test01", "app_id" => 1, "definition_id" => "example"]);
print_r($actionsv4publicactionfunction->data_get());
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new HubspotAutomationSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
HUBSPOT_AUTOMATION_TEST_LIVE=TRUE
HUBSPOT_AUTOMATION_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### HubspotAutomationSDK

```php
require_once 'hubspotautomation_sdk.php';
$client = new HubspotAutomationSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = HubspotAutomationSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### HubspotAutomationSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `ActionsV4CollectionResponsePublicActionDefinitionForward` | `($data): ActionsV4CollectionResponsePublicActionDefinitionForwardEntity` | Create an ActionsV4CollectionResponsePublicActionDefinitionForward entity instance. |
| `ActionsV4CollectionResponsePublicActionFunctionIdentifierNo` | `($data): ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity` | Create an ActionsV4CollectionResponsePublicActionFunctionIdentifierNo entity instance. |
| `ActionsV4CollectionResponsePublicActionRevisionForward` | `($data): ActionsV4CollectionResponsePublicActionRevisionForwardEntity` | Create an ActionsV4CollectionResponsePublicActionRevisionForward entity instance. |
| `ActionsV4PublicActionDefinition` | `($data): ActionsV4PublicActionDefinitionEntity` | Create an ActionsV4PublicActionDefinition entity instance. |
| `ActionsV4PublicActionDefinitionRequiresObject` | `($data): ActionsV4PublicActionDefinitionRequiresObjectEntity` | Create an ActionsV4PublicActionDefinitionRequiresObject entity instance. |
| `ActionsV4PublicActionFunction` | `($data): ActionsV4PublicActionFunctionEntity` | Create an ActionsV4PublicActionFunction entity instance. |
| `ActionsV4PublicActionFunctionIdentifier` | `($data): ActionsV4PublicActionFunctionIdentifierEntity` | Create an ActionsV4PublicActionFunctionIdentifier entity instance. |
| `ActionsV4PublicActionRevision` | `($data): ActionsV4PublicActionRevisionEntity` | Create an ActionsV4PublicActionRevision entity instance. |
| `AutomationV4ApiFlow` | `($data): AutomationV4ApiFlowEntity` | Create an AutomationV4ApiFlow entity instance. |
| `AutomationV4BatchResponseApiFlow` | `($data): AutomationV4BatchResponseApiFlowEntity` | Create an AutomationV4BatchResponseApiFlow entity instance. |
| `AutomationV4BatchResponseFlowIdWorkflowIdMapping` | `($data): AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity` | Create an AutomationV4BatchResponseFlowIdWorkflowIdMapping entity instance. |
| `AutomationV4CollectionResponseApiFlowEmailCampaign` | `($data): AutomationV4CollectionResponseApiFlowEmailCampaignEntity` | Create an AutomationV4CollectionResponseApiFlowEmailCampaign entity instance. |
| `AutomationV4CollectionResponseApiFlowListingForwardPaging` | `($data): AutomationV4CollectionResponseApiFlowListingForwardPagingEntity` | Create an AutomationV4CollectionResponseApiFlowListingForwardPaging entity instance. |
| `AutomationV4CollectionResponseApiHistogramDataPointNo` | `($data): AutomationV4CollectionResponseApiHistogramDataPointNoEntity` | Create an AutomationV4CollectionResponseApiHistogramDataPointNo entity instance. |
| `Basic` | `($data): BasicEntity` | Create a Basic entity instance. |
| `Callback` | `($data): CallbackEntity` | Create a Callback entity instance. |
| `Definition` | `($data): DefinitionEntity` | Create a Definition entity instance. |
| `EmailTemplatesCollectionResponsePublicFolderForwardPaging` | `($data): EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity` | Create an EmailTemplatesCollectionResponsePublicFolderForwardPaging entity instance. |
| `EmailTemplatesCollectionResponsePublicTemplateForwardPaging` | `($data): EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity` | Create an EmailTemplatesCollectionResponsePublicTemplateForwardPaging entity instance. |
| `EmailTemplatesPublicTemplate` | `($data): EmailTemplatesPublicTemplateEntity` | Create an EmailTemplatesPublicTemplate entity instance. |
| `Function` | `($data): FunctionEntity` | Create a Function entity instance. |
| `Sequence` | `($data): SequenceEntity` | Create a Sequence entity instance. |
| `SequencesCollectionResponseWithTotalPublicSequenceLite` | `($data): SequencesCollectionResponseWithTotalPublicSequenceLiteEntity` | Create a SequencesCollectionResponseWithTotalPublicSequenceLite entity instance. |
| `SequencesPublicSequence` | `($data): SequencesPublicSequenceEntity` | Create a SequencesPublicSequence entity instance. |
| `SequencesPublicSequenceEnrollment` | `($data): SequencesPublicSequenceEnrollmentEntity` | Create a SequencesPublicSequenceEnrollment entity instance. |
| `SequencesPublicSequenceEnrollmentLite` | `($data): SequencesPublicSequenceEnrollmentLiteEntity` | Create a SequencesPublicSequenceEnrollmentLite entity instance. |
| `SequencesPublicSequencePerformance` | `($data): SequencesPublicSequencePerformanceEntity` | Create a SequencesPublicSequencePerformance entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### ActionsV4CollectionResponsePublicActionDefinitionForward

| Field | Description |
| --- | --- |
| `paging` | Paging information for forward-only pagination. |
| `results` | An array of public action definitions, each represented by a PublicActionDefinition object. |

Operations: Load.

API path: `/automation/actions/2026-09/{appId}`

#### ActionsV4CollectionResponsePublicActionFunctionIdentifierNo

| Field | Description |
| --- | --- |
| `functionType` | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | The unique identifier for the function. |

Operations: List.

API path: `/automation/actions/2026-09/{appId}/{definitionId}/functions`

#### ActionsV4CollectionResponsePublicActionRevisionForward

| Field | Description |
| --- | --- |
| `createdAt` | The date and time when the action revision was created. |
| `definition` |  |
| `id` | The unique identifier for the action revision. |
| `revisionId` | The unique identifier for the specific revision of the action. |

Operations: List.

API path: `/automation/actions/2026-09/{appId}/{definitionId}/revisions`

#### ActionsV4PublicActionDefinition

| Field | Description |
| --- | --- |
| `actionUrl` | The URL endpoint where the action is executed. |
| `archivedAt` | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | The unique identifier for the action definition. |
| `inputFieldDependencies` | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | An array of input field definitions required for the action. |
| `labels` | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` |  |
| `objectTypes` | An array of strings representing the types of objects associated with the action. |
| `outputFields` | An array of output field definitions produced by the action. |
| `published` | A boolean indicating whether the action is published and available for use. |
| `revisionId` | The unique identifier for the current revision of the action definition. |

Operations: Create, Load, Update.

API path: `/automation/actions/2026-09/{appId}`

#### ActionsV4PublicActionDefinitionRequiresObject

| Field | Description |
| --- | --- |
| `requiresObject` | Indicates whether a custom action definition requires an object. |

Operations: Load.

API path: `/automation/actions/2026-09/{appId}/{definitionId}/requires-object`

#### ActionsV4PublicActionFunction

| Field | Description |
| --- | --- |
| `functionSource` | The source code or script that defines the function's behavior. |
| `functionType` | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | The unique identifier for the action function. |

Operations: Load.

API path: `/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}`

#### ActionsV4PublicActionFunctionIdentifier

| Field | Description |
| --- | --- |
| `functionType` | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | The unique identifier for the function. |

Operations: Update.

API path: `/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}`

#### ActionsV4PublicActionRevision

| Field | Description |
| --- | --- |
| `actionUrl` | The URL endpoint where the action is executed. |
| `archivedAt` | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | The unique identifier for the action definition. |
| `inputFieldDependencies` | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | An array of input field definitions required for the action. |
| `labels` | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` |  |
| `objectTypes` | An array of strings representing the types of objects associated with the action. |
| `outputFields` | An array of output field definitions produced by the action. |
| `published` | A boolean indicating whether the action is published and available for use. |
| `revisionId` | The unique identifier for the current revision of the action definition. |

Operations: Load.

API path: `/automation/actions/2026-09/{appId}/{definitionId}/revisions/{revisionId}`

#### AutomationV4ApiFlow

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, Load, Update.

API path: `/automation/v4/flows`

#### AutomationV4BatchResponseApiFlow

| Field | Description |
| --- | --- |
| `completedAt` | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` |  |
| `links` | A collection of URLs related to the batch process, empty for this operation. |
| `requestedAt` | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` |  |
| `startedAt` | The date and time when the batch process began, formatted as a date-time string. |
| `status` | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

Operations: Create.

API path: `/automation/v4/flows/batch/read`

#### AutomationV4BatchResponseFlowIdWorkflowIdMapping

| Field | Description |
| --- | --- |
| `completedAt` | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` |  |
| `links` | A collection of URLs related to the batch process. |
| `requestedAt` | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` |  |
| `startedAt` | The date and time when the batch process began, formatted as a date-time string. |
| `status` | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

Operations: Create.

API path: `/automation/v4/workflow-id-mappings/batch/read`

#### AutomationV4CollectionResponseApiFlowEmailCampaign

| Field | Description |
| --- | --- |
| `emailCampaignId` | The unique identifier for the email campaign associated with the automation flow. |
| `emailContentId` | The unique identifier for the email content used in the email campaign. |
| `flowId` | The unique identifier for the automation flow associated with the email campaign. |

Operations: List.

API path: `/automation/v4/flows/email-campaigns`

#### AutomationV4CollectionResponseApiFlowListingForwardPaging

| Field | Description |
| --- | --- |
| `createdAt` | The date and time when the automation flow was created, formatted as a date-time string. |
| `flowType` | Specifies the type of the automation flow (PLATFORM vs. |
| `id` | The unique identifier for the automation flow. |
| `isEnabled` | Indicates whether the automation flow is currently active. |
| `name` | The name assigned to the automation flow. |
| `objectTypeId` | Represents the ID of the object type associated with the automation flow. |
| `revisionId` | The identifier for the current revision of the automation flow. |
| `updatedAt` | The date and time when the automation flow was last updated, formatted as a date-time string. |
| `uuid` | The universally unique identifier for the automation flow. |

Operations: List.

API path: `/automation/v4/flows`

#### AutomationV4CollectionResponseApiHistogramDataPointNo

| Field | Description |
| --- | --- |
| `results` |  |

Operations: Load.

API path: `/automation/v4/flows/performance/{flowId}`

#### Basic

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}`

#### Callback

| Field | Description |
| --- | --- |
| `failureReasonType` | Indicates the reason for the failure of a callback completion. |
| `inputs` | An array of CallbackCompletionBatchRequest objects, each representing a single callback completion request. |
| `outputFields` | Contains the output fields associated with the callback, with each field represented as a key-value pair. |
| `requestContext` | Specifies the context in which the request is made, which can be one of several predefined contexts. |
| `typedOutputs` | Holds the typed outputs related to the callback, structured as an object. |

Operations: Create.

API path: `/automation/actions/callbacks/2026-09/{callbackId}/complete`

#### Definition

| Field | Description |
| --- | --- |
| `id` |  |
| `requiresObject` | Indicates whether a custom action definition requires an associated object. |

Operations: Create, Remove.

API path: `/automation/actions/2026-09/{appId}/{definitionId}/requires-object`

#### EmailTemplatesCollectionResponsePublicFolderForwardPaging

| Field | Description |
| --- | --- |
| `createdAt` | The timestamp indicating when the folder was created, represented as an integer in int64 format. |
| `id` | The unique identifier for the folder, represented as a string. |
| `name` | The name of the folder, represented as a string. |
| `updatedAt` | The timestamp indicating when the folder was last updated, represented as an integer in int64 format. |

Operations: List.

API path: `/automation/email-templates/2026-09/folders`

#### EmailTemplatesCollectionResponsePublicTemplateForwardPaging

| Field | Description |
| --- | --- |
| `body` | The content of the email template, represented as a string. |
| `createdAt` | The timestamp indicating when the email template was created, represented as an integer in int64 format. |
| `folderId` | The identifier of the folder where the email template is stored, represented as a string. |
| `id` | The unique identifier for the email template, represented as a string. |
| `name` | The name of the email template, represented as a string. |
| `ownerId` | The identifier of the owner of the email template, represented as a string. |
| `subject` | The subject line of the email template, represented as a string. |
| `updatedAt` | The timestamp indicating when the email template was last updated, represented as an integer in int64 format. |

Operations: List.

API path: `/automation/email-templates/2026-09`

#### EmailTemplatesPublicTemplate

| Field | Description |
| --- | --- |
| `body` | The content of the email template, represented as a string. |
| `createdAt` | The timestamp indicating when the email template was created, represented as an integer in int64 format. |
| `folderId` | The identifier of the folder where the email template is stored, represented as a string. |
| `id` | The unique identifier for the email template, represented as a string. |
| `name` | The name of the email template, represented as a string. |
| `ownerId` | The identifier of the owner of the email template, represented as a string. |
| `subject` | The subject line of the email template, represented as a string. |
| `updatedAt` | The timestamp indicating when the email template was last updated, represented as an integer in int64 format. |

Operations: Create, Load, Update.

API path: `/automation/email-templates/2026-09`

#### Function

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}`

#### Sequence

| Field | Description |
| --- | --- |
| `createdAt` | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | An array of dependencies between steps in the sequence, each represented by a PublicSequenceStepDependencyResponse object. |
| `dynamic` | A boolean indicating whether the sequence is dynamic. |
| `engagementTriggers` |  |
| `folderId` | The identifier for the folder containing the sequence. |
| `id` | The unique identifier for the sequence. |
| `name` | The name of the sequence. |
| `sequence` |  |
| `settings` |  |
| `steps` | An array of steps included in the sequence, each represented by a PublicSequenceStepResponseV2 object. |
| `updatedAt` | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | The unique identifier of the user who owns the sequence. |
| `userView` |  |

Operations: Create, List, Load, Update.

API path: `/automation/sequences/2026-09/serviceaccounts/sequences`

#### SequencesCollectionResponseWithTotalPublicSequenceLite

| Field | Description |
| --- | --- |
| `createdAt` | The date and time when the sequence was created, in ISO 8601 format. |
| `folderId` | The identifier of the folder containing the sequence, represented as a string. |
| `id` | The unique identifier for the sequence, represented as a string. |
| `name` | The name of the sequence, represented as a string. |
| `updatedAt` | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | The unique identifier of the user associated with the sequence, represented as a string. |

Operations: List.

API path: `/automation/sequences/2026-09`

#### SequencesPublicSequence

| Field | Description |
| --- | --- |
| `createdAt` | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | An array of dependencies between sequence steps, each represented by a PublicSequenceStepDependencyResponse object. |
| `folderId` | The unique identifier for the folder containing the sequence. |
| `id` | The unique identifier for the sequence. |
| `name` | The name of the sequence. |
| `settings` |  |
| `steps` | An array of steps included in the sequence, each represented by a PublicSequenceStepResponse object. |
| `updatedAt` | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | The unique identifier of the user who owns the sequence. |

Operations: Load.

API path: `/automation/sequences/2026-09/{sequenceId}`

#### SequencesPublicSequenceEnrollment

| Field | Description |
| --- | --- |
| `enrolledAt` | The date and time when the contact was enrolled in the sequence, in ISO 8601 format. |
| `enrolledBy` | The unique identifier of the user who enrolled the contact in the sequence. |
| `enrolledByEmail` | The email address of the user who enrolled the contact in the sequence. |
| `id` | The unique identifier for the sequence enrollment. |
| `sequenceId` | The unique identifier of the sequence in which the contact is enrolled. |
| `sequenceName` | The name of the sequence in which the contact is enrolled. |
| `toEmail` | The email address of the contact enrolled in the sequence. |
| `updatedAt` | The date and time when the sequence enrollment was last updated, in ISO 8601 format. |

Operations: Load.

API path: `/automation/sequences/2026-09/enrollments/contact/{contactId}`

#### SequencesPublicSequenceEnrollmentLite

| Field | Description |
| --- | --- |
| `contactId` | The unique identifier of the contact to be enrolled in the sequence. |
| `enrolledAt` | The date and time when the contact was enrolled in the sequence, in ISO 8601 format. |
| `id` | The unique identifier for the sequence enrollment. |
| `senderAliasAddress` | An optional alias email address that can be used as the sender's address. |
| `senderEmail` | The email address of the sender responsible for the sequence enrollment. |
| `sequenceId` | The unique identifier of the sequence in which the contact is to be enrolled. |
| `toEmail` | The email address of the contact who is enrolled in the sequence. |
| `updatedAt` | The date and time when the sequence enrollment was last updated, in ISO 8601 format. |

Operations: Create.

API path: `/automation/sequences/2026-09/enrollments`

#### SequencesPublicSequencePerformance

| Field | Description |
| --- | --- |
| `companyMetrics` |  |
| `sequenceId` | The unique identifier for the sequence, represented as a string. |
| `statusByStep` | An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order. |
| `steps` | An array of objects, each representing the performance metrics for individual steps within the sequence. |
| `summary` |  |
| `timeline` | An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked. |

Operations: List.

API path: `/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}/performance`



## Entities


### ActionsV4CollectionResponsePublicActionDefinitionForward

Create an instance: `$actions_v4_collection_response_public_action_definition_forward = $client->ActionsV4CollectionResponsePublicActionDefinitionForward();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paging` | `array` | Paging information for forward-only pagination. |
| `results` | `array` | An array of public action definitions, each represented by a PublicActionDefinition object. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ActionsV4CollectionResponsePublicActionDefinitionForward record (throws on error).
$actions_v4_collection_response_public_action_definition_forward = $client->ActionsV4CollectionResponsePublicActionDefinitionForward()->load(["app_id" => 1]);
```


### ActionsV4CollectionResponsePublicActionFunctionIdentifierNo

Create an instance: `$actions_v4_collection_response_public_action_function_identifier_no = $client->ActionsV4CollectionResponsePublicActionFunctionIdentifierNo();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `functionType` | `string` | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | The unique identifier for the function. |

#### Example: List

```php
// list() returns an array of ActionsV4CollectionResponsePublicActionFunctionIdentifierNo records (throws on error).
$actions_v4_collection_response_public_action_function_identifier_nos = $client->ActionsV4CollectionResponsePublicActionFunctionIdentifierNo()->list();
```


### ActionsV4CollectionResponsePublicActionRevisionForward

Create an instance: `$actions_v4_collection_response_public_action_revision_forward = $client->ActionsV4CollectionResponsePublicActionRevisionForward();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | The date and time when the action revision was created. |
| `definition` | `array` |  |
| `id` | `string` | The unique identifier for the action revision. |
| `revisionId` | `string` | The unique identifier for the specific revision of the action. |

#### Example: List

```php
// list() returns an array of ActionsV4CollectionResponsePublicActionRevisionForward records (throws on error).
$actions_v4_collection_response_public_action_revision_forwards = $client->ActionsV4CollectionResponsePublicActionRevisionForward()->list();
```


### ActionsV4PublicActionDefinition

Create an instance: `$actions_v4_public_action_definition = $client->ActionsV4PublicActionDefinition();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actionUrl` | `string` | The URL endpoint where the action is executed. |
| `archivedAt` | `int` | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | `array` | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | `array` | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | `string` | The unique identifier for the action definition. |
| `inputFieldDependencies` | `array` | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | `array` | An array of input field definitions required for the action. |
| `labels` | `array` | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` | `array` |  |
| `objectTypes` | `array` | An array of strings representing the types of objects associated with the action. |
| `outputFields` | `array` | An array of output field definitions produced by the action. |
| `published` | `bool` | A boolean indicating whether the action is published and available for use. |
| `revisionId` | `string` | The unique identifier for the current revision of the action definition. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ActionsV4PublicActionDefinition record (throws on error).
$actions_v4_public_action_definition = $client->ActionsV4PublicActionDefinition()->load(["app_id" => 1, "definition_id" => "definition_id"]);
```

#### Example: Create

```php
$actions_v4_public_action_definition = $client->ActionsV4PublicActionDefinition()->create([
    "app_id" => null, // int
    "actionUrl" => null, // string
    "functions" => null, // array
    "id" => null, // string
    "inputFields" => null, // array
    "labels" => null, // array
    "objectRequestOptions" => null, // array
    "objectTypes" => null, // array
    "published" => null, // bool
    "revisionId" => null, // string
]);
```


### ActionsV4PublicActionDefinitionRequiresObject

Create an instance: `$actions_v4_public_action_definition_requires_object = $client->ActionsV4PublicActionDefinitionRequiresObject();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `requiresObject` | `bool` | Indicates whether a custom action definition requires an object. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ActionsV4PublicActionDefinitionRequiresObject record (throws on error).
$actions_v4_public_action_definition_requires_object = $client->ActionsV4PublicActionDefinitionRequiresObject()->load(["app_id" => 1, "definition_id" => "definition_id"]);
```


### ActionsV4PublicActionFunction

Create an instance: `$actions_v4_public_action_function = $client->ActionsV4PublicActionFunction();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `functionSource` | `string` | The source code or script that defines the function's behavior. |
| `functionType` | `string` | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | The unique identifier for the action function. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ActionsV4PublicActionFunction record (throws on error).
$actions_v4_public_action_function = $client->ActionsV4PublicActionFunction()->load(["id" => "actions_v4_public_action_function_id", "app_id" => 1, "definition_id" => "definition_id"]);
```


### ActionsV4PublicActionFunctionIdentifier

Create an instance: `$actions_v4_public_action_function_identifier = $client->ActionsV4PublicActionFunctionIdentifier();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `functionType` | `string` | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | The unique identifier for the function. |


### ActionsV4PublicActionRevision

Create an instance: `$actions_v4_public_action_revision = $client->ActionsV4PublicActionRevision();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actionUrl` | `string` | The URL endpoint where the action is executed. |
| `archivedAt` | `int` | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | `array` | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | `array` | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | `string` | The unique identifier for the action definition. |
| `inputFieldDependencies` | `array` | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | `array` | An array of input field definitions required for the action. |
| `labels` | `array` | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` | `array` |  |
| `objectTypes` | `array` | An array of strings representing the types of objects associated with the action. |
| `outputFields` | `array` | An array of output field definitions produced by the action. |
| `published` | `bool` | A boolean indicating whether the action is published and available for use. |
| `revisionId` | `string` | The unique identifier for the current revision of the action definition. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ActionsV4PublicActionRevision record (throws on error).
$actions_v4_public_action_revision = $client->ActionsV4PublicActionRevision()->load(["id" => "actions_v4_public_action_revision_id", "app_id" => 1, "definition_id" => "definition_id"]);
```


### AutomationV4ApiFlow

Create an instance: `$automation_v4_api_flow = $client->AutomationV4ApiFlow();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AutomationV4ApiFlow record (throws on error).
$automation_v4_api_flow = $client->AutomationV4ApiFlow()->load(["id" => "automation_v4_api_flow_id"]);
```

#### Example: Create

```php
$automation_v4_api_flow = $client->AutomationV4ApiFlow()->create([
]);
```


### AutomationV4BatchResponseApiFlow

Create an instance: `$automation_v4_batch_response_api_flow = $client->AutomationV4BatchResponseApiFlow();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` | `array` |  |
| `links` | `array` | A collection of URLs related to the batch process, empty for this operation. |
| `requestedAt` | `string` | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` | `array` |  |
| `startedAt` | `string` | The date and time when the batch process began, formatted as a date-time string. |
| `status` | `string` | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

#### Example: Create

```php
$automation_v4_batch_response_api_flow = $client->AutomationV4BatchResponseApiFlow()->create([
    "completedAt" => null, // string
    "inputs" => null, // array
    "results" => null, // array
    "startedAt" => null, // string
    "status" => null, // string
]);
```


### AutomationV4BatchResponseFlowIdWorkflowIdMapping

Create an instance: `$automation_v4_batch_response_flow_id_workflow_id_mapping = $client->AutomationV4BatchResponseFlowIdWorkflowIdMapping();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` | `array` |  |
| `links` | `array` | A collection of URLs related to the batch process. |
| `requestedAt` | `string` | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` | `array` |  |
| `startedAt` | `string` | The date and time when the batch process began, formatted as a date-time string. |
| `status` | `string` | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

#### Example: Create

```php
$automation_v4_batch_response_flow_id_workflow_id_mapping = $client->AutomationV4BatchResponseFlowIdWorkflowIdMapping()->create([
    "completedAt" => null, // string
    "inputs" => null, // array
    "results" => null, // array
    "startedAt" => null, // string
    "status" => null, // string
]);
```


### AutomationV4CollectionResponseApiFlowEmailCampaign

Create an instance: `$automation_v4_collection_response_api_flow_email_campaign = $client->AutomationV4CollectionResponseApiFlowEmailCampaign();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emailCampaignId` | `string` | The unique identifier for the email campaign associated with the automation flow. |
| `emailContentId` | `string` | The unique identifier for the email content used in the email campaign. |
| `flowId` | `string` | The unique identifier for the automation flow associated with the email campaign. |

#### Example: List

```php
// list() returns an array of AutomationV4CollectionResponseApiFlowEmailCampaign records (throws on error).
$automation_v4_collection_response_api_flow_email_campaigns = $client->AutomationV4CollectionResponseApiFlowEmailCampaign()->list();
```


### AutomationV4CollectionResponseApiFlowListingForwardPaging

Create an instance: `$automation_v4_collection_response_api_flow_listing_forward_paging = $client->AutomationV4CollectionResponseApiFlowListingForwardPaging();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | The date and time when the automation flow was created, formatted as a date-time string. |
| `flowType` | `string` | Specifies the type of the automation flow (PLATFORM vs. |
| `id` | `string` | The unique identifier for the automation flow. |
| `isEnabled` | `bool` | Indicates whether the automation flow is currently active. |
| `name` | `string` | The name assigned to the automation flow. |
| `objectTypeId` | `string` | Represents the ID of the object type associated with the automation flow. |
| `revisionId` | `string` | The identifier for the current revision of the automation flow. |
| `updatedAt` | `string` | The date and time when the automation flow was last updated, formatted as a date-time string. |
| `uuid` | `string` | The universally unique identifier for the automation flow. |

#### Example: List

```php
// list() returns an array of AutomationV4CollectionResponseApiFlowListingForwardPaging records (throws on error).
$automation_v4_collection_response_api_flow_listing_forward_pagings = $client->AutomationV4CollectionResponseApiFlowListingForwardPaging()->list();
```


### AutomationV4CollectionResponseApiHistogramDataPointNo

Create an instance: `$automation_v4_collection_response_api_histogram_data_point_no = $client->AutomationV4CollectionResponseApiHistogramDataPointNo();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `results` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AutomationV4CollectionResponseApiHistogramDataPointNo record (throws on error).
$automation_v4_collection_response_api_histogram_data_point_no = $client->AutomationV4CollectionResponseApiHistogramDataPointNo()->load(["flow_id" => "flow_id"]);
```


### Basic

Create an instance: `$basic = $client->Basic();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Callback

Create an instance: `$callback = $client->Callback();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failureReasonType` | `string` | Indicates the reason for the failure of a callback completion. |
| `inputs` | `array` | An array of CallbackCompletionBatchRequest objects, each representing a single callback completion request. |
| `outputFields` | `array` | Contains the output fields associated with the callback, with each field represented as a key-value pair. |
| `requestContext` | `mixed` | Specifies the context in which the request is made, which can be one of several predefined contexts. |
| `typedOutputs` | `array` | Holds the typed outputs related to the callback, structured as an object. |

#### Example: Create

```php
$callback = $client->Callback()->create([
    "inputs" => null, // array
    "outputFields" => null, // array
    "typedOutputs" => null, // array
]);
```


### Definition

Create an instance: `$definition = $client->Definition();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `requiresObject` | `bool` | Indicates whether a custom action definition requires an associated object. |

#### Example: Create

```php
$definition = $client->Definition()->create([
    "app_id" => null, // int
    "definition_id" => null, // string
    "requiresObject" => null, // bool
]);
```


### EmailTemplatesCollectionResponsePublicFolderForwardPaging

Create an instance: `$email_templates_collection_response_public_folder_forward_paging = $client->EmailTemplatesCollectionResponsePublicFolderForwardPaging();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `int` | The timestamp indicating when the folder was created, represented as an integer in int64 format. |
| `id` | `string` | The unique identifier for the folder, represented as a string. |
| `name` | `string` | The name of the folder, represented as a string. |
| `updatedAt` | `int` | The timestamp indicating when the folder was last updated, represented as an integer in int64 format. |

#### Example: List

```php
// list() returns an array of EmailTemplatesCollectionResponsePublicFolderForwardPaging records (throws on error).
$email_templates_collection_response_public_folder_forward_pagings = $client->EmailTemplatesCollectionResponsePublicFolderForwardPaging()->list();
```


### EmailTemplatesCollectionResponsePublicTemplateForwardPaging

Create an instance: `$email_templates_collection_response_public_template_forward_paging = $client->EmailTemplatesCollectionResponsePublicTemplateForwardPaging();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` | The content of the email template, represented as a string. |
| `createdAt` | `int` | The timestamp indicating when the email template was created, represented as an integer in int64 format. |
| `folderId` | `string` | The identifier of the folder where the email template is stored, represented as a string. |
| `id` | `string` | The unique identifier for the email template, represented as a string. |
| `name` | `string` | The name of the email template, represented as a string. |
| `ownerId` | `string` | The identifier of the owner of the email template, represented as a string. |
| `subject` | `string` | The subject line of the email template, represented as a string. |
| `updatedAt` | `int` | The timestamp indicating when the email template was last updated, represented as an integer in int64 format. |

#### Example: List

```php
// list() returns an array of EmailTemplatesCollectionResponsePublicTemplateForwardPaging records (throws on error).
$email_templates_collection_response_public_template_forward_pagings = $client->EmailTemplatesCollectionResponsePublicTemplateForwardPaging()->list();
```


### EmailTemplatesPublicTemplate

Create an instance: `$email_templates_public_template = $client->EmailTemplatesPublicTemplate();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` | The content of the email template, represented as a string. |
| `createdAt` | `int` | The timestamp indicating when the email template was created, represented as an integer in int64 format. |
| `folderId` | `string` | The identifier of the folder where the email template is stored, represented as a string. |
| `id` | `string` | The unique identifier for the email template, represented as a string. |
| `name` | `string` | The name of the email template, represented as a string. |
| `ownerId` | `string` | The identifier of the owner of the email template, represented as a string. |
| `subject` | `string` | The subject line of the email template, represented as a string. |
| `updatedAt` | `int` | The timestamp indicating when the email template was last updated, represented as an integer in int64 format. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the EmailTemplatesPublicTemplate record (throws on error).
$email_templates_public_template = $client->EmailTemplatesPublicTemplate()->load(["template_id" => 1]);
```

#### Example: Create

```php
$email_templates_public_template = $client->EmailTemplatesPublicTemplate()->create([
    "id" => null, // string
]);
```


### Function

Create an instance: `$function = $client->Function();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Sequence

Create an instance: `$sequence = $client->Sequence();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | `array` | An array of dependencies between steps in the sequence, each represented by a PublicSequenceStepDependencyResponse object. |
| `dynamic` | `bool` | A boolean indicating whether the sequence is dynamic. |
| `engagementTriggers` | `array` |  |
| `folderId` | `string` | The identifier for the folder containing the sequence. |
| `id` | `string` | The unique identifier for the sequence. |
| `name` | `string` | The name of the sequence. |
| `sequence` | `array` |  |
| `settings` | `array` |  |
| `steps` | `array` | An array of steps included in the sequence, each represented by a PublicSequenceStepResponseV2 object. |
| `updatedAt` | `string` | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `string` | The unique identifier of the user who owns the sequence. |
| `userView` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Sequence record (throws on error).
$sequence = $client->Sequence()->load(["id" => "sequence_id"]);
```

#### Example: List

```php
// list() returns an array of Sequence records (throws on error).
$sequences = $client->Sequence()->list();
```

#### Example: Create

```php
$sequence = $client->Sequence()->create([
    "createdAt" => null, // string
    "dependencies" => null, // array
    "dynamic" => null, // bool
    "id" => null, // string
    "name" => null, // string
    "sequence" => null, // array
    "settings" => null, // array
    "steps" => null, // array
    "updatedAt" => null, // string
    "userId" => null, // string
]);
```


### SequencesCollectionResponseWithTotalPublicSequenceLite

Create an instance: `$sequences_collection_response_with_total_public_sequence_lite = $client->SequencesCollectionResponseWithTotalPublicSequenceLite();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | The date and time when the sequence was created, in ISO 8601 format. |
| `folderId` | `string` | The identifier of the folder containing the sequence, represented as a string. |
| `id` | `string` | The unique identifier for the sequence, represented as a string. |
| `name` | `string` | The name of the sequence, represented as a string. |
| `updatedAt` | `string` | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `string` | The unique identifier of the user associated with the sequence, represented as a string. |

#### Example: List

```php
// list() returns an array of SequencesCollectionResponseWithTotalPublicSequenceLite records (throws on error).
$sequences_collection_response_with_total_public_sequence_lites = $client->SequencesCollectionResponseWithTotalPublicSequenceLite()->list();
```


### SequencesPublicSequence

Create an instance: `$sequences_public_sequence = $client->SequencesPublicSequence();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | `array` | An array of dependencies between sequence steps, each represented by a PublicSequenceStepDependencyResponse object. |
| `folderId` | `string` | The unique identifier for the folder containing the sequence. |
| `id` | `string` | The unique identifier for the sequence. |
| `name` | `string` | The name of the sequence. |
| `settings` | `array` |  |
| `steps` | `array` | An array of steps included in the sequence, each represented by a PublicSequenceStepResponse object. |
| `updatedAt` | `string` | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `string` | The unique identifier of the user who owns the sequence. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SequencesPublicSequence record (throws on error).
$sequences_public_sequence = $client->SequencesPublicSequence()->load(["sequence_id" => "sequence_id", "user_id" => "user_id"]);
```


### SequencesPublicSequenceEnrollment

Create an instance: `$sequences_public_sequence_enrollment = $client->SequencesPublicSequenceEnrollment();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enrolledAt` | `string` | The date and time when the contact was enrolled in the sequence, in ISO 8601 format. |
| `enrolledBy` | `string` | The unique identifier of the user who enrolled the contact in the sequence. |
| `enrolledByEmail` | `string` | The email address of the user who enrolled the contact in the sequence. |
| `id` | `string` | The unique identifier for the sequence enrollment. |
| `sequenceId` | `string` | The unique identifier of the sequence in which the contact is enrolled. |
| `sequenceName` | `string` | The name of the sequence in which the contact is enrolled. |
| `toEmail` | `string` | The email address of the contact enrolled in the sequence. |
| `updatedAt` | `string` | The date and time when the sequence enrollment was last updated, in ISO 8601 format. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SequencesPublicSequenceEnrollment record (throws on error).
$sequences_public_sequence_enrollment = $client->SequencesPublicSequenceEnrollment()->load(["contact_id" => "contact_id"]);
```


### SequencesPublicSequenceEnrollmentLite

Create an instance: `$sequences_public_sequence_enrollment_lite = $client->SequencesPublicSequenceEnrollmentLite();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contactId` | `string` | The unique identifier of the contact to be enrolled in the sequence. |
| `enrolledAt` | `string` | The date and time when the contact was enrolled in the sequence, in ISO 8601 format. |
| `id` | `string` | The unique identifier for the sequence enrollment. |
| `senderAliasAddress` | `string` | An optional alias email address that can be used as the sender's address. |
| `senderEmail` | `string` | The email address of the sender responsible for the sequence enrollment. |
| `sequenceId` | `string` | The unique identifier of the sequence in which the contact is to be enrolled. |
| `toEmail` | `string` | The email address of the contact who is enrolled in the sequence. |
| `updatedAt` | `string` | The date and time when the sequence enrollment was last updated, in ISO 8601 format. |

#### Example: Create

```php
$sequences_public_sequence_enrollment_lite = $client->SequencesPublicSequenceEnrollmentLite()->create([
    "user_id" => null, // string
    "contactId" => null, // string
    "enrolledAt" => null, // string
    "id" => null, // string
    "senderEmail" => null, // string
    "sequenceId" => null, // string
    "toEmail" => null, // string
    "updatedAt" => null, // string
]);
```


### SequencesPublicSequencePerformance

Create an instance: `$sequences_public_sequence_performance = $client->SequencesPublicSequencePerformance();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `companyMetrics` | `array` |  |
| `sequenceId` | `string` | The unique identifier for the sequence, represented as a string. |
| `statusByStep` | `array` | An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order. |
| `steps` | `array` | An array of objects, each representing the performance metrics for individual steps within the sequence. |
| `summary` | `array` |  |
| `timeline` | `array` | An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked. |

#### Example: List

```php
// list() returns an array of SequencesPublicSequencePerformance records (throws on error).
$sequences_public_sequence_performances = $client->SequencesPublicSequencePerformance()->list();
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

7 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `automation_v4_batch_response_api_flow` | `results` | 20 | 55 levels |
| `actions_v4_collection_response_public_action_definition_forward` | `results` | 8 | 12 levels |
| `actions_v4_collection_response_public_action_revision_forward` | `definition` | 8 | 11 levels |
| `actions_v4_public_action_definition` | `outputFields` | 8 | 9 levels |
| `actions_v4_public_action_revision` | `outputFields` | 8 | 9 levels |
| `callback` | `inputs` | 5 | 3 levels |
| `callback` | `requestContext` | 5 | 0 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── hubspotautomation_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`hubspotautomation_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$sequencescollectionresponsewithtotalpublicsequencelite = $client->SequencesCollectionResponseWithTotalPublicSequenceLite();
$sequencescollectionresponsewithtotalpublicsequencelite->list();

// $sequencescollectionresponsewithtotalpublicsequencelite->data_get() now returns the sequencescollectionresponsewithtotalpublicsequencelite data from the last list
// $sequencescollectionresponsewithtotalpublicsequencelite->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
