# HubspotAutomation Lua SDK Reference

Complete API reference for the HubspotAutomation Lua SDK.


## HubspotAutomationSDK

### Constructor

```lua
local sdk = require("hubspot-automation_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `ActionsV4CollectionResponsePublicActionDefinitionForward(data)`

Create a new `ActionsV4CollectionResponsePublicActionDefinitionForward` entity instance. Pass `nil` for no initial data.

#### `ActionsV4CollectionResponsePublicActionFunctionIdentifierNo(data)`

Create a new `ActionsV4CollectionResponsePublicActionFunctionIdentifierNo` entity instance. Pass `nil` for no initial data.

#### `ActionsV4CollectionResponsePublicActionRevisionForward(data)`

Create a new `ActionsV4CollectionResponsePublicActionRevisionForward` entity instance. Pass `nil` for no initial data.

#### `ActionsV4PublicActionDefinition(data)`

Create a new `ActionsV4PublicActionDefinition` entity instance. Pass `nil` for no initial data.

#### `ActionsV4PublicActionDefinitionRequiresObject(data)`

Create a new `ActionsV4PublicActionDefinitionRequiresObject` entity instance. Pass `nil` for no initial data.

#### `ActionsV4PublicActionFunction(data)`

Create a new `ActionsV4PublicActionFunction` entity instance. Pass `nil` for no initial data.

#### `ActionsV4PublicActionFunctionIdentifier(data)`

Create a new `ActionsV4PublicActionFunctionIdentifier` entity instance. Pass `nil` for no initial data.

#### `ActionsV4PublicActionRevision(data)`

Create a new `ActionsV4PublicActionRevision` entity instance. Pass `nil` for no initial data.

#### `AutomationV4ApiFlow(data)`

Create a new `AutomationV4ApiFlow` entity instance. Pass `nil` for no initial data.

#### `AutomationV4BatchResponseApiFlow(data)`

Create a new `AutomationV4BatchResponseApiFlow` entity instance. Pass `nil` for no initial data.

#### `AutomationV4BatchResponseFlowIdWorkflowIdMapping(data)`

Create a new `AutomationV4BatchResponseFlowIdWorkflowIdMapping` entity instance. Pass `nil` for no initial data.

#### `AutomationV4CollectionResponseApiFlowEmailCampaign(data)`

Create a new `AutomationV4CollectionResponseApiFlowEmailCampaign` entity instance. Pass `nil` for no initial data.

#### `AutomationV4CollectionResponseApiFlowListingForwardPaging(data)`

Create a new `AutomationV4CollectionResponseApiFlowListingForwardPaging` entity instance. Pass `nil` for no initial data.

#### `AutomationV4CollectionResponseApiHistogramDataPointNo(data)`

Create a new `AutomationV4CollectionResponseApiHistogramDataPointNo` entity instance. Pass `nil` for no initial data.

#### `Basic(data)`

Create a new `Basic` entity instance. Pass `nil` for no initial data.

#### `Callback(data)`

Create a new `Callback` entity instance. Pass `nil` for no initial data.

#### `Definition(data)`

Create a new `Definition` entity instance. Pass `nil` for no initial data.

#### `EmailTemplatesCollectionResponsePublicFolderForwardPaging(data)`

Create a new `EmailTemplatesCollectionResponsePublicFolderForwardPaging` entity instance. Pass `nil` for no initial data.

#### `EmailTemplatesCollectionResponsePublicTemplateForwardPaging(data)`

Create a new `EmailTemplatesCollectionResponsePublicTemplateForwardPaging` entity instance. Pass `nil` for no initial data.

#### `EmailTemplatesPublicTemplate(data)`

Create a new `EmailTemplatesPublicTemplate` entity instance. Pass `nil` for no initial data.

#### `Function(data)`

Create a new `Function` entity instance. Pass `nil` for no initial data.

#### `Sequence(data)`

Create a new `Sequence` entity instance. Pass `nil` for no initial data.

#### `SequencesCollectionResponseWithTotalPublicSequenceLite(data)`

Create a new `SequencesCollectionResponseWithTotalPublicSequenceLite` entity instance. Pass `nil` for no initial data.

#### `SequencesPublicSequence(data)`

Create a new `SequencesPublicSequence` entity instance. Pass `nil` for no initial data.

#### `SequencesPublicSequenceEnrollment(data)`

Create a new `SequencesPublicSequenceEnrollment` entity instance. Pass `nil` for no initial data.

#### `SequencesPublicSequenceEnrollmentLite(data)`

Create a new `SequencesPublicSequenceEnrollmentLite` entity instance. Pass `nil` for no initial data.

#### `SequencesPublicSequencePerformance(data)`

Create a new `SequencesPublicSequencePerformance` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ActionsV4CollectionResponsePublicActionDefinitionForwardEntity

```lua
local actions_v4_collection_response_public_action_definition_forward = client:ActionsV4CollectionResponsePublicActionDefinitionForward(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paging` | `table` | No | Paging information for forward-only pagination. |
| `results` | `table` | Yes | An array of public action definitions, each represented by a PublicActionDefinition object. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsV4CollectionResponsePublicActionDefinitionForward():load({ app_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsV4CollectionResponsePublicActionDefinitionForwardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity

```lua
local actions_v4_collection_response_public_action_function_identifier_no = client:ActionsV4CollectionResponsePublicActionFunctionIdentifierNo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `functionType` | `string` | Yes | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | No | The unique identifier for the function. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ActionsV4CollectionResponsePublicActionFunctionIdentifierNo():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsV4CollectionResponsePublicActionRevisionForwardEntity

```lua
local actions_v4_collection_response_public_action_revision_forward = client:ActionsV4CollectionResponsePublicActionRevisionForward(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date and time when the action revision was created. |
| `definition` | `table` | Yes |  |
| `id` | `string` | Yes | The unique identifier for the action revision. |
| `revisionId` | `string` | Yes | The unique identifier for the specific revision of the action. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ActionsV4CollectionResponsePublicActionRevisionForward():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsV4CollectionResponsePublicActionRevisionForwardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsV4PublicActionDefinitionEntity

```lua
local actions_v4_public_action_definition = client:ActionsV4PublicActionDefinition(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionUrl` | `string` | Yes | The URL endpoint where the action is executed. |
| `archivedAt` | `number` | No | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | `table` | No | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | `table` | Yes | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | `string` | Yes | The unique identifier for the action definition. |
| `inputFieldDependencies` | `table` | No | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | `table` | Yes | An array of input field definitions required for the action. |
| `labels` | `table` | Yes | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` | `table` | Yes |  |
| `objectTypes` | `table` | Yes | An array of strings representing the types of objects associated with the action. |
| `outputFields` | `table` | No | An array of output field definitions produced by the action. |
| `published` | `boolean` | Yes | A boolean indicating whether the action is published and available for use. |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ActionsV4PublicActionDefinition():create({
  app_id = --[[ number ]],
  actionUrl = --[[ string ]],
  functions = --[[ table ]],
  id = --[[ string ]],
  inputFields = --[[ table ]],
  labels = --[[ table ]],
  objectRequestOptions = --[[ table ]],
  objectTypes = --[[ table ]],
  published = --[[ boolean ]],
  revisionId = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsV4PublicActionDefinition():load({ app_id = 1, definition_id = "definition_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ActionsV4PublicActionDefinition():update({
  app_id = 1,
  definition_id = "definition_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsV4PublicActionDefinitionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsV4PublicActionDefinitionRequiresObjectEntity

```lua
local actions_v4_public_action_definition_requires_object = client:ActionsV4PublicActionDefinitionRequiresObject(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `requiresObject` | `boolean` | Yes | Indicates whether a custom action definition requires an object. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsV4PublicActionDefinitionRequiresObject():load({ app_id = 1, definition_id = "definition_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsV4PublicActionDefinitionRequiresObjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsV4PublicActionFunctionEntity

```lua
local actions_v4_public_action_function = client:ActionsV4PublicActionFunction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `functionSource` | `string` | Yes | The source code or script that defines the function's behavior. |
| `functionType` | `string` | Yes | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | No | The unique identifier for the action function. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsV4PublicActionFunction():load({ id = "actions_v4_public_action_function_id", app_id = 1, definition_id = "definition_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsV4PublicActionFunctionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsV4PublicActionFunctionIdentifierEntity

```lua
local actions_v4_public_action_function_identifier = client:ActionsV4PublicActionFunctionIdentifier(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `functionType` | `string` | Yes | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | No | The unique identifier for the function. |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ActionsV4PublicActionFunctionIdentifier():update({
  app_id = 1,
  definition_id = "definition_id",
  function_type = "function_type",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsV4PublicActionFunctionIdentifierEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionsV4PublicActionRevisionEntity

```lua
local actions_v4_public_action_revision = client:ActionsV4PublicActionRevision(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionUrl` | `string` | Yes | The URL endpoint where the action is executed. |
| `archivedAt` | `number` | No | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | `table` | No | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | `table` | Yes | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | `string` | Yes | The unique identifier for the action definition. |
| `inputFieldDependencies` | `table` | No | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | `table` | Yes | An array of input field definitions required for the action. |
| `labels` | `table` | Yes | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` | `table` | Yes |  |
| `objectTypes` | `table` | Yes | An array of strings representing the types of objects associated with the action. |
| `outputFields` | `table` | No | An array of output field definitions produced by the action. |
| `published` | `boolean` | Yes | A boolean indicating whether the action is published and available for use. |
| `revisionId` | `string` | Yes | The unique identifier for the current revision of the action definition. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionsV4PublicActionRevision():load({ id = "actions_v4_public_action_revision_id", app_id = 1, definition_id = "definition_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsV4PublicActionRevisionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AutomationV4ApiFlowEntity

```lua
local automation_v4_api_flow = client:AutomationV4ApiFlow(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AutomationV4ApiFlow():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AutomationV4ApiFlow():load({ id = "automation_v4_api_flow_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AutomationV4ApiFlow():update({
  id = "automation_v4_api_flow_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationV4ApiFlowEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AutomationV4BatchResponseApiFlowEntity

```lua
local automation_v4_batch_response_api_flow = client:AutomationV4BatchResponseApiFlow(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` | `table` | Yes |  |
| `links` | `table` | No | A collection of URLs related to the batch process, empty for this operation. |
| `requestedAt` | `string` | No | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` | `table` | Yes |  |
| `startedAt` | `string` | Yes | The date and time when the batch process began, formatted as a date-time string. |
| `status` | `string` | Yes | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AutomationV4BatchResponseApiFlow():create({
  completedAt = --[[ string ]],
  inputs = --[[ table ]],
  results = --[[ table ]],
  startedAt = --[[ string ]],
  status = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationV4BatchResponseApiFlowEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity

```lua
local automation_v4_batch_response_flow_id_workflow_id_mapping = client:AutomationV4BatchResponseFlowIdWorkflowIdMapping(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` | `table` | Yes |  |
| `links` | `table` | No | A collection of URLs related to the batch process. |
| `requestedAt` | `string` | No | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` | `table` | Yes |  |
| `startedAt` | `string` | Yes | The date and time when the batch process began, formatted as a date-time string. |
| `status` | `string` | Yes | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AutomationV4BatchResponseFlowIdWorkflowIdMapping():create({
  completedAt = --[[ string ]],
  inputs = --[[ table ]],
  results = --[[ table ]],
  startedAt = --[[ string ]],
  status = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AutomationV4CollectionResponseApiFlowEmailCampaignEntity

```lua
local automation_v4_collection_response_api_flow_email_campaign = client:AutomationV4CollectionResponseApiFlowEmailCampaign(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emailCampaignId` | `string` | Yes | The unique identifier for the email campaign associated with the automation flow. |
| `emailContentId` | `string` | Yes | The unique identifier for the email content used in the email campaign. |
| `flowId` | `string` | Yes | The unique identifier for the automation flow associated with the email campaign. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AutomationV4CollectionResponseApiFlowEmailCampaign():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationV4CollectionResponseApiFlowEmailCampaignEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AutomationV4CollectionResponseApiFlowListingForwardPagingEntity

```lua
local automation_v4_collection_response_api_flow_listing_forward_paging = client:AutomationV4CollectionResponseApiFlowListingForwardPaging(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date and time when the automation flow was created, formatted as a date-time string. |
| `flowType` | `string` | Yes | Specifies the type of the automation flow (PLATFORM vs. |
| `id` | `string` | Yes | The unique identifier for the automation flow. |
| `isEnabled` | `boolean` | Yes | Indicates whether the automation flow is currently active. |
| `name` | `string` | No | The name assigned to the automation flow. |
| `objectTypeId` | `string` | Yes | Represents the ID of the object type associated with the automation flow. |
| `revisionId` | `string` | Yes | The identifier for the current revision of the automation flow. |
| `updatedAt` | `string` | Yes | The date and time when the automation flow was last updated, formatted as a date-time string. |
| `uuid` | `string` | No | The universally unique identifier for the automation flow. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AutomationV4CollectionResponseApiFlowListingForwardPaging():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationV4CollectionResponseApiFlowListingForwardPagingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AutomationV4CollectionResponseApiHistogramDataPointNoEntity

```lua
local automation_v4_collection_response_api_histogram_data_point_no = client:AutomationV4CollectionResponseApiHistogramDataPointNo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `results` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AutomationV4CollectionResponseApiHistogramDataPointNo():load({ flow_id = "flow_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationV4CollectionResponseApiHistogramDataPointNoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BasicEntity

```lua
local basic = client:Basic(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Basic():remove({ flow_id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BasicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallbackEntity

```lua
local callback = client:Callback(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failureReasonType` | `string` | No | Indicates the reason for the failure of a callback completion. |
| `inputs` | `table` | Yes | An array of CallbackCompletionBatchRequest objects, each representing a single callback completion request. |
| `outputFields` | `table` | Yes | Contains the output fields associated with the callback, with each field represented as a key-value pair. |
| `requestContext` | `any` | No | Specifies the context in which the request is made, which can be one of several predefined contexts. |
| `typedOutputs` | `table` | Yes | Holds the typed outputs related to the callback, structured as an object. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Callback():create({
  inputs = --[[ table ]],
  outputFields = --[[ table ]],
  typedOutputs = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallbackEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DefinitionEntity

```lua
local definition = client:Definition(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `requiresObject` | `boolean` | Yes | Indicates whether a custom action definition requires an associated object. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Definition():create({
  app_id = --[[ number ]],
  definition_id = --[[ string ]],
  requiresObject = --[[ boolean ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Definition():remove({ app_id = 1, definition_id = "definition_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DefinitionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity

```lua
local email_templates_collection_response_public_folder_forward_paging = client:EmailTemplatesCollectionResponsePublicFolderForwardPaging(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `number` | No | The timestamp indicating when the folder was created, represented as an integer in int64 format. |
| `id` | `string` | Yes | The unique identifier for the folder, represented as a string. |
| `name` | `string` | No | The name of the folder, represented as a string. |
| `updatedAt` | `number` | No | The timestamp indicating when the folder was last updated, represented as an integer in int64 format. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EmailTemplatesCollectionResponsePublicFolderForwardPaging():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity

```lua
local email_templates_collection_response_public_template_forward_paging = client:EmailTemplatesCollectionResponsePublicTemplateForwardPaging(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No | The content of the email template, represented as a string. |
| `createdAt` | `number` | No | The timestamp indicating when the email template was created, represented as an integer in int64 format. |
| `folderId` | `string` | No | The identifier of the folder where the email template is stored, represented as a string. |
| `id` | `string` | Yes | The unique identifier for the email template, represented as a string. |
| `name` | `string` | No | The name of the email template, represented as a string. |
| `ownerId` | `string` | No | The identifier of the owner of the email template, represented as a string. |
| `subject` | `string` | No | The subject line of the email template, represented as a string. |
| `updatedAt` | `number` | No | The timestamp indicating when the email template was last updated, represented as an integer in int64 format. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EmailTemplatesCollectionResponsePublicTemplateForwardPaging():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmailTemplatesPublicTemplateEntity

```lua
local email_templates_public_template = client:EmailTemplatesPublicTemplate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No | The content of the email template, represented as a string. |
| `createdAt` | `number` | No | The timestamp indicating when the email template was created, represented as an integer in int64 format. |
| `folderId` | `string` | No | The identifier of the folder where the email template is stored, represented as a string. |
| `id` | `string` | Yes | The unique identifier for the email template, represented as a string. |
| `name` | `string` | No | The name of the email template, represented as a string. |
| `ownerId` | `string` | No | The identifier of the owner of the email template, represented as a string. |
| `subject` | `string` | No | The subject line of the email template, represented as a string. |
| `updatedAt` | `number` | No | The timestamp indicating when the email template was last updated, represented as an integer in int64 format. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EmailTemplatesPublicTemplate():create({
  id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EmailTemplatesPublicTemplate():load({ template_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:EmailTemplatesPublicTemplate():update({
  template_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailTemplatesPublicTemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FunctionEntity

```lua
local function_ = client:Function(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Function():remove({ app_id = 1, definition_id = "definition_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FunctionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SequenceEntity

```lua
local sequence = client:Sequence(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | `table` | Yes | An array of dependencies between steps in the sequence, each represented by a PublicSequenceStepDependencyResponse object. |
| `dynamic` | `boolean` | Yes | A boolean indicating whether the sequence is dynamic. |
| `engagementTriggers` | `table` | No |  |
| `folderId` | `string` | No | The identifier for the folder containing the sequence. |
| `id` | `string` | Yes | The unique identifier for the sequence. |
| `name` | `string` | Yes | The name of the sequence. |
| `sequence` | `table` | Yes |  |
| `settings` | `table` | Yes |  |
| `steps` | `table` | Yes | An array of steps included in the sequence, each represented by a PublicSequenceStepResponseV2 object. |
| `updatedAt` | `string` | Yes | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `string` | Yes | The unique identifier of the user who owns the sequence. |
| `userView` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Sequence():create({
  createdAt = --[[ string ]],
  dependencies = --[[ table ]],
  dynamic = --[[ boolean ]],
  id = --[[ string ]],
  name = --[[ string ]],
  sequence = --[[ table ]],
  settings = --[[ table ]],
  steps = --[[ table ]],
  updatedAt = --[[ string ]],
  userId = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Sequence():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Sequence():load({ id = "sequence_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Sequence():update({
  id = "sequence_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SequenceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SequencesCollectionResponseWithTotalPublicSequenceLiteEntity

```lua
local sequences_collection_response_with_total_public_sequence_lite = client:SequencesCollectionResponseWithTotalPublicSequenceLite(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SequencesCollectionResponseWithTotalPublicSequenceLite():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SequencesCollectionResponseWithTotalPublicSequenceLiteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SequencesPublicSequenceEntity

```lua
local sequences_public_sequence = client:SequencesPublicSequence(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | `table` | Yes | An array of dependencies between sequence steps, each represented by a PublicSequenceStepDependencyResponse object. |
| `folderId` | `string` | No | The unique identifier for the folder containing the sequence. |
| `id` | `string` | Yes | The unique identifier for the sequence. |
| `name` | `string` | Yes | The name of the sequence. |
| `settings` | `table` | Yes |  |
| `steps` | `table` | Yes | An array of steps included in the sequence, each represented by a PublicSequenceStepResponse object. |
| `updatedAt` | `string` | Yes | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `string` | Yes | The unique identifier of the user who owns the sequence. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SequencesPublicSequence():load({ sequence_id = "sequence_id", user_id = "user_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SequencesPublicSequenceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SequencesPublicSequenceEnrollmentEntity

```lua
local sequences_public_sequence_enrollment = client:SequencesPublicSequenceEnrollment(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SequencesPublicSequenceEnrollment():load({ contact_id = "contact_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SequencesPublicSequenceEnrollmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SequencesPublicSequenceEnrollmentLiteEntity

```lua
local sequences_public_sequence_enrollment_lite = client:SequencesPublicSequenceEnrollmentLite(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SequencesPublicSequenceEnrollmentLite():create({
  user_id = --[[ string ]],
  contactId = --[[ string ]],
  enrolledAt = --[[ string ]],
  id = --[[ string ]],
  senderEmail = --[[ string ]],
  sequenceId = --[[ string ]],
  toEmail = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SequencesPublicSequenceEnrollmentLiteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SequencesPublicSequencePerformanceEntity

```lua
local sequences_public_sequence_performance = client:SequencesPublicSequencePerformance(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyMetrics` | `table` | Yes |  |
| `sequenceId` | `string` | Yes | The unique identifier for the sequence, represented as a string. |
| `statusByStep` | `table` | Yes | An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order. |
| `steps` | `table` | Yes | An array of objects, each representing the performance metrics for individual steps within the sequence. |
| `summary` | `table` | Yes |  |
| `timeline` | `table` | Yes | An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SequencesPublicSequencePerformance():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SequencesPublicSequencePerformanceEntity` instance with the same client and
options.

#### `get_name() -> string`

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

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
})
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

