# HubSpot Automation API

HubSpot Automation API, merged from the vendor&#39;s per-API OpenAPI documents.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 27 entities and 43 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [ActionsV4CollectionResponsePublicActionDefinitionForward](docs/api/actions_v4_collection_response_public_action_definition_forward.html)

Results: successful operation.

SDK operations: `load`.

Key fields to recognise:

- `paging`: Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.
- `results`: An array of public action definitions, each represented by a PublicActionDefinition object.

### [ActionsV4CollectionResponsePublicActionFunctionIdentifierNo](docs/api/actions_v4_collection_response_public_action_function_identifier_no.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `functionType`: The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
- `id`: The unique identifier for the function.

### [ActionsV4CollectionResponsePublicActionRevisionForward](docs/api/actions_v4_collection_response_public_action_revision_forward.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `createdAt`: The date and time when the action revision was created.
- `id`: The unique identifier for the action revision.
- `revisionId`: The unique identifier for the specific revision of the action.

### [ActionsV4PublicActionDefinition](docs/api/actions_v4_public_action_definition.html)

Results: successful operation.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `actionUrl`: The URL endpoint where the action is executed. It is a string.
- `archivedAt`: A Unix timestamp in milliseconds representing when the action was archived. It is an integer.
- `executionRules`: An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule.
- `functions`: An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier.
- `id`: The unique identifier for the action definition. It is a string.

### [ActionsV4PublicActionDefinitionRequiresObject](docs/api/actions_v4_public_action_definition_requires_object.html)

Results: successful operation.

SDK operations: `load`.

Key fields to recognise:

- `requiresObject`: Indicates whether a custom action definition requires an object.

### [ActionsV4PublicActionFunction](docs/api/actions_v4_public_action_function.html)

Results: successful operation.

SDK operations: `load`.

Key fields to recognise:

- `functionSource`: The source code or script that defines the function&#39;s behavior.
- `functionType`: The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
- `id`: The unique identifier for the action function.

### [ActionsV4PublicActionFunctionIdentifier](docs/api/actions_v4_public_action_function_identifier.html)

Results: successful operation.

SDK operations: `update`.

Key fields to recognise:

- `functionType`: The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.
- `id`: The unique identifier for the function.

### [ActionsV4PublicActionRevision](docs/api/actions_v4_public_action_revision.html)

Results: successful operation.

SDK operations: `load`.

Key fields to recognise:

- `actionUrl`: The URL endpoint where the action is executed. It is a string.
- `archivedAt`: A Unix timestamp in milliseconds representing when the action was archived. It is an integer.
- `executionRules`: An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule.
- `functions`: An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier.
- `id`: The unique identifier for the action revision.

### [AutomationV4ApiFlow](docs/api/automation_v4_api_flow.html)

Results: successful operation.

SDK operations: `create`, `load`, `update`.

### [AutomationV4BatchResponseApiFlow](docs/api/automation_v4_batch_response_api_flow.html)

Results: successful operation; multiple statuses.

SDK operations: `create`.

Key fields to recognise:

- `completedAt`: The date and time when the batch process was completed, formatted as a date-time string.
- `links`: A collection of URLs related to the batch process, empty for this operation.
- `requestedAt`: The date and time when the batch request was initiated, formatted as a date-time string.
- `startedAt`: The date and time when the batch process began, formatted as a date-time string.
- `status`: The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING.

### [AutomationV4BatchResponseFlowIdWorkflowIdMapping](docs/api/automation_v4_batch_response_flow_id_workflow_id_mapping.html)

Results: successful operation; multiple statuses.

SDK operations: `create`.

Key fields to recognise:

- `completedAt`: The date and time when the batch process was completed, formatted as a date-time string.
- `links`: A collection of URLs related to the batch process.
- `requestedAt`: The date and time when the batch request was initiated, formatted as a date-time string.
- `startedAt`: The date and time when the batch process began, formatted as a date-time string.
- `status`: The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING.

### [AutomationV4CollectionResponseApiFlowEmailCampaign](docs/api/automation_v4_collection_response_api_flow_email_campaign.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `emailCampaignId`: The unique identifier for the email campaign associated with the automation flow.
- `emailContentId`: The unique identifier for the email content used in the email campaign.
- `flowId`: The unique identifier for the automation flow associated with the email campaign.

### [AutomationV4CollectionResponseApiFlowListingForwardPaging](docs/api/automation_v4_collection_response_api_flow_listing_forward_paging.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `createdAt`: The date and time when the automation flow was created, formatted as a date-time string.
- `flowType`: Specifies the type of the automation flow (PLATFORM vs. CONTACT)
- `id`: The unique identifier for the automation flow.
- `isEnabled`: Indicates whether the automation flow is currently active.
- `name`: The name assigned to the automation flow.

