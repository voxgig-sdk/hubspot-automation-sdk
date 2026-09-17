# HubspotAutomation PHP SDK Reference

Complete API reference for the HubspotAutomation PHP SDK.


## HubspotAutomationSDK

### Constructor

```php
require_once __DIR__ . '/hubspotautomation_sdk.php';

$client = new HubspotAutomationSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotAutomationSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = HubspotAutomationSDK::test();
```


### Instance Methods

#### `ActionsV4CollectionResponsePublicActionDefinitionForward($data = null)`

Create a new `ActionsV4CollectionResponsePublicActionDefinitionForwardEntity` instance. Pass `null` for no initial data.

#### `ActionsV4CollectionResponsePublicActionFunctionIdentifierNo($data = null)`

Create a new `ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity` instance. Pass `null` for no initial data.

#### `ActionsV4CollectionResponsePublicActionRevisionForward($data = null)`

Create a new `ActionsV4CollectionResponsePublicActionRevisionForwardEntity` instance. Pass `null` for no initial data.

#### `ActionsV4PublicActionDefinition($data = null)`

Create a new `ActionsV4PublicActionDefinitionEntity` instance. Pass `null` for no initial data.

#### `ActionsV4PublicActionDefinitionRequiresObject($data = null)`

Create a new `ActionsV4PublicActionDefinitionRequiresObjectEntity` instance. Pass `null` for no initial data.

#### `ActionsV4PublicActionFunction($data = null)`

Create a new `ActionsV4PublicActionFunctionEntity` instance. Pass `null` for no initial data.

#### `ActionsV4PublicActionFunctionIdentifier($data = null)`

Create a new `ActionsV4PublicActionFunctionIdentifierEntity` instance. Pass `null` for no initial data.

#### `ActionsV4PublicActionRevision($data = null)`

Create a new `ActionsV4PublicActionRevisionEntity` instance. Pass `null` for no initial data.

#### `AutomationV4ApiFlow($data = null)`

Create a new `AutomationV4ApiFlowEntity` instance. Pass `null` for no initial data.

#### `AutomationV4BatchResponseApiFlow($data = null)`

Create a new `AutomationV4BatchResponseApiFlowEntity` instance. Pass `null` for no initial data.

#### `AutomationV4BatchResponseFlowIdWorkflowIdMapping($data = null)`

Create a new `AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity` instance. Pass `null` for no initial data.

#### `AutomationV4CollectionResponseApiFlowEmailCampaign($data = null)`

Create a new `AutomationV4CollectionResponseApiFlowEmailCampaignEntity` instance. Pass `null` for no initial data.

#### `AutomationV4CollectionResponseApiFlowListingForwardPaging($data = null)`

Create a new `AutomationV4CollectionResponseApiFlowListingForwardPagingEntity` instance. Pass `null` for no initial data.

#### `AutomationV4CollectionResponseApiHistogramDataPointNo($data = null)`

Create a new `AutomationV4CollectionResponseApiHistogramDataPointNoEntity` instance. Pass `null` for no initial data.

#### `Basic($data = null)`

Create a new `BasicEntity` instance. Pass `null` for no initial data.

#### `Callback($data = null)`

Create a new `CallbackEntity` instance. Pass `null` for no initial data.

#### `Definition($data = null)`

Create a new `DefinitionEntity` instance. Pass `null` for no initial data.

#### `EmailTemplatesCollectionResponsePublicFolderForwardPaging($data = null)`

Create a new `EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity` instance. Pass `null` for no initial data.

#### `EmailTemplatesCollectionResponsePublicTemplateForwardPaging($data = null)`

Create a new `EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity` instance. Pass `null` for no initial data.

#### `EmailTemplatesPublicTemplate($data = null)`

Create a new `EmailTemplatesPublicTemplateEntity` instance. Pass `null` for no initial data.

#### `Function($data = null)`

Create a new `FunctionEntity` instance. Pass `null` for no initial data.

#### `Sequence($data = null)`

Create a new `SequenceEntity` instance. Pass `null` for no initial data.

#### `SequencesCollectionResponseWithTotalPublicSequenceLite($data = null)`

Create a new `SequencesCollectionResponseWithTotalPublicSequenceLiteEntity` instance. Pass `null` for no initial data.

