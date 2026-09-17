

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


describe('AutomationV4CollectionResponseApiFlowListingForwardPagingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_AUTOMATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_AUTOMATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotAutomationSDK.test()
    const ent = testsdk.AutomationV4CollectionResponseApiFlowListingForwardPaging()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_AUTOMATION_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'automation_v4_collection_response_api_flow_listing_forward_paging.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"createdAt","req":true,"short":"The date and time when the automation flow was created, formatted as a date-time string.","type":"`$STRING`","index$":0},{"active":true,"name":"flowType","req":true,"short":"Specifies the type of the automation flow (PLATFORM vs.","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":true,"short":"The unique identifier for the automation flow.","type":"`$STRING`","index$":2},{"active":true,"name":"isEnabled","req":true,"short":"Indicates whether the automation flow is currently active.","type":"`$BOOLEAN`","index$":3},{"active":true,"name":"name","req":false,"short":"The name assigned to the automation flow.","type":"`$STRING`","index$":4},{"active":true,"name":"objectTypeId","req":true,"short":"Represents the ID of the object type associated with the automation flow.","type":"`$STRING`","index$":5},{"active":true,"name":"revisionId","req":true,"short":"The identifier for the current revision of the automation flow.","type":"`$STRING`","index$":6},{"active":true,"format":"date-time","name":"updatedAt","req":true,"short":"The date and time when the automation flow was last updated, formatted as a date-time string.","type":"`$STRING`","index$":7},{"active":true,"name":"uuid","req":false,"short":"The universally unique identifier for the automation flow.","type":"`$STRING`","index$":8}],"id":{"field":"id","name":"id"},"name":"automation_v4_collection_response_api_flow_listing_forward_paging","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":null,"kind":"query","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":null,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /automation/v4/flows","json":"{\"operationId\":\"get-/automation/v4/flows\",\"parameters\":[{\"description\":\"The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.\",\"explode\":true,\"in\":\"query\",\"name\":\"after\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"The maximum number of results to display per page.\",\"explode\":true,\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":100,\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"paging\":{\"description\":\"Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.\",\"example\":null,\"properties\":{\"next\":{\"description\":\"Specifies the paging information needed to retrieve the next set of results in a paginated API response\",\"example\":null,\"properties\":{\"after\":{\"description\":\"A paging cursor token for retrieving subsequent pages.\",\"example\":null,\"type\":\"string\"},\"link\":{\"description\":\"A URL that can be used to retrieve the next page results.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"after\"],\"type\":\"object\"}},\"type\":\"object\"},\"results\":{\"example\":null,\"items\":{\"example\":null,\"properties\":{\"createdAt\":{\"description\":\"The date and time when the automation flow was created, formatted as a date-time string.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"flowType\":{\"description\":\"Specifies the type of the automation flow (PLATFORM vs. CONTACT)\",\"enum\":[\"ACTION_SET\",\"UNKNOWN\",\"WORKFLOW\"],\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the automation flow.\",\"example\":null,\"type\":\"string\"},\"isEnabled\":{\"description\":\"Indicates whether the automation flow is currently active.\",\"example\":null,\"type\":\"boolean\"},\"name\":{\"description\":\"The name assigned to the automation flow.\",\"example\":null,\"type\":\"string\"},\"objectTypeId\":{\"description\":\"Represents the ID of the object type associated with the automation flow.\",\"example\":null,\"type\":\"string\"},\"revisionId\":{\"description\":\"The identifier for the current revision of the automation flow.\",\"example\":null,\"type\":\"string\"},\"updatedAt\":{\"description\":\"The date and time when the automation flow was last updated, formatted as a date-time string.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"uuid\":{\"description\":\"The universally unique identifier for the automation flow.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"createdAt\",\"flowType\",\"id\",\"isEnabled\",\"objectTypeId\",\"revisionId\",\"updatedAt\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"further information about the error\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"automation\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"automation\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/automation/v4/flows","segments":[{"lit":"automation"},{"lit":"v4"},{"lit":"flows"}],"select":{"exist":["after","limit"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"automation_v4_collection_response_api_flow_listing_forward_paging","name__orig":"automation_v4_collection_response_api_flow_listing_forward_paging","Name":"AutomationV4CollectionResponseApiFlowListingForwardPaging","name_":"automation_v4_collection_response_api_flow_listing_forward_paging","name-":"automation-v4-collection-response-api-flow-listing-forward-paging","NAME":"AUTOMATION_V4_COLLECTION_RESPONSE_API_FLOW_LISTING_FORWARD_PAGING","index$":12}, {"active":true,"entity":"automation_v4_collection_response_api_flow_listing_forward_paging","key$":"BasicAutomationV4CollectionResponseApiFlowListingForwardPagingFlow","kind":"basic","name":"BasicAutomationV4CollectionResponseApiFlowListingForwardPagingFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"automation_v4_collection_response_api_flow_listing_forward_paging_ref01"}}],"index$":0}]}, 'AutomationV4CollectionResponseApiFlowListingForwardPaging')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let automation_v4_collection_response_api_flow_listing_forward_paging_ref01_data = Object.values(setup.data.existing.automation_v4_collection_response_api_flow_listing_forward_paging)[0] as any

    // LIST
    const automation_v4_collection_response_api_flow_listing_forward_paging_ref01_ent = client.AutomationV4CollectionResponseApiFlowListingForwardPaging()
    const automation_v4_collection_response_api_flow_listing_forward_paging_ref01_match: any = {}

    const automation_v4_collection_response_api_flow_listing_forward_paging_ref01_list = (await automation_v4_collection_response_api_flow_listing_forward_paging_ref01_ent.list(automation_v4_collection_response_api_flow_listing_forward_paging_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/automation_v4_collection_response_api_flow_listing_forward_paging/AutomationV4CollectionResponseApiFlowListingForwardPagingTestData.json')

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
    ['automation_v4_collection_response_api_flow_listing_forward_paging01','automation_v4_collection_response_api_flow_listing_forward_paging02','automation_v4_collection_response_api_flow_listing_forward_paging03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_COLLECTION_RESPONSE_API_FLOW_LISTING_FORWARD_PAGING_ENTID': idmap,
    'HUBSPOT_AUTOMATION_TEST_LIVE': 'FALSE',
    'HUBSPOT_AUTOMATION_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_AUTOMATION_APIKEY': '',
  })

  idmap = env['HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_COLLECTION_RESPONSE_API_FLOW_LISTING_FORWARD_PAGING_ENTID']

  const live = 'TRUE' === env.HUBSPOT_AUTOMATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_AUTOMATION_TEST_AUTOMATION_V4_COLLECTION_RESPONSE_API_FLOW_LISTING_FORWARD_PAGING_ENTID']
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
  
