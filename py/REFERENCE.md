# HubspotAutomation Python SDK Reference

Complete API reference for the HubspotAutomation Python SDK.


## HubspotAutomationSDK

### Constructor

```python
from hubspotautomation_sdk import HubspotAutomationSDK

client = HubspotAutomationSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `HubspotAutomationSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = HubspotAutomationSDK.test()
```


### Instance Methods

#### `ActionsV4CollectionResponsePublicActionDefinitionForward(data=None)`

Create a new `ActionsV4CollectionResponsePublicActionDefinitionForwardEntity` instance. Pass `None` for no initial data.

#### `ActionsV4CollectionResponsePublicActionFunctionIdentifierNo(data=None)`

Create a new `ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity` instance. Pass `None` for no initial data.

#### `ActionsV4CollectionResponsePublicActionRevisionForward(data=None)`

Create a new `ActionsV4CollectionResponsePublicActionRevisionForwardEntity` instance. Pass `None` for no initial data.

#### `ActionsV4PublicActionDefinition(data=None)`

Create a new `ActionsV4PublicActionDefinitionEntity` instance. Pass `None` for no initial data.

#### `ActionsV4PublicActionDefinitionRequiresObject(data=None)`

Create a new `ActionsV4PublicActionDefinitionRequiresObjectEntity` instance. Pass `None` for no initial data.

#### `ActionsV4PublicActionFunction(data=None)`

Create a new `ActionsV4PublicActionFunctionEntity` instance. Pass `None` for no initial data.

#### `ActionsV4PublicActionFunctionIdentifier(data=None)`

Create a new `ActionsV4PublicActionFunctionIdentifierEntity` instance. Pass `None` for no initial data.

#### `ActionsV4PublicActionRevision(data=None)`

Create a new `ActionsV4PublicActionRevisionEntity` instance. Pass `None` for no initial data.

#### `AutomationV4ApiFlow(data=None)`

Create a new `AutomationV4ApiFlowEntity` instance. Pass `None` for no initial data.

#### `AutomationV4BatchResponseApiFlow(data=None)`

Create a new `AutomationV4BatchResponseApiFlowEntity` instance. Pass `None` for no initial data.

#### `AutomationV4BatchResponseFlowIdWorkflowIdMapping(data=None)`

Create a new `AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity` instance. Pass `None` for no initial data.

#### `AutomationV4CollectionResponseApiFlowEmailCampaign(data=None)`

Create a new `AutomationV4CollectionResponseApiFlowEmailCampaignEntity` instance. Pass `None` for no initial data.

#### `AutomationV4CollectionResponseApiFlowListingForwardPaging(data=None)`

Create a new `AutomationV4CollectionResponseApiFlowListingForwardPagingEntity` instance. Pass `None` for no initial data.

#### `AutomationV4CollectionResponseApiHistogramDataPointNo(data=None)`

Create a new `AutomationV4CollectionResponseApiHistogramDataPointNoEntity` instance. Pass `None` for no initial data.

#### `Basic(data=None)`

Create a new `BasicEntity` instance. Pass `None` for no initial data.

#### `Callback(data=None)`

Create a new `CallbackEntity` instance. Pass `None` for no initial data.

#### `Definition(data=None)`

Create a new `DefinitionEntity` instance. Pass `None` for no initial data.

#### `EmailTemplatesCollectionResponsePublicFolderForwardPaging(data=None)`

Create a new `EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity` instance. Pass `None` for no initial data.

#### `EmailTemplatesCollectionResponsePublicTemplateForwardPaging(data=None)`

Create a new `EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity` instance. Pass `None` for no initial data.

#### `EmailTemplatesPublicTemplate(data=None)`

Create a new `EmailTemplatesPublicTemplateEntity` instance. Pass `None` for no initial data.

#### `Function(data=None)`

Create a new `FunctionEntity` instance. Pass `None` for no initial data.

#### `Sequence(data=None)`

Create a new `SequenceEntity` instance. Pass `None` for no initial data.

#### `SequencesCollectionResponseWithTotalPublicSequenceLite(data=None)`

Create a new `SequencesCollectionResponseWithTotalPublicSequenceLiteEntity` instance. Pass `None` for no initial data.

#### `SequencesPublicSequence(data=None)`

Create a new `SequencesPublicSequenceEntity` instance. Pass `None` for no initial data.

#### `SequencesPublicSequenceEnrollment(data=None)`

Create a new `SequencesPublicSequenceEnrollmentEntity` instance. Pass `None` for no initial data.

#### `SequencesPublicSequenceEnrollmentLite(data=None)`

Create a new `SequencesPublicSequenceEnrollmentLiteEntity` instance. Pass `None` for no initial data.

#### `SequencesPublicSequencePerformance(data=None)`

Create a new `SequencesPublicSequencePerformanceEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ActionsV4CollectionResponsePublicActionDefinitionForwardEntity