#### `SequencesPublicSequence($data = null)`

Create a new `SequencesPublicSequenceEntity` instance. Pass `null` for no initial data.

#### `SequencesPublicSequenceEnrollment($data = null)`

Create a new `SequencesPublicSequenceEnrollmentEntity` instance. Pass `null` for no initial data.

#### `SequencesPublicSequenceEnrollmentLite($data = null)`

Create a new `SequencesPublicSequenceEnrollmentLiteEntity` instance. Pass `null` for no initial data.

#### `SequencesPublicSequencePerformance($data = null)`

Create a new `SequencesPublicSequencePerformanceEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): HubspotAutomationUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ActionsV4CollectionResponsePublicActionDefinitionForwardEntity

```php
$actions_v4_collection_response_public_action_definition_forward = $client->ActionsV4CollectionResponsePublicActionDefinitionForward();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paging` | `array` | No | Paging information for forward-only pagination. |
| `results` | `array` | Yes | An array of public action definitions, each represented by a PublicActionDefinition object. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsV4CollectionResponsePublicActionDefinitionForward()->load(["app_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsV4CollectionResponsePublicActionDefinitionForwardEntity`

Create a new `ActionsV4CollectionResponsePublicActionDefinitionForwardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity

```php
$actions_v4_collection_response_public_action_function_identifier_no = $client->ActionsV4CollectionResponsePublicActionFunctionIdentifierNo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `functionType` | `string` | Yes | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | No | The unique identifier for the function. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ActionsV4CollectionResponsePublicActionFunctionIdentifierNo()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity`

Create a new `ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsV4CollectionResponsePublicActionRevisionForwardEntity

```php
$actions_v4_collection_response_public_action_revision_forward = $client->ActionsV4CollectionResponsePublicActionRevisionForward();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date and time when the action revision was created. |
| `definition` | `array` | Yes |  |
| `id` | `string` | Yes | The unique identifier for the action revision. |
| `revisionId` | `string` | Yes | The unique identifier for the specific revision of the action. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ActionsV4CollectionResponsePublicActionRevisionForward()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsV4CollectionResponsePublicActionRevisionForwardEntity`

