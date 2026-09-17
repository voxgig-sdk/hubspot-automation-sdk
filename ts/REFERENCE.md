# HubspotAutomation TypeScript SDK Reference

Complete API reference for the HubspotAutomation TypeScript SDK.


## HubspotAutomationSDK

### Constructor

```ts
new HubspotAutomationSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotAutomationSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = HubspotAutomationSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `HubspotAutomationSDK` instance in test mode.


### Instance Methods

#### `ActionsV4CollectionResponsePublicActionDefinitionForward(data?: object)`

Create a new `ActionsV4CollectionResponsePublicActionDefinitionForward` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsV4CollectionResponsePublicActionDefinitionForwardEntity` instance.

#### `ActionsV4CollectionResponsePublicActionFunctionIdentifierNo(data?: object)`

Create a new `ActionsV4CollectionResponsePublicActionFunctionIdentifierNo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity` instance.

#### `ActionsV4CollectionResponsePublicActionRevisionForward(data?: object)`

Create a new `ActionsV4CollectionResponsePublicActionRevisionForward` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsV4CollectionResponsePublicActionRevisionForwardEntity` instance.

#### `ActionsV4PublicActionDefinition(data?: object)`

Create a new `ActionsV4PublicActionDefinition` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsV4PublicActionDefinitionEntity` instance.

#### `ActionsV4PublicActionDefinitionRequiresObject(data?: object)`

Create a new `ActionsV4PublicActionDefinitionRequiresObject` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsV4PublicActionDefinitionRequiresObjectEntity` instance.

#### `ActionsV4PublicActionFunction(data?: object)`

Create a new `ActionsV4PublicActionFunction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsV4PublicActionFunctionEntity` instance.

#### `ActionsV4PublicActionFunctionIdentifier(data?: object)`

Create a new `ActionsV4PublicActionFunctionIdentifier` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsV4PublicActionFunctionIdentifierEntity` instance.

#### `ActionsV4PublicActionRevision(data?: object)`

Create a new `ActionsV4PublicActionRevision` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionsV4PublicActionRevisionEntity` instance.

#### `AutomationV4ApiFlow(data?: object)`

Create a new `AutomationV4ApiFlow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutomationV4ApiFlowEntity` instance.

#### `AutomationV4BatchResponseApiFlow(data?: object)`

Create a new `AutomationV4BatchResponseApiFlow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutomationV4BatchResponseApiFlowEntity` instance.

#### `AutomationV4BatchResponseFlowIdWorkflowIdMapping(data?: object)`

Create a new `AutomationV4BatchResponseFlowIdWorkflowIdMapping` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity` instance.

#### `AutomationV4CollectionResponseApiFlowEmailCampaign(data?: object)`

Create a new `AutomationV4CollectionResponseApiFlowEmailCampaign` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutomationV4CollectionResponseApiFlowEmailCampaignEntity` instance.

#### `AutomationV4CollectionResponseApiFlowListingForwardPaging(data?: object)`

Create a new `AutomationV4CollectionResponseApiFlowListingForwardPaging` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutomationV4CollectionResponseApiFlowListingForwardPagingEntity` instance.

#### `AutomationV4CollectionResponseApiHistogramDataPointNo(data?: object)`

Create a new `AutomationV4CollectionResponseApiHistogramDataPointNo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutomationV4CollectionResponseApiHistogramDataPointNoEntity` instance.

#### `Basic(data?: object)`

Create a new `Basic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BasicEntity` instance.

#### `Callback(data?: object)`

Create a new `Callback` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallbackEntity` instance.

#### `Definition(data?: object)`

Create a new `Definition` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DefinitionEntity` instance.

#### `EmailTemplatesCollectionResponsePublicFolderForwardPaging(data?: object)`

Create a new `EmailTemplatesCollectionResponsePublicFolderForwardPaging` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity` instance.

#### `EmailTemplatesCollectionResponsePublicTemplateForwardPaging(data?: object)`

Create a new `EmailTemplatesCollectionResponsePublicTemplateForwardPaging` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity` instance.

