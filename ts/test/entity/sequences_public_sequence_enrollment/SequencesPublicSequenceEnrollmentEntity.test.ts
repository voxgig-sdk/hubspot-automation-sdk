

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


describe('SequencesPublicSequenceEnrollmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when HUBSPOT_AUTOMATION_TEST_LIVE=TRUE.
  afterEach(liveDelay('HUBSPOT_AUTOMATION_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = HubspotAutomationSDK.test()
    const ent = testsdk.SequencesPublicSequenceEnrollment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.HUBSPOT_AUTOMATION_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'sequences_public_sequence_enrollment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"enrolledAt","req":true,"short":"The date and time when the contact was enrolled in the sequence, in ISO 8601 format.","type":"`$STRING`","index$":0},{"active":true,"name":"enrolledBy","req":true,"short":"The unique identifier of the user who enrolled the contact in the sequence.","type":"`$STRING`","index$":1},{"active":true,"name":"enrolledByEmail","req":true,"short":"The email address of the user who enrolled the contact in the sequence.","type":"`$STRING`","index$":2},{"active":true,"name":"id","req":true,"short":"The unique identifier for the sequence enrollment.","type":"`$STRING`","index$":3},{"active":true,"name":"sequenceId","req":true,"short":"The unique identifier of the sequence in which the contact is enrolled.","type":"`$STRING`","index$":4},{"active":true,"name":"sequenceName","req":true,"short":"The name of the sequence in which the contact is enrolled.","type":"`$STRING`","index$":5},{"active":true,"name":"toEmail","req":true,"short":"The email address of the contact enrolled in the sequence.","type":"`$STRING`","index$":6},{"active":true,"format":"date-time","name":"updatedAt","req":true,"short":"The date and time when the sequence enrollment was last updated, in ISO 8601 format.","type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"sequences_public_sequence_enrollment","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":null,"kind":"param","name":"contact_id","orig":"contact_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /automation/sequences/2026-09/enrollments/contact/{contactId}","json":"{\"operationId\":\"get-/automation/sequences/2026-09/enrollments/contact/{contactId}\",\"parameters\":[{\"description\":\"The unique identifier of the contact whose sequence enrollment details are being retrieved.\",\"explode\":false,\"in\":\"path\",\"name\":\"contactId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"enrolledAt\":{\"description\":\"The date and time when the contact was enrolled in the sequence, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"},\"enrolledBy\":{\"description\":\"The unique identifier of the user who enrolled the contact in the sequence.\",\"example\":null,\"type\":\"string\"},\"enrolledByEmail\":{\"description\":\"The email address of the user who enrolled the contact in the sequence.\",\"example\":null,\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier for the sequence enrollment.\",\"example\":null,\"type\":\"string\"},\"sequenceId\":{\"description\":\"The unique identifier of the sequence in which the contact is enrolled.\",\"example\":null,\"type\":\"string\"},\"sequenceName\":{\"description\":\"The name of the sequence in which the contact is enrolled.\",\"example\":null,\"type\":\"string\"},\"toEmail\":{\"description\":\"The email address of the contact enrolled in the sequence.\",\"example\":null,\"type\":\"string\"},\"updatedAt\":{\"description\":\"The date and time when the sequence enrollment was last updated, in ISO 8601 format.\",\"example\":null,\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"enrolledAt\",\"enrolledBy\",\"enrolledByEmail\",\"id\",\"sequenceId\",\"sequenceName\",\"toEmail\",\"updatedAt\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category, indicating the general type of error that occurred.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties that are arrays of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets. It is formatted as a UUID.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"Further information about the error, represented as an array of ErrorDetail objects.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail, indicating the type of error encountered.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, provided as an object with additional properties. This can include specific details such as missing scopes.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found. This provides context about where the error occurred.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required field.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error, helping to further classify the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"automation.sequences.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"automation\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/automation/sequences/2026-09/enrollments/contact/{contactId}","rename":{"param":{"contactId":"contact_id"}},"segments":[{"lit":"automation"},{"lit":"sequences"},{"lit":"2026-09"},{"lit":"enrollments"},{"lit":"contact"},{"var":"contact_id"}],"select":{"exist":["contact_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["contact"]]},"key$":"sequences_public_sequence_enrollment","name__orig":"sequences_public_sequence_enrollment","Name":"SequencesPublicSequenceEnrollment","name_":"sequences_public_sequence_enrollment","name-":"sequences-public-sequence-enrollment","NAME":"SEQUENCES_PUBLIC_SEQUENCE_ENROLLMENT","index$":24}, {"active":true,"entity":"sequences_public_sequence_enrollment","key$":"BasicSequencesPublicSequenceEnrollmentFlow","kind":"basic","name":"BasicSequencesPublicSequenceEnrollmentFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"sequences_public_sequence_enrollment_ref01","srcdatavar":"sequences_public_sequence_enrollment_ref01_data","suffix":"_dt0"},"match":{"id":"sequences_public_sequence_enrollment01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-sequences_public_sequence_enrollment_ref01"}}],"index$":0}]}, 'SequencesPublicSequenceEnrollment')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let sequences_public_sequence_enrollment_ref01_data = Object.values(setup.data.existing.sequences_public_sequence_enrollment)[0] as any

    // LOAD
    const sequences_public_sequence_enrollment_ref01_ent = client.SequencesPublicSequenceEnrollment()
    const sequences_public_sequence_enrollment_ref01_match_dt0: any = {}
    sequences_public_sequence_enrollment_ref01_match_dt0.id = sequences_public_sequence_enrollment_ref01_data.id
    const sequences_public_sequence_enrollment_ref01_data_dt0 = (await sequences_public_sequence_enrollment_ref01_ent.load(sequences_public_sequence_enrollment_ref01_match_dt0)).data()
    assert(sequences_public_sequence_enrollment_ref01_data_dt0.id === sequences_public_sequence_enrollment_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/sequences_public_sequence_enrollment/SequencesPublicSequenceEnrollmentTestData.json')

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
    ['sequences_public_sequence_enrollment01','sequences_public_sequence_enrollment02','sequences_public_sequence_enrollment03','contact01','contact02','contact03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'HUBSPOT_AUTOMATION_TEST_SEQUENCES_PUBLIC_SEQUENCE_ENROLLMENT_ENTID': idmap,
    'HUBSPOT_AUTOMATION_TEST_LIVE': 'FALSE',
    'HUBSPOT_AUTOMATION_TEST_EXPLAIN': 'FALSE',
    'HUBSPOT_AUTOMATION_APIKEY': '',
  })

  idmap = env['HUBSPOT_AUTOMATION_TEST_SEQUENCES_PUBLIC_SEQUENCE_ENROLLMENT_ENTID']

  const live = 'TRUE' === env.HUBSPOT_AUTOMATION_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['HUBSPOT_AUTOMATION_TEST_SEQUENCES_PUBLIC_SEQUENCE_ENROLLMENT_ENTID']
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
  
