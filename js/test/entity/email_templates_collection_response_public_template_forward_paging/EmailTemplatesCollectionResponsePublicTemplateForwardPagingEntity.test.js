
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


describe('EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_AUTOMATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_AUTOMATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotAutomationSDK.test()
    const ent = testsdk.EmailTemplatesCollectionResponsePublicTemplateForwardPaging()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"body","req":false,"short":"The content of the email template, represented as a string.","type":"`$STRING`","index$":0},{"active":true,"format":"int64","name":"createdAt","req":false,"short":"The timestamp indicating when the email template was created, represented as an integer in int64 format.","type":"`$INTEGER`","index$":1},{"active":true,"name":"folderId","req":false,"short":"The identifier of the folder where the email template is stored, represented as a string.","type":"`$STRING`","index$":2},{"active":true,"name":"id","req":true,"short":"The unique identifier for the email template, represented as a string.","type":"`$STRING`","index$":3},{"active":true,"name":"name","req":false,"short":"The name of the email template, represented as a string.","type":"`$STRING`","index$":4},{"active":true,"name":"ownerId","req":false,"short":"The identifier of the owner of the email template, represented as a string.","type":"`$STRING`","index$":5},{"active":true,"name":"subject","req":false,"short":"The subject line of the email template, represented as a string.","type":"`$STRING`","index$":6},{"active":true,"format":"int64","name":"updatedAt","req":false,"short":"The timestamp indicating when the email template was last updated, represented as an integer in int64 format.","type":"`$INTEGER`","index$":7}],"id":{"field":"id","name":"id"},"name":"email_templates_collection_response_public_template_forward_paging","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":null,"kind":"query","name":"after","orig":"after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":null,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /automation/email-templates/2026-09","json":"{\"operationId\":\"get-/automation/email-templates/2026-09_/automation/email-templates/2026-09-beta\",\"parameters\":[{\"description\":\"The paging cursor token of the last successfully read resource, returned as the `paging.next.after` JSON property of a paged response containing more results.\",\"explode\":true,\"in\":\"query\",\"name\":\"after\",\"required\":false,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"The maximum number of results to display per page. Defaults to 20.\",\"explode\":true,\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":20,\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"paging\":{\"description\":\"Paging information for forward-only pagination. Contains the next page reference when more results are available; omitted or empty on the last page.\",\"example\":null,\"properties\":{\"next\":{\"description\":\"Specifies the paging information needed to retrieve the next set of results in a paginated API response\",\"example\":null,\"properties\":{\"after\":{\"description\":\"A string that serves as the paging cursor token, indicating the position after the last successfully read resource.\",\"example\":null,\"type\":\"string\"},\"link\":{\"description\":\"A string representing the URL link to the next page of results.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"after\"],\"type\":\"object\"}},\"type\":\"object\"},\"results\":{\"description\":\"An array of public templates. Each item in the array is an object representing a template with properties such as id, name, subject, body, folderId, ownerId, createdAt, and updatedAt.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"body\":{\"description\":\"The content of the email template, represented as a string.\",\"example\":null,\"type\":\"string\"},\"createdAt\":{\"description\":\"The timestamp indicating when the email template was created, represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"folderId\":{\"description\":\"The identifier of the folder where the email template is stored, represented as a string.\",\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the email template, represented as a string.\",\"example\":null,\"type\":\"string\"},\"name\":{\"description\":\"The name of the email template, represented as a string.\",\"example\":null,\"type\":\"string\"},\"ownerId\":{\"description\":\"The identifier of the owner of the email template, represented as a string.\",\"example\":null,\"type\":\"string\"},\"subject\":{\"description\":\"The subject line of the email template, represented as a string.\",\"example\":null,\"type\":\"string\"},\"updatedAt\":{\"description\":\"The timestamp indicating when the email template was last updated, represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"id\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category, represented as a string.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"An object providing context about the error condition, with additional properties as arrays of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request, formatted as a UUID. Include this value with any error reports or support tickets.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"An array providing further information about the error, with each item being an ErrorDetail object.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object where each key is a context name and the value is an array of strings providing additional details.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required field.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps, represented as an object with string properties.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. It is a string.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error, represented as a string.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"sales-templates-public-read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"automation\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/automation/email-templates/2026-09","segments":[{"lit":"automation"},{"lit":"email-templates"},{"lit":"2026-09"}],"select":{"exist":["after","limit"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"email_templates_collection_response_public_template_forward_paging","name__orig":"email_templates_collection_response_public_template_forward_paging","Name":"EmailTemplatesCollectionResponsePublicTemplateForwardPaging","name_":"email_templates_collection_response_public_template_forward_paging","name-":"email-templates-collection-response-public-template-forward-paging","NAME":"EMAIL_TEMPLATES_COLLECTION_RESPONSE_PUBLIC_TEMPLATE_FORWARD_PAGING","index$":18}, {"active":true,"entity":"email_templates_collection_response_public_template_forward_paging","key$":"BasicEmailTemplatesCollectionResponsePublicTemplateForwardPagingFlow","kind":"basic","name":"BasicEmailTemplatesCollectionResponsePublicTemplateForwardPagingFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"email_templates_collection_response_public_template_forward_paging_ref01"}}],"index$":0}]}, 'EmailTemplatesCollectionResponsePublicTemplateForwardPaging')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let email_templates_collection_response_public_template_forward_paging_ref01_data = Object.values(setup.data.existing.email_templates_collection_response_public_template_forward_paging)[0]

    // LIST
    const email_templates_collection_response_public_template_forward_paging_ref01_ent = client.EmailTemplatesCollectionResponsePublicTemplateForwardPaging()
    const email_templates_collection_response_public_template_forward_paging_ref01_match = {}

    const email_templates_collection_response_public_template_forward_paging_ref01_list = (await email_templates_collection_response_public_template_forward_paging_ref01_ent.list(email_templates_collection_response_public_template_forward_paging_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/email_templates_collection_response_public_template_forward_paging/EmailTemplatesCollectionResponsePublicTemplateForwardPagingTestData.json')

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
    ['email_templates_collection_response_public_template_forward_paging01','email_templates_collection_response_public_template_forward_paging02','email_templates_collection_response_public_template_forward_paging03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_AUTOMATION_TEST_EMAIL_TEMPLATES_COLLECTION_RESPONSE_PUBLIC_TEMPLATE_FORWARD_PAGING_ENTID': idmap,
    'HUBSPOT_AUTOMATION_TEST_LIVE': 'FALSE',
    'HUBSPOT_AUTOMATION_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_AUTOMATION_APIKEY': '',
  })

  idmap = env['HUBSPOT_AUTOMATION_TEST_EMAIL_TEMPLATES_COLLECTION_RESPONSE_PUBLIC_TEMPLATE_FORWARD_PAGING_ENTID']

  const live = 'TRUE' === env.HUBSPOT_AUTOMATION_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_AUTOMATION_TEST_EMAIL_TEMPLATES_COLLECTION_RESPONSE_PUBLIC_TEMPLATE_FORWARD_PAGING_ENTID']
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
  
