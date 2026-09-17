
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


describe('ActionsV4PublicActionDefinitionRequiresObjectEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_AUTOMATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_AUTOMATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotAutomationSDK.test()
    const ent = testsdk.ActionsV4PublicActionDefinitionRequiresObject()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"requiresObject","req":true,"short":"Indicates whether a custom action definition requires an object.","type":"`$BOOLEAN`","index$":0}],"name":"actions_v4_public_action_definition_requires_object","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"app_id","orig":"app_id","reqd":true,"type":"`$INTEGER`","index$":0},{"active":true,"example":null,"kind":"param","name":"definition_id","orig":"definition_id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /automation/actions/2026-09/{appId}/{definitionId}/requires-object","json":"{\"operationId\":\"get-/automation/actions/2026-09/{appId}/{definitionId}/requires-object_/automation/v4/actions/{appId}/{definitionId}/requires-object\",\"parameters\":[{\"description\":\"The unique identifier of the app associated with the extension definition.\",\"explode\":false,\"in\":\"path\",\"name\":\"appId\",\"required\":true,\"schema\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"simple\"},{\"description\":\"The unique identifier of the extension definition to check.\",\"explode\":false,\"in\":\"path\",\"name\":\"definitionId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"requiresObject\":{\"description\":\"Indicates whether a custom action definition requires an object.\",\"example\":null,\"type\":\"boolean\"}},\"required\":[\"requiresObject\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"developer_hapikey\":[]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"automation\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/automation/actions/2026-09/{appId}/{definitionId}/requires-object","rename":{"param":{"appId":"app_id","definitionId":"definition_id"}},"segments":[{"lit":"automation"},{"lit":"actions"},{"lit":"2026-09"},{"var":"app_id"},{"var":"definition_id"},{"lit":"requires-object"}],"select":{"exist":["app_id","definition_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["2026_09"]]},"key$":"actions_v4_public_action_definition_requires_object","name__orig":"actions_v4_public_action_definition_requires_object","Name":"ActionsV4PublicActionDefinitionRequiresObject","name_":"actions_v4_public_action_definition_requires_object","name-":"actions-v4-public-action-definition-requires-object","NAME":"ACTIONS_V4_PUBLIC_ACTION_DEFINITION_REQUIRES_OBJECT","index$":4}, {"active":true,"entity":"actions_v4_public_action_definition_requires_object","key$":"BasicActionsV4PublicActionDefinitionRequiresObjectFlow","kind":"basic","name":"BasicActionsV4PublicActionDefinitionRequiresObjectFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"actions_v4_public_action_definition_requires_object_ref01","srcdatavar":"actions_v4_public_action_definition_requires_object_ref01_data","suffix":"_dt0"},"match":{"app_id":"app01","id":"actions_v4_public_action_definition_requires_object01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-actions_v4_public_action_definition_requires_object_ref01"}}],"index$":0}]}, 'ActionsV4PublicActionDefinitionRequiresObject')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let actions_v4_public_action_definition_requires_object_ref01_data = Object.values(setup.data.existing.actions_v4_public_action_definition_requires_object)[0]

    // LOAD
    const actions_v4_public_action_definition_requires_object_ref01_ent = client.ActionsV4PublicActionDefinitionRequiresObject()
    const actions_v4_public_action_definition_requires_object_ref01_match_dt0 = {}
    const actions_v4_public_action_definition_requires_object_ref01_data_dt0 = (await actions_v4_public_action_definition_requires_object_ref01_ent.load(actions_v4_public_action_definition_requires_object_ref01_match_dt0)).data()
    assert(null != actions_v4_public_action_definition_requires_object_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/actions_v4_public_action_definition_requires_object/ActionsV4PublicActionDefinitionRequiresObjectTestData.json')

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
    ['actions_v4_public_action_definition_requires_object01','actions_v4_public_action_definition_requires_object02','actions_v4_public_action_definition_requires_object03','2026_0901','2026_0902','2026_0903'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_DEFINITION_REQUIRES_OBJECT_ENTID': idmap,
    'HUBSPOT_AUTOMATION_TEST_LIVE': 'FALSE',
    'HUBSPOT_AUTOMATION_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_AUTOMATION_APIKEY': '',
  })

  idmap = env['HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_DEFINITION_REQUIRES_OBJECT_ENTID']

  const live = 'TRUE' === env.HUBSPOT_AUTOMATION_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_AUTOMATION_TEST_ACTIONS_V4_PUBLIC_ACTION_DEFINITION_REQUIRES_OBJECT_ENTID']
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
  