#### `EmailTemplatesPublicTemplate(data?: object)`

Create a new `EmailTemplatesPublicTemplate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailTemplatesPublicTemplateEntity` instance.

#### `Function(data?: object)`

Create a new `Function` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FunctionEntity` instance.

#### `Sequence(data?: object)`

Create a new `Sequence` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SequenceEntity` instance.

#### `SequencesCollectionResponseWithTotalPublicSequenceLite(data?: object)`

Create a new `SequencesCollectionResponseWithTotalPublicSequenceLite` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SequencesCollectionResponseWithTotalPublicSequenceLiteEntity` instance.

#### `SequencesPublicSequence(data?: object)`

Create a new `SequencesPublicSequence` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SequencesPublicSequenceEntity` instance.

#### `SequencesPublicSequenceEnrollment(data?: object)`

Create a new `SequencesPublicSequenceEnrollment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SequencesPublicSequenceEnrollmentEntity` instance.

#### `SequencesPublicSequenceEnrollmentLite(data?: object)`

Create a new `SequencesPublicSequenceEnrollmentLite` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SequencesPublicSequenceEnrollmentLiteEntity` instance.

#### `SequencesPublicSequencePerformance(data?: object)`

Create a new `SequencesPublicSequencePerformance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SequencesPublicSequencePerformanceEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `HubspotAutomationSDK.test()`.

**Returns:** `HubspotAutomationSDK` instance in test mode.


---

## ActionsV4CollectionResponsePublicActionDefinitionForwardEntity

