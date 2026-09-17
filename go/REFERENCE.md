# HubspotAutomation Golang SDK Reference

Complete API reference for the HubspotAutomation Golang SDK.


## HubspotAutomationSDK

### Constructor

```go
func NewHubspotAutomationSDK(options map[string]any) *HubspotAutomationSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *HubspotAutomationSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *HubspotAutomationSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `ActionsV4CollectionResponsePublicActionDefinitionForward(data map[string]any) HubspotAutomationEntity`

Create a new `ActionsV4CollectionResponsePublicActionDefinitionForward` entity instance. Pass `nil` for no initial data.

#### `ActionsV4CollectionResponsePublicActionFunctionIdentifierNo(data map[string]any) HubspotAutomationEntity`

Create a new `ActionsV4CollectionResponsePublicActionFunctionIdentifierNo` entity instance. Pass `nil` for no initial data.

#### `ActionsV4CollectionResponsePublicActionRevisionForward(data map[string]any) HubspotAutomationEntity`

Create a new `ActionsV4CollectionResponsePublicActionRevisionForward` entity instance. Pass `nil` for no initial data.

#### `ActionsV4PublicActionDefinition(data map[string]any) HubspotAutomationEntity`

Create a new `ActionsV4PublicActionDefinition` entity instance. Pass `nil` for no initial data.

#### `ActionsV4PublicActionDefinitionRequiresObject(data map[string]any) HubspotAutomationEntity`

Create a new `ActionsV4PublicActionDefinitionRequiresObject` entity instance. Pass `nil` for no initial data.

#### `ActionsV4PublicActionFunction(data map[string]any) HubspotAutomationEntity`

Create a new `ActionsV4PublicActionFunction` entity instance. Pass `nil` for no initial data.

#### `ActionsV4PublicActionFunctionIdentifier(data map[string]any) HubspotAutomationEntity`

Create a new `ActionsV4PublicActionFunctionIdentifier` entity instance. Pass `nil` for no initial data.

#### `ActionsV4PublicActionRevision(data map[string]any) HubspotAutomationEntity`

Create a new `ActionsV4PublicActionRevision` entity instance. Pass `nil` for no initial data.

#### `AutomationV4ApiFlow(data map[string]any) HubspotAutomationEntity`

Create a new `AutomationV4ApiFlow` entity instance. Pass `nil` for no initial data.

#### `AutomationV4BatchResponseApiFlow(data map[string]any) HubspotAutomationEntity`

Create a new `AutomationV4BatchResponseApiFlow` entity instance. Pass `nil` for no initial data.

#### `AutomationV4BatchResponseFlowIdWorkflowIdMapping(data map[string]any) HubspotAutomationEntity`

Create a new `AutomationV4BatchResponseFlowIdWorkflowIdMapping` entity instance. Pass `nil` for no initial data.

#### `AutomationV4CollectionResponseApiFlowEmailCampaign(data map[string]any) HubspotAutomationEntity`

Create a new `AutomationV4CollectionResponseApiFlowEmailCampaign` entity instance. Pass `nil` for no initial data.

#### `AutomationV4CollectionResponseApiFlowListingForwardPaging(data map[string]any) HubspotAutomationEntity`

Create a new `AutomationV4CollectionResponseApiFlowListingForwardPaging` entity instance. Pass `nil` for no initial data.

#### `AutomationV4CollectionResponseApiHistogramDataPointNo(data map[string]any) HubspotAutomationEntity`

Create a new `AutomationV4CollectionResponseApiHistogramDataPointNo` entity instance. Pass `nil` for no initial data.

#### `Basic(data map[string]any) HubspotAutomationEntity`

Create a new `Basic` entity instance. Pass `nil` for no initial data.

#### `Callback(data map[string]any) HubspotAutomationEntity`

Create a new `Callback` entity instance. Pass `nil` for no initial data.

#### `Definition(data map[string]any) HubspotAutomationEntity`

Create a new `Definition` entity instance. Pass `nil` for no initial data.

#### `EmailTemplatesCollectionResponsePublicFolderForwardPaging(data map[string]any) HubspotAutomationEntity`

Create a new `EmailTemplatesCollectionResponsePublicFolderForwardPaging` entity instance. Pass `nil` for no initial data.

#### `EmailTemplatesCollectionResponsePublicTemplateForwardPaging(data map[string]any) HubspotAutomationEntity`

Create a new `EmailTemplatesCollectionResponsePublicTemplateForwardPaging` entity instance. Pass `nil` for no initial data.

#### `EmailTemplatesPublicTemplate(data map[string]any) HubspotAutomationEntity`

Create a new `EmailTemplatesPublicTemplate` entity instance. Pass `nil` for no initial data.

#### `Function(data map[string]any) HubspotAutomationEntity`

Create a new `Function` entity instance. Pass `nil` for no initial data.

#### `Sequence(data map[string]any) HubspotAutomationEntity`

Create a new `Sequence` entity instance. Pass `nil` for no initial data.

#### `SequencesCollectionResponseWithTotalPublicSequenceLite(data map[string]any) HubspotAutomationEntity`

Create a new `SequencesCollectionResponseWithTotalPublicSequenceLite` entity instance. Pass `nil` for no initial data.

#### `SequencesPublicSequence(data map[string]any) HubspotAutomationEntity`

Create a new `SequencesPublicSequence` entity instance. Pass `nil` for no initial data.

#### `SequencesPublicSequenceEnrollment(data map[string]any) HubspotAutomationEntity`

Create a new `SequencesPublicSequenceEnrollment` entity instance. Pass `nil` for no initial data.

#### `SequencesPublicSequenceEnrollmentLite(data map[string]any) HubspotAutomationEntity`

Create a new `SequencesPublicSequenceEnrollmentLite` entity instance. Pass `nil` for no initial data.

#### `SequencesPublicSequencePerformance(data map[string]any) HubspotAutomationEntity`

Create a new `SequencesPublicSequencePerformance` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ActionsV4CollectionResponsePublicActionDefinitionForwardEntity

```go
actionsV4CollectionResponsePublicActionDefinitionForward := client.ActionsV4CollectionResponsePublicActionDefinitionForward(nil)
fmt.Println(actionsV4CollectionResponsePublicActionDefinitionForward.GetName()) // "actions_v4_collection_response_public_action_definition_forward"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paging` | `map[string]any` | No | Paging information for forward-only pagination. |
| `results` | `[]any` | Yes | An array of public action definitions, each represented by a PublicActionDefinition object. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsV4CollectionResponsePublicActionDefinitionForward(nil).Load(map[string]any{"app_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsV4CollectionResponsePublicActionDefinitionForwardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity

```go
actionsV4CollectionResponsePublicActionFunctionIdentifierNo := client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo(nil)
fmt.Println(actionsV4CollectionResponsePublicActionFunctionIdentifierNo.GetName()) // "actions_v4_collection_response_public_action_function_identifier_no"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `functionType` | `string` | Yes | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | No | The unique identifier for the function. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsV4CollectionResponsePublicActionRevisionForwardEntity

```go
actionsV4CollectionResponsePublicActionRevisionForward := client.ActionsV4CollectionResponsePublicActionRevisionForward(nil)
fmt.Println(actionsV4CollectionResponsePublicActionRevisionForward.GetName()) // "actions_v4_collection_response_public_action_revision_forward"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date and time when the action revision was created. |
| `definition` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | The unique identifier for the action revision. |
| `revisionId` | `string` | Yes | The unique identifier for the specific revision of the action. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ActionsV4CollectionResponsePublicActionRevisionForward(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsV4CollectionResponsePublicActionRevisionForwardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsV4PublicActionDefinitionEntity

```go
actionsV4PublicActionDefinition := client.ActionsV4PublicActionDefinition(nil)
fmt.Println(actionsV4PublicActionDefinition.GetName()) // "actions_v4_public_action_definition"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionUrl` | `string` | Yes | The URL endpoint where the action is executed. |
| `archivedAt` | `int` | No | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | `[]any` | No | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | `[]any` | Yes | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | `string` | Yes | The unique identifier for the action definition. |
| `inputFieldDependencies` | `[]any` | No | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | `[]any` | Yes | An array of input field definitions required for the action. |
| `labels` | `map[string]any` | Yes | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` | `map[string]any` | Yes |  |
| `objectTypes` | `[]any` | Yes | An array of strings representing the types of objects associated with the action. |
| `outputFields` | `[]any` | No | An array of output field definitions produced by the action. |
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsV4PublicActionDefinition(nil).Load(map[string]any{"app_id": 1, "definition_id": "definition_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ActionsV4PublicActionDefinition(nil).Create(map[string]any{
    "app_id": 1,
    "actionUrl": "example_actionUrl",
    "functions": []any{},
    "id": "example_id",
    "inputFields": []any{},
    "labels": map[string]any{},
    "objectRequestOptions": map[string]any{},
    "objectTypes": []any{},
    "published": true,
    "revisionId": "example_revisionId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ActionsV4PublicActionDefinition(nil).Update(map[string]any{
    "app_id": 1,
    "definition_id": "definition_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsV4PublicActionDefinitionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsV4PublicActionDefinitionRequiresObjectEntity

```go
actionsV4PublicActionDefinitionRequiresObject := client.ActionsV4PublicActionDefinitionRequiresObject(nil)
fmt.Println(actionsV4PublicActionDefinitionRequiresObject.GetName()) // "actions_v4_public_action_definition_requires_object"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `requiresObject` | `bool` | Yes | Indicates whether a custom action definition requires an object. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsV4PublicActionDefinitionRequiresObject(nil).Load(map[string]any{"app_id": 1, "definition_id": "definition_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsV4PublicActionDefinitionRequiresObjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsV4PublicActionFunctionEntity

```go
actionsV4PublicActionFunction := client.ActionsV4PublicActionFunction(nil)
fmt.Println(actionsV4PublicActionFunction.GetName()) // "actions_v4_public_action_function"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `functionSource` | `string` | Yes | The source code or script that defines the function's behavior. |
| `functionType` | `string` | Yes | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | No | The unique identifier for the action function. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsV4PublicActionFunction(nil).Load(map[string]any{"id": "actions_v4_public_action_function_id", "app_id": 1, "definition_id": "definition_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsV4PublicActionFunctionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsV4PublicActionFunctionIdentifierEntity

```go
actionsV4PublicActionFunctionIdentifier := client.ActionsV4PublicActionFunctionIdentifier(nil)
fmt.Println(actionsV4PublicActionFunctionIdentifier.GetName()) // "actions_v4_public_action_function_identifier"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `functionType` | `string` | Yes | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | No | The unique identifier for the function. |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ActionsV4PublicActionFunctionIdentifier(nil).Update(map[string]any{
    "app_id": 1,
    "definition_id": "definition_id",
    "function_type": "function_type",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsV4PublicActionFunctionIdentifierEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionsV4PublicActionRevisionEntity

```go
actionsV4PublicActionRevision := client.ActionsV4PublicActionRevision(nil)
fmt.Println(actionsV4PublicActionRevision.GetName()) // "actions_v4_public_action_revision"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionUrl` | `string` | Yes | The URL endpoint where the action is executed. |
| `archivedAt` | `int` | No | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | `[]any` | No | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | `[]any` | Yes | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | `string` | Yes | The unique identifier for the action definition. |
| `inputFieldDependencies` | `[]any` | No | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | `[]any` | Yes | An array of input field definitions required for the action. |
| `labels` | `map[string]any` | Yes | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` | `map[string]any` | Yes |  |
| `objectTypes` | `[]any` | Yes | An array of strings representing the types of objects associated with the action. |
| `outputFields` | `[]any` | No | An array of output field definitions produced by the action. |
| `published` | `bool` | Yes | A boolean indicating whether the action is published and available for use. |
| `revisionId` | `string` | Yes | The unique identifier for the current revision of the action definition. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionsV4PublicActionRevision(nil).Load(map[string]any{"id": "actions_v4_public_action_revision_id", "app_id": 1, "definition_id": "definition_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionsV4PublicActionRevisionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AutomationV4ApiFlowEntity

```go
automationV4ApiFlow := client.AutomationV4ApiFlow(nil)
fmt.Println(automationV4ApiFlow.GetName()) // "automation_v4_api_flow"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AutomationV4ApiFlow(nil).Load(map[string]any{"id": "automation_v4_api_flow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AutomationV4ApiFlow(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AutomationV4ApiFlow(nil).Update(map[string]any{
    "id": "automation_v4_api_flow_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AutomationV4ApiFlowEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AutomationV4BatchResponseApiFlowEntity

```go
automationV4BatchResponseApiFlow := client.AutomationV4BatchResponseApiFlow(nil)
fmt.Println(automationV4BatchResponseApiFlow.GetName()) // "automation_v4_batch_response_api_flow"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` | `[]any` | Yes |  |
| `links` | `map[string]any` | No | A collection of URLs related to the batch process, empty for this operation. |
| `requestedAt` | `string` | No | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` | `[]any` | Yes |  |
| `startedAt` | `string` | Yes | The date and time when the batch process began, formatted as a date-time string. |
| `status` | `string` | Yes | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AutomationV4BatchResponseApiFlow(nil).Create(map[string]any{
    "completedAt": "example_completedAt",
    "inputs": []any{},
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AutomationV4BatchResponseApiFlowEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity

```go
automationV4BatchResponseFlowIdWorkflowIdMapping := client.AutomationV4BatchResponseFlowIdWorkflowIdMapping(nil)
fmt.Println(automationV4BatchResponseFlowIdWorkflowIdMapping.GetName()) // "automation_v4_batch_response_flow_id_workflow_id_mapping"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `string` | Yes | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` | `[]any` | Yes |  |
| `links` | `map[string]any` | No | A collection of URLs related to the batch process. |
| `requestedAt` | `string` | No | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` | `[]any` | Yes |  |
| `startedAt` | `string` | Yes | The date and time when the batch process began, formatted as a date-time string. |
| `status` | `string` | Yes | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.AutomationV4BatchResponseFlowIdWorkflowIdMapping(nil).Create(map[string]any{
    "completedAt": "example_completedAt",
    "inputs": []any{},
    "results": []any{},
    "startedAt": "example_startedAt",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AutomationV4CollectionResponseApiFlowEmailCampaignEntity

```go
automationV4CollectionResponseApiFlowEmailCampaign := client.AutomationV4CollectionResponseApiFlowEmailCampaign(nil)
fmt.Println(automationV4CollectionResponseApiFlowEmailCampaign.GetName()) // "automation_v4_collection_response_api_flow_email_campaign"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emailCampaignId` | `string` | Yes | The unique identifier for the email campaign associated with the automation flow. |
| `emailContentId` | `string` | Yes | The unique identifier for the email content used in the email campaign. |
| `flowId` | `string` | Yes | The unique identifier for the automation flow associated with the email campaign. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AutomationV4CollectionResponseApiFlowEmailCampaign(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AutomationV4CollectionResponseApiFlowEmailCampaignEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AutomationV4CollectionResponseApiFlowListingForwardPagingEntity

```go
automationV4CollectionResponseApiFlowListingForwardPaging := client.AutomationV4CollectionResponseApiFlowListingForwardPaging(nil)
fmt.Println(automationV4CollectionResponseApiFlowListingForwardPaging.GetName()) // "automation_v4_collection_response_api_flow_listing_forward_paging"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AutomationV4CollectionResponseApiFlowListingForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AutomationV4CollectionResponseApiFlowListingForwardPagingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AutomationV4CollectionResponseApiHistogramDataPointNoEntity

```go
automationV4CollectionResponseApiHistogramDataPointNo := client.AutomationV4CollectionResponseApiHistogramDataPointNo(nil)
fmt.Println(automationV4CollectionResponseApiHistogramDataPointNo.GetName()) // "automation_v4_collection_response_api_histogram_data_point_no"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `results` | `[]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AutomationV4CollectionResponseApiHistogramDataPointNo(nil).Load(map[string]any{"flow_id": "flow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AutomationV4CollectionResponseApiHistogramDataPointNoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BasicEntity

```go
basic := client.Basic(nil)
fmt.Println(basic.GetName()) // "basic"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Basic(nil).Remove(map[string]any{"flow_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BasicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CallbackEntity

```go
callback := client.Callback(nil)
fmt.Println(callback.GetName()) // "callback"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failureReasonType` | `string` | No | Indicates the reason for the failure of a callback completion. |
| `inputs` | `[]any` | Yes | An array of CallbackCompletionBatchRequest objects, each representing a single callback completion request. |
| `outputFields` | `map[string]any` | Yes | Contains the output fields associated with the callback, with each field represented as a key-value pair. |
| `requestContext` | `any` | No | Specifies the context in which the request is made, which can be one of several predefined contexts. |
| `typedOutputs` | `map[string]any` | Yes | Holds the typed outputs related to the callback, structured as an object. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Callback(nil).Create(map[string]any{
    "inputs": []any{},
    "outputFields": map[string]any{},
    "typedOutputs": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallbackEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DefinitionEntity

```go
definition := client.Definition(nil)
fmt.Println(definition.GetName()) // "definition"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `requiresObject` | `bool` | Yes | Indicates whether a custom action definition requires an associated object. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Definition(nil).Create(map[string]any{
    "app_id": 1,
    "definition_id": "example_definition_id",
    "requiresObject": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Definition(nil).Remove(map[string]any{"app_id": 1, "definition_id": "definition_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DefinitionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity

```go
emailTemplatesCollectionResponsePublicFolderForwardPaging := client.EmailTemplatesCollectionResponsePublicFolderForwardPaging(nil)
fmt.Println(emailTemplatesCollectionResponsePublicFolderForwardPaging.GetName()) // "email_templates_collection_response_public_folder_forward_paging"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `int` | No | The timestamp indicating when the folder was created, represented as an integer in int64 format. |
| `id` | `string` | Yes | The unique identifier for the folder, represented as a string. |
| `name` | `string` | No | The name of the folder, represented as a string. |
| `updatedAt` | `int` | No | The timestamp indicating when the folder was last updated, represented as an integer in int64 format. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EmailTemplatesCollectionResponsePublicFolderForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity

```go
emailTemplatesCollectionResponsePublicTemplateForwardPaging := client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging(nil)
fmt.Println(emailTemplatesCollectionResponsePublicTemplateForwardPaging.GetName()) // "email_templates_collection_response_public_template_forward_paging"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmailTemplatesPublicTemplateEntity

```go
emailTemplatesPublicTemplate := client.EmailTemplatesPublicTemplate(nil)
fmt.Println(emailTemplatesPublicTemplate.GetName()) // "email_templates_public_template"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EmailTemplatesPublicTemplate(nil).Load(map[string]any{"template_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.EmailTemplatesPublicTemplate(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.EmailTemplatesPublicTemplate(nil).Update(map[string]any{
    "template_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmailTemplatesPublicTemplateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## FunctionEntity

```go
function := client.Function(nil)
fmt.Println(function.GetName()) // "function"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Function(nil).Remove(map[string]any{"app_id": 1, "definition_id": "definition_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FunctionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SequenceEntity

```go
sequence := client.Sequence(nil)
fmt.Println(sequence.GetName()) // "sequence"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | `[]any` | Yes | An array of dependencies between steps in the sequence, each represented by a PublicSequenceStepDependencyResponse object. |
| `dynamic` | `bool` | Yes | A boolean indicating whether the sequence is dynamic. |
| `engagementTriggers` | `map[string]any` | No |  |
| `folderId` | `string` | No | The identifier for the folder containing the sequence. |
| `id` | `string` | Yes | The unique identifier for the sequence. |
| `name` | `string` | Yes | The name of the sequence. |
| `sequence` | `map[string]any` | Yes |  |
| `settings` | `map[string]any` | Yes |  |
| `steps` | `[]any` | Yes | An array of steps included in the sequence, each represented by a PublicSequenceStepResponseV2 object. |
| `updatedAt` | `string` | Yes | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `string` | Yes | The unique identifier of the user who owns the sequence. |
| `userView` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Sequence(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Sequence(nil).Load(map[string]any{"id": "sequence_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Sequence(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "dependencies": []any{},
    "dynamic": true,
    "id": "example_id",
    "name": "example_name",
    "sequence": map[string]any{},
    "settings": map[string]any{},
    "steps": []any{},
    "updatedAt": "example_updatedAt",
    "userId": "example_userId",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Sequence(nil).Update(map[string]any{
    "id": "sequence_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SequenceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SequencesCollectionResponseWithTotalPublicSequenceLiteEntity

```go
sequencesCollectionResponseWithTotalPublicSequenceLite := client.SequencesCollectionResponseWithTotalPublicSequenceLite(nil)
fmt.Println(sequencesCollectionResponseWithTotalPublicSequenceLite.GetName()) // "sequences_collection_response_with_total_public_sequence_lite"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SequencesCollectionResponseWithTotalPublicSequenceLite(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SequencesCollectionResponseWithTotalPublicSequenceLiteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SequencesPublicSequenceEntity

```go
sequencesPublicSequence := client.SequencesPublicSequence(nil)
fmt.Println(sequencesPublicSequence.GetName()) // "sequences_public_sequence"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | `[]any` | Yes | An array of dependencies between sequence steps, each represented by a PublicSequenceStepDependencyResponse object. |
| `folderId` | `string` | No | The unique identifier for the folder containing the sequence. |
| `id` | `string` | Yes | The unique identifier for the sequence. |
| `name` | `string` | Yes | The name of the sequence. |
| `settings` | `map[string]any` | Yes |  |
| `steps` | `[]any` | Yes | An array of steps included in the sequence, each represented by a PublicSequenceStepResponse object. |
| `updatedAt` | `string` | Yes | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `string` | Yes | The unique identifier of the user who owns the sequence. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SequencesPublicSequence(nil).Load(map[string]any{"sequence_id": "sequence_id", "user_id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SequencesPublicSequenceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SequencesPublicSequenceEnrollmentEntity

```go
sequencesPublicSequenceEnrollment := client.SequencesPublicSequenceEnrollment(nil)
fmt.Println(sequencesPublicSequenceEnrollment.GetName()) // "sequences_public_sequence_enrollment"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SequencesPublicSequenceEnrollment(nil).Load(map[string]any{"contact_id": "contact_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SequencesPublicSequenceEnrollmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SequencesPublicSequenceEnrollmentLiteEntity

```go
sequencesPublicSequenceEnrollmentLite := client.SequencesPublicSequenceEnrollmentLite(nil)
fmt.Println(sequencesPublicSequenceEnrollmentLite.GetName()) // "sequences_public_sequence_enrollment_lite"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SequencesPublicSequenceEnrollmentLite(nil).Create(map[string]any{
    "user_id": "example_user_id",
    "contactId": "example_contactId",
    "enrolledAt": "example_enrolledAt",
    "id": "example_id",
    "senderEmail": "example_senderEmail",
    "sequenceId": "example_sequenceId",
    "toEmail": "example_toEmail",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SequencesPublicSequenceEnrollmentLiteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SequencesPublicSequencePerformanceEntity

```go
sequencesPublicSequencePerformance := client.SequencesPublicSequencePerformance(nil)
fmt.Println(sequencesPublicSequencePerformance.GetName()) // "sequences_public_sequence_performance"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyMetrics` | `map[string]any` | Yes |  |
| `sequenceId` | `string` | Yes | The unique identifier for the sequence, represented as a string. |
| `statusByStep` | `[]any` | Yes | An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order. |
| `steps` | `[]any` | Yes | An array of objects, each representing the performance metrics for individual steps within the sequence. |
| `summary` | `map[string]any` | Yes |  |
| `timeline` | `[]any` | Yes | An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SequencesPublicSequencePerformance(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SequencesPublicSequencePerformanceEntity` instance with the same client and
options.

#### `GetName() string`

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

```go
client := sdk.NewHubspotAutomationSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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

