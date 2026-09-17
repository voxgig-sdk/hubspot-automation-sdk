# HubspotAutomation Python SDK



The Python SDK for the HubspotAutomation API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.ActionsV4CollectionResponsePublicActionDefinitionForward()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/hubspot-automation-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from hubspotautomation_sdk import HubspotAutomationSDK

client = HubspotAutomationSDK({
    "apikey": os.environ.get("HUBSPOT_AUTOMATION_APIKEY"),
})
```

### 3. Load an actionsv4collectionresponsepublicactiondefinitionforward

ActionsV4CollectionResponsePublicActionDefinitionForward is nested under app, so provide the `app_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    actionsv4collectionresponsepublicactiondefinitionforward = client.ActionsV4CollectionResponsePublicActionDefinitionForward().load({"app_id": 1})
    print(actionsv4collectionresponsepublicactiondefinitionforward)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    sequencescollectionresponsewithtotalpublicsequencelites = client.SequencesCollectionResponseWithTotalPublicSequenceLite().list()
    print(sequencescollectionresponsewithtotalpublicsequencelites)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = HubspotAutomationSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
sequencescollectionresponsewithtotalpublicsequencelite = client.SequencesCollectionResponseWithTotalPublicSequenceLite().list()
# sequencescollectionresponsewithtotalpublicsequencelite contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = HubspotAutomationSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
HUBSPOT_AUTOMATION_TEST_LIVE=TRUE
HUBSPOT_AUTOMATION_APIKEY=<your-key>
```

Then run:

```bash
cd py && pytest test/
```


## Reference

### HubspotAutomationSDK

```python
from hubspotautomation_sdk import HubspotAutomationSDK

client = HubspotAutomationSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = HubspotAutomationSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### HubspotAutomationSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `ActionsV4CollectionResponsePublicActionDefinitionForward` | `(data) -> ActionsV4CollectionResponsePublicActionDefinitionForwardEntity` | Create an ActionsV4CollectionResponsePublicActionDefinitionForward entity instance. |
| `ActionsV4CollectionResponsePublicActionFunctionIdentifierNo` | `(data) -> ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity` | Create an ActionsV4CollectionResponsePublicActionFunctionIdentifierNo entity instance. |
| `ActionsV4CollectionResponsePublicActionRevisionForward` | `(data) -> ActionsV4CollectionResponsePublicActionRevisionForwardEntity` | Create an ActionsV4CollectionResponsePublicActionRevisionForward entity instance. |
| `ActionsV4PublicActionDefinition` | `(data) -> ActionsV4PublicActionDefinitionEntity` | Create an ActionsV4PublicActionDefinition entity instance. |
| `ActionsV4PublicActionDefinitionRequiresObject` | `(data) -> ActionsV4PublicActionDefinitionRequiresObjectEntity` | Create an ActionsV4PublicActionDefinitionRequiresObject entity instance. |
| `ActionsV4PublicActionFunction` | `(data) -> ActionsV4PublicActionFunctionEntity` | Create an ActionsV4PublicActionFunction entity instance. |
| `ActionsV4PublicActionFunctionIdentifier` | `(data) -> ActionsV4PublicActionFunctionIdentifierEntity` | Create an ActionsV4PublicActionFunctionIdentifier entity instance. |
| `ActionsV4PublicActionRevision` | `(data) -> ActionsV4PublicActionRevisionEntity` | Create an ActionsV4PublicActionRevision entity instance. |
| `AutomationV4ApiFlow` | `(data) -> AutomationV4ApiFlowEntity` | Create an AutomationV4ApiFlow entity instance. |
| `AutomationV4BatchResponseApiFlow` | `(data) -> AutomationV4BatchResponseApiFlowEntity` | Create an AutomationV4BatchResponseApiFlow entity instance. |
| `AutomationV4BatchResponseFlowIdWorkflowIdMapping` | `(data) -> AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity` | Create an AutomationV4BatchResponseFlowIdWorkflowIdMapping entity instance. |
| `AutomationV4CollectionResponseApiFlowEmailCampaign` | `(data) -> AutomationV4CollectionResponseApiFlowEmailCampaignEntity` | Create an AutomationV4CollectionResponseApiFlowEmailCampaign entity instance. |
| `AutomationV4CollectionResponseApiFlowListingForwardPaging` | `(data) -> AutomationV4CollectionResponseApiFlowListingForwardPagingEntity` | Create an AutomationV4CollectionResponseApiFlowListingForwardPaging entity instance. |
| `AutomationV4CollectionResponseApiHistogramDataPointNo` | `(data) -> AutomationV4CollectionResponseApiHistogramDataPointNoEntity` | Create an AutomationV4CollectionResponseApiHistogramDataPointNo entity instance. |
| `Basic` | `(data) -> BasicEntity` | Create a Basic entity instance. |
| `Callback` | `(data) -> CallbackEntity` | Create a Callback entity instance. |
| `Definition` | `(data) -> DefinitionEntity` | Create a Definition entity instance. |
| `EmailTemplatesCollectionResponsePublicFolderForwardPaging` | `(data) -> EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity` | Create an EmailTemplatesCollectionResponsePublicFolderForwardPaging entity instance. |
| `EmailTemplatesCollectionResponsePublicTemplateForwardPaging` | `(data) -> EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity` | Create an EmailTemplatesCollectionResponsePublicTemplateForwardPaging entity instance. |
| `EmailTemplatesPublicTemplate` | `(data) -> EmailTemplatesPublicTemplateEntity` | Create an EmailTemplatesPublicTemplate entity instance. |
| `Function` | `(data) -> FunctionEntity` | Create a Function entity instance. |
| `Sequence` | `(data) -> SequenceEntity` | Create a Sequence entity instance. |
| `SequencesCollectionResponseWithTotalPublicSequenceLite` | `(data) -> SequencesCollectionResponseWithTotalPublicSequenceLiteEntity` | Create a SequencesCollectionResponseWithTotalPublicSequenceLite entity instance. |
| `SequencesPublicSequence` | `(data) -> SequencesPublicSequenceEntity` | Create a SequencesPublicSequence entity instance. |
| `SequencesPublicSequenceEnrollment` | `(data) -> SequencesPublicSequenceEnrollmentEntity` | Create a SequencesPublicSequenceEnrollment entity instance. |
| `SequencesPublicSequenceEnrollmentLite` | `(data) -> SequencesPublicSequenceEnrollmentLiteEntity` | Create a SequencesPublicSequenceEnrollmentLite entity instance. |
| `SequencesPublicSequencePerformance` | `(data) -> SequencesPublicSequencePerformanceEntity` | Create a SequencesPublicSequencePerformance entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `actions_v4_collection_response_public_action_definition_forward = client.ActionsV4CollectionResponsePublicActionDefinitionForward()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paging` | `dict` | Paging information for forward-only pagination. |
| `results` | `list` | An array of public action definitions, each represented by a PublicActionDefinition object. |

#### Example: Load

```python
actions_v4_collection_response_public_action_definition_forward = client.ActionsV4CollectionResponsePublicActionDefinitionForward().load({"app_id": 1})
```


### ActionsV4CollectionResponsePublicActionFunctionIdentifierNo

Create an instance: `actions_v4_collection_response_public_action_function_identifier_no = client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `functionType` | `str` | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `str` | The unique identifier for the function. |

#### Example: List

```python
actions_v4_collection_response_public_action_function_identifier_nos = client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo().list({"app_id": 1, "definition_id": "example"})
```


### ActionsV4CollectionResponsePublicActionRevisionForward

Create an instance: `actions_v4_collection_response_public_action_revision_forward = client.ActionsV4CollectionResponsePublicActionRevisionForward()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | The date and time when the action revision was created. |
| `definition` | `dict` |  |
| `id` | `str` | The unique identifier for the action revision. |
| `revisionId` | `str` | The unique identifier for the specific revision of the action. |

#### Example: List

```python
actions_v4_collection_response_public_action_revision_forwards = client.ActionsV4CollectionResponsePublicActionRevisionForward().list({"app_id": 1, "definition_id": "example"})
```


### ActionsV4PublicActionDefinition

