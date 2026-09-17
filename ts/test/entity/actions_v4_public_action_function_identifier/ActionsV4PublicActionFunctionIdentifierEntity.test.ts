

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { HubspotAutomationSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ActionsV4PublicActionFunctionIdentifierEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_AUTOMATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_AUTOMATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotAutomationSDK.test()
    const ent = testsdk.ActionsV4PublicActionFunctionIdentifier()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_AUTOMATION_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'actions_v4_public_action_function_identifier.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"functionType","req":true,"short":"The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"short":"The unique identifier for the function.","type":"`$STRING`","index$":1}],"id":{"field":"id","from":{"function_type":"functionType"},"name":"id","parts":["function_type","function_id"],"sep":"/"},"name":"actions_v4_public_action_function_identifier","op":{"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"app_id","orig":"app_id","reqd":true,"type":"`$INTEGER`","index$":0},{"active":true,"example":null,"kind":"param","name":"definition_id","orig":"definition_id","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"example":null,"kind":"param","name":"function_id","orig":"function_id","reqd":true,"type":"`$STRING`","index$":2},{"active":true,"example":null,"kind":"param","name":"function_type","orig":"function_type","reqd":true,"type":"`$STRING`","index$":3}]},"contract":{"id":"PUT /automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}","json":"{\"operationId\":\"put-/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}_createOrReplace\",\"parameters\":[{\"description\":\"The unique identifier of the app associated with the definition.\",\"explode\":false,\"in\":\"path\",\"name\":\"appId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"simple\"},{\"description\":\"The unique identifier of the definition to which the function belongs.\",\"explode\":false,\"in\":\"path\",\"name\":\"definitionId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"},{\"description\":\"The unique identifier of the function to insert.\",\"explode\":false,\"in\":\"path\",\"name\":\"functionId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"},{\"description\":\"The type of function to insert, indicating when it is executed. Valid values include PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS, POST_FETCH_OPTIONS, and POST_ACTION_EXECUTION.\",\"explode\":false,\"in\":\"path\",\"name\":\"functionType\",\"required\":true,\"schema\":{\"enum\":[\"POST_ACTION_EXECUTION\",\"POST_FETCH_OPTIONS\",\"PRE_ACTION_EXECUTION\",\"PRE_FETCH_OPTIONS\"],\"example\":null,\"type\":\"string\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"text/plain\":{\"example\":null,\"schema\":{\"example\":null,\"type\":\"string\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"functionType\":{\"description\":\"The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.\",\"enum\":[\"POST_ACTION_EXECUTION\",\"POST_FETCH_OPTIONS\",\"PRE_ACTION_EXECUTION\",\"PRE_FETCH_OPTIONS\"],\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the function.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"functionType\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"developer_hapikey\":[]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"automation\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}","rename":{"param":{"appId":"app_id","definitionId":"definition_id","functionId":"function_id","functionType":"function_type"}},"segments":[{"lit":"automation"},{"lit":"actions"},{"lit":"2026-09"},{"var":"app_id"},{"var":"definition_id"},{"lit":"functions"},{"var":"function_type"},{"var":"function_id"}],"select":{"exist":["app_id","definition_id","function_id","function_type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"app_id","orig":"app_id","reqd":true,"type":"`$INTEGER`","index$":0},{"active":true,"example":null,"kind":"param","name":"definition_id","orig":"definition_id","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"example":null,"kind":"param","name":"function_type","orig":"function_type","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"PUT /automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}","json":"{\"operationId\":\"put-/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}_createOrReplaceByFunctionType\",\"parameters\":[{\"description\":\"The unique identifier of the app associated with the automation action.\",\"explode\":false,\"in\":\"path\",\"name\":\"appId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"simple\"},{\"description\":\"The unique identifier of the definition to which the function will be added.\",\"explode\":false,\"in\":\"path\",\"name\":\"definitionId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"},{\"description\":\"The type of function to insert. Valid values are PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS, POST_FETCH_OPTIONS, and POST_ACTION_EXECUTION.\",\"explode\":false,\"in\":\"path\",\"name\":\"functionType\",\"required\":true,\"schema\":{\"enum\":[\"POST_ACTION_EXECUTION\",\"POST_FETCH_OPTIONS\",\"PRE_ACTION_EXECUTION\",\"PRE_FETCH_OPTIONS\"],\"example\":null,\"type\":\"string\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"text/plain\":{\"example\":null,\"schema\":{\"example\":null,\"type\":\"string\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"functionType\":{\"description\":\"The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.\",\"enum\":[\"POST_ACTION_EXECUTION\",\"POST_FETCH_OPTIONS\",\"PRE_ACTION_EXECUTION\",\"PRE_FETCH_OPTIONS\"],\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the function.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"functionType\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"developer_hapikey\":[]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"automation\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}","rename":{"param":{"appId":"app_id","definitionId":"definition_id","functionType":"function_type"}},"segments":[{"lit":"automation"},{"lit":"actions"},{"lit":"2026-09"},{"var":"app_id"},{"var":"definition_id"},{"lit":"functions"},{"var":"function_type"}],"select":{"exist":["app_id","definition_id","function_type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["2026_09","function"]]},"key$":"actions_v4_public_action_function_identifier","name__orig":"actions_v4_public_action_function_identifier","Name":"ActionsV4PublicActionFunctionIdentifier","name_":"actions_v4_public_action_function_identifier","name-":"actions-v4-public-action-function-identifier","NAME":"ACTIONS_V4_PUBLIC_ACTION_FUNCTION_IDENTIFIER","index$":6}, {"active":true,"entity":"actions_v4_public_action_function_identifier","key$":"BasicActionsV4PublicActionFunctionIdentifierFlow","kind":"basic","name":"BasicActionsV4PublicActionFunctionIdentifierFlow","param":{},"step":[{"active":true,"data":{"app_id":"app01","definition_id":"definition01"},"input":{"ref":"actions_v4_public_action_function_identifier_ref01","srcdatavar":"actions_v4_public_action_function_identifier_ref01_data","suffix":"_up0","textfield":"functionType"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-actions_v4_public_action_function_identifier_ref01"}}],"valid":[],"index$":0}]}, 'ActionsV4PublicActionFunctionIdentifier')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let actions_v4_public_action_function_identifier_ref01_data = Object.values(setup.data.existing.actions_v4_public_action_function_identifier)[0] as any

    // UPDATE
    const actions_v4_public_action_function_identifier_ref01_ent = client.ActionsV4PublicActionFunctionIdentifier()
    const actions_v4_public_action_function_identifier_ref01_data_up0: any = {}
    actions_v4_public_action_function_identifier_ref01_data_up0.id = actions_v4_public_action_function_identifier_ref01_data.id
    actions_v4_public_action_function_identifier_ref01_data_up0 ['app_id'] = setup.idmap['app_id']
    actions_v4_public_action_function_identifier_ref01_data_up0 ['definition_id'] = setup.idmap['definition_id']

    const actions_v4_public_action_function_identifier_ref01_markdef_up0 = { name: 'functionType', value: 'Mark01-actions_v4_public_action_function_identifier_ref01_' + setup.now }
    ;(actions_v4_public_action_function_identifier_ref01_data_up0 as any)[actions_v4_public_action_function_identifier_ref01_markdef_up0.name] = actions_v4_public_action_function_identifier_ref01_markdef_up0.value

    const actions_v4_public_action_function_identifier_ref01_resdata_up0 = (await actions_v4_public_action_function_identifier_ref01_ent.update(actions_v4_public_action_function_identifier_ref01_data_up0)).data()
    assert(actions_v4_public_action_function_identifier_ref01_resdata_up0.id === actions_v4_public_action_function_identifier_ref01_data_up0.id)

    assert((actions_v4_public_action_function_identifier_ref01_resdata_up0 as any)[actions_v4_public_action_function_identifier_ref01_markdef_up0.name] === actions_v4_public_action_function_identifier_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/actions_v4_public_action_function_identifier/ActionsV4PublicActionFunctionIdentifierTestData.json')

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
    ['actions_v4_public_action_function_identifier01','actions_v4_public_action_function_identifier02','actions_v4_public_action_function_identifier03','2026_0901','2026_0902','2026_0903','function01','function02','function03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_FUNCTION_IDENTIFIER_ENTID': idmap,
    'HUBSPOT_AUTOMATION_TEST_LIVE': 'FALSE',
    'HUBSPOT_AUTOMATION_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_AUTOMATION_APIKEY': '',
  })

  idmap = env['HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_FUNCTION_IDENTIFIER_ENTID']

  const live = 'TRUE' === env.HUBSPOT_AUTOMATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_FUNCTION_IDENTIFIER_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
