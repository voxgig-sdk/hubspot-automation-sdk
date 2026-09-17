"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SequencesPublicSequencePerformanceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when HUBSPOT_AUTOMATION_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('HUBSPOT_AUTOMATION_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.HubspotAutomationSDK.test();
        const ent = testsdk.SequencesPublicSequencePerformance();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.HUBSPOT_AUTOMATION_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'sequences_public_sequence_performance.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "companyMetrics", "req": true, "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "sequenceId", "req": true, "short": "The unique identifier for the sequence, represented as a string.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "statusByStep", "req": true, "short": "An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order.", "type": "`$ARRAY`", "index$": 2 }, { "active": true, "name": "steps", "req": true, "short": "An array of objects, each representing the performance metrics for individual steps within the sequence.", "type": "`$ARRAY`", "index$": 3 }, { "active": true, "name": "summary", "req": true, "type": "`$OBJECT`", "index$": 4 }, { "active": true, "name": "timeline", "req": true, "short": "An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked.", "type": "`$ARRAY`", "index$": 5 }], "name": "sequences_public_sequence_performance", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": null, "kind": "param", "name": "sequence_id", "orig": "sequence_id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": null, "kind": "query", "name": "timeline_interval", "orig": "timeline_interval", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}/performance", "json": "{\"operationId\":\"get-/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}/performance\",\"parameters\":[{\"description\":\"The unique identifier of the sequence to retrieve performance metrics for.\",\"explode\":false,\"in\":\"path\",\"name\":\"sequenceId\",\"required\":true,\"schema\":{\"example\":null,\"type\":\"string\"},\"style\":\"simple\"},{\"description\":\"The interval for the timeline data. Defaults to 'WEEK'.\",\"explode\":true,\"in\":\"query\",\"name\":\"timelineInterval\",\"required\":false,\"schema\":{\"default\":\"WEEK\",\"example\":null,\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":null,\"schema\":{\"example\":null,\"properties\":{\"companyMetrics\":{\"example\":null,\"properties\":{\"companiesEngaged\":{\"description\":\"The number of companies that have engaged with the sequence. An integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"companiesEnrolled\":{\"description\":\"The number of companies that have been enrolled in the sequence. An integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"companiesScheduledMeeting\":{\"description\":\"The number of companies that have scheduled a meeting as a result of the sequence. An integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"contactsEnrolledWithCompanyId\":{\"description\":\"The number of contacts enrolled in the sequence that are associated with a company ID. An integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"companiesEngaged\",\"companiesEnrolled\",\"companiesScheduledMeeting\",\"contactsEnrolledWithCompanyId\"],\"type\":\"object\"},\"sequenceId\":{\"description\":\"The unique identifier for the sequence, represented as a string.\",\"example\":null,\"type\":\"string\"},\"statusByStep\":{\"description\":\"An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"count\":{\"description\":\"An integer in int64 format representing the number of enrollments at the current step.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"currentStepOrder\":{\"description\":\"An integer indicating the order of the current step in the sequence.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"enrollmentStatus\":{\"description\":\"A string representing the status of the enrollment at the current step.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"count\",\"currentStepOrder\",\"enrollmentStatus\"],\"type\":\"object\"},\"type\":\"array\"},\"steps\":{\"description\":\"An array of objects, each representing the performance metrics for individual steps within the sequence.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"calls\":{\"description\":\"An integer (int64) representing the number of calls made in this step.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"callsConnected\":{\"description\":\"An integer (int64) indicating the number of calls that were successfully connected in this step.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"clicked\":{\"description\":\"An integer (int64) showing the number of times links in emails from this step have been clicked.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"executionCount\":{\"description\":\"An integer (int64) indicating the number of times this step has been executed.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"meetingsBooked\":{\"description\":\"An integer (int64) representing the number of meetings booked as a result of this step.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"onTimeTaskCompletionCount\":{\"description\":\"An integer (int64) representing the number of tasks completed on time in this step.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"onTimeTaskCompletionSum\":{\"description\":\"An integer (int64) indicating the sum of on-time task completions for this step.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"opened\":{\"description\":\"An integer (int64) indicating how many times emails from this step have been opened.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"personalizationRateAvg\":{\"description\":\"A number representing the average personalization rate for this step.\",\"example\":null,\"type\":\"number\"},\"personalizationRateCount\":{\"description\":\"An integer (int64) indicating the count of personalized actions in this step.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"replied\":{\"description\":\"An integer (int64) representing the number of replies received from emails sent in this step.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"stepKey\":{\"description\":\"A string that uniquely identifies the step.\",\"example\":null,\"type\":\"string\"},\"stepOrder\":{\"description\":\"An integer representing the order of the step within the sequence.\",\"example\":null,\"format\":\"int32\",\"type\":\"integer\"},\"tasksCompleted\":{\"description\":\"An integer (int64) indicating the number of tasks completed in this step.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"calls\",\"callsConnected\",\"clicked\",\"executionCount\",\"meetingsBooked\",\"onTimeTaskCompletionCount\",\"onTimeTaskCompletionSum\",\"opened\",\"personalizationRateCount\",\"replied\",\"stepKey\",\"stepOrder\",\"tasksCompleted\"],\"type\":\"object\"},\"type\":\"array\"},\"summary\":{\"example\":null,\"properties\":{\"associatedDeals\":{\"description\":\"The number of deals associated with the sequence. Represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"bounced\":{\"description\":\"The number of emails in the sequence that bounced. Represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"clicked\":{\"description\":\"The number of times links in the sequence emails have been clicked. Represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"contacts\":{\"description\":\"The total number of contacts associated with the sequence. Represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"dealsClosed\":{\"description\":\"The number of deals closed as a result of the sequence. Represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"engaged\":{\"description\":\"The number of contacts who engaged with the sequence. Represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"enrolled\":{\"description\":\"The number of contacts enrolled in the sequence. Represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"meetingsBooked\":{\"description\":\"The number of meetings booked as a result of the sequence. Represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"noResponse\":{\"description\":\"The number of contacts who did not respond to the sequence. Represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"opened\":{\"description\":\"The number of times emails in the sequence have been opened. Represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"replied\":{\"description\":\"The number of replies received from emails in the sequence. Represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"totalRevenue\":{\"description\":\"The total revenue generated from the sequence. Represented as a number.\",\"example\":null,\"type\":\"number\"},\"unsubscribed\":{\"description\":\"The number of contacts who unsubscribed from the sequence. Represented as an integer in int64 format.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"bounced\",\"clicked\",\"contacts\",\"engaged\",\"enrolled\",\"meetingsBooked\",\"noResponse\",\"opened\",\"replied\",\"unsubscribed\"],\"type\":\"object\"},\"timeline\":{\"description\":\"An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked.\",\"example\":null,\"items\":{\"example\":null,\"properties\":{\"enrolledAt\":{\"description\":\"The time at which the enrollment occurred, represented as a Unix timestamp in milliseconds.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"enrollments\":{\"description\":\"The total number of enrollments recorded at this point in the sequence timeline. Represented as an integer.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"},\"meetingsBooked\":{\"description\":\"The number of meetings booked at this point in the sequence timeline. Represented as an integer.\",\"example\":null,\"format\":\"int64\",\"type\":\"integer\"}},\"required\":[\"enrolledAt\",\"enrollments\",\"meetingsBooked\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"sequenceId\",\"statusByStep\",\"steps\",\"summary\",\"timeline\"],\"type\":\"object\"}}},\"description\":\"successful operation\"},\"default\":{\"content\":{\"*/*\":{\"example\":null,\"schema\":{\"description\":\"Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.\",\"example\":{\"category\":\"VALIDATION_ERROR\",\"correlationId\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"links\":{\"knowledge-base\":\"https://www.hubspot.com/products/service/knowledge-base\"},\"message\":\"Invalid input (details will vary based on the error)\"},\"properties\":{\"category\":{\"description\":\"The error category, indicating the general type of error that occurred.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, represented as an object with additional properties that are arrays of strings.\",\"example\":\"{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"correlationId\":{\"description\":\"A unique identifier for the request. Include this value with any error reports or support tickets. It is formatted as a UUID.\",\"example\":\"aeb5f871-7f07-4993-9211-075dc63e7cbf\",\"format\":\"uuid\",\"type\":\"string\"},\"errors\":{\"description\":\"Further information about the error, represented as an array of ErrorDetail objects.\",\"example\":null,\"items\":{\"description\":\"Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.\",\"example\":null,\"properties\":{\"code\":{\"description\":\"The status code associated with the error detail, indicating the type of error encountered.\",\"example\":null,\"type\":\"string\"},\"context\":{\"additionalProperties\":{\"example\":null,\"items\":{\"example\":null,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"Context about the error condition, provided as an object with additional properties. This can include specific details such as missing scopes.\",\"example\":\"{missingScopes=[scope1, scope2]}\",\"type\":\"object\"},\"in\":{\"description\":\"The name of the field or parameter in which the error was found. This provides context about where the error occurred.\",\"example\":null,\"type\":\"string\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate. This is a required field.\",\"example\":null,\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error, helping to further classify the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"message\"],\"type\":\"object\"},\"type\":\"array\"},\"links\":{\"additionalProperties\":{\"example\":null,\"type\":\"string\"},\"description\":\"A map of link names to associated URIs containing documentation about the error or recommended remediation steps.\",\"example\":null,\"type\":\"object\"},\"message\":{\"description\":\"A human readable message describing the error along with remediation steps where appropriate.\",\"example\":\"An error occurred\",\"type\":\"string\"},\"subCategory\":{\"description\":\"A specific category that contains more specific detail about the error.\",\"example\":null,\"type\":\"string\"}},\"required\":[\"category\",\"correlationId\",\"message\"],\"type\":\"object\"}}},\"description\":\"\"}},\"security\":[{\"oauth2\":[\"automation.sequences.read\"]}],\"securitySchemes\":{\"developer_hapikey\":{\"in\":\"query\",\"name\":\"hapikey\",\"type\":\"apiKey\"},\"oauth2\":{\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://app.hubspot.com/oauth/authorize\",\"scopes\":{\"automation\":\"\"},\"tokenUrl\":\"https://api.hubapi.com/oauth/v1/token\"}},\"type\":\"oauth2\"},\"private_apps\":{\"in\":\"header\",\"name\":\"private-app\",\"type\":\"apiKey\"},\"private_apps_legacy\":{\"in\":\"header\",\"name\":\"private-app-legacy\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}/performance", "rename": { "param": { "sequenceId": "sequence_id" } }, "segments": [{ "lit": "automation" }, { "lit": "sequences" }, { "lit": "2026-09" }, { "lit": "serviceaccounts" }, { "lit": "sequences" }, { "var": "sequence_id" }, { "lit": "performance" }], "select": { "exist": ["sequence_id", "timeline_interval"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["sequence"]] }, "key$": "sequences_public_sequence_performance", "name__orig": "sequences_public_sequence_performance", "Name": "SequencesPublicSequencePerformance", "name_": "sequences_public_sequence_performance", "name-": "sequences-public-sequence-performance", "NAME": "SEQUENCES_PUBLIC_SEQUENCE_PERFORMANCE", "index$": 26 }, { "active": true, "entity": "sequences_public_sequence_performance", "key$": "BasicSequencesPublicSequencePerformanceFlow", "kind": "basic", "name": "BasicSequencesPublicSequencePerformanceFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "sequence_id": "sequence01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "sequences_public_sequence_performance_ref01" } }], "index$": 0 }] }, 'SequencesPublicSequencePerformance');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let sequences_public_sequence_performance_ref01_data = Object.values(setup.data.existing.sequences_public_sequence_performance)[0];
        // LIST
        const sequences_public_sequence_performance_ref01_ent = client.SequencesPublicSequencePerformance();
        const sequences_public_sequence_performance_ref01_match = {};
        sequences_public_sequence_performance_ref01_match['sequence_id'] = setup.idmap['sequence01'];
        const sequences_public_sequence_performance_ref01_list = (await sequences_public_sequence_performance_ref01_ent.list(sequences_public_sequence_performance_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/sequences_public_sequence_performance/SequencesPublicSequencePerformanceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.HubspotAutomationSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['sequences_public_sequence_performance01', 'sequences_public_sequence_performance02', 'sequences_public_sequence_performance03', 'sequence01', 'sequence02', 'sequence03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'HUBSPOT_AUTOMATION_TEST_SEQUENCES_PUBLIC_SEQUENCE_PERFORMANCE_ENTID': idmap,
        'HUBSPOT_AUTOMATION_TEST_LIVE': 'FALSE',
        'HUBSPOT_AUTOMATION_TEST_EXPLAIN': 'FALSE',
        'HUBSPOT_AUTOMATION_APIKEY': '',
    });
    idmap = env['HUBSPOT_AUTOMATION_TEST_SEQUENCES_PUBLIC_SEQUENCE_PERFORMANCE_ENTID'];
    const live = 'TRUE' === env.HUBSPOT_AUTOMATION_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['HUBSPOT_AUTOMATION_TEST_SEQUENCES_PUBLIC_SEQUENCE_PERFORMANCE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.HubspotAutomationSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=SequencesPublicSequencePerformanceEntity.test.js.map