Create an instance: `actions_v4_public_action_definition = client.ActionsV4PublicActionDefinition()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actionUrl` | `str` | The URL endpoint where the action is executed. |
| `archivedAt` | `int` | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | `list` | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | `list` | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | `str` | The unique identifier for the action definition. |
| `inputFieldDependencies` | `list` | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | `list` | An array of input field definitions required for the action. |
| `labels` | `dict` | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` | `dict` |  |
| `objectTypes` | `list` | An array of strings representing the types of objects associated with the action. |
| `outputFields` | `list` | An array of output field definitions produced by the action. |
| `published` | `bool` | A boolean indicating whether the action is published and available for use. |
| `revisionId` | `str` | The unique identifier for the current revision of the action definition. |

#### Example: Load

```python
actions_v4_public_action_definition = client.ActionsV4PublicActionDefinition().load({"app_id": 1, "definition_id": "definition_id"})
```

#### Example: Create

```python
actions_v4_public_action_definition = client.ActionsV4PublicActionDefinition().create({
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


### ActionsV4PublicActionDefinitionRequiresObject

Create an instance: `actions_v4_public_action_definition_requires_object = client.ActionsV4PublicActionDefinitionRequiresObject()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `requiresObject` | `bool` | Indicates whether a custom action definition requires an object. |

#### Example: Load

```python
actions_v4_public_action_definition_requires_object = client.ActionsV4PublicActionDefinitionRequiresObject().load({"app_id": 1, "definition_id": "definition_id"})
```


### ActionsV4PublicActionFunction

Create an instance: `actions_v4_public_action_function = client.ActionsV4PublicActionFunction()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `functionSource` | `str` | The source code or script that defines the function's behavior. |
| `functionType` | `str` | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `str` | The unique identifier for the action function. |

#### Example: Load

```python
actions_v4_public_action_function = client.ActionsV4PublicActionFunction().load({"id": "actions_v4_public_action_function_id", "app_id": 1, "definition_id": "definition_id"})
```


### ActionsV4PublicActionFunctionIdentifier

Create an instance: `actions_v4_public_action_function_identifier = client.ActionsV4PublicActionFunctionIdentifier()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `functionType` | `str` | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `str` | The unique identifier for the function. |


### ActionsV4PublicActionRevision

Create an instance: `actions_v4_public_action_revision = client.ActionsV4PublicActionRevision()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actionUrl` | `str` | The URL endpoint where the action is executed. |
| `archivedAt` | `int` | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | `list` | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | `list` | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | `str` | The unique identifier for the action definition. |
| `inputFieldDependencies` | `list` | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | `list` | An array of input field definitions required for the action. |
| `labels` | `dict` | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` | `dict` |  |
| `objectTypes` | `list` | An array of strings representing the types of objects associated with the action. |
| `outputFields` | `list` | An array of output field definitions produced by the action. |
| `published` | `bool` | A boolean indicating whether the action is published and available for use. |
| `revisionId` | `str` | The unique identifier for the current revision of the action definition. |

#### Example: Load

```python
actions_v4_public_action_revision = client.ActionsV4PublicActionRevision().load({"id": "actions_v4_public_action_revision_id", "app_id": 1, "definition_id": "definition_id"})
```


### AutomationV4ApiFlow

Create an instance: `automation_v4_api_flow = client.AutomationV4ApiFlow()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
automation_v4_api_flow = client.AutomationV4ApiFlow().load({"id": "automation_v4_api_flow_id"})
```

#### Example: Create

```python
automation_v4_api_flow = client.AutomationV4ApiFlow().create({
})
```


### AutomationV4BatchResponseApiFlow

Create an instance: `automation_v4_batch_response_api_flow = client.AutomationV4BatchResponseApiFlow()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `str` | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` | `list` |  |
| `links` | `dict` | A collection of URLs related to the batch process, empty for this operation. |
| `requestedAt` | `str` | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` | `list` |  |
| `startedAt` | `str` | The date and time when the batch process began, formatted as a date-time string. |
| `status` | `str` | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

#### Example: Create

```python
automation_v4_batch_response_api_flow = client.AutomationV4BatchResponseApiFlow().create({
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```


### AutomationV4BatchResponseFlowIdWorkflowIdMapping

Create an instance: `automation_v4_batch_response_flow_id_workflow_id_mapping = client.AutomationV4BatchResponseFlowIdWorkflowIdMapping()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `str` | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` | `list` |  |
| `links` | `dict` | A collection of URLs related to the batch process. |
| `requestedAt` | `str` | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` | `list` |  |
| `startedAt` | `str` | The date and time when the batch process began, formatted as a date-time string. |
| `status` | `str` | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

#### Example: Create

```python
automation_v4_batch_response_flow_id_workflow_id_mapping = client.AutomationV4BatchResponseFlowIdWorkflowIdMapping().create({
    "completedAt": "example_completedAt",  # str
    "inputs": [],  # list
    "results": [],  # list
    "startedAt": "example_startedAt",  # str
    "status": "example_status",  # str
})
```


### AutomationV4CollectionResponseApiFlowEmailCampaign

Create an instance: `automation_v4_collection_response_api_flow_email_campaign = client.AutomationV4CollectionResponseApiFlowEmailCampaign()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emailCampaignId` | `str` | The unique identifier for the email campaign associated with the automation flow. |
| `emailContentId` | `str` | The unique identifier for the email content used in the email campaign. |
| `flowId` | `str` | The unique identifier for the automation flow associated with the email campaign. |

#### Example: List

```python
automation_v4_collection_response_api_flow_email_campaigns = client.AutomationV4CollectionResponseApiFlowEmailCampaign().list()
```


### AutomationV4CollectionResponseApiFlowListingForwardPaging

Create an instance: `automation_v4_collection_response_api_flow_listing_forward_paging = client.AutomationV4CollectionResponseApiFlowListingForwardPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | The date and time when the automation flow was created, formatted as a date-time string. |
| `flowType` | `str` | Specifies the type of the automation flow (PLATFORM vs. |
| `id` | `str` | The unique identifier for the automation flow. |
| `isEnabled` | `bool` | Indicates whether the automation flow is currently active. |
| `name` | `str` | The name assigned to the automation flow. |
| `objectTypeId` | `str` | Represents the ID of the object type associated with the automation flow. |
| `revisionId` | `str` | The identifier for the current revision of the automation flow. |
| `updatedAt` | `str` | The date and time when the automation flow was last updated, formatted as a date-time string. |
| `uuid` | `str` | The universally unique identifier for the automation flow. |

#### Example: List

```python
automation_v4_collection_response_api_flow_listing_forward_pagings = client.AutomationV4CollectionResponseApiFlowListingForwardPaging().list()
```


### AutomationV4CollectionResponseApiHistogramDataPointNo

Create an instance: `automation_v4_collection_response_api_histogram_data_point_no = client.AutomationV4CollectionResponseApiHistogramDataPointNo()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `results` | `list` |  |

#### Example: Load

```python
automation_v4_collection_response_api_histogram_data_point_no = client.AutomationV4CollectionResponseApiHistogramDataPointNo().load({"flow_id": "flow_id"})
```


### Basic

Create an instance: `basic = client.Basic()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Callback

Create an instance: `callback = client.Callback()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failureReasonType` | `str` | Indicates the reason for the failure of a callback completion. |
| `inputs` | `list` | An array of CallbackCompletionBatchRequest objects, each representing a single callback completion request. |
| `outputFields` | `dict` | Contains the output fields associated with the callback, with each field represented as a key-value pair. |
| `requestContext` | `Any` | Specifies the context in which the request is made, which can be one of several predefined contexts. |
| `typedOutputs` | `dict` | Holds the typed outputs related to the callback, structured as an object. |

#### Example: Create

```python
callback = client.Callback().create({
    "inputs": [],  # list
    "outputFields": {},  # dict
    "typedOutputs": {},  # dict
})
```


### Definition

Create an instance: `definition = client.Definition()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `requiresObject` | `bool` | Indicates whether a custom action definition requires an associated object. |

#### Example: Create

```python
definition = client.Definition().create({
    "app_id": 1,  # int
    "definition_id": "example_definition_id",  # str
    "requiresObject": True,  # bool
})
```


### EmailTemplatesCollectionResponsePublicFolderForwardPaging

Create an instance: `email_templates_collection_response_public_folder_forward_paging = client.EmailTemplatesCollectionResponsePublicFolderForwardPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `int` | The timestamp indicating when the folder was created, represented as an integer in int64 format. |
| `id` | `str` | The unique identifier for the folder, represented as a string. |
| `name` | `str` | The name of the folder, represented as a string. |
| `updatedAt` | `int` | The timestamp indicating when the folder was last updated, represented as an integer in int64 format. |

#### Example: List

```python
email_templates_collection_response_public_folder_forward_pagings = client.EmailTemplatesCollectionResponsePublicFolderForwardPaging().list()
```


### EmailTemplatesCollectionResponsePublicTemplateForwardPaging

Create an instance: `email_templates_collection_response_public_template_forward_paging = client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `str` | The content of the email template, represented as a string. |
| `createdAt` | `int` | The timestamp indicating when the email template was created, represented as an integer in int64 format. |
| `folderId` | `str` | The identifier of the folder where the email template is stored, represented as a string. |
| `id` | `str` | The unique identifier for the email template, represented as a string. |
| `name` | `str` | The name of the email template, represented as a string. |
| `ownerId` | `str` | The identifier of the owner of the email template, represented as a string. |
| `subject` | `str` | The subject line of the email template, represented as a string. |
| `updatedAt` | `int` | The timestamp indicating when the email template was last updated, represented as an integer in int64 format. |

#### Example: List

```python
email_templates_collection_response_public_template_forward_pagings = client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging().list()
```


### EmailTemplatesPublicTemplate

Create an instance: `email_templates_public_template = client.EmailTemplatesPublicTemplate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `str` | The content of the email template, represented as a string. |
| `createdAt` | `int` | The timestamp indicating when the email template was created, represented as an integer in int64 format. |
| `folderId` | `str` | The identifier of the folder where the email template is stored, represented as a string. |
| `id` | `str` | The unique identifier for the email template, represented as a string. |
| `name` | `str` | The name of the email template, represented as a string. |
| `ownerId` | `str` | The identifier of the owner of the email template, represented as a string. |
| `subject` | `str` | The subject line of the email template, represented as a string. |
| `updatedAt` | `int` | The timestamp indicating when the email template was last updated, represented as an integer in int64 format. |

#### Example: Load

```python
email_templates_public_template = client.EmailTemplatesPublicTemplate().load({"template_id": 1})
```

#### Example: Create

```python
email_templates_public_template = client.EmailTemplatesPublicTemplate().create({
    "id": "example_id",  # str
})
```


### Function

Create an instance: `function = client.Function()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Sequence

Create an instance: `sequence = client.Sequence()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | `list` | An array of dependencies between steps in the sequence, each represented by a PublicSequenceStepDependencyResponse object. |
| `dynamic` | `bool` | A boolean indicating whether the sequence is dynamic. |
| `engagementTriggers` | `dict` |  |
| `folderId` | `str` | The identifier for the folder containing the sequence. |
| `id` | `str` | The unique identifier for the sequence. |
| `name` | `str` | The name of the sequence. |
| `sequence` | `dict` |  |
| `settings` | `dict` |  |
| `steps` | `list` | An array of steps included in the sequence, each represented by a PublicSequenceStepResponseV2 object. |
| `updatedAt` | `str` | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `str` | The unique identifier of the user who owns the sequence. |
| `userView` | `dict` |  |

#### Example: Load

```python
sequence = client.Sequence().load({"id": "sequence_id"})
```

#### Example: List

```python
sequences = client.Sequence().list()
```

#### Example: Create

```python
sequence = client.Sequence().create({
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


### SequencesCollectionResponseWithTotalPublicSequenceLite

Create an instance: `sequences_collection_response_with_total_public_sequence_lite = client.SequencesCollectionResponseWithTotalPublicSequenceLite()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | The date and time when the sequence was created, in ISO 8601 format. |
| `folderId` | `str` | The identifier of the folder containing the sequence, represented as a string. |
| `id` | `str` | The unique identifier for the sequence, represented as a string. |
| `name` | `str` | The name of the sequence, represented as a string. |
| `updatedAt` | `str` | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `str` | The unique identifier of the user associated with the sequence, represented as a string. |

#### Example: List

```python
sequences_collection_response_with_total_public_sequence_lites = client.SequencesCollectionResponseWithTotalPublicSequenceLite().list({"user_id": "example"})
```


### SequencesPublicSequence

Create an instance: `sequences_public_sequence = client.SequencesPublicSequence()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `str` | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | `list` | An array of dependencies between sequence steps, each represented by a PublicSequenceStepDependencyResponse object. |
| `folderId` | `str` | The unique identifier for the folder containing the sequence. |
| `id` | `str` | The unique identifier for the sequence. |
| `name` | `str` | The name of the sequence. |
| `settings` | `dict` |  |
| `steps` | `list` | An array of steps included in the sequence, each represented by a PublicSequenceStepResponse object. |
| `updatedAt` | `str` | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `str` | The unique identifier of the user who owns the sequence. |

#### Example: Load

```python
sequences_public_sequence = client.SequencesPublicSequence().load({"sequence_id": "sequence_id", "user_id": "user_id"})
```


### SequencesPublicSequenceEnrollment

Create an instance: `sequences_public_sequence_enrollment = client.SequencesPublicSequenceEnrollment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enrolledAt` | `str` | The date and time when the contact was enrolled in the sequence, in ISO 8601 format. |
| `enrolledBy` | `str` | The unique identifier of the user who enrolled the contact in the sequence. |
| `enrolledByEmail` | `str` | The email address of the user who enrolled the contact in the sequence. |
| `id` | `str` | The unique identifier for the sequence enrollment. |
| `sequenceId` | `str` | The unique identifier of the sequence in which the contact is enrolled. |
| `sequenceName` | `str` | The name of the sequence in which the contact is enrolled. |
| `toEmail` | `str` | The email address of the contact enrolled in the sequence. |
| `updatedAt` | `str` | The date and time when the sequence enrollment was last updated, in ISO 8601 format. |

#### Example: Load

```python
sequences_public_sequence_enrollment = client.SequencesPublicSequenceEnrollment().load({"contact_id": "contact_id"})
```


### SequencesPublicSequenceEnrollmentLite

Create an instance: `sequences_public_sequence_enrollment_lite = client.SequencesPublicSequenceEnrollmentLite()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contactId` | `str` | The unique identifier of the contact to be enrolled in the sequence. |
| `enrolledAt` | `str` | The date and time when the contact was enrolled in the sequence, in ISO 8601 format. |
| `id` | `str` | The unique identifier for the sequence enrollment. |
| `senderAliasAddress` | `str` | An optional alias email address that can be used as the sender's address. |
| `senderEmail` | `str` | The email address of the sender responsible for the sequence enrollment. |
| `sequenceId` | `str` | The unique identifier of the sequence in which the contact is to be enrolled. |
| `toEmail` | `str` | The email address of the contact who is enrolled in the sequence. |
| `updatedAt` | `str` | The date and time when the sequence enrollment was last updated, in ISO 8601 format. |

#### Example: Create

```python
sequences_public_sequence_enrollment_lite = client.SequencesPublicSequenceEnrollmentLite().create({
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


### SequencesPublicSequencePerformance

Create an instance: `sequences_public_sequence_performance = client.SequencesPublicSequencePerformance()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `companyMetrics` | `dict` |  |
| `sequenceId` | `str` | The unique identifier for the sequence, represented as a string. |
| `statusByStep` | `list` | An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order. |
| `steps` | `list` | An array of objects, each representing the performance metrics for individual steps within the sequence. |
| `summary` | `dict` |  |
| `timeline` | `list` | An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked. |

#### Example: List

```python
sequences_public_sequence_performances = client.SequencesPublicSequencePerformance().list({"sequence_id": "example"})
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

Features are the extension mechanism. A feature is a Python class
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

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── hubspotautomation_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`hubspotautomation_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
sequencescollectionresponsewithtotalpublicsequencelite = client.SequencesCollectionResponseWithTotalPublicSequenceLite()
sequencescollectionresponsewithtotalpublicsequencelite.list()

# sequencescollectionresponsewithtotalpublicsequencelite.data_get() now returns the sequencescollectionresponsewithtotalpublicsequencelite data from the last list
# sequencescollectionresponsewithtotalpublicsequencelite.match_get() returns the last match criteria
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
