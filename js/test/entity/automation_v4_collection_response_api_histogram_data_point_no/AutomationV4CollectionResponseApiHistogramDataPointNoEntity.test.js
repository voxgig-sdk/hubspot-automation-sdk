
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


describe('AutomationV4CollectionResponseApiHistogramDataPointNoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_AUTOMATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_AUTOMATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotAutomationSDK.test()
    const ent = testsdk.AutomationV4CollectionResponseApiHistogramDataPointNo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"results","req":true,"type":"`$ARRAY`","index$":0}],"name":"automation_v4_collection_response_api_histogram_data_point_no","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"flow_id","orig":"flow_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":null,"kind":"query","name":"bucket_type","orig":"bucket_type","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":null,"kind":"query","name":"end","orig":"end","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":null,"kind":"query","name":"first_day","orig":"first_day","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":null,"kind":"query","name":"start","orig":"start","reqd":false,"type":"`$INTEGER`","index$":3}]},"contract":{"id":"GET /automation/v4/flows/performance/{flowId}","json":"{\"operationId\":\"get-/automation/v4/flows/performance/{flowId}_/automation/v4/flows/performance/{flowId}\",\"parameters\":[{\"description\":\"\",\"explode\":false,\"in\":\"path\",\"name\":\"flowId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"bucketType\",\"required\":false,\"schema\":{\"enum\":[\"DAY\",\"MONTH\",\"WEEK\"],\"example\":null,\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"end\",\"required\":false,\"schema\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"form\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"firstDay\",\"required\":false,\"schema\":{\"enum\":[\"FRIDAY\",\"MONDAY\",\"SATURDAY\",\"SUNDAY\",\"THURSDAY\",\"TUESDAY\",\"WEDNESDAY\"],\"example\":null,\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"\",\"explode\":true,\"in\":\"query\",\"name\":\"start\",\"required\":false,\"schema\":{\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"results\":{\"example\":null,\"items\":{\"example\":null,\"properties\":{\"bucket\":{\"example\":null,\"type\":\"string\"},\"frequency\":{\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"series\":{\"example\":null,\"type\":\"string\"}},\"required\":[\"bucket\",\"frequency\",\"series\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"automation\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"automation\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/automation/v4/flows/performance/{flowId}","rename":{"param":{"flowId":"flow_id"}},"segments":[{"lit":"automation"},{"lit":"v4"},{"lit":"flows"},{"lit":"performance"},{"var":"flow_id"}],"select":{"exist":["bucket_type","end","first_day","flow_id","start"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["performance"]]},"key$":"automation_v4_collection_response_api_histogram_data_point_no","name__orig":"automation_v4_collection_response_api_histogram_data_point_no","Name":"AutomationV4CollectionResponseApiHistogramDataPointNo","name_":"automation_v4_collection_response_api_histogram_data_point_no","name-":"automation-v4-collection-response-api-histogram-data-point-no","NAME":"AUTOMATION_V4_COLLECTION_RESPONSE_API_HISTOGRAM_DATA_POINT_NO","index$":13}, {"active":true,"entity":"automation_v4_collection_response_api_histogram_data_point_no","key$":"BasicAutomationV4CollectionResponseApiHistogramDataPointNoFlow","kind":"basic","name":"BasicAutomationV4CollectionResponseApiHistogramDataPointNoFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"automation_v4_collection_response_api_histogram_data_point_no_ref01","srcdatavar":"automation_v4_collection_response_api_histogram_data_point_no_ref01_data","suffix":"_dt0"},"match":{"id":"automation_v4_collection_response_api_histogram_data_point_no01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-automation_v4_collection_response_api_histogram_data_point_no_ref01"}}],"index$":0}]}, 'AutomationV4CollectionResponseApiHistogramDataPointNo')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let automation_v4_collection_response_api_histogram_data_point_no_ref01_data = Object.values(setup.data.existing.automation_v4_collection_response_api_histogram_data_point_no)[0]

    // LOAD
    const automation_v4_collection_response_api_histogram_data_point_no_ref01_ent = client.AutomationV4CollectionResponseApiHistogramDataPointNo()
    const automation_v4_collection_response_api_histogram_data_point_no_ref01_match_dt0 = {}
    const automation_v4_collection_response_api_histogram_data_point_no_ref01_data_dt0 = (await automation_v4_collection_response_api_histogram_data_point_no_ref01_ent.load(automation_v4_collection_response_api_histogram_data_point_no_ref01_match_dt0)).data()
    assert(null != automation_v4_collection_response_api_histogram_data_point_no_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/automation_v4_collection_response_api_histogram_data_point_no/AutomationV4CollectionResponseApiHistogramDataPointNoTestData.json')

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
    ['automation_v4_collection_response_api_histogram_data_point_no01','automation_v4_collection_response_api_histogram_data_point_no02','automation_v4_collection_response_api_histogram_data_point_no03','performance01','performance02','performance03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_COLLECTION_RESPONSE_API_HISTOGRAM_DATA_POINT_NO_ENTID': idmap,
    'HUBSPOT_AUTOMATION_TEST_LIVE': 'FALSE',
    'HUBSPOT_AUTOMATION_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_AUTOMATION_APIKEY': '',
  })

  idmap = env['HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_COLLECTION_RESPONSE_API_HISTOGRAM_DATA_POINT_NO_ENTID']

  const live = 'TRUE' === env.HUBSPOT_AUTOMATION_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_COLLECTION_RESPONSE_API_HISTOGRAM_DATA_POINT_NO_ENTID']
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
  