Create a new `ActionsV4CollectionResponsePublicActionRevisionForwardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsV4PublicActionDefinitionEntity

```php
$actions_v4_public_action_definition = $client->ActionsV4PublicActionDefinition();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionUrl` | `string` | Yes | The URL endpoint where the action is executed. |
| `archivedAt` | `int` | No | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | `array` | No | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | `array` | Yes | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | `string` | Yes | The unique identifier for the action definition. |
| `inputFieldDependencies` | `array` | No | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | `array` | Yes | An array of input field definitions required for the action. |
| `labels` | `array` | Yes | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` | `array` | Yes |  |
| `objectTypes` | `array` | Yes | An array of strings representing the types of objects associated with the action. |
| `outputFields` | `array` | No | An array of output field definitions produced by the action. |
| `published` | `bool` | Yes | A boolean indicating whether the action is published and available for use. |
| `revisionId` | `string` | Yes | The unique identifier for the current revision of the action definition. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `actionUrl` | - | - | Yes |
| `archivedAt` | - | - | - |
| `executionRules` | - | - | - |
| `functions` | - | - | - |
| `id` | - | - | - |
| `inputFieldDependencies` | - | - | - |
| `inputFields` | - | - | Yes |
| `labels` | - | - | Yes |
| `objectRequestOptions` | - | - | - |
| `objectTypes` | - | - | Yes |
| `outputFields` | - | - | - |
| `published` | - | - | Yes |
| `revisionId` | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ActionsV4PublicActionDefinition()->create([
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsV4PublicActionDefinition()->load(["app_id" => 1, "definition_id" => "definition_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ActionsV4PublicActionDefinition()->update([
  "app_id" => 1,
  "definition_id" => "definition_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsV4PublicActionDefinitionEntity`

Create a new `ActionsV4PublicActionDefinitionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsV4PublicActionDefinitionRequiresObjectEntity

```php
$actions_v4_public_action_definition_requires_object = $client->ActionsV4PublicActionDefinitionRequiresObject();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `requiresObject` | `bool` | Yes | Indicates whether a custom action definition requires an object. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsV4PublicActionDefinitionRequiresObject()->load(["app_id" => 1, "definition_id" => "definition_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsV4PublicActionDefinitionRequiresObjectEntity`

Create a new `ActionsV4PublicActionDefinitionRequiresObjectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsV4PublicActionFunctionEntity

```php
$actions_v4_public_action_function = $client->ActionsV4PublicActionFunction();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `functionSource` | `string` | Yes | The source code or script that defines the function's behavior. |
| `functionType` | `string` | Yes | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | No | The unique identifier for the action function. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsV4PublicActionFunction()->load(["id" => "actions_v4_public_action_function_id", "app_id" => 1, "definition_id" => "definition_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsV4PublicActionFunctionEntity`

Create a new `ActionsV4PublicActionFunctionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsV4PublicActionFunctionIdentifierEntity

```php
$actions_v4_public_action_function_identifier = $client->ActionsV4PublicActionFunctionIdentifier();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `functionType` | `string` | Yes | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | No | The unique identifier for the function. |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ActionsV4PublicActionFunctionIdentifier()->update([
  "app_id" => 1,
  "definition_id" => "definition_id",
  "function_type" => "function_type",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsV4PublicActionFunctionIdentifierEntity`

Create a new `ActionsV4PublicActionFunctionIdentifierEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionsV4PublicActionRevisionEntity

```php
$actions_v4_public_action_revision = $client->ActionsV4PublicActionRevision();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionUrl` | `string` | Yes | The URL endpoint where the action is executed. |
| `archivedAt` | `int` | No | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | `array` | No | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | `array` | Yes | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | `string` | Yes | The unique identifier for the action definition. |
| `inputFieldDependencies` | `array` | No | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | `array` | Yes | An array of input field definitions required for the action. |
| `labels` | `array` | Yes | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` | `array` | Yes |  |
| `objectTypes` | `array` | Yes | An array of strings representing the types of objects associated with the action. |
| `outputFields` | `array` | No | An array of output field definitions produced by the action. |
| `published` | `bool` | Yes | A boolean indicating whether the action is published and available for use. |
| `revisionId` | `string` | Yes | The unique identifier for the current revision of the action definition. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionsV4PublicActionRevision()->load(["id" => "actions_v4_public_action_revision_id", "app_id" => 1, "definition_id" => "definition_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionsV4PublicActionRevisionEntity`

Create a new `ActionsV4PublicActionRevisionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AutomationV4ApiFlowEntity

```php
$automation_v4_api_flow = $client->AutomationV4ApiFlow();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AutomationV4ApiFlow()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AutomationV4ApiFlow()->load(["id" => "automation_v4_api_flow_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AutomationV4ApiFlow()->update([
  "id" => "automation_v4_api_flow_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AutomationV4ApiFlowEntity`

Create a new `AutomationV4ApiFlowEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AutomationV4BatchResponseApiFlowEntity

```php
$automation_v4_batch_response_api_flow = $client->AutomationV4BatchResponseApiFlow();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` | `array` | Yes |  |
| `links` | `array` | No | A collection of URLs related to the batch process, empty for this operation. |
| `requestedAt` | `string` | No | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` | `array` | Yes |  |
| `startedAt` | `string` | Yes | The date and time when the batch process began, formatted as a date-time string. |
| `status` | `string` | Yes | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AutomationV4BatchResponseApiFlow()->create([
  "completedAt" => null, // string
  "inputs" => null, // array
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AutomationV4BatchResponseApiFlowEntity`

Create a new `AutomationV4BatchResponseApiFlowEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity

```php
$automation_v4_batch_response_flow_id_workflow_id_mapping = $client->AutomationV4BatchResponseFlowIdWorkflowIdMapping();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` | `array` | Yes |  |
| `links` | `array` | No | A collection of URLs related to the batch process. |
| `requestedAt` | `string` | No | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` | `array` | Yes |  |
| `startedAt` | `string` | Yes | The date and time when the batch process began, formatted as a date-time string. |
| `status` | `string` | Yes | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AutomationV4BatchResponseFlowIdWorkflowIdMapping()->create([
  "completedAt" => null, // string
  "inputs" => null, // array
  "results" => null, // array
  "startedAt" => null, // string
  "status" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity`

Create a new `AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AutomationV4CollectionResponseApiFlowEmailCampaignEntity

```php
$automation_v4_collection_response_api_flow_email_campaign = $client->AutomationV4CollectionResponseApiFlowEmailCampaign();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emailCampaignId` | `string` | Yes | The unique identifier for the email campaign associated with the automation flow. |
| `emailContentId` | `string` | Yes | The unique identifier for the email content used in the email campaign. |
| `flowId` | `string` | Yes | The unique identifier for the automation flow associated with the email campaign. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AutomationV4CollectionResponseApiFlowEmailCampaign()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AutomationV4CollectionResponseApiFlowEmailCampaignEntity`

Create a new `AutomationV4CollectionResponseApiFlowEmailCampaignEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AutomationV4CollectionResponseApiFlowListingForwardPagingEntity

```php
$automation_v4_collection_response_api_flow_listing_forward_paging = $client->AutomationV4CollectionResponseApiFlowListingForwardPaging();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date and time when the automation flow was created, formatted as a date-time string. |
| `flowType` | `string` | Yes | Specifies the type of the automation flow (PLATFORM vs. |
| `id` | `string` | Yes | The unique identifier for the automation flow. |
| `isEnabled` | `bool` | Yes | Indicates whether the automation flow is currently active. |
| `name` | `string` | No | The name assigned to the automation flow. |
| `objectTypeId` | `string` | Yes | Represents the ID of the object type associated with the automation flow. |
| `revisionId` | `string` | Yes | The identifier for the current revision of the automation flow. |
| `updatedAt` | `string` | Yes | The date and time when the automation flow was last updated, formatted as a date-time string. |
| `uuid` | `string` | No | The universally unique identifier for the automation flow. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AutomationV4CollectionResponseApiFlowListingForwardPaging()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AutomationV4CollectionResponseApiFlowListingForwardPagingEntity`

Create a new `AutomationV4CollectionResponseApiFlowListingForwardPagingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AutomationV4CollectionResponseApiHistogramDataPointNoEntity

```php
$automation_v4_collection_response_api_histogram_data_point_no = $client->AutomationV4CollectionResponseApiHistogramDataPointNo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `results` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AutomationV4CollectionResponseApiHistogramDataPointNo()->load(["flow_id" => "flow_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AutomationV4CollectionResponseApiHistogramDataPointNoEntity`

Create a new `AutomationV4CollectionResponseApiHistogramDataPointNoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BasicEntity

```php
$basic = $client->Basic();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Basic()->remove(["flow_id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BasicEntity`

Create a new `BasicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CallbackEntity

```php
$callback = $client->Callback();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failureReasonType` | `string` | No | Indicates the reason for the failure of a callback completion. |
| `inputs` | `array` | Yes | An array of CallbackCompletionBatchRequest objects, each representing a single callback completion request. |
| `outputFields` | `array` | Yes | Contains the output fields associated with the callback, with each field represented as a key-value pair. |
| `requestContext` | `mixed` | No | Specifies the context in which the request is made, which can be one of several predefined contexts. |
| `typedOutputs` | `array` | Yes | Holds the typed outputs related to the callback, structured as an object. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Callback()->create([
  "inputs" => null, // array
  "outputFields" => null, // array
  "typedOutputs" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CallbackEntity`

Create a new `CallbackEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DefinitionEntity

```php
$definition = $client->Definition();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `requiresObject` | `bool` | Yes | Indicates whether a custom action definition requires an associated object. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Definition()->create([
  "app_id" => null, // int
  "definition_id" => null, // string
  "requiresObject" => null, // bool
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Definition()->remove(["app_id" => 1, "definition_id" => "definition_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DefinitionEntity`

Create a new `DefinitionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity

```php
$email_templates_collection_response_public_folder_forward_paging = $client->EmailTemplatesCollectionResponsePublicFolderForwardPaging();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `int` | No | The timestamp indicating when the folder was created, represented as an integer in int64 format. |
| `id` | `string` | Yes | The unique identifier for the folder, represented as a string. |
| `name` | `string` | No | The name of the folder, represented as a string. |
| `updatedAt` | `int` | No | The timestamp indicating when the folder was last updated, represented as an integer in int64 format. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EmailTemplatesCollectionResponsePublicFolderForwardPaging()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity`

Create a new `EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity

```php
$email_templates_collection_response_public_template_forward_paging = $client->EmailTemplatesCollectionResponsePublicTemplateForwardPaging();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No | The content of the email template, represented as a string. |
| `createdAt` | `int` | No | The timestamp indicating when the email template was created, represented as an integer in int64 format. |
| `folderId` | `string` | No | The identifier of the folder where the email template is stored, represented as a string. |
| `id` | `string` | Yes | The unique identifier for the email template, represented as a string. |
| `name` | `string` | No | The name of the email template, represented as a string. |
| `ownerId` | `string` | No | The identifier of the owner of the email template, represented as a string. |
| `subject` | `string` | No | The subject line of the email template, represented as a string. |
| `updatedAt` | `int` | No | The timestamp indicating when the email template was last updated, represented as an integer in int64 format. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EmailTemplatesCollectionResponsePublicTemplateForwardPaging()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity`

Create a new `EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmailTemplatesPublicTemplateEntity

```php
$email_templates_public_template = $client->EmailTemplatesPublicTemplate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No | The content of the email template, represented as a string. |
| `createdAt` | `int` | No | The timestamp indicating when the email template was created, represented as an integer in int64 format. |
| `folderId` | `string` | No | The identifier of the folder where the email template is stored, represented as a string. |
| `id` | `string` | Yes | The unique identifier for the email template, represented as a string. |
| `name` | `string` | No | The name of the email template, represented as a string. |
| `ownerId` | `string` | No | The identifier of the owner of the email template, represented as a string. |
| `subject` | `string` | No | The subject line of the email template, represented as a string. |
| `updatedAt` | `int` | No | The timestamp indicating when the email template was last updated, represented as an integer in int64 format. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `body` | - | Yes | Yes |
| `createdAt` | - | - | - |
| `folderId` | - | - | Yes |
| `id` | - | - | - |
| `name` | - | Yes | Yes |
| `ownerId` | - | - | - |
| `subject` | - | - | Yes |
| `updatedAt` | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EmailTemplatesPublicTemplate()->create([
  "id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EmailTemplatesPublicTemplate()->load(["template_id" => 1]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->EmailTemplatesPublicTemplate()->update([
  "template_id" => 1,
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmailTemplatesPublicTemplateEntity`

Create a new `EmailTemplatesPublicTemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FunctionEntity

```php
$function = $client->Function();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Function()->remove(["app_id" => 1, "definition_id" => "definition_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FunctionEntity`

Create a new `FunctionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SequenceEntity

```php
$sequence = $client->Sequence();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | `array` | Yes | An array of dependencies between steps in the sequence, each represented by a PublicSequenceStepDependencyResponse object. |
| `dynamic` | `bool` | Yes | A boolean indicating whether the sequence is dynamic. |
| `engagementTriggers` | `array` | No |  |
| `folderId` | `string` | No | The identifier for the folder containing the sequence. |
| `id` | `string` | Yes | The unique identifier for the sequence. |
| `name` | `string` | Yes | The name of the sequence. |
| `sequence` | `array` | Yes |  |
| `settings` | `array` | Yes |  |
| `steps` | `array` | Yes | An array of steps included in the sequence, each represented by a PublicSequenceStepResponseV2 object. |
| `updatedAt` | `string` | Yes | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `string` | Yes | The unique identifier of the user who owns the sequence. |
| `userView` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Sequence()->create([
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Sequence()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Sequence()->load(["id" => "sequence_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Sequence()->update([
  "id" => "sequence_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SequenceEntity`

Create a new `SequenceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SequencesCollectionResponseWithTotalPublicSequenceLiteEntity

```php
$sequences_collection_response_with_total_public_sequence_lite = $client->SequencesCollectionResponseWithTotalPublicSequenceLite();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date and time when the sequence was created, in ISO 8601 format. |
| `folderId` | `string` | No | The identifier of the folder containing the sequence, represented as a string. |
| `id` | `string` | Yes | The unique identifier for the sequence, represented as a string. |
| `name` | `string` | Yes | The name of the sequence, represented as a string. |
| `updatedAt` | `string` | Yes | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `string` | Yes | The unique identifier of the user associated with the sequence, represented as a string. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SequencesCollectionResponseWithTotalPublicSequenceLite()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SequencesCollectionResponseWithTotalPublicSequenceLiteEntity`

Create a new `SequencesCollectionResponseWithTotalPublicSequenceLiteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SequencesPublicSequenceEntity

```php
$sequences_public_sequence = $client->SequencesPublicSequence();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | `array` | Yes | An array of dependencies between sequence steps, each represented by a PublicSequenceStepDependencyResponse object. |
| `folderId` | `string` | No | The unique identifier for the folder containing the sequence. |
| `id` | `string` | Yes | The unique identifier for the sequence. |
| `name` | `string` | Yes | The name of the sequence. |
| `settings` | `array` | Yes |  |
| `steps` | `array` | Yes | An array of steps included in the sequence, each represented by a PublicSequenceStepResponse object. |
| `updatedAt` | `string` | Yes | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `string` | Yes | The unique identifier of the user who owns the sequence. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SequencesPublicSequence()->load(["sequence_id" => "sequence_id", "user_id" => "user_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SequencesPublicSequenceEntity`

Create a new `SequencesPublicSequenceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SequencesPublicSequenceEnrollmentEntity

```php
$sequences_public_sequence_enrollment = $client->SequencesPublicSequenceEnrollment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enrolledAt` | `string` | Yes | The date and time when the contact was enrolled in the sequence, in ISO 8601 format. |
| `enrolledBy` | `string` | Yes | The unique identifier of the user who enrolled the contact in the sequence. |
| `enrolledByEmail` | `string` | Yes | The email address of the user who enrolled the contact in the sequence. |
| `id` | `string` | Yes | The unique identifier for the sequence enrollment. |
| `sequenceId` | `string` | Yes | The unique identifier of the sequence in which the contact is enrolled. |
| `sequenceName` | `string` | Yes | The name of the sequence in which the contact is enrolled. |
| `toEmail` | `string` | Yes | The email address of the contact enrolled in the sequence. |
| `updatedAt` | `string` | Yes | The date and time when the sequence enrollment was last updated, in ISO 8601 format. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SequencesPublicSequenceEnrollment()->load(["contact_id" => "contact_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SequencesPublicSequenceEnrollmentEntity`

Create a new `SequencesPublicSequenceEnrollmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SequencesPublicSequenceEnrollmentLiteEntity

```php
$sequences_public_sequence_enrollment_lite = $client->SequencesPublicSequenceEnrollmentLite();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contactId` | `string` | Yes | The unique identifier of the contact to be enrolled in the sequence. |
| `enrolledAt` | `string` | Yes | The date and time when the contact was enrolled in the sequence, in ISO 8601 format. |
| `id` | `string` | Yes | The unique identifier for the sequence enrollment. |
| `senderAliasAddress` | `string` | No | An optional alias email address that can be used as the sender's address. |
| `senderEmail` | `string` | Yes | The email address of the sender responsible for the sequence enrollment. |
| `sequenceId` | `string` | Yes | The unique identifier of the sequence in which the contact is to be enrolled. |
| `toEmail` | `string` | Yes | The email address of the contact who is enrolled in the sequence. |
| `updatedAt` | `string` | Yes | The date and time when the sequence enrollment was last updated, in ISO 8601 format. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SequencesPublicSequenceEnrollmentLite()->create([
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

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SequencesPublicSequenceEnrollmentLiteEntity`

Create a new `SequencesPublicSequenceEnrollmentLiteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SequencesPublicSequencePerformanceEntity

```php
$sequences_public_sequence_performance = $client->SequencesPublicSequencePerformance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyMetrics` | `array` | Yes |  |
| `sequenceId` | `string` | Yes | The unique identifier for the sequence, represented as a string. |
| `statusByStep` | `array` | Yes | An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order. |
| `steps` | `array` | Yes | An array of objects, each representing the performance metrics for individual steps within the sequence. |
| `summary` | `array` | Yes |  |
| `timeline` | `array` | Yes | An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SequencesPublicSequencePerformance()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SequencesPublicSequencePerformanceEntity`

Create a new `SequencesPublicSequencePerformanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```php
$client = new HubspotAutomationSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