```python
actions_v4_collection_response_public_action_definition_forward = client.ActionsV4CollectionResponsePublicActionDefinitionForward()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `paging` | `dict` | No | Paging information for forward-only pagination. |
| `results` | `list` | Yes | An array of public action definitions, each represented by a PublicActionDefinition object. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsV4CollectionResponsePublicActionDefinitionForward().load({"app_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsV4CollectionResponsePublicActionDefinitionForwardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity

```python
actions_v4_collection_response_public_action_function_identifier_no = client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `functionType` | `str` | Yes | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `str` | No | The unique identifier for the function. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo().list({"app_id": 1, "definition_id": "example"})
for actions_v4_collection_response_public_action_function_identifier_no in results:
    print(actions_v4_collection_response_public_action_function_identifier_no)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsV4CollectionResponsePublicActionRevisionForwardEntity

```python
actions_v4_collection_response_public_action_revision_forward = client.ActionsV4CollectionResponsePublicActionRevisionForward()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes | The date and time when the action revision was created. |
| `definition` | `dict` | Yes |  |
| `id` | `str` | Yes | The unique identifier for the action revision. |
| `revisionId` | `str` | Yes | The unique identifier for the specific revision of the action. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ActionsV4CollectionResponsePublicActionRevisionForward().list({"app_id": 1, "definition_id": "example"})
for actions_v4_collection_response_public_action_revision_forward in results:
    print(actions_v4_collection_response_public_action_revision_forward)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsV4CollectionResponsePublicActionRevisionForwardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsV4PublicActionDefinitionEntity

```python
actions_v4_public_action_definition = client.ActionsV4PublicActionDefinition()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionUrl` | `str` | Yes | The URL endpoint where the action is executed. |
| `archivedAt` | `int` | No | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | `list` | No | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | `list` | Yes | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | `str` | Yes | The unique identifier for the action definition. |
| `inputFieldDependencies` | `list` | No | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | `list` | Yes | An array of input field definitions required for the action. |
| `labels` | `dict` | Yes | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` | `dict` | Yes |  |
| `objectTypes` | `list` | Yes | An array of strings representing the types of objects associated with the action. |
| `outputFields` | `list` | No | An array of output field definitions produced by the action. |
| `published` | `bool` | Yes | A boolean indicating whether the action is published and available for use. |
| `revisionId` | `str` | Yes | The unique identifier for the current revision of the action definition. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ActionsV4PublicActionDefinition().create({
    "app_id": 1,  # int
    "actionUrl": "example_actionUrl",  # str
    "functions": [],  # list
    "id": "example_id",  # str
    "inputFields": [],  # list
    "labels": {},  # dict
    "objectRequestOptions": {},  # dict
    "objectTypes": [],  # list
    "published": True,  # bool
    "revisionId": "example_revisionId",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsV4PublicActionDefinition().load({"app_id": 1, "definition_id": "definition_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ActionsV4PublicActionDefinition().update({
    "app_id": 1,
    "definition_id": "definition_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsV4PublicActionDefinitionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsV4PublicActionDefinitionRequiresObjectEntity

```python
actions_v4_public_action_definition_requires_object = client.ActionsV4PublicActionDefinitionRequiresObject()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `requiresObject` | `bool` | Yes | Indicates whether a custom action definition requires an object. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsV4PublicActionDefinitionRequiresObject().load({"app_id": 1, "definition_id": "definition_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsV4PublicActionDefinitionRequiresObjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsV4PublicActionFunctionEntity

```python
actions_v4_public_action_function = client.ActionsV4PublicActionFunction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `functionSource` | `str` | Yes | The source code or script that defines the function's behavior. |
| `functionType` | `str` | Yes | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `str` | No | The unique identifier for the action function. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsV4PublicActionFunction().load({"id": "actions_v4_public_action_function_id", "app_id": 1, "definition_id": "definition_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsV4PublicActionFunctionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsV4PublicActionFunctionIdentifierEntity

```python
actions_v4_public_action_function_identifier = client.ActionsV4PublicActionFunctionIdentifier()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `functionType` | `str` | Yes | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `str` | No | The unique identifier for the function. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ActionsV4PublicActionFunctionIdentifier().update({
    "app_id": 1,
    "definition_id": "definition_id",
    "function_type": "function_type",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsV4PublicActionFunctionIdentifierEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionsV4PublicActionRevisionEntity

```python
actions_v4_public_action_revision = client.ActionsV4PublicActionRevision()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actionUrl` | `str` | Yes | The URL endpoint where the action is executed. |
| `archivedAt` | `int` | No | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | `list` | No | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | `list` | Yes | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | `str` | Yes | The unique identifier for the action definition. |
| `inputFieldDependencies` | `list` | No | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | `list` | Yes | An array of input field definitions required for the action. |
| `labels` | `dict` | Yes | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` | `dict` | Yes |  |
| `objectTypes` | `list` | Yes | An array of strings representing the types of objects associated with the action. |
| `outputFields` | `list` | No | An array of output field definitions produced by the action. |
| `published` | `bool` | Yes | A boolean indicating whether the action is published and available for use. |
| `revisionId` | `str` | Yes | The unique identifier for the current revision of the action definition. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionsV4PublicActionRevision().load({"id": "actions_v4_public_action_revision_id", "app_id": 1, "definition_id": "definition_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionsV4PublicActionRevisionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AutomationV4ApiFlowEntity

```python
automation_v4_api_flow = client.AutomationV4ApiFlow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AutomationV4ApiFlow().create({
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AutomationV4ApiFlow().load({"id": "automation_v4_api_flow_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AutomationV4ApiFlow().update({
    "id": "automation_v4_api_flow_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationV4ApiFlowEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AutomationV4BatchResponseApiFlowEntity

```python
automation_v4_batch_response_api_flow = client.AutomationV4BatchResponseApiFlow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `str` | Yes | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` | `list` | Yes |  |
| `links` | `dict` | No | A collection of URLs related to the batch process, empty for this operation. |
| `requestedAt` | `str` | No | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` | `list` | Yes |  |
| `startedAt` | `str` | Yes | The date and time when the batch process began, formatted as a date-time string. |
| `status` | `str` | Yes | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AutomationV4BatchResponseApiFlow().create({
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationV4BatchResponseApiFlowEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity

```python
automation_v4_batch_response_flow_id_workflow_id_mapping = client.AutomationV4BatchResponseFlowIdWorkflowIdMapping()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completedAt` | `str` | Yes | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` | `list` | Yes |  |
| `links` | `dict` | No | A collection of URLs related to the batch process. |
| `requestedAt` | `str` | No | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` | `list` | Yes |  |
| `startedAt` | `str` | Yes | The date and time when the batch process began, formatted as a date-time string. |
| `status` | `str` | Yes | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AutomationV4BatchResponseFlowIdWorkflowIdMapping().create({
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AutomationV4CollectionResponseApiFlowEmailCampaignEntity

```python
automation_v4_collection_response_api_flow_email_campaign = client.AutomationV4CollectionResponseApiFlowEmailCampaign()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emailCampaignId` | `str` | Yes | The unique identifier for the email campaign associated with the automation flow. |
| `emailContentId` | `str` | Yes | The unique identifier for the email content used in the email campaign. |
| `flowId` | `str` | Yes | The unique identifier for the automation flow associated with the email campaign. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AutomationV4CollectionResponseApiFlowEmailCampaign().list()
for automation_v4_collection_response_api_flow_email_campaign in results:
    print(automation_v4_collection_response_api_flow_email_campaign)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationV4CollectionResponseApiFlowEmailCampaignEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AutomationV4CollectionResponseApiFlowListingForwardPagingEntity

```python
automation_v4_collection_response_api_flow_listing_forward_paging = client.AutomationV4CollectionResponseApiFlowListingForwardPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes | The date and time when the automation flow was created, formatted as a date-time string. |
| `flowType` | `str` | Yes | Specifies the type of the automation flow (PLATFORM vs. |
| `id` | `str` | Yes | The unique identifier for the automation flow. |
| `isEnabled` | `bool` | Yes | Indicates whether the automation flow is currently active. |
| `name` | `str` | No | The name assigned to the automation flow. |
| `objectTypeId` | `str` | Yes | Represents the ID of the object type associated with the automation flow. |
| `revisionId` | `str` | Yes | The identifier for the current revision of the automation flow. |
| `updatedAt` | `str` | Yes | The date and time when the automation flow was last updated, formatted as a date-time string. |
| `uuid` | `str` | No | The universally unique identifier for the automation flow. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AutomationV4CollectionResponseApiFlowListingForwardPaging().list()
for automation_v4_collection_response_api_flow_listing_forward_paging in results:
    print(automation_v4_collection_response_api_flow_listing_forward_paging)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationV4CollectionResponseApiFlowListingForwardPagingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AutomationV4CollectionResponseApiHistogramDataPointNoEntity

```python
automation_v4_collection_response_api_histogram_data_point_no = client.AutomationV4CollectionResponseApiHistogramDataPointNo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `results` | `list` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AutomationV4CollectionResponseApiHistogramDataPointNo().load({"flow_id": "flow_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationV4CollectionResponseApiHistogramDataPointNoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BasicEntity

```python
basic = client.Basic()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Basic().remove({"flow_id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BasicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallbackEntity

```python
callback = client.Callback()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `failureReasonType` | `str` | No | Indicates the reason for the failure of a callback completion. |
| `inputs` | `list` | Yes | An array of CallbackCompletionBatchRequest objects, each representing a single callback completion request. |
| `outputFields` | `dict` | Yes | Contains the output fields associated with the callback, with each field represented as a key-value pair. |
| `requestContext` | `Any` | No | Specifies the context in which the request is made, which can be one of several predefined contexts. |
| `typedOutputs` | `dict` | Yes | Holds the typed outputs related to the callback, structured as an object. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Callback().create({
    "inputs": [],  # list
    "outputFields": {},  # dict
    "typedOutputs": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallbackEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DefinitionEntity

```python
definition = client.Definition()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `requiresObject` | `bool` | Yes | Indicates whether a custom action definition requires an associated object. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Definition().create({
    "app_id": 1,  # int
    "definition_id": "example_definition_id",  # str
    "requiresObject": True,  # bool
})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Definition().remove({"app_id": 1, "definition_id": "definition_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DefinitionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity

```python
email_templates_collection_response_public_folder_forward_paging = client.EmailTemplatesCollectionResponsePublicFolderForwardPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `int` | No | The timestamp indicating when the folder was created, represented as an integer in int64 format. |
| `id` | `str` | Yes | The unique identifier for the folder, represented as a string. |
| `name` | `str` | No | The name of the folder, represented as a string. |
| `updatedAt` | `int` | No | The timestamp indicating when the folder was last updated, represented as an integer in int64 format. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EmailTemplatesCollectionResponsePublicFolderForwardPaging().list()
for email_templates_collection_response_public_folder_forward_paging in results:
    print(email_templates_collection_response_public_folder_forward_paging)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity

```python
email_templates_collection_response_public_template_forward_paging = client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `str` | No | The content of the email template, represented as a string. |
| `createdAt` | `int` | No | The timestamp indicating when the email template was created, represented as an integer in int64 format. |
| `folderId` | `str` | No | The identifier of the folder where the email template is stored, represented as a string. |
| `id` | `str` | Yes | The unique identifier for the email template, represented as a string. |
| `name` | `str` | No | The name of the email template, represented as a string. |
| `ownerId` | `str` | No | The identifier of the owner of the email template, represented as a string. |
| `subject` | `str` | No | The subject line of the email template, represented as a string. |
| `updatedAt` | `int` | No | The timestamp indicating when the email template was last updated, represented as an integer in int64 format. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging().list()
for email_templates_collection_response_public_template_forward_paging in results:
    print(email_templates_collection_response_public_template_forward_paging)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmailTemplatesPublicTemplateEntity

```python
email_templates_public_template = client.EmailTemplatesPublicTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `str` | No | The content of the email template, represented as a string. |
| `createdAt` | `int` | No | The timestamp indicating when the email template was created, represented as an integer in int64 format. |
| `folderId` | `str` | No | The identifier of the folder where the email template is stored, represented as a string. |
| `id` | `str` | Yes | The unique identifier for the email template, represented as a string. |
| `name` | `str` | No | The name of the email template, represented as a string. |
| `ownerId` | `str` | No | The identifier of the owner of the email template, represented as a string. |
| `subject` | `str` | No | The subject line of the email template, represented as a string. |
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EmailTemplatesPublicTemplate().create({
    "id": "example_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EmailTemplatesPublicTemplate().load({"template_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.EmailTemplatesPublicTemplate().update({
    "template_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailTemplatesPublicTemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FunctionEntity

```python
function = client.Function()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Function().remove({"app_id": 1, "definition_id": "definition_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FunctionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SequenceEntity

```python
sequence = client.Sequence()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | `list` | Yes | An array of dependencies between steps in the sequence, each represented by a PublicSequenceStepDependencyResponse object. |
| `dynamic` | `bool` | Yes | A boolean indicating whether the sequence is dynamic. |
| `engagementTriggers` | `dict` | No |  |
| `folderId` | `str` | No | The identifier for the folder containing the sequence. |
| `id` | `str` | Yes | The unique identifier for the sequence. |
| `name` | `str` | Yes | The name of the sequence. |
| `sequence` | `dict` | Yes |  |
| `settings` | `dict` | Yes |  |
| `steps` | `list` | Yes | An array of steps included in the sequence, each represented by a PublicSequenceStepResponseV2 object. |
| `updatedAt` | `str` | Yes | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `str` | Yes | The unique identifier of the user who owns the sequence. |
| `userView` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Sequence().create({
    "createdAt": "example_createdAt",  # str
    "dependencies": [],  # list
    "dynamic": True,  # bool
    "id": "example_id",  # str
    "name": "example_name",  # str
    "sequence": {},  # dict
    "settings": {},  # dict
    "steps": [],  # list
    "updatedAt": "example_updatedAt",  # str
    "userId": "example_userId",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Sequence().list()
for sequence in results:
    print(sequence)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Sequence().load({"id": "sequence_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Sequence().update({
    "id": "sequence_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SequenceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SequencesCollectionResponseWithTotalPublicSequenceLiteEntity

```python
sequences_collection_response_with_total_public_sequence_lite = client.SequencesCollectionResponseWithTotalPublicSequenceLite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes | The date and time when the sequence was created, in ISO 8601 format. |
| `folderId` | `str` | No | The identifier of the folder containing the sequence, represented as a string. |
| `id` | `str` | Yes | The unique identifier for the sequence, represented as a string. |
| `name` | `str` | Yes | The name of the sequence, represented as a string. |
| `updatedAt` | `str` | Yes | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `str` | Yes | The unique identifier of the user associated with the sequence, represented as a string. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SequencesCollectionResponseWithTotalPublicSequenceLite().list({"user_id": "example"})
for sequences_collection_response_with_total_public_sequence_lite in results:
    print(sequences_collection_response_with_total_public_sequence_lite)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SequencesCollectionResponseWithTotalPublicSequenceLiteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SequencesPublicSequenceEntity

```python
sequences_public_sequence = client.SequencesPublicSequence()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | `list` | Yes | An array of dependencies between sequence steps, each represented by a PublicSequenceStepDependencyResponse object. |
| `folderId` | `str` | No | The unique identifier for the folder containing the sequence. |
| `id` | `str` | Yes | The unique identifier for the sequence. |
| `name` | `str` | Yes | The name of the sequence. |
| `settings` | `dict` | Yes |  |
| `steps` | `list` | Yes | An array of steps included in the sequence, each represented by a PublicSequenceStepResponse object. |
| `updatedAt` | `str` | Yes | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `str` | Yes | The unique identifier of the user who owns the sequence. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SequencesPublicSequence().load({"sequence_id": "sequence_id", "user_id": "user_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SequencesPublicSequenceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SequencesPublicSequenceEnrollmentEntity

```python
sequences_public_sequence_enrollment = client.SequencesPublicSequenceEnrollment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enrolledAt` | `str` | Yes | The date and time when the contact was enrolled in the sequence, in ISO 8601 format. |
| `enrolledBy` | `str` | Yes | The unique identifier of the user who enrolled the contact in the sequence. |
| `enrolledByEmail` | `str` | Yes | The email address of the user who enrolled the contact in the sequence. |
| `id` | `str` | Yes | The unique identifier for the sequence enrollment. |
| `sequenceId` | `str` | Yes | The unique identifier of the sequence in which the contact is enrolled. |
| `sequenceName` | `str` | Yes | The name of the sequence in which the contact is enrolled. |
| `toEmail` | `str` | Yes | The email address of the contact enrolled in the sequence. |
| `updatedAt` | `str` | Yes | The date and time when the sequence enrollment was last updated, in ISO 8601 format. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SequencesPublicSequenceEnrollment().load({"contact_id": "contact_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SequencesPublicSequenceEnrollmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SequencesPublicSequenceEnrollmentLiteEntity

```python
sequences_public_sequence_enrollment_lite = client.SequencesPublicSequenceEnrollmentLite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contactId` | `str` | Yes | The unique identifier of the contact to be enrolled in the sequence. |
| `enrolledAt` | `str` | Yes | The date and time when the contact was enrolled in the sequence, in ISO 8601 format. |
| `id` | `str` | Yes | The unique identifier for the sequence enrollment. |
| `senderAliasAddress` | `str` | No | An optional alias email address that can be used as the sender's address. |
| `senderEmail` | `str` | Yes | The email address of the sender responsible for the sequence enrollment. |
| `sequenceId` | `str` | Yes | The unique identifier of the sequence in which the contact is to be enrolled. |
| `toEmail` | `str` | Yes | The email address of the contact who is enrolled in the sequence. |
| `updatedAt` | `str` | Yes | The date and time when the sequence enrollment was last updated, in ISO 8601 format. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SequencesPublicSequenceEnrollmentLite().create({
    "user_id": "example_user_id",  # str
    "contactId": "example_contactId",  # str
    "enrolledAt": "example_enrolledAt",  # str
    "id": "example_id",  # str
    "senderEmail": "example_senderEmail",  # str
    "sequenceId": "example_sequenceId",  # str
    "toEmail": "example_toEmail",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SequencesPublicSequenceEnrollmentLiteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SequencesPublicSequencePerformanceEntity

```python
sequences_public_sequence_performance = client.SequencesPublicSequencePerformance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `companyMetrics` | `dict` | Yes |  |
| `sequenceId` | `str` | Yes | The unique identifier for the sequence, represented as a string. |
| `statusByStep` | `list` | Yes | An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order. |
| `steps` | `list` | Yes | An array of objects, each representing the performance metrics for individual steps within the sequence. |
| `summary` | `dict` | Yes |  |
| `timeline` | `list` | Yes | An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SequencesPublicSequencePerformance().list({"sequence_id": "example"})
for sequences_public_sequence_performance in results:
    print(sequences_public_sequence_performance)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SequencesPublicSequencePerformanceEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = HubspotAutomationSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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

