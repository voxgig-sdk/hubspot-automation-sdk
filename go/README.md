# HubspotAutomation Golang SDK



The Golang SDK for the HubspotAutomation API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.ActionsV4CollectionResponsePublicActionDefinitionForward(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/hubspot-automation-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/hubspot-automation-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/hubspot-automation-sdk/go=../hubspot-automation-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/hubspot-automation-sdk/go"
)

func main() {
    client := sdk.NewHubspotAutomationSDK(map[string]any{
        "apikey": os.Getenv("HUBSPOT_AUTOMATION_APIKEY"),
    })

    // Load a single actionsV4CollectionResponsePublicActionDefinitionForward — the value is the loaded record.
    actionsV4CollectionResponsePublicActionDefinitionForward, err := client.ActionsV4CollectionResponsePublicActionDefinitionForward(nil).Load(map[string]any{"app_id": 1}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(actionsV4CollectionResponsePublicActionDefinitionForward)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
sequencescollectionresponsewithtotalpublicsequencelites, err := client.SequencesCollectionResponseWithTotalPublicSequenceLite(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = sequencescollectionresponsewithtotalpublicsequencelites
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

sequencesCollectionResponseWithTotalPublicSequenceLite, err := client.SequencesCollectionResponseWithTotalPublicSequenceLite(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(sequencesCollectionResponseWithTotalPublicSequenceLite) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewHubspotAutomationSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewHubspotAutomationSDK

```go
func NewHubspotAutomationSDK(options map[string]any) *HubspotAutomationSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *HubspotAutomationSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### HubspotAutomationSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `ActionsV4CollectionResponsePublicActionDefinitionForward` | `(data map[string]any) HubspotAutomationEntity` | Create an ActionsV4CollectionResponsePublicActionDefinitionForward entity instance. |
| `ActionsV4CollectionResponsePublicActionFunctionIdentifierNo` | `(data map[string]any) HubspotAutomationEntity` | Create an ActionsV4CollectionResponsePublicActionFunctionIdentifierNo entity instance. |
| `ActionsV4CollectionResponsePublicActionRevisionForward` | `(data map[string]any) HubspotAutomationEntity` | Create an ActionsV4CollectionResponsePublicActionRevisionForward entity instance. |
| `ActionsV4PublicActionDefinition` | `(data map[string]any) HubspotAutomationEntity` | Create an ActionsV4PublicActionDefinition entity instance. |
| `ActionsV4PublicActionDefinitionRequiresObject` | `(data map[string]any) HubspotAutomationEntity` | Create an ActionsV4PublicActionDefinitionRequiresObject entity instance. |
| `ActionsV4PublicActionFunction` | `(data map[string]any) HubspotAutomationEntity` | Create an ActionsV4PublicActionFunction entity instance. |
| `ActionsV4PublicActionFunctionIdentifier` | `(data map[string]any) HubspotAutomationEntity` | Create an ActionsV4PublicActionFunctionIdentifier entity instance. |
| `ActionsV4PublicActionRevision` | `(data map[string]any) HubspotAutomationEntity` | Create an ActionsV4PublicActionRevision entity instance. |
| `AutomationV4ApiFlow` | `(data map[string]any) HubspotAutomationEntity` | Create an AutomationV4ApiFlow entity instance. |
| `AutomationV4BatchResponseApiFlow` | `(data map[string]any) HubspotAutomationEntity` | Create an AutomationV4BatchResponseApiFlow entity instance. |
| `AutomationV4BatchResponseFlowIdWorkflowIdMapping` | `(data map[string]any) HubspotAutomationEntity` | Create an AutomationV4BatchResponseFlowIdWorkflowIdMapping entity instance. |
| `AutomationV4CollectionResponseApiFlowEmailCampaign` | `(data map[string]any) HubspotAutomationEntity` | Create an AutomationV4CollectionResponseApiFlowEmailCampaign entity instance. |
| `AutomationV4CollectionResponseApiFlowListingForwardPaging` | `(data map[string]any) HubspotAutomationEntity` | Create an AutomationV4CollectionResponseApiFlowListingForwardPaging entity instance. |
| `AutomationV4CollectionResponseApiHistogramDataPointNo` | `(data map[string]any) HubspotAutomationEntity` | Create an AutomationV4CollectionResponseApiHistogramDataPointNo entity instance. |
| `Basic` | `(data map[string]any) HubspotAutomationEntity` | Create a Basic entity instance. |
| `Callback` | `(data map[string]any) HubspotAutomationEntity` | Create a Callback entity instance. |
| `Definition` | `(data map[string]any) HubspotAutomationEntity` | Create a Definition entity instance. |
| `EmailTemplatesCollectionResponsePublicFolderForwardPaging` | `(data map[string]any) HubspotAutomationEntity` | Create an EmailTemplatesCollectionResponsePublicFolderForwardPaging entity instance. |
| `EmailTemplatesCollectionResponsePublicTemplateForwardPaging` | `(data map[string]any) HubspotAutomationEntity` | Create an EmailTemplatesCollectionResponsePublicTemplateForwardPaging entity instance. |
| `EmailTemplatesPublicTemplate` | `(data map[string]any) HubspotAutomationEntity` | Create an EmailTemplatesPublicTemplate entity instance. |
| `Function` | `(data map[string]any) HubspotAutomationEntity` | Create a Function entity instance. |
| `Sequence` | `(data map[string]any) HubspotAutomationEntity` | Create a Sequence entity instance. |
| `SequencesCollectionResponseWithTotalPublicSequenceLite` | `(data map[string]any) HubspotAutomationEntity` | Create a SequencesCollectionResponseWithTotalPublicSequenceLite entity instance. |
| `SequencesPublicSequence` | `(data map[string]any) HubspotAutomationEntity` | Create a SequencesPublicSequence entity instance. |
| `SequencesPublicSequenceEnrollment` | `(data map[string]any) HubspotAutomationEntity` | Create a SequencesPublicSequenceEnrollment entity instance. |
| `SequencesPublicSequenceEnrollmentLite` | `(data map[string]any) HubspotAutomationEntity` | Create a SequencesPublicSequenceEnrollmentLite entity instance. |
| `SequencesPublicSequencePerformance` | `(data map[string]any) HubspotAutomationEntity` | Create a SequencesPublicSequencePerformance entity instance. |

### Entity interface (HubspotAutomationEntity)

All entities implement the `HubspotAutomationEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    actionsV4CollectionResponsePublicActionDefinitionForward, err := client.ActionsV4CollectionResponsePublicActionDefinitionForward(nil).Load(nil, nil)
    if err != nil { /* handle */ }
    // actionsV4CollectionResponsePublicActionDefinitionForward is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### ActionsV4CollectionResponsePublicActionDefinitionForward

| Field | Description |
| --- | --- |
| `"paging"` | Paging information for forward-only pagination. |
| `"results"` | An array of public action definitions, each represented by a PublicActionDefinition object. |

Operations: Load.

API path: `/automation/actions/2026-09/{appId}`

#### ActionsV4CollectionResponsePublicActionFunctionIdentifierNo

| Field | Description |
| --- | --- |
| `"functionType"` | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `"id"` | The unique identifier for the function. |

Operations: List.

API path: `/automation/actions/2026-09/{appId}/{definitionId}/functions`

#### ActionsV4CollectionResponsePublicActionRevisionForward

| Field | Description |
| --- | --- |
| `"createdAt"` | The date and time when the action revision was created. |
| `"definition"` |  |
| `"id"` | The unique identifier for the action revision. |
| `"revisionId"` | The unique identifier for the specific revision of the action. |

Operations: List.

API path: `/automation/actions/2026-09/{appId}/{definitionId}/revisions`

#### ActionsV4PublicActionDefinition

| Field | Description |
| --- | --- |
| `"actionUrl"` | The URL endpoint where the action is executed. |
| `"archivedAt"` | A Unix timestamp in milliseconds representing when the action was archived. |
| `"executionRules"` | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `"functions"` | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `"id"` | The unique identifier for the action definition. |
| `"inputFieldDependencies"` | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `"inputFields"` | An array of input field definitions required for the action. |
| `"labels"` | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `"objectRequestOptions"` |  |
| `"objectTypes"` | An array of strings representing the types of objects associated with the action. |
| `"outputFields"` | An array of output field definitions produced by the action. |
| `"published"` | A boolean indicating whether the action is published and available for use. |
| `"revisionId"` | The unique identifier for the current revision of the action definition. |

Operations: Create, Load, Update.

API path: `/automation/actions/2026-09/{appId}`

#### ActionsV4PublicActionDefinitionRequiresObject

| Field | Description |
| --- | --- |
| `"requiresObject"` | Indicates whether a custom action definition requires an object. |

Operations: Load.

API path: `/automation/actions/2026-09/{appId}/{definitionId}/requires-object`

#### ActionsV4PublicActionFunction

| Field | Description |
| --- | --- |
| `"functionSource"` | The source code or script that defines the function's behavior. |
| `"functionType"` | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `"id"` | The unique identifier for the action function. |

Operations: Load.

API path: `/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}`

#### ActionsV4PublicActionFunctionIdentifier

| Field | Description |
| --- | --- |
| `"functionType"` | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `"id"` | The unique identifier for the function. |

Operations: Update.

API path: `/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}`

#### ActionsV4PublicActionRevision

| Field | Description |
| --- | --- |
| `"actionUrl"` | The URL endpoint where the action is executed. |
| `"archivedAt"` | A Unix timestamp in milliseconds representing when the action was archived. |
| `"executionRules"` | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `"functions"` | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `"id"` | The unique identifier for the action definition. |
| `"inputFieldDependencies"` | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `"inputFields"` | An array of input field definitions required for the action. |
| `"labels"` | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `"objectRequestOptions"` |  |
| `"objectTypes"` | An array of strings representing the types of objects associated with the action. |
| `"outputFields"` | An array of output field definitions produced by the action. |
| `"published"` | A boolean indicating whether the action is published and available for use. |
| `"revisionId"` | The unique identifier for the current revision of the action definition. |

Operations: Load.

API path: `/automation/actions/2026-09/{appId}/{definitionId}/revisions/{revisionId}`

#### AutomationV4ApiFlow

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create, Load, Update.

API path: `/automation/v4/flows`

#### AutomationV4BatchResponseApiFlow

| Field | Description |
| --- | --- |
| `"completedAt"` | The date and time when the batch process was completed, formatted as a date-time string. |
| `"inputs"` |  |
| `"links"` | A collection of URLs related to the batch process, empty for this operation. |
| `"requestedAt"` | The date and time when the batch request was initiated, formatted as a date-time string. |
| `"results"` |  |
| `"startedAt"` | The date and time when the batch process began, formatted as a date-time string. |
| `"status"` | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

Operations: Create.

API path: `/automation/v4/flows/batch/read`

#### AutomationV4BatchResponseFlowIdWorkflowIdMapping

| Field | Description |
| --- | --- |
| `"completedAt"` | The date and time when the batch process was completed, formatted as a date-time string. |
| `"inputs"` |  |
| `"links"` | A collection of URLs related to the batch process. |
| `"requestedAt"` | The date and time when the batch request was initiated, formatted as a date-time string. |
| `"results"` |  |
| `"startedAt"` | The date and time when the batch process began, formatted as a date-time string. |
| `"status"` | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

Operations: Create.

API path: `/automation/v4/workflow-id-mappings/batch/read`

#### AutomationV4CollectionResponseApiFlowEmailCampaign

| Field | Description |
| --- | --- |
| `"emailCampaignId"` | The unique identifier for the email campaign associated with the automation flow. |
| `"emailContentId"` | The unique identifier for the email content used in the email campaign. |
| `"flowId"` | The unique identifier for the automation flow associated with the email campaign. |

Operations: List.

API path: `/automation/v4/flows/email-campaigns`

#### AutomationV4CollectionResponseApiFlowListingForwardPaging

| Field | Description |
| --- | --- |
| `"createdAt"` | The date and time when the automation flow was created, formatted as a date-time string. |
| `"flowType"` | Specifies the type of the automation flow (PLATFORM vs. |
| `"id"` | The unique identifier for the automation flow. |
| `"isEnabled"` | Indicates whether the automation flow is currently active. |
| `"name"` | The name assigned to the automation flow. |
| `"objectTypeId"` | Represents the ID of the object type associated with the automation flow. |
| `"revisionId"` | The identifier for the current revision of the automation flow. |
| `"updatedAt"` | The date and time when the automation flow was last updated, formatted as a date-time string. |
| `"uuid"` | The universally unique identifier for the automation flow. |

Operations: List.

API path: `/automation/v4/flows`

#### AutomationV4CollectionResponseApiHistogramDataPointNo

| Field | Description |
| --- | --- |
| `"results"` |  |

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
| `"failureReasonType"` | Indicates the reason for the failure of a callback completion. |
| `"inputs"` | An array of CallbackCompletionBatchRequest objects, each representing a single callback completion request. |
| `"outputFields"` | Contains the output fields associated with the callback, with each field represented as a key-value pair. |
| `"requestContext"` | Specifies the context in which the request is made, which can be one of several predefined contexts. |
| `"typedOutputs"` | Holds the typed outputs related to the callback, structured as an object. |

Operations: Create.

API path: `/automation/actions/callbacks/2026-09/{callbackId}/complete`

#### Definition

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"requiresObject"` | Indicates whether a custom action definition requires an associated object. |

Operations: Create, Remove.

API path: `/automation/actions/2026-09/{appId}/{definitionId}/requires-object`

#### EmailTemplatesCollectionResponsePublicFolderForwardPaging

| Field | Description |
| --- | --- |
| `"createdAt"` | The timestamp indicating when the folder was created, represented as an integer in int64 format. |
| `"id"` | The unique identifier for the folder, represented as a string. |
| `"name"` | The name of the folder, represented as a string. |
| `"updatedAt"` | The timestamp indicating when the folder was last updated, represented as an integer in int64 format. |

Operations: List.

API path: `/automation/email-templates/2026-09/folders`

#### EmailTemplatesCollectionResponsePublicTemplateForwardPaging

| Field | Description |
| --- | --- |
| `"body"` | The content of the email template, represented as a string. |
| `"createdAt"` | The timestamp indicating when the email template was created, represented as an integer in int64 format. |
| `"folderId"` | The identifier of the folder where the email template is stored, represented as a string. |
| `"id"` | The unique identifier for the email template, represented as a string. |
| `"name"` | The name of the email template, represented as a string. |
| `"ownerId"` | The identifier of the owner of the email template, represented as a string. |
| `"subject"` | The subject line of the email template, represented as a string. |
| `"updatedAt"` | The timestamp indicating when the email template was last updated, represented as an integer in int64 format. |

Operations: List.

API path: `/automation/email-templates/2026-09`

#### EmailTemplatesPublicTemplate

| Field | Description |
| --- | --- |
| `"body"` | The content of the email template, represented as a string. |
| `"createdAt"` | The timestamp indicating when the email template was created, represented as an integer in int64 format. |
| `"folderId"` | The identifier of the folder where the email template is stored, represented as a string. |
| `"id"` | The unique identifier for the email template, represented as a string. |
| `"name"` | The name of the email template, represented as a string. |
| `"ownerId"` | The identifier of the owner of the email template, represented as a string. |
| `"subject"` | The subject line of the email template, represented as a string. |
| `"updatedAt"` | The timestamp indicating when the email template was last updated, represented as an integer in int64 format. |

Operations: Create, Load, Update.

API path: `/automation/email-templates/2026-09`

#### Function

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}`

#### Sequence

| Field | Description |
| --- | --- |
| `"createdAt"` | The date and time when the sequence was created, in ISO 8601 format. |
| `"dependencies"` | An array of dependencies between steps in the sequence, each represented by a PublicSequenceStepDependencyResponse object. |
| `"dynamic"` | A boolean indicating whether the sequence is dynamic. |
| `"engagementTriggers"` |  |
| `"folderId"` | The identifier for the folder containing the sequence. |
| `"id"` | The unique identifier for the sequence. |
| `"name"` | The name of the sequence. |
| `"sequence"` |  |
| `"settings"` |  |
| `"steps"` | An array of steps included in the sequence, each represented by a PublicSequenceStepResponseV2 object. |
| `"updatedAt"` | The date and time when the sequence was last updated, in ISO 8601 format. |
| `"userId"` | The unique identifier of the user who owns the sequence. |
| `"userView"` |  |

Operations: Create, List, Load, Update.

API path: `/automation/sequences/2026-09/serviceaccounts/sequences`

#### SequencesCollectionResponseWithTotalPublicSequenceLite

| Field | Description |
| --- | --- |
| `"createdAt"` | The date and time when the sequence was created, in ISO 8601 format. |
| `"folderId"` | The identifier of the folder containing the sequence, represented as a string. |
| `"id"` | The unique identifier for the sequence, represented as a string. |
| `"name"` | The name of the sequence, represented as a string. |
| `"updatedAt"` | The date and time when the sequence was last updated, in ISO 8601 format. |
| `"userId"` | The unique identifier of the user associated with the sequence, represented as a string. |

Operations: List.

API path: `/automation/sequences/2026-09`

#### SequencesPublicSequence

| Field | Description |
| --- | --- |
| `"createdAt"` | The date and time when the sequence was created, in ISO 8601 format. |
| `"dependencies"` | An array of dependencies between sequence steps, each represented by a PublicSequenceStepDependencyResponse object. |
| `"folderId"` | The unique identifier for the folder containing the sequence. |
| `"id"` | The unique identifier for the sequence. |
| `"name"` | The name of the sequence. |
| `"settings"` |  |
| `"steps"` | An array of steps included in the sequence, each represented by a PublicSequenceStepResponse object. |
| `"updatedAt"` | The date and time when the sequence was last updated, in ISO 8601 format. |
| `"userId"` | The unique identifier of the user who owns the sequence. |

Operations: Load.

API path: `/automation/sequences/2026-09/{sequenceId}`

#### SequencesPublicSequenceEnrollment

| Field | Description |
| --- | --- |
| `"enrolledAt"` | The date and time when the contact was enrolled in the sequence, in ISO 8601 format. |
| `"enrolledBy"` | The unique identifier of the user who enrolled the contact in the sequence. |
| `"enrolledByEmail"` | The email address of the user who enrolled the contact in the sequence. |
| `"id"` | The unique identifier for the sequence enrollment. |
| `"sequenceId"` | The unique identifier of the sequence in which the contact is enrolled. |
| `"sequenceName"` | The name of the sequence in which the contact is enrolled. |
| `"toEmail"` | The email address of the contact enrolled in the sequence. |
| `"updatedAt"` | The date and time when the sequence enrollment was last updated, in ISO 8601 format. |

Operations: Load.

API path: `/automation/sequences/2026-09/enrollments/contact/{contactId}`

#### SequencesPublicSequenceEnrollmentLite

| Field | Description |
| --- | --- |
| `"contactId"` | The unique identifier of the contact to be enrolled in the sequence. |
| `"enrolledAt"` | The date and time when the contact was enrolled in the sequence, in ISO 8601 format. |
| `"id"` | The unique identifier for the sequence enrollment. |
| `"senderAliasAddress"` | An optional alias email address that can be used as the sender's address. |
| `"senderEmail"` | The email address of the sender responsible for the sequence enrollment. |
| `"sequenceId"` | The unique identifier of the sequence in which the contact is to be enrolled. |
| `"toEmail"` | The email address of the contact who is enrolled in the sequence. |
| `"updatedAt"` | The date and time when the sequence enrollment was last updated, in ISO 8601 format. |

Operations: Create.

API path: `/automation/sequences/2026-09/enrollments`

#### SequencesPublicSequencePerformance

| Field | Description |
| --- | --- |
| `"companyMetrics"` |  |
| `"sequenceId"` | The unique identifier for the sequence, represented as a string. |
| `"statusByStep"` | An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order. |
| `"steps"` | An array of objects, each representing the performance metrics for individual steps within the sequence. |
| `"summary"` |  |
| `"timeline"` | An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked. |

Operations: List.

API path: `/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}/performance`



## Entities


### ActionsV4CollectionResponsePublicActionDefinitionForward

Create an instance: `actionsV4CollectionResponsePublicActionDefinitionForward := client.ActionsV4CollectionResponsePublicActionDefinitionForward(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `paging` | `map[string]any` | Paging information for forward-only pagination. |
| `results` | `[]any` | An array of public action definitions, each represented by a PublicActionDefinition object. |

#### Example: Load

```go
actionsV4CollectionResponsePublicActionDefinitionForward, err := client.ActionsV4CollectionResponsePublicActionDefinitionForward(nil).Load(map[string]any{"app_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsV4CollectionResponsePublicActionDefinitionForward) // the loaded record
```


### ActionsV4CollectionResponsePublicActionFunctionIdentifierNo

Create an instance: `actionsV4CollectionResponsePublicActionFunctionIdentifierNo := client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `functionType` | `string` | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | The unique identifier for the function. |

#### Example: List

```go
actionsV4CollectionResponsePublicActionFunctionIdentifierNos, err := client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsV4CollectionResponsePublicActionFunctionIdentifierNos) // the array of records
```


### ActionsV4CollectionResponsePublicActionRevisionForward

Create an instance: `actionsV4CollectionResponsePublicActionRevisionForward := client.ActionsV4CollectionResponsePublicActionRevisionForward(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | The date and time when the action revision was created. |
| `definition` | `map[string]any` |  |
| `id` | `string` | The unique identifier for the action revision. |
| `revisionId` | `string` | The unique identifier for the specific revision of the action. |

#### Example: List

```go
actionsV4CollectionResponsePublicActionRevisionForwards, err := client.ActionsV4CollectionResponsePublicActionRevisionForward(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsV4CollectionResponsePublicActionRevisionForwards) // the array of records
```


### ActionsV4PublicActionDefinition

Create an instance: `actionsV4PublicActionDefinition := client.ActionsV4PublicActionDefinition(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actionUrl` | `string` | The URL endpoint where the action is executed. |
| `archivedAt` | `int` | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | `[]any` | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | `[]any` | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | `string` | The unique identifier for the action definition. |
| `inputFieldDependencies` | `[]any` | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | `[]any` | An array of input field definitions required for the action. |
| `labels` | `map[string]any` | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` | `map[string]any` |  |
| `objectTypes` | `[]any` | An array of strings representing the types of objects associated with the action. |
| `outputFields` | `[]any` | An array of output field definitions produced by the action. |
| `published` | `bool` | A boolean indicating whether the action is published and available for use. |
| `revisionId` | `string` | The unique identifier for the current revision of the action definition. |

#### Example: Load

```go
actionsV4PublicActionDefinition, err := client.ActionsV4PublicActionDefinition(nil).Load(map[string]any{"app_id": 1, "definition_id": "definition_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsV4PublicActionDefinition) // the loaded record
```

#### Example: Create

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


### ActionsV4PublicActionDefinitionRequiresObject

Create an instance: `actionsV4PublicActionDefinitionRequiresObject := client.ActionsV4PublicActionDefinitionRequiresObject(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `requiresObject` | `bool` | Indicates whether a custom action definition requires an object. |

#### Example: Load

```go
actionsV4PublicActionDefinitionRequiresObject, err := client.ActionsV4PublicActionDefinitionRequiresObject(nil).Load(map[string]any{"app_id": 1, "definition_id": "definition_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsV4PublicActionDefinitionRequiresObject) // the loaded record
```


### ActionsV4PublicActionFunction

Create an instance: `actionsV4PublicActionFunction := client.ActionsV4PublicActionFunction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `functionSource` | `string` | The source code or script that defines the function's behavior. |
| `functionType` | `string` | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | The unique identifier for the action function. |

#### Example: Load

```go
actionsV4PublicActionFunction, err := client.ActionsV4PublicActionFunction(nil).Load(map[string]any{"id": "actions_v4_public_action_function_id", "app_id": 1, "definition_id": "definition_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsV4PublicActionFunction) // the loaded record
```


### ActionsV4PublicActionFunctionIdentifier

Create an instance: `actionsV4PublicActionFunctionIdentifier := client.ActionsV4PublicActionFunctionIdentifier(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `functionType` | `string` | The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS. |
| `id` | `string` | The unique identifier for the function. |


### ActionsV4PublicActionRevision

Create an instance: `actionsV4PublicActionRevision := client.ActionsV4PublicActionRevision(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actionUrl` | `string` | The URL endpoint where the action is executed. |
| `archivedAt` | `int` | A Unix timestamp in milliseconds representing when the action was archived. |
| `executionRules` | `[]any` | An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule. |
| `functions` | `[]any` | An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier. |
| `id` | `string` | The unique identifier for the action definition. |
| `inputFieldDependencies` | `[]any` | An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency. |
| `inputFields` | `[]any` | An array of input field definitions required for the action. |
| `labels` | `map[string]any` | An object containing labels for the action, with each property being a PublicActionLabels object. |
| `objectRequestOptions` | `map[string]any` |  |
| `objectTypes` | `[]any` | An array of strings representing the types of objects associated with the action. |
| `outputFields` | `[]any` | An array of output field definitions produced by the action. |
| `published` | `bool` | A boolean indicating whether the action is published and available for use. |
| `revisionId` | `string` | The unique identifier for the current revision of the action definition. |

#### Example: Load

```go
actionsV4PublicActionRevision, err := client.ActionsV4PublicActionRevision(nil).Load(map[string]any{"id": "actions_v4_public_action_revision_id", "app_id": 1, "definition_id": "definition_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionsV4PublicActionRevision) // the loaded record
```


### AutomationV4ApiFlow

Create an instance: `automationV4ApiFlow := client.AutomationV4ApiFlow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
automationV4ApiFlow, err := client.AutomationV4ApiFlow(nil).Load(map[string]any{"id": "automation_v4_api_flow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(automationV4ApiFlow) // the loaded record
```

#### Example: Create

```go
result, err := client.AutomationV4ApiFlow(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AutomationV4BatchResponseApiFlow

Create an instance: `automationV4BatchResponseApiFlow := client.AutomationV4BatchResponseApiFlow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` | `[]any` |  |
| `links` | `map[string]any` | A collection of URLs related to the batch process, empty for this operation. |
| `requestedAt` | `string` | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` | `[]any` |  |
| `startedAt` | `string` | The date and time when the batch process began, formatted as a date-time string. |
| `status` | `string` | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

#### Example: Create

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


### AutomationV4BatchResponseFlowIdWorkflowIdMapping

Create an instance: `automationV4BatchResponseFlowIdWorkflowIdMapping := client.AutomationV4BatchResponseFlowIdWorkflowIdMapping(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completedAt` | `string` | The date and time when the batch process was completed, formatted as a date-time string. |
| `inputs` | `[]any` |  |
| `links` | `map[string]any` | A collection of URLs related to the batch process. |
| `requestedAt` | `string` | The date and time when the batch request was initiated, formatted as a date-time string. |
| `results` | `[]any` |  |
| `startedAt` | `string` | The date and time when the batch process began, formatted as a date-time string. |
| `status` | `string` | The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING. |

#### Example: Create

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


### AutomationV4CollectionResponseApiFlowEmailCampaign

Create an instance: `automationV4CollectionResponseApiFlowEmailCampaign := client.AutomationV4CollectionResponseApiFlowEmailCampaign(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emailCampaignId` | `string` | The unique identifier for the email campaign associated with the automation flow. |
| `emailContentId` | `string` | The unique identifier for the email content used in the email campaign. |
| `flowId` | `string` | The unique identifier for the automation flow associated with the email campaign. |

#### Example: List

```go
automationV4CollectionResponseApiFlowEmailCampaigns, err := client.AutomationV4CollectionResponseApiFlowEmailCampaign(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(automationV4CollectionResponseApiFlowEmailCampaigns) // the array of records
```


### AutomationV4CollectionResponseApiFlowListingForwardPaging

Create an instance: `automationV4CollectionResponseApiFlowListingForwardPaging := client.AutomationV4CollectionResponseApiFlowListingForwardPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
automationV4CollectionResponseApiFlowListingForwardPagings, err := client.AutomationV4CollectionResponseApiFlowListingForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(automationV4CollectionResponseApiFlowListingForwardPagings) // the array of records
```


### AutomationV4CollectionResponseApiHistogramDataPointNo

Create an instance: `automationV4CollectionResponseApiHistogramDataPointNo := client.AutomationV4CollectionResponseApiHistogramDataPointNo(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `results` | `[]any` |  |

#### Example: Load

```go
automationV4CollectionResponseApiHistogramDataPointNo, err := client.AutomationV4CollectionResponseApiHistogramDataPointNo(nil).Load(map[string]any{"flow_id": "flow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(automationV4CollectionResponseApiHistogramDataPointNo) // the loaded record
```


### Basic

Create an instance: `basic := client.Basic(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Callback

Create an instance: `callback := client.Callback(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `failureReasonType` | `string` | Indicates the reason for the failure of a callback completion. |
| `inputs` | `[]any` | An array of CallbackCompletionBatchRequest objects, each representing a single callback completion request. |
| `outputFields` | `map[string]any` | Contains the output fields associated with the callback, with each field represented as a key-value pair. |
| `requestContext` | `any` | Specifies the context in which the request is made, which can be one of several predefined contexts. |
| `typedOutputs` | `map[string]any` | Holds the typed outputs related to the callback, structured as an object. |

#### Example: Create

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


### Definition

Create an instance: `definition := client.Definition(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `requiresObject` | `bool` | Indicates whether a custom action definition requires an associated object. |

#### Example: Create

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


### EmailTemplatesCollectionResponsePublicFolderForwardPaging

Create an instance: `emailTemplatesCollectionResponsePublicFolderForwardPaging := client.EmailTemplatesCollectionResponsePublicFolderForwardPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `int` | The timestamp indicating when the folder was created, represented as an integer in int64 format. |
| `id` | `string` | The unique identifier for the folder, represented as a string. |
| `name` | `string` | The name of the folder, represented as a string. |
| `updatedAt` | `int` | The timestamp indicating when the folder was last updated, represented as an integer in int64 format. |

#### Example: List

```go
emailTemplatesCollectionResponsePublicFolderForwardPagings, err := client.EmailTemplatesCollectionResponsePublicFolderForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(emailTemplatesCollectionResponsePublicFolderForwardPagings) // the array of records
```


### EmailTemplatesCollectionResponsePublicTemplateForwardPaging

Create an instance: `emailTemplatesCollectionResponsePublicTemplateForwardPaging := client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
emailTemplatesCollectionResponsePublicTemplateForwardPagings, err := client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(emailTemplatesCollectionResponsePublicTemplateForwardPagings) // the array of records
```


### EmailTemplatesPublicTemplate

Create an instance: `emailTemplatesPublicTemplate := client.EmailTemplatesPublicTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

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

```go
emailTemplatesPublicTemplate, err := client.EmailTemplatesPublicTemplate(nil).Load(map[string]any{"template_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(emailTemplatesPublicTemplate) // the loaded record
```

#### Example: Create

```go
result, err := client.EmailTemplatesPublicTemplate(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Function

Create an instance: `function := client.Function(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Sequence

Create an instance: `sequence := client.Sequence(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | `[]any` | An array of dependencies between steps in the sequence, each represented by a PublicSequenceStepDependencyResponse object. |
| `dynamic` | `bool` | A boolean indicating whether the sequence is dynamic. |
| `engagementTriggers` | `map[string]any` |  |
| `folderId` | `string` | The identifier for the folder containing the sequence. |
| `id` | `string` | The unique identifier for the sequence. |
| `name` | `string` | The name of the sequence. |
| `sequence` | `map[string]any` |  |
| `settings` | `map[string]any` |  |
| `steps` | `[]any` | An array of steps included in the sequence, each represented by a PublicSequenceStepResponseV2 object. |
| `updatedAt` | `string` | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `string` | The unique identifier of the user who owns the sequence. |
| `userView` | `map[string]any` |  |

#### Example: Load

```go
sequence, err := client.Sequence(nil).Load(map[string]any{"id": "sequence_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(sequence) // the loaded record
```

#### Example: List

```go
sequences, err := client.Sequence(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(sequences) // the array of records
```

#### Example: Create

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


### SequencesCollectionResponseWithTotalPublicSequenceLite

Create an instance: `sequencesCollectionResponseWithTotalPublicSequenceLite := client.SequencesCollectionResponseWithTotalPublicSequenceLite(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
sequencesCollectionResponseWithTotalPublicSequenceLites, err := client.SequencesCollectionResponseWithTotalPublicSequenceLite(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(sequencesCollectionResponseWithTotalPublicSequenceLites) // the array of records
```


### SequencesPublicSequence

Create an instance: `sequencesPublicSequence := client.SequencesPublicSequence(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` | The date and time when the sequence was created, in ISO 8601 format. |
| `dependencies` | `[]any` | An array of dependencies between sequence steps, each represented by a PublicSequenceStepDependencyResponse object. |
| `folderId` | `string` | The unique identifier for the folder containing the sequence. |
| `id` | `string` | The unique identifier for the sequence. |
| `name` | `string` | The name of the sequence. |
| `settings` | `map[string]any` |  |
| `steps` | `[]any` | An array of steps included in the sequence, each represented by a PublicSequenceStepResponse object. |
| `updatedAt` | `string` | The date and time when the sequence was last updated, in ISO 8601 format. |
| `userId` | `string` | The unique identifier of the user who owns the sequence. |

#### Example: Load

```go
sequencesPublicSequence, err := client.SequencesPublicSequence(nil).Load(map[string]any{"sequence_id": "sequence_id", "user_id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(sequencesPublicSequence) // the loaded record
```


### SequencesPublicSequenceEnrollment

Create an instance: `sequencesPublicSequenceEnrollment := client.SequencesPublicSequenceEnrollment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
sequencesPublicSequenceEnrollment, err := client.SequencesPublicSequenceEnrollment(nil).Load(map[string]any{"contact_id": "contact_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(sequencesPublicSequenceEnrollment) // the loaded record
```


### SequencesPublicSequenceEnrollmentLite

Create an instance: `sequencesPublicSequenceEnrollmentLite := client.SequencesPublicSequenceEnrollmentLite(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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


### SequencesPublicSequencePerformance

Create an instance: `sequencesPublicSequencePerformance := client.SequencesPublicSequencePerformance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `companyMetrics` | `map[string]any` |  |
| `sequenceId` | `string` | The unique identifier for the sequence, represented as a string. |
| `statusByStep` | `[]any` | An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order. |
| `steps` | `[]any` | An array of objects, each representing the performance metrics for individual steps within the sequence. |
| `summary` | `map[string]any` |  |
| `timeline` | `[]any` | An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked. |

#### Example: List

```go
sequencesPublicSequencePerformances, err := client.SequencesPublicSequencePerformance(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(sequencesPublicSequencePerformances) // the array of records
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/hubspot-automation-sdk/go/
├── hubspot-automation.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/hubspot-automation-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
sequencescollectionresponsewithtotalpublicsequencelite := client.SequencesCollectionResponseWithTotalPublicSequenceLite(nil)
sequencescollectionresponsewithtotalpublicsequencelite.List(nil, nil)

// sequencescollectionresponsewithtotalpublicsequencelite.Data() now returns the sequencescollectionresponsewithtotalpublicsequencelite data from the last list
// sequencescollectionresponsewithtotalpublicsequencelite.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