### [AutomationV4CollectionResponseApiHistogramDataPointNo](docs/api/automation_v4_collection_response_api_histogram_data_point_no.html)

Results: successful operation.

SDK operations: `load`.

### [Basic](docs/api/basic.html)

Results: No content.

SDK operations: `remove`.

### [Callback](docs/api/callback.html)

Results: No content.

SDK operations: `create`.

Key fields to recognise:

- `failureReasonType`: Indicates the reason for the failure of a callback completion.
- `inputs`: An array of CallbackCompletionBatchRequest objects, each representing a single callback completion request.
- `outputFields`: Contains the output fields associated with the callback, with each field represented as a key-value pair.
- `requestContext`: Specifies the context in which the request is made, which can be one of several predefined contexts.
- `typedOutputs`: Holds the typed outputs related to the callback, structured as an object.

### [Definition](docs/api/definition.html)

Results: No content.

SDK operations: `create`, `remove`.

Key fields to recognise:

- `requiresObject`: Indicates whether a custom action definition requires an associated object.

### [EmailTemplatesCollectionResponsePublicFolderForwardPaging](docs/api/email_templates_collection_response_public_folder_forward_paging.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `createdAt`: The timestamp indicating when the folder was created, represented as an integer in int64 format.
- `id`: The unique identifier for the folder, represented as a string.
- `name`: The name of the folder, represented as a string.
- `updatedAt`: The timestamp indicating when the folder was last updated, represented as an integer in int64 format.

### [EmailTemplatesCollectionResponsePublicTemplateForwardPaging](docs/api/email_templates_collection_response_public_template_forward_paging.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `body`: The content of the email template, represented as a string.
- `createdAt`: The timestamp indicating when the email template was created, represented as an integer in int64 format.
- `folderId`: The identifier of the folder where the email template is stored, represented as a string.
- `id`: The unique identifier for the email template, represented as a string.
- `name`: The name of the email template, represented as a string.

### [EmailTemplatesPublicTemplate](docs/api/email_templates_public_template.html)

Results: successful operation.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `body`: The content of the email template, represented as a string.
- `createdAt`: The timestamp indicating when the email template was created, represented as an integer in int64 format.
- `folderId`: The identifier of the folder where the email template is stored, represented as a string.
- `id`: The unique identifier for the email template, represented as a string.
- `name`: The name of the email template, represented as a string.

### [Function](docs/api/function.html)

Results: No content.

SDK operations: `remove`.

### [Sequence](docs/api/sequence.html)

Results: successful operation.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `createdAt`: The date and time when the sequence was created, in ISO 8601 format.
- `dependencies`: An array of dependencies between steps in the sequence, each represented by a PublicSequenceStepDependencyResponse object.
- `dynamic`: A boolean indicating whether the sequence is dynamic.
- `folderId`: The identifier for the folder containing the sequence.
- `id`: The unique identifier for the sequence.

### [SequencesCollectionResponseWithTotalPublicSequenceLite](docs/api/sequences_collection_response_with_total_public_sequence_lite.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `createdAt`: The date and time when the sequence was created, in ISO 8601 format.
- `folderId`: The identifier of the folder containing the sequence, represented as a string.
- `id`: The unique identifier for the sequence, represented as a string.
- `name`: The name of the sequence, represented as a string.
- `updatedAt`: The date and time when the sequence was last updated, in ISO 8601 format.

### [SequencesPublicSequence](docs/api/sequences_public_sequence.html)

Results: successful operation.

SDK operations: `load`.

Key fields to recognise:

- `createdAt`: The date and time when the sequence was created, in ISO 8601 format.
- `dependencies`: An array of dependencies between sequence steps, each represented by a PublicSequenceStepDependencyResponse object.
- `folderId`: The unique identifier for the folder containing the sequence.
- `id`: The unique identifier for the sequence.
- `name`: The name of the sequence.

### [SequencesPublicSequenceEnrollment](docs/api/sequences_public_sequence_enrollment.html)

Results: successful operation.

SDK operations: `load`.

Key fields to recognise:

- `enrolledAt`: The date and time when the contact was enrolled in the sequence, in ISO 8601 format.
- `enrolledBy`: The unique identifier of the user who enrolled the contact in the sequence.
- `enrolledByEmail`: The email address of the user who enrolled the contact in the sequence.
- `id`: The unique identifier for the sequence enrollment.
- `sequenceId`: The unique identifier of the sequence in which the contact is enrolled.

### [SequencesPublicSequenceEnrollmentLite](docs/api/sequences_public_sequence_enrollment_lite.html)

