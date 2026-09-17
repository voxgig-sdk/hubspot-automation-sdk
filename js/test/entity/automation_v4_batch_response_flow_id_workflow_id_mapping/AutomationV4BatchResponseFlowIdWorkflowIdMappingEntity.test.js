
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { HubspotAutomationSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_AUTOMATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_AUTOMATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotAutomationSDK.test()
    const ent = testsdk.AutomationV4BatchResponseFlowIdWorkflowIdMapping()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"completedAt","req":true,"short":"The date and time when the batch process was completed, formatted as a date-time string.","type":"`$STRING`","index$":0},{"active":true,"name":"inputs","req":true,"type":"`$ARRAY`","union":{"branches":2,"count":1,"depth":1},"index$":1},{"active":true,"name":"links","req":false,"short":"A collection of URLs related to the batch process.","type":"`$OBJECT`","index$":2},{"active":true,"format":"date-time","name":"requestedAt","req":false,"short":"The date and time when the batch request was initiated, formatted as a date-time string.","type":"`$STRING`","index$":3},{"active":true,"name":"results","req":true,"type":"`$ARRAY`","index$":4},{"active":true,"format":"date-time","name":"startedAt","req":true,"short":"The date and time when the batch process began, formatted as a date-time string.","type":"`$STRING`","index$":5},{"active":true,"name":"status","req":true,"short":"The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING.","type":"`$STRING`","index$":6}],"name":"automation_v4_batch_response_flow_id_workflow_id_mapping","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /automation/v4/workflow-id-mappings/batch/read","json":"{\"operationId\":\"post-/automation/v4/workflow-id-mappings/batch/read\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"inputs\":{\"example\":null,\"items\":{\"example\":null,\"oneOf\":[{\"example\":null,\"properties\":{\"flowId\":{\"example\":null,\"type\":\"string\"},\"type\":{\"default\":\"FLOW_ID\",\"description\":\"Specifies the type of coordinate, which defaults to FLOW_ID.\",\"enum\":[\"FLOW_ID\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"type\"],\"title\":\"FLOW_ID\",\"type\":\"object\"},{\"example\":null,\"properties\":{\"type\":{\"default\":\"WORKFLOW_ID\",\"description\":\"Specifies the type of coordinate, which defaults to WORKFLOW_ID.\",\"enum\":[\"WORKFLOW_ID\"],\"example\":null,\"type\":\"string\"},\"workflowId\":{\"example\":null,\"type\":\"string\"}},\"required\":[\"type\"],\"title\":\"WORKFLOW_ID\",\"type\":\"object\"}]},\"type\":\"array\"}},\"required\":[\"inputs\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"completedAt\":{\"description\":\"The date and time when the batch process was completed, formatted as a date-time string.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A collection of URLs related to the batch process.\",\"example\":null,\"type\":\"object\"},\"requestedAt\":{\"description\":\"The date and time when the batch request was initiated, formatted as a date-time string.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"results\":{\"example\":null,\"items\":{\"example\":null,\"properties\":{\"flowId\":{\"description\":\"The unique identifier for the flow associated with the workflow.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"workflowId\":{\"description\":\"The unique identifier for the workflow associated with the flow.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"flowId\",\"workflowId\"],\"type\":\"object\"},\"type\":\"array\"},\"startedAt\":{\"description\":\"The date and time when the batch process began, formatted as a date-time string.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"description\":\"The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING.\",\"enum\":[\"CANCELED\",\"COMPLETE\",\"PENDING\",\"PROCESSING\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"completedAt\",\"results\",\"startedAt\",\"status\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"207\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"completedAt\":{\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"errors\":{\"example\":null,\"items\":{\"description\":\"Represents a standard error response in the HubSpot API, providing detailed information about an error that occurred during an API request.\",\"example\":null,\"properties\":{\"category\":{\"description\":\"The main category of the error.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Additional context-specific information related to the error.\",\"example\":null,\"type\":\"object\"},\"errors\":{\"description\":\"The detailed error objects.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"A unique ID for the error instance.\",\"example\":null,\"type\":\"string\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"URLs linking to documentation or resources associated with the error.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human-readable string describing the error and possible remediation steps.\",\"example\":null,\"type\":\"string\"},\"status\":{\"description\":\"A text status code for the error, typically \\\"error\\\".\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A more specific error category within each main category.\",\"example\":null,\"properties\":{},\"type\":\"object\"}},\"required\":[\"category\",\"context\",\"errors\",\"links\",\"message\",\"status\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"example\":null,\"type\":\"object\"},\"numErrors\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"requestedAt\":{\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"results\":{\"example\":null,\"items\":{\"example\":null,\"properties\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/properties\"},\"required\":{\"$ref\":\"#/responses/200/content/application~1json/schema/properties/results/items/required\"},\"type\":\"object\"},\"type\":\"array\"},\"startedAt\":{\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"enum\":[\"CANCELED\",\"COMPLETE\",\"PENDING\",\"PROCESSING\"],\"example\":null,\"type\":\"string\"}},\"required\":[\"completedAt\",\"results\",\"startedAt\",\"status\"],\"type\":\"object\"}}},\"description\":\"multiple statuses\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"$ref\":\"#/responses/207/content/application~1json/schema/properties/errors/items/properties/errors/items/properties\"},\"required\":{\"$ref\":\"#/responses/207/content/application~1json/schema/properties/errors/items/properties/errors/items/required\"},\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"automation\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"automation\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/automation/v4/workflow-id-mappings/batch/read","segments":[{"lit":"automation"},{"lit":"v4"},{"lit":"workflow-id-mappings"},{"lit":"batch"},{"lit":"read"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"automation_v4_batch_response_flow_id_workflow_id_mapping","name__orig":"automation_v4_batch_response_flow_id_workflow_id_mapping","Name":"AutomationV4BatchResponseFlowIdWorkflowIdMapping","name_":"automation_v4_batch_response_flow_id_workflow_id_mapping","name-":"automation-v4-batch-response-flow-id-workflow-id-mapping","NAME":"AUTOMATION_V4_BATCH_RESPONSE_FLOW_ID_WORKFLOW_ID_MAPPING","index$":10}, {"active":true,"entity":"automation_v4_batch_response_flow_id_workflow_id_mapping","key$":"BasicAutomationV4BatchResponseFlowIdWorkflowIdMappingFlow","kind":"basic","name":"BasicAutomationV4BatchResponseFlowIdWorkflowIdMappingFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"automation_v4_batch_response_flow_id_workflow_id_mapping_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'AutomationV4BatchResponseFlowIdWorkflowIdMapping')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const automation_v4_batch_response_flow_id_workflow_id_mapping_ref01_ent = client.AutomationV4BatchResponseFlowIdWorkflowIdMapping()
    let automation_v4_batch_response_flow_id_workflow_id_mapping_ref01_data = setup.data.new.automation_v4_batch_response_flow_id_workflow_id_mapping['automation_v4_batch_response_flow_id_workflow_id_mapping_ref01']

    automation_v4_batch_response_flow_id_workflow_id_mapping_ref01_data = (await automation_v4_batch_response_flow_id_workflow_id_mapping_ref01_ent.create(automation_v4_batch_response_flow_id_workflow_id_mapping_ref01_data)).data()
    assert(null != automation_v4_batch_response_flow_id_workflow_id_mapping_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/automation_v4_batch_response_flow_id_workflow_id_mapping/AutomationV4BatchResponseFlowIdWorkflowIdMappingTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = HubspotAutomationSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['automation_v4_batch_response_flow_id_workflow_id_mapping01','automation_v4_batch_response_flow_id_workflow_id_mapping02','automation_v4_batch_response_flow_id_workflow_id_mapping03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_BATCH_RESPONSE_FLOW_ID_WORKFLOW_ID_MAPPING_ENTID': idmap,
    'HUBSPOT_AUTOMATION_TEST_LIVE': 'FALSE',
    'HUBSPOT_AUTOMATION_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_AUTOMATION_APIKEY': '',
  })

  idmap = env['HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_BATCH_RESPONSE_FLOW_ID_WORKFLOW_ID_MAPPING_ENTID']

  const live = 'TRUE' === env.HUBSPOT_AUTOMATION_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_BATCH_RESPONSE_FLOW_ID_WORKFLOW_ID_MAPPING_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new HubspotAutomationSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.HUBSPOT_AUTOMATION_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.HUBSPOT_AUTOMATION_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
