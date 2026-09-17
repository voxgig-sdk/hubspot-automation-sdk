

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


describe('EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_AUTOMATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_AUTOMATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotAutomationSDK.test()
    const ent = testsdk.EmailTemplatesCollectionResponsePublicFolderForwardPaging()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_AUTOMATION_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'email_templates_collection_response_public_folder_forward_paging.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"int64","name":"createdAt","req":false,"short":"The timestamp indicating when the folder was created, represented as an integer in int64 format.","type":"`$INTEGER`","index$":0},{"active":true,"name":"id","req":true,"short":"The unique identifier for the folder, represented as a string.","type":"`$STRING`","index$":1},{"active":true,"name":"name","req":false,"short":"The name of the folder, represented as a string.","type":"`$STRING`","index$":2},{"active":true,"format":"int64","name":"updatedAt","req":false,"short":"The timestamp indicating when the folder was last updated, represented as an integer in int64 format.","type":"`$INTEGER`","index$":3}],"id":{"field":"id","name":"id"},"name":"email_templates_collection_response_public_folder_forward_paging","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":null,"kind":"query","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":null,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /automation/email-templates/2026-09/folders","json":"{\"operationId\":\"get-/automation/email-templates/2026-09/folders_/automation/email-templates/2026-09-beta/folders\",\"parameters\":[{\"description\":\"The paging cursor token of the last successfully read resource. Use this token to retrieve the next set of results.\",\"explode\":true,\"in\":\"query\",\"name\":\"after\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"The maximum number of results to display per page. Defaults to 20.\",\"explode\":true,\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":20,\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"paging\":{\"description\":\"Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.\",\"example\":null,\"properties\":{\"next\":{\"description\":\"Specifies the paging information needed to retrieve the next set of results in a paginated API response\",\"example\":null,\"properties\":{\"after\":{\"description\":\"A string that serves as the paging cursor token, indicating the position after the last successfully read resource.\",\"example\":null,\"type\":\"string\"},\"link\":{\"description\":\"A string representing the URL link to the next page of results.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"after\"],\"type\":\"object\"}},\"type\":\"object\"},\"results\":{\"description\":\"An array of PublicFolder objects, each representing a folder containing email templates.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"createdAt\":{\"description\":\"The timestamp indicating when the folder was created, represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"id\":{\"description\":\"The unique identifier for the folder, represented as a string.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the folder, represented as a string.\",\"example\":null,\"type\":\"string\"},\"updatedAt\":{\"description\":\"The timestamp indicating when the folder was last updated, represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"id\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category, represented as a string.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"An object providing context about the error condition, with additional properties as arrays of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request, formatted as a UUID. Include this value with any error reports or support tickets.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"An array providing further information about the error, with each item being an ErrorDetail object.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object where each key is a context name and the value is an array of strings providing additional details.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required field.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps, represented as an object with string properties.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. It is a string.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error, represented as a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"sales-templates-public-read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"automation\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/automation/email-templates/2026-09/folders","segments":[{"lit":"automation"},{"lit":"email-templates"},{"lit":"2026-09"},{"lit":"folders"}],"select":{"exist":["after","limit"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"email_templates_collection_response_public_folder_forward_paging","name__orig":"email_templates_collection_response_public_folder_forward_paging","Name":"EmailTemplatesCollectionResponsePublicFolderForwardPaging","name_":"email_templates_collection_response_public_folder_forward_paging","name-":"email-templates-collection-response-public-folder-forward-paging","NAME":"EMAIL_TEMPLATES_COLLECTION_RESPONSE_PUBLIC_FOLDER_FORWARD_PAGING","index$":17}, {"active":true,"entity":"email_templates_collection_response_public_folder_forward_paging","key$":"BasicEmailTemplatesCollectionResponsePublicFolderForwardPagingFlow","kind":"basic","name":"BasicEmailTemplatesCollectionResponsePublicFolderForwardPagingFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"email_templates_collection_response_public_folder_forward_paging_ref01"}}],"index$":0}]}, 'EmailTemplatesCollectionResponsePublicFolderForwardPaging')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let email_templates_collection_response_public_folder_forward_paging_ref01_data = Object.values(setup.data.existing.email_templates_collection_response_public_folder_forward_paging)[0] as any

    // LIST
    const email_templates_collection_response_public_folder_forward_paging_ref01_ent = client.EmailTemplatesCollectionResponsePublicFolderForwardPaging()
    const email_templates_collection_response_public_folder_forward_paging_ref01_match: any = {}

    const email_templates_collection_response_public_folder_forward_paging_ref01_list = (await email_templates_collection_response_public_folder_forward_paging_ref01_ent.list(email_templates_collection_response_public_folder_forward_paging_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/email_templates_collection_response_public_folder_forward_paging/EmailTemplatesCollectionResponsePublicFolderForwardPagingTestData.json')

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
    ['email_templates_collection_response_public_folder_forward_paging01','email_templates_collection_response_public_folder_forward_paging02','email_templates_collection_response_public_folder_forward_paging03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_AUTOMATION_TEST_EMAIL_TEMPLATES_COLLECTION_RESPONSE_PUBLIC_FOLDER_FORWARD_PAGING_ENTID': idmap,
    'HUBSPOT_AUTOMATION_TEST_LIVE': 'FALSE',
    'HUBSPOT_AUTOMATION_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_AUTOMATION_APIKEY': '',
  })

  idmap = env['HUBSPOT_AUTOMATION_TEST_EMAIL_TEMPLATES_COLLECTION_RESPONSE_PUBLIC_FOLDER_FORWARD_PAGING_ENTID']

  const live = 'TRUE' === env.HUBSPOT_AUTOMATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_AUTOMATION_TEST_EMAIL_TEMPLATES_COLLECTION_RESPONSE_PUBLIC_FOLDER_FORWARD_PAGING_ENTID']
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
  