Results: successful operation.

SDK operations: `create`.

Key fields to recognise:

- `contactId`: The unique identifier of the contact to be enrolled in the sequence.
- `enrolledAt`: The date and time when the contact was enrolled in the sequence, in ISO 8601 format.
- `id`: The unique identifier for the sequence enrollment.
- `senderAliasAddress`: An optional alias email address that can be used as the sender&#39;s address.
- `senderEmail`: The email address of the sender responsible for the sequence enrollment.

### [SequencesPublicSequencePerformance](docs/api/sequences_public_sequence_performance.html)

Results: successful operation.

SDK operations: `list`.

Key fields to recognise:

- `sequenceId`: The unique identifier for the sequence, represented as a string.
- `statusByStep`: An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order.
- `steps`: An array of objects, each representing the performance metrics for individual steps within the sequence.
- `timeline`: An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [ActionsV4CollectionResponsePublicActionDefinitionForward](docs/api/actions_v4_collection_response_public_action_definition_forward.html) | `load` | `GET /automation/actions/2026-09/{appId}` | Required |
| [ActionsV4CollectionResponsePublicActionFunctionIdentifierNo](docs/api/actions_v4_collection_response_public_action_function_identifier_no.html) | `list` | `GET /automation/actions/2026-09/{appId}/{definitionId}/functions` | Required |
| [ActionsV4CollectionResponsePublicActionRevisionForward](docs/api/actions_v4_collection_response_public_action_revision_forward.html) | `list` | `GET /automation/actions/2026-09/{appId}/{definitionId}/revisions` | Required |
| [ActionsV4PublicActionDefinition](docs/api/actions_v4_public_action_definition.html) | `create` | `POST /automation/actions/2026-09/{appId}` | Required |
| [ActionsV4PublicActionDefinition](docs/api/actions_v4_public_action_definition.html) | `load` | `GET /automation/actions/2026-09/{appId}/{definitionId}` | Required |
| [ActionsV4PublicActionDefinition](docs/api/actions_v4_public_action_definition.html) | `update` | `PATCH /automation/actions/2026-09/{appId}/{definitionId}` | Required |
| [ActionsV4PublicActionDefinitionRequiresObject](docs/api/actions_v4_public_action_definition_requires_object.html) | `load` | `GET /automation/actions/2026-09/{appId}/{definitionId}/requires-object` | Required |
| [ActionsV4PublicActionFunction](docs/api/actions_v4_public_action_function.html) | `load` | `GET /automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}` | Required |
| [ActionsV4PublicActionFunction](docs/api/actions_v4_public_action_function.html) | `load` | `GET /automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}` | Required |
| [ActionsV4PublicActionFunctionIdentifier](docs/api/actions_v4_public_action_function_identifier.html) | `update` | `PUT /automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}` | Required |
| [ActionsV4PublicActionFunctionIdentifier](docs/api/actions_v4_public_action_function_identifier.html) | `update` | `PUT /automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}` | Required |
| [ActionsV4PublicActionRevision](docs/api/actions_v4_public_action_revision.html) | `load` | `GET /automation/actions/2026-09/{appId}/{definitionId}/revisions/{revisionId}` | Required |
| [AutomationV4ApiFlow](docs/api/automation_v4_api_flow.html) | `create` | `POST /automation/v4/flows` | Required |
| [AutomationV4ApiFlow](docs/api/automation_v4_api_flow.html) | `load` | `GET /automation/v4/flows/{flowId}` | Required |
| [AutomationV4ApiFlow](docs/api/automation_v4_api_flow.html) | `update` | `PUT /automation/v4/flows/{flowId}` | Required |
| [AutomationV4BatchResponseApiFlow](docs/api/automation_v4_batch_response_api_flow.html) | `create` | `POST /automation/v4/flows/batch/read` | Required |
| [AutomationV4BatchResponseFlowIdWorkflowIdMapping](docs/api/automation_v4_batch_response_flow_id_workflow_id_mapping.html) | `create` | `POST /automation/v4/workflow-id-mappings/batch/read` | Required |
| [AutomationV4CollectionResponseApiFlowEmailCampaign](docs/api/automation_v4_collection_response_api_flow_email_campaign.html) | `list` | `GET /automation/v4/flows/email-campaigns` | Required |
| [AutomationV4CollectionResponseApiFlowListingForwardPaging](docs/api/automation_v4_collection_response_api_flow_listing_forward_paging.html) | `list` | `GET /automation/v4/flows` | Required |
| [AutomationV4CollectionResponseApiHistogramDataPointNo](docs/api/automation_v4_collection_response_api_histogram_data_point_no.html) | `load` | `GET /automation/v4/flows/performance/{flowId}` | Required |
| [Basic](docs/api/basic.html) | `remove` | `DELETE /automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}` | Required |
| [Basic](docs/api/basic.html) | `remove` | `DELETE /automation/v4/flows/{flowId}` | Required |
| [Callback](docs/api/callback.html) | `create` | `POST /automation/actions/callbacks/2026-09/{callbackId}/complete` | Required |
| [Callback](docs/api/callback.html) | `create` | `POST /automation/actions/callbacks/2026-09/complete` | Required |
| [Definition](docs/api/definition.html) | `create` | `POST /automation/actions/2026-09/{appId}/{definitionId}/requires-object` | Required |
| [Definition](docs/api/definition.html) | `remove` | `DELETE /automation/actions/2026-09/{appId}/{definitionId}` | Required |
| [EmailTemplatesCollectionResponsePublicFolderForwardPaging](docs/api/email_templates_collection_response_public_folder_forward_paging.html) | `list` | `GET /automation/email-templates/2026-09/folders` | Required |
| [EmailTemplatesCollectionResponsePublicTemplateForwardPaging](docs/api/email_templates_collection_response_public_template_forward_paging.html) | `list` | `GET /automation/email-templates/2026-09` | Required |
| [EmailTemplatesPublicTemplate](docs/api/email_templates_public_template.html) | `create` | `POST /automation/email-templates/2026-09` | Required |
| [EmailTemplatesPublicTemplate](docs/api/email_templates_public_template.html) | `load` | `GET /automation/email-templates/2026-09/{templateId}` | Required |
| [EmailTemplatesPublicTemplate](docs/api/email_templates_public_template.html) | `update` | `PATCH /automation/email-templates/2026-09/{templateId}` | Required |
| [Function](docs/api/function.html) | `remove` | `DELETE /automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}` | Required |
| [Function](docs/api/function.html) | `remove` | `DELETE /automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}` | Required |
| [Sequence](docs/api/sequence.html) | `create` | `POST /automation/sequences/2026-09/serviceaccounts/sequences` | Required |
| [Sequence](docs/api/sequence.html) | `list` | `GET /automation/sequences/2026-09/serviceaccounts/sequences` | Required |
| [Sequence](docs/api/sequence.html) | `load` | `GET /automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}` | Required |
| [Sequence](docs/api/sequence.html) | `update` | `PUT /automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}` | Required |
| [SequencesCollectionResponseWithTotalPublicSequenceLite](docs/api/sequences_collection_response_with_total_public_sequence_lite.html) | `list` | `GET /automation/sequences/2026-09` | Required |
| [SequencesPublicSequence](docs/api/sequences_public_sequence.html) | `load` | `GET /automation/sequences/2026-09/{sequenceId}` | Required |
| [SequencesPublicSequenceEnrollment](docs/api/sequences_public_sequence_enrollment.html) | `load` | `GET /automation/sequences/2026-09/enrollments/contact/{contactId}` | Required |
| [SequencesPublicSequenceEnrollmentLite](docs/api/sequences_public_sequence_enrollment_lite.html) | `create` | `POST /automation/sequences/2026-09/enrollments` | Required |
| [SequencesPublicSequenceEnrollmentLite](docs/api/sequences_public_sequence_enrollment_lite.html) | `create` | `POST /automation/sequences/2026-09/serviceaccounts/enrollments` | Required |
| [SequencesPublicSequencePerformance](docs/api/sequences_public_sequence_performance.html) | `list` | `GET /automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}/performance` | Required |

## Connect to the API

- API server: `https://api.hubapi.com`

The default credential is sent in the `hapikey` query.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `hubspot-automation_list`: List records for an entity. Supported entities: `actions_v4_collection_response_public_action_function_identifier_no`, `actions_v4_collection_response_public_action_revision_forward`, `automation_v4_collection_response_api_flow_email_campaign`, `automation_v4_collection_response_api_flow_listing_forward_paging`, `email_templates_collection_response_public_folder_forward_paging`, `email_templates_collection_response_public_template_forward_paging`, `sequence`, `sequences_collection_response_with_total_public_sequence_lite`, `sequences_public_sequence_performance`.
- `hubspot-automation_load`: Load one record for an entity. Supported entities: `actions_v4_collection_response_public_action_definition_forward`, `actions_v4_public_action_definition`, `actions_v4_public_action_definition_requires_object`, `actions_v4_public_action_function`, `actions_v4_public_action_revision`, `automation_v4_api_flow`, `automation_v4_collection_response_api_histogram_data_point_no`, `email_templates_public_template`, `sequence`, `sequences_public_sequence`, `sequences_public_sequence_enrollment`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

