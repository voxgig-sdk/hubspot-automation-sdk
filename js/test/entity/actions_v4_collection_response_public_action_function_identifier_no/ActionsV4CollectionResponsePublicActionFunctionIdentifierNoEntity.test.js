
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


describe('ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_AUTOMATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_AUTOMATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotAutomationSDK.test()
    const ent = testsdk.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"functionType","req":true,"short":"The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"short":"The unique identifier for the function.","type":"`$STRING`","index$":1}],"id":{"field":"id","name":"id"},"name":"actions_v4_collection_response_public_action_function_identifier_no","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"app_id","orig":"app_id","reqd":true,"type":"`$INTEGER`","index$":0},{"active":true,"example":null,"kind":"param","name":"definition_id","orig":"definition_id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /automation/actions/2026-09/{appId}/{definitionId}/functions","json":"{\"operationId\":\"get-/automation/actions/2026-09/{appId}/{definitionId}/functions_getPage\",\"parameters\":[{\"description\":\"The unique identifier of the app associated with the action definition.\",\"explode\":false,\"in\":\"path\",\"name\":\"appId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"simple\"},{\"description\":\"The unique identifier of the action definition for which functions are being retrieved.\",\"explode\":false,\"in\":\"path\",\"name\":\"definitionId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"results\":{\"description\":\"An array of PublicActionFunctionIdentifier objects, each representing a specific function associated with an automation action definition.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"functionType\":{\"description\":\"The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.\",\"enum\":[\"POST_ACTION_EXECUTION\",\"POST_FETCH_OPTIONS\",\"PRE_ACTION_EXECUTION\",\"PRE_FETCH_OPTIONS\"],\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the function.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"functionType\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"developer_hapikey\":[]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"automation\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/automation/actions/2026-09/{appId}/{definitionId}/functions","rename":{"param":{"appId":"app_id","definitionId":"definition_id"}},"segments":[{"lit":"automation"},{"lit":"actions"},{"lit":"2026-09"},{"var":"app_id"},{"var":"definition_id"},{"lit":"functions"}],"select":{"exist":["app_id","definition_id"]},"transform":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["2026_09"]]},"key$":"actions_v4_collection_response_public_action_function_identifier_no","name__orig":"actions_v4_collection_response_public_action_function_identifier_no","Name":"ActionsV4CollectionResponsePublicActionFunctionIdentifierNo","name_":"actions_v4_collection_response_public_action_function_identifier_no","name-":"actions-v4-collection-response-public-action-function-identifier-no","NAME":"ACTIONS_V4_COLLECTION_RESPONSE_PUBLIC_ACTION_FUNCTION_IDENTIFIER_NO","index$":1}, {"active":true,"entity":"actions_v4_collection_response_public_action_function_identifier_no","key$":"BasicActionsV4CollectionResponsePublicActionFunctionIdentifierNoFlow","kind":"basic","name":"BasicActionsV4CollectionResponsePublicActionFunctionIdentifierNoFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"app_id":"app01","definition_id":"definition01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"actions_v4_collection_response_public_action_function_identifier_no_ref01"}}],"index$":0}]}, 'ActionsV4CollectionResponsePublicActionFunctionIdentifierNo')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let actions_v4_collection_response_public_action_function_identifier_no_ref01_data = Object.values(setup.data.existing.actions_v4_collection_response_public_action_function_identifier_no)[0]

    // LIST
    const actions_v4_collection_response_public_action_function_identifier_no_ref01_ent = client.ActionsV4CollectionResponsePublicActionFunctionIdentifierNo()
    const actions_v4_collection_response_public_action_function_identifier_no_ref01_match = {}
    actions_v4_collection_response_public_action_function_identifier_no_ref01_match['app_id'] = setup.idmap['app01']
    actions_v4_collection_response_public_action_function_identifier_no_ref01_match['definition_id'] = setup.idmap['definition01']

    const actions_v4_collection_response_public_action_function_identifier_no_ref01_list = (await actions_v4_collection_response_public_action_function_identifier_no_ref01_ent.list(actions_v4_collection_response_public_action_function_identifier_no_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/actions_v4_collection_response_public_action_function_identifier_no/ActionsV4CollectionResponsePublicActionFunctionIdentifierNoTestData.json')

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
    ['actions_v4_collection_response_public_action_function_identifier_no01','actions_v4_collection_response_public_action_function_identifier_no02','actions_v4_collection_response_public_action_function_identifier_no03','2026_0901','2026_0902','2026_0903'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_COLLECTION_RESPONSE_PUBLIC_ACTION_FUNCTION_IDENTIFIER_NO_ENTID': idmap,
    'HUBSPOT_AUTOMATION_TEST_LIVE': 'FALSE',
    'HUBSPOT_AUTOMATION_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_AUTOMATION_APIKEY': '',
  })

  idmap = env['HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_COLLECTION_RESPONSE_PUBLIC_ACTION_FUNCTION_IDENTIFIER_NO_ENTID']

  const live = 'TRUE' === env.HUBSPOT_AUTOMATION_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_COLLECTION_RESPONSE_PUBLIC_ACTION_FUNCTION_IDENTIFIER_NO_ENTID']
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
  