```ts
const actions_v4_collection_response_public_action_definition_forward = client.ActionsV4CollectionResponsePublicActionDefinitionForward()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paging` | `Record<string, any>` | No | Paging information for forward-only pagination. |
| `results` | `any[]` | Yes | An array of public action definitions, each represented by a PublicActionDefinition object. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsV4CollectionResponsePublicActionDefinitionForward().load({ app_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsV4CollectionResponsePublicActionDefinitionForwardEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity

```ts
const actions_v4_collection_response_public_action_function_identifier_no = client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `functionType` | `string` | Yes | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | No | The unique identifier for the function. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo().list({ app_id: 1, definition_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsV4CollectionResponsePublicActionRevisionForwardEntity

```ts
const actions_v4_collection_response_public_action_revision_forward = client.ActionsV4CollectionResponsePublicActionRevisionForward()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date and time when the action revision was created. |
| `definition` | `Record<string, any>` | Yes |  |
| `id` | `string` | Yes | The unique identifier for the action revision. |
| `revisionId` | `string` | Yes | The unique identifier for the specific revision of the action. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ActionsV4CollectionResponsePublicActionRevisionForward().list({ app_id: 1, definition_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsV4CollectionResponsePublicActionRevisionForwardEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsV4PublicActionDefinitionEntity

```ts
const actions_v4_public_action_definition = client.ActionsV4PublicActionDefinition()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionUrl` | `string` | Yes | The URL endpoint where the action is executed. |
| `archivedAt` | `number` | No | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | `any[]` | No | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | `any[]` | Yes | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | `string` | Yes | The unique identifier for the action definition. |
| `inputFieldDependencies` | `any[]` | No | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | `any[]` | Yes | An array of input field definitions required for the action. |
| `labels` | `Record<string, any>` | Yes | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` | `Record<string, any>` | Yes |  |
| `objectTypes` | `any[]` | Yes | An array of strings representing the types of objects associated with the action. |
| `outputFields` | `any[]` | No | An array of output field definitions produced by the action. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ActionsV4PublicActionDefinition().create({
  app_id: 1,
  actionUrl: 'example_actionUrl',
  functions: [],
  id: 'example_id',
  inputFields: [],
  labels: {},
  objectRequestOptions: {},
  objectTypes: [],
  published: true,
  revisionId: 'example_revisionId',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsV4PublicActionDefinition().load({ app_id: 1, definition_id: 'definition_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ActionsV4PublicActionDefinition().update({
  app_id: 1,
  definition_id: 'definition_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsV4PublicActionDefinitionEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsV4PublicActionDefinitionRequiresObjectEntity

```ts
const actions_v4_public_action_definition_requires_object = client.ActionsV4PublicActionDefinitionRequiresObject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `requiresObject` | `boolean` | Yes | Indicates whether a custom action definition requires an object. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsV4PublicActionDefinitionRequiresObject().load({ app_id: 1, definition_id: 'definition_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsV4PublicActionDefinitionRequiresObjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsV4PublicActionFunctionEntity

```ts
const actions_v4_public_action_function = client.ActionsV4PublicActionFunction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `functionSource` | `string` | Yes | The source code or script that defines the function's behavior. |
| `functionType` | `string` | Yes | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | No | The unique identifier for the action function. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsV4PublicActionFunction().load({ id: 'actions_v4_public_action_function_id', app_id: 1, definition_id: 'definition_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsV4PublicActionFunctionEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsV4PublicActionFunctionIdentifierEntity

```ts
const actions_v4_public_action_function_identifier = client.ActionsV4PublicActionFunctionIdentifier()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `functionType` | `string` | Yes | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | No | The unique identifier for the function. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ActionsV4PublicActionFunctionIdentifier().update({
  app_id: 1,
  definition_id: 'definition_id',
  function_type: 'function_type',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsV4PublicActionFunctionIdentifierEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionsV4PublicActionRevisionEntity

```ts
const actions_v4_public_action_revision = client.ActionsV4PublicActionRevision()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionUrl` | `string` | Yes | The URL endpoint where the action is executed. |
| `archivedAt` | `number` | No | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | `any[]` | No | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | `any[]` | Yes | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | `string` | Yes | The unique identifier for the action definition. |
| `inputFieldDependencies` | `any[]` | No | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | `any[]` | Yes | An array of input field definitions required for the action. |
| `labels` | `Record<string, any>` | Yes | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` | `Record<string, any>` | Yes |  |
| `objectTypes` | `any[]` | Yes | An array of strings representing the types of objects associated with the action. |
| `outputFields` | `any[]` | No | An array of output field definitions produced by the action. |
| `published` | `boolean` | Yes | A boolean indicating whether the action is published and available for use. |
| `revisionId` | `string` | Yes | The unique identifier for the current revision of the action definition. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionsV4PublicActionRevision().load({ id: 'actions_v4_public_action_revision_id', app_id: 1, definition_id: 'definition_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionsV4PublicActionRevisionEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutomationV4ApiFlowEntity

```ts
const automation_v4_api_flow = client.AutomationV4ApiFlow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AutomationV4ApiFlow().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AutomationV4ApiFlow().load({ id: 'automation_v4_api_flow_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AutomationV4ApiFlow().update({
  id: 'automation_v4_api_flow_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutomationV4ApiFlowEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutomationV4BatchResponseApiFlowEntity

```ts
const automation_v4_batch_response_api_flow = client.AutomationV4BatchResponseApiFlow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` | `any[]` | Yes |  |
| `links` | `Record<string, any>` | No | A collection of URLs related to the batch process, empty for this operation. |
| `requestedAt` | `string` | No | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` | `any[]` | Yes |  |
| `startedAt` | `string` | Yes | The date and time when the batch process began, formatted as a date-time string. |
| `status` | `string` | Yes | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AutomationV4BatchResponseApiFlow().create({
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutomationV4BatchResponseApiFlowEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity

```ts
const automation_v4_batch_response_flow_id_workflow_id_mapping = client.AutomationV4BatchResponseFlowIdWorkflowIdMapping()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` | `any[]` | Yes |  |
| `links` | `Record<string, any>` | No | A collection of URLs related to the batch process. |
| `requestedAt` | `string` | No | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` | `any[]` | Yes |  |
| `startedAt` | `string` | Yes | The date and time when the batch process began, formatted as a date-time string. |
| `status` | `string` | Yes | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AutomationV4BatchResponseFlowIdWorkflowIdMapping().create({
  completedAt: 'example_completedAt',
  inputs: [],
  results: [],
  startedAt: 'example_startedAt',
  status: 'example_status',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutomationV4CollectionResponseApiFlowEmailCampaignEntity

```ts
const automation_v4_collection_response_api_flow_email_campaign = client.AutomationV4CollectionResponseApiFlowEmailCampaign()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emailCampaignId` | `string` | Yes | The unique identifier for the email campaign associated with the automation flow. |
| `emailContentId` | `string` | Yes | The unique identifier for the email content used in the email campaign. |
| `flowId` | `string` | Yes | The unique identifier for the automation flow associated with the email campaign. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AutomationV4CollectionResponseApiFlowEmailCampaign().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutomationV4CollectionResponseApiFlowEmailCampaignEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutomationV4CollectionResponseApiFlowListingForwardPagingEntity

```ts
const automation_v4_collection_response_api_flow_listing_forward_paging = client.AutomationV4CollectionResponseApiFlowListingForwardPaging()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AutomationV4CollectionResponseApiFlowListingForwardPaging().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutomationV4CollectionResponseApiFlowListingForwardPagingEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutomationV4CollectionResponseApiHistogramDataPointNoEntity

```ts
const automation_v4_collection_response_api_histogram_data_point_no = client.AutomationV4CollectionResponseApiHistogramDataPointNo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `results` | `any[]` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AutomationV4CollectionResponseApiHistogramDataPointNo().load({ flow_id: 'flow_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutomationV4CollectionResponseApiHistogramDataPointNoEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BasicEntity

```ts
const basic = client.Basic()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Basic().remove({ flow_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BasicEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallbackEntity

```ts
const callback = client.Callback()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failureReasonType` | `string` | No | Indicates the reason for the failure of a callback completion. |
| `inputs` | `any[]` | Yes | An array of CallbackCompletionBatchRequest objects, each representing a single callback completion request. |
| `outputFields` | `Record<string, any>` | Yes | Contains the output fields associated with the callback, with each field represented as a key-value pair. |
| `requestContext` | `any` | No | Specifies the context in which the request is made, which can be one of several predefined contexts. |
| `typedOutputs` | `Record<string, any>` | Yes | Holds the typed outputs related to the callback, structured as an object. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Callback().create({
  inputs: [],
  outputFields: {},
  typedOutputs: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallbackEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DefinitionEntity

```ts
const definition = client.Definition()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `requiresObject` | `boolean` | Yes | Indicates whether a custom action definition requires an associated object. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Definition().create({
  app_id: 1,
  definition_id: 'example_definition_id',
  requiresObject: true,
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Definition().remove({ app_id: 1, definition_id: 'definition_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DefinitionEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity

```ts
const email_templates_collection_response_public_folder_forward_paging = client.EmailTemplatesCollectionResponsePublicFolderForwardPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `number` | No | The timestamp indicating when the folder was created, represented as an integer in int64 format. |
| `id` | `string` | Yes | The unique identifier for the folder, represented as a string. |
| `name` | `string` | No | The name of the folder, represented as a string. |
| `updatedAt` | `number` | No | The timestamp indicating when the folder was last updated, represented as an integer in int64 format. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EmailTemplatesCollectionResponsePublicFolderForwardPaging().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity

```ts
const email_templates_collection_response_public_template_forward_paging = client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailTemplatesPublicTemplateEntity

```ts
const email_templates_public_template = client.EmailTemplatesPublicTemplate()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EmailTemplatesPublicTemplate().create({
  id: 'example_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EmailTemplatesPublicTemplate().load({ template_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.EmailTemplatesPublicTemplate().update({
  template_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailTemplatesPublicTemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FunctionEntity

```ts
const function_ = client.Function()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Function().remove({ app_id: 1, definition_id: 'definition_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FunctionEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SequenceEntity

```ts
const sequence = client.Sequence()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | `any[]` | Yes | An array of dependencies between steps in the sequence, each represented by a PublicSequenceStepDependencyResponse object. |
| `dynamic` | `boolean` | Yes | A boolean indicating whether the sequence is dynamic. |
| `engagementTriggers` | `Record<string, any>` | No |  |
| `folderId` | `string` | No | The identifier for the folder containing the sequence. |
| `id` | `string` | Yes | The unique identifier for the sequence. |
| `name` | `string` | Yes | The name of the sequence. |
| `sequence` | `Record<string, any>` | Yes |  |
| `settings` | `Record<string, any>` | Yes |  |
| `steps` | `any[]` | Yes | An array of steps included in the sequence, each represented by a PublicSequenceStepResponseV2 object. |
| `updatedAt` | `string` | Yes | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `string` | Yes | The unique identifier of the user who owns the sequence. |
| `userView` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Sequence().create({
  createdAt: 'example_createdAt',
  dependencies: [],
  dynamic: true,
  id: 'example_id',
  name: 'example_name',
  sequence: {},
  settings: {},
  steps: [],
  updatedAt: 'example_updatedAt',
  userId: 'example_userId',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Sequence().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Sequence().load({ id: 'sequence_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Sequence().update({
  id: 'sequence_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SequenceEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SequencesCollectionResponseWithTotalPublicSequenceLiteEntity

```ts
const sequences_collection_response_with_total_public_sequence_lite = client.SequencesCollectionResponseWithTotalPublicSequenceLite()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SequencesCollectionResponseWithTotalPublicSequenceLite().list({ user_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SequencesCollectionResponseWithTotalPublicSequenceLiteEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SequencesPublicSequenceEntity

```ts
const sequences_public_sequence = client.SequencesPublicSequence()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | `any[]` | Yes | An array of dependencies between sequence steps, each represented by a PublicSequenceStepDependencyResponse object. |
| `folderId` | `string` | No | The unique identifier for the folder containing the sequence. |
| `id` | `string` | Yes | The unique identifier for the sequence. |
| `name` | `string` | Yes | The name of the sequence. |
| `settings` | `Record<string, any>` | Yes |  |
| `steps` | `any[]` | Yes | An array of steps included in the sequence, each represented by a PublicSequenceStepResponse object. |
| `updatedAt` | `string` | Yes | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `string` | Yes | The unique identifier of the user who owns the sequence. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SequencesPublicSequence().load({ sequence_id: 'sequence_id', user_id: 'user_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SequencesPublicSequenceEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SequencesPublicSequenceEnrollmentEntity

```ts
const sequences_public_sequence_enrollment = client.SequencesPublicSequenceEnrollment()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SequencesPublicSequenceEnrollment().load({ contact_id: 'contact_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SequencesPublicSequenceEnrollmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SequencesPublicSequenceEnrollmentLiteEntity

```ts
const sequences_public_sequence_enrollment_lite = client.SequencesPublicSequenceEnrollmentLite()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SequencesPublicSequenceEnrollmentLite().create({
  user_id: 'example_user_id',
  contactId: 'example_contactId',
  enrolledAt: 'example_enrolledAt',
  id: 'example_id',
  senderEmail: 'example_senderEmail',
  sequenceId: 'example_sequenceId',
  toEmail: 'example_toEmail',
  updatedAt: 'example_updatedAt',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SequencesPublicSequenceEnrollmentLiteEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SequencesPublicSequencePerformanceEntity

```ts
const sequences_public_sequence_performance = client.SequencesPublicSequencePerformance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyMetrics` | `Record<string, any>` | Yes |  |
| `sequenceId` | `string` | Yes | The unique identifier for the sequence, represented as a string. |
| `statusByStep` | `any[]` | Yes | An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order. |
| `steps` | `any[]` | Yes | An array of objects, each representing the performance metrics for individual steps within the sequence. |
| `summary` | `Record<string, any>` | Yes |  |
| `timeline` | `any[]` | Yes | An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SequencesPublicSequencePerformance().list({ sequence_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SequencesPublicSequencePerformanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `HubspotAutomationSDK` instance.

#### `entopts()`

Return a copy of the entity options.


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

```ts
const client = new HubspotAutomationSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

