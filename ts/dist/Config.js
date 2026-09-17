"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const DebugFeature_1 = require("./feature/debug/DebugFeature");
const IdempotencyFeature_1 = require("./feature/idempotency/IdempotencyFeature");
const MetricsFeature_1 = require("./feature/metrics/MetricsFeature");
const PagingFeature_1 = require("./feature/paging/PagingFeature");
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    debug: DebugFeature_1.DebugFeature,
    idempotency: IdempotencyFeature_1.IdempotencyFeature,
    metrics: MetricsFeature_1.MetricsFeature,
    paging: PagingFeature_1.PagingFeature,
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'HubspotAutomation',
        slug: "hubspot-automation",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        debug: {
            "options": {
                "active": false,
                "max": 100,
                "redact": [
                    "authorization",
                    "cookie",
                    "set-cookie",
                    "api-key",
                    "apikey",
                    "x-api-key",
                    "idempotency-key"
                ]
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "onEntry": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        idempotency: {
            "options": {
                "active": false,
                "header": "Idempotency-Key",
                "methods": [
                    "POST",
                    "PUT",
                    "PATCH",
                    "DELETE"
                ],
                "ops": [
                    "create",
                    "update",
                    "remove"
                ]
            },
            "optspec": {
                "keygen": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        metrics: {
            "options": {
                "active": false
            },
            "optspec": {
                "now": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        paging: {
            "options": {
                "active": false,
                "afterVar": "after",
                "cursorParam": "cursor",
                "firstVar": "first",
                "limitParam": "limit",
                "pageParam": "page",
                "startPage": 1
            },
            "optspec": {
                "limit": "`$NUMBER`",
                "ops": "`$LIST`"
            },
            "strict": false,
            "transport": "none"
        },
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://api.hubapi.com",
        auth: {
            prefix: '',
            in: 'query',
            name: 'hapikey',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            actions_v4_collection_response_public_action_definition_forward: {},
            actions_v4_collection_response_public_action_function_identifier_no: {},
            actions_v4_collection_response_public_action_revision_forward: {},
            actions_v4_public_action_definition: {},
            actions_v4_public_action_definition_requires_object: {},
            actions_v4_public_action_function: {},
            actions_v4_public_action_function_identifier: {},
            actions_v4_public_action_revision: {},
            automation_v4_api_flow: {},
            automation_v4_batch_response_api_flow: {},
            automation_v4_batch_response_flow_id_workflow_id_mapping: {},
            automation_v4_collection_response_api_flow_email_campaign: {},
            automation_v4_collection_response_api_flow_listing_forward_paging: {},
            automation_v4_collection_response_api_histogram_data_point_no: {},
            basic: {},
            callback: {},
            definition: {},
            email_templates_collection_response_public_folder_forward_paging: {},
            email_templates_collection_response_public_template_forward_paging: {},
            email_templates_public_template: {},
            function: {},
            sequence: {},
            sequences_collection_response_with_total_public_sequence_lite: {},
            sequences_public_sequence: {},
            sequences_public_sequence_enrollment: {},
            sequences_public_sequence_enrollment_lite: {},
            sequences_public_sequence_performance: {},
        }
    };
    entity = {
        "actions_v4_collection_response_public_action_definition_forward": {
            "fields": [
                {
                    "name": "paging",
                    "short": "Paging information for forward-only pagination.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "results",
                    "req": true,
                    "short": "An array of public action definitions, each represented by a PublicActionDefinition object.",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 8,
                        "count": 3,
                        "depth": 12
                    }
                }
            ],
            "name": "actions_v4_collection_response_public_action_definition_forward",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "after",
                                        "orig": "after",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "archived",
                                        "orig": "archived",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/actions/2026-09/{appId}",
                            "rename": {
                                "param": {
                                    "appId": "app_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "app_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "after",
                                    "app_id",
                                    "archived",
                                    "limit"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "2026-09",
                                "{app_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "2026_09"
                    ]
                ]
            }
        },
        "actions_v4_collection_response_public_action_function_identifier_no": {
            "fields": [
                {
                    "name": "functionType",
                    "req": true,
                    "short": "The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the function.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "actions_v4_collection_response_public_action_function_identifier_no",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "definition_id",
                                        "orig": "definition_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/actions/2026-09/{appId}/{definitionId}/functions",
                            "rename": {
                                "param": {
                                    "appId": "app_id",
                                    "definitionId": "definition_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "app_id"
                                },
                                {
                                    "var": "definition_id"
                                },
                                {
                                    "lit": "functions"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "app_id",
                                    "definition_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "2026-09",
                                "{app_id}",
                                "{definition_id}",
                                "functions"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "2026_09"
                    ]
                ]
            }
        },
        "actions_v4_collection_response_public_action_revision_forward": {
            "fields": [
                {
                    "format": "date-time",
                    "name": "createdAt",
                    "req": true,
                    "short": "The date and time when the action revision was created.",
                    "type": "`$STRING`"
                },
                {
                    "name": "definition",
                    "req": true,
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 8,
                        "count": 3,
                        "depth": 11
                    }
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "The unique identifier for the action revision.",
                    "type": "`$STRING`"
                },
                {
                    "name": "revisionId",
                    "req": true,
                    "short": "The unique identifier for the specific revision of the action.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "actions_v4_collection_response_public_action_revision_forward",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "definition_id",
                                        "orig": "definition_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "after",
                                        "orig": "after",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/actions/2026-09/{appId}/{definitionId}/revisions",
                            "rename": {
                                "param": {
                                    "appId": "app_id",
                                    "definitionId": "definition_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "app_id"
                                },
                                {
                                    "var": "definition_id"
                                },
                                {
                                    "lit": "revisions"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "after",
                                    "app_id",
                                    "definition_id",
                                    "limit"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "2026-09",
                                "{app_id}",
                                "{definition_id}",
                                "revisions"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "2026_09"
                    ]
                ]
            }
        },
        "actions_v4_public_action_definition": {
            "fields": [
                {
                    "name": "actionUrl",
                    "op": {
                        "update": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The URL endpoint where the action is executed.",
                    "type": "`$STRING`"
                },
                {
                    "format": "int64",
                    "name": "archivedAt",
                    "short": "A Unix timestamp in milliseconds representing when the action was archived.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "executionRules",
                    "short": "An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "functions",
                    "req": true,
                    "short": "An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "The unique identifier for the action definition.",
                    "type": "`$STRING`"
                },
                {
                    "name": "inputFieldDependencies",
                    "short": "An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency.",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 1
                    }
                },
                {
                    "name": "inputFields",
                    "op": {
                        "update": {
                            "type": "`$ARRAY`"
                        }
                    },
                    "req": true,
                    "short": "An array of input field definitions required for the action.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "labels",
                    "op": {
                        "update": {
                            "type": "`$OBJECT`"
                        }
                    },
                    "req": true,
                    "short": "An object containing labels for the action, with each property being a PublicActionLabels object.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "objectRequestOptions",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "objectTypes",
                    "op": {
                        "update": {
                            "type": "`$ARRAY`"
                        }
                    },
                    "req": true,
                    "short": "An array of strings representing the types of objects associated with the action.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "outputFields",
                    "short": "An array of output field definitions produced by the action.",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 8,
                        "count": 2,
                        "depth": 9
                    }
                },
                {
                    "name": "published",
                    "op": {
                        "update": {
                            "type": "`$BOOLEAN`"
                        }
                    },
                    "req": true,
                    "short": "A boolean indicating whether the action is published and available for use.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "revisionId",
                    "req": true,
                    "short": "The unique identifier for the current revision of the action definition.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id",
                "parts": [
                    "app_id",
                    "definition_id"
                ],
                "sep": "/"
            },
            "name": "actions_v4_public_action_definition",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/automation/actions/2026-09/{appId}",
                            "rename": {
                                "param": {
                                    "appId": "app_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "app_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "app_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "2026-09",
                                "{app_id}"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "definition_id",
                                        "orig": "definition_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "archived",
                                        "orig": "archived",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/actions/2026-09/{appId}/{definitionId}",
                            "rename": {
                                "param": {
                                    "appId": "app_id",
                                    "definitionId": "definition_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "app_id"
                                },
                                {
                                    "var": "definition_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "app_id",
                                    "archived",
                                    "definition_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "2026-09",
                                "{app_id}",
                                "{definition_id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "definition_id",
                                        "orig": "definition_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/automation/actions/2026-09/{appId}/{definitionId}",
                            "rename": {
                                "param": {
                                    "appId": "app_id",
                                    "definitionId": "definition_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "app_id"
                                },
                                {
                                    "var": "definition_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "app_id",
                                    "definition_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "2026-09",
                                "{app_id}",
                                "{definition_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "2026_09"
                    ]
                ]
            }
        },
        "actions_v4_public_action_definition_requires_object": {
            "fields": [
                {
                    "name": "requiresObject",
                    "req": true,
                    "short": "Indicates whether a custom action definition requires an object.",
                    "type": "`$BOOLEAN`"
                }
            ],
            "name": "actions_v4_public_action_definition_requires_object",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "definition_id",
                                        "orig": "definition_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/actions/2026-09/{appId}/{definitionId}/requires-object",
                            "rename": {
                                "param": {
                                    "appId": "app_id",
                                    "definitionId": "definition_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "app_id"
                                },
                                {
                                    "var": "definition_id"
                                },
                                {
                                    "lit": "requires-object"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "app_id",
                                    "definition_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "2026-09",
                                "{app_id}",
                                "{definition_id}",
                                "requires-object"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "2026_09"
                    ]
                ]
            }
        },
        "actions_v4_public_action_function": {
            "fields": [
                {
                    "name": "functionSource",
                    "req": true,
                    "short": "The source code or script that defines the function's behavior.",
                    "type": "`$STRING`"
                },
                {
                    "name": "functionType",
                    "req": true,
                    "short": "The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the action function.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "actions_v4_public_action_function",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "definition_id",
                                        "orig": "definition_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "function_id",
                                        "orig": "function_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "function_type",
                                        "orig": "function_type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}",
                            "rename": {
                                "param": {
                                    "appId": "app_id",
                                    "definitionId": "definition_id",
                                    "functionId": "function_id",
                                    "functionType": "function_type"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "app_id"
                                },
                                {
                                    "var": "definition_id"
                                },
                                {
                                    "lit": "functions"
                                },
                                {
                                    "var": "function_type"
                                },
                                {
                                    "var": "function_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "app_id",
                                    "definition_id",
                                    "function_id",
                                    "function_type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "2026-09",
                                "{app_id}",
                                "{definition_id}",
                                "functions",
                                "{function_type}",
                                "{function_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "definition_id",
                                        "orig": "definition_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "function_type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}",
                            "rename": {
                                "param": {
                                    "appId": "app_id",
                                    "definitionId": "definition_id",
                                    "functionType": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "app_id"
                                },
                                {
                                    "var": "definition_id"
                                },
                                {
                                    "lit": "functions"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "app_id",
                                    "definition_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "2026-09",
                                "{app_id}",
                                "{definition_id}",
                                "functions",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "2026_09"
                    ],
                    [
                        "2026_09",
                        "function"
                    ]
                ]
            }
        },
        "actions_v4_public_action_function_identifier": {
            "fields": [
                {
                    "name": "functionType",
                    "req": true,
                    "short": "The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier for the function.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "from": {
                    "function_type": "functionType"
                },
                "name": "id",
                "parts": [
                    "function_type",
                    "function_id"
                ],
                "sep": "/"
            },
            "name": "actions_v4_public_action_function_identifier",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "definition_id",
                                        "orig": "definition_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "function_id",
                                        "orig": "function_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "function_type",
                                        "orig": "function_type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}",
                            "rename": {
                                "param": {
                                    "appId": "app_id",
                                    "definitionId": "definition_id",
                                    "functionId": "function_id",
                                    "functionType": "function_type"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "app_id"
                                },
                                {
                                    "var": "definition_id"
                                },
                                {
                                    "lit": "functions"
                                },
                                {
                                    "var": "function_type"
                                },
                                {
                                    "var": "function_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "app_id",
                                    "definition_id",
                                    "function_id",
                                    "function_type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "2026-09",
                                "{app_id}",
                                "{definition_id}",
                                "functions",
                                "{function_type}",
                                "{function_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "definition_id",
                                        "orig": "definition_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "function_type",
                                        "orig": "function_type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}",
                            "rename": {
                                "param": {
                                    "appId": "app_id",
                                    "definitionId": "definition_id",
                                    "functionType": "function_type"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "app_id"
                                },
                                {
                                    "var": "definition_id"
                                },
                                {
                                    "lit": "functions"
                                },
                                {
                                    "var": "function_type"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "app_id",
                                    "definition_id",
                                    "function_type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "2026-09",
                                "{app_id}",
                                "{definition_id}",
                                "functions",
                                "{function_type}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "2026_09",
                        "function"
                    ]
                ]
            }
        },
        "actions_v4_public_action_revision": {
            "fields": [
                {
                    "name": "actionUrl",
                    "req": true,
                    "short": "The URL endpoint where the action is executed.",
                    "type": "`$STRING`"
                },
                {
                    "format": "int64",
                    "name": "archivedAt",
                    "short": "A Unix timestamp in milliseconds representing when the action was archived.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "executionRules",
                    "short": "An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "functions",
                    "req": true,
                    "short": "An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "The unique identifier for the action definition.",
                    "type": "`$STRING`"
                },
                {
                    "name": "inputFieldDependencies",
                    "short": "An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency.",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 1
                    }
                },
                {
                    "name": "inputFields",
                    "req": true,
                    "short": "An array of input field definitions required for the action.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "labels",
                    "req": true,
                    "short": "An object containing labels for the action, with each property being a PublicActionLabels object.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "objectRequestOptions",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "objectTypes",
                    "req": true,
                    "short": "An array of strings representing the types of objects associated with the action.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "outputFields",
                    "short": "An array of output field definitions produced by the action.",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 8,
                        "count": 2,
                        "depth": 9
                    }
                },
                {
                    "name": "published",
                    "req": true,
                    "short": "A boolean indicating whether the action is published and available for use.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "revisionId",
                    "req": true,
                    "short": "The unique identifier for the current revision of the action definition.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "actions_v4_public_action_revision",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "definition_id",
                                        "orig": "definition_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "revision_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/actions/2026-09/{appId}/{definitionId}/revisions/{revisionId}",
                            "rename": {
                                "param": {
                                    "appId": "app_id",
                                    "definitionId": "definition_id",
                                    "revisionId": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "app_id"
                                },
                                {
                                    "var": "definition_id"
                                },
                                {
                                    "lit": "revisions"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "app_id",
                                    "definition_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.definition`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "2026-09",
                                "{app_id}",
                                "{definition_id}",
                                "revisions",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "2026_09"
                    ]
                ]
            }
        },
        "automation_v4_api_flow": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "automation_v4_api_flow",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/automation/v4/flows",
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "v4"
                                },
                                {
                                    "lit": "flows"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "v4",
                                "flows"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "flow_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/v4/flows/{flowId}",
                            "rename": {
                                "param": {
                                    "flowId": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "v4"
                                },
                                {
                                    "lit": "flows"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "v4",
                                "flows",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "flow_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/automation/v4/flows/{flowId}",
                            "rename": {
                                "param": {
                                    "flowId": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "v4"
                                },
                                {
                                    "lit": "flows"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "v4",
                                "flows",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "automation_v4_batch_response_api_flow": {
            "fields": [
                {
                    "format": "date-time",
                    "name": "completedAt",
                    "req": true,
                    "short": "The date and time when the batch process was completed, formatted as a date-time string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "inputs",
                    "req": true,
                    "type": "`$ARRAY`"
                },
                {
                    "name": "links",
                    "short": "A collection of URLs related to the batch process, empty for this operation.",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "date-time",
                    "name": "requestedAt",
                    "short": "The date and time when the batch request was initiated, formatted as a date-time string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "results",
                    "req": true,
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 20,
                        "count": 59,
                        "depth": 55
                    }
                },
                {
                    "format": "date-time",
                    "name": "startedAt",
                    "req": true,
                    "short": "The date and time when the batch process began, formatted as a date-time string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "req": true,
                    "short": "The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING.",
                    "type": "`$STRING`"
                }
            ],
            "name": "automation_v4_batch_response_api_flow",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/automation/v4/flows/batch/read",
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "v4"
                                },
                                {
                                    "lit": "flows"
                                },
                                {
                                    "lit": "batch"
                                },
                                {
                                    "lit": "read"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "v4",
                                "flows",
                                "batch",
                                "read"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "automation_v4_batch_response_flow_id_workflow_id_mapping": {
            "fields": [
                {
                    "format": "date-time",
                    "name": "completedAt",
                    "req": true,
                    "short": "The date and time when the batch process was completed, formatted as a date-time string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "inputs",
                    "req": true,
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 1
                    }
                },
                {
                    "name": "links",
                    "short": "A collection of URLs related to the batch process.",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "date-time",
                    "name": "requestedAt",
                    "short": "The date and time when the batch request was initiated, formatted as a date-time string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "results",
                    "req": true,
                    "type": "`$ARRAY`"
                },
                {
                    "format": "date-time",
                    "name": "startedAt",
                    "req": true,
                    "short": "The date and time when the batch process began, formatted as a date-time string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "req": true,
                    "short": "The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING.",
                    "type": "`$STRING`"
                }
            ],
            "name": "automation_v4_batch_response_flow_id_workflow_id_mapping",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/automation/v4/workflow-id-mappings/batch/read",
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "v4"
                                },
                                {
                                    "lit": "workflow-id-mappings"
                                },
                                {
                                    "lit": "batch"
                                },
                                {
                                    "lit": "read"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "v4",
                                "workflow-id-mappings",
                                "batch",
                                "read"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "automation_v4_collection_response_api_flow_email_campaign": {
            "fields": [
                {
                    "name": "emailCampaignId",
                    "req": true,
                    "short": "The unique identifier for the email campaign associated with the automation flow.",
                    "type": "`$STRING`"
                },
                {
                    "name": "emailContentId",
                    "req": true,
                    "short": "The unique identifier for the email content used in the email campaign.",
                    "type": "`$STRING`"
                },
                {
                    "name": "flowId",
                    "req": true,
                    "short": "The unique identifier for the automation flow associated with the email campaign.",
                    "type": "`$STRING`"
                }
            ],
            "name": "automation_v4_collection_response_api_flow_email_campaign",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "after",
                                        "orig": "after",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "before",
                                        "orig": "before",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "flow_id",
                                        "orig": "flow_id",
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/v4/flows/email-campaigns",
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "v4"
                                },
                                {
                                    "lit": "flows"
                                },
                                {
                                    "lit": "email-campaigns"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "after",
                                    "before",
                                    "flow_id",
                                    "limit"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "v4",
                                "flows",
                                "email-campaigns"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "automation_v4_collection_response_api_flow_listing_forward_paging": {
            "fields": [
                {
                    "format": "date-time",
                    "name": "createdAt",
                    "req": true,
                    "short": "The date and time when the automation flow was created, formatted as a date-time string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "flowType",
                    "req": true,
                    "short": "Specifies the type of the automation flow (PLATFORM vs.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "The unique identifier for the automation flow.",
                    "type": "`$STRING`"
                },
                {
                    "name": "isEnabled",
                    "req": true,
                    "short": "Indicates whether the automation flow is currently active.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "name",
                    "short": "The name assigned to the automation flow.",
                    "type": "`$STRING`"
                },
                {
                    "name": "objectTypeId",
                    "req": true,
                    "short": "Represents the ID of the object type associated with the automation flow.",
                    "type": "`$STRING`"
                },
                {
                    "name": "revisionId",
                    "req": true,
                    "short": "The identifier for the current revision of the automation flow.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updatedAt",
                    "req": true,
                    "short": "The date and time when the automation flow was last updated, formatted as a date-time string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "uuid",
                    "short": "The universally unique identifier for the automation flow.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "automation_v4_collection_response_api_flow_listing_forward_paging",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "after",
                                        "orig": "after",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/v4/flows",
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "v4"
                                },
                                {
                                    "lit": "flows"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "after",
                                    "limit"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "v4",
                                "flows"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "automation_v4_collection_response_api_histogram_data_point_no": {
            "fields": [
                {
                    "name": "results",
                    "req": true,
                    "type": "`$ARRAY`"
                }
            ],
            "name": "automation_v4_collection_response_api_histogram_data_point_no",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "flow_id",
                                        "orig": "flow_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "bucket_type",
                                        "orig": "bucket_type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "end",
                                        "orig": "end",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "first_day",
                                        "orig": "first_day",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/v4/flows/performance/{flowId}",
                            "rename": {
                                "param": {
                                    "flowId": "flow_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "v4"
                                },
                                {
                                    "lit": "flows"
                                },
                                {
                                    "lit": "performance"
                                },
                                {
                                    "var": "flow_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "bucket_type",
                                    "end",
                                    "first_day",
                                    "flow_id",
                                    "start"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "v4",
                                "flows",
                                "performance",
                                "{flow_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "performance"
                    ]
                ]
            }
        },
        "basic": {
            "fields": [],
            "name": "basic",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "sequence_id",
                                        "orig": "sequence_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "override_active_enrollment",
                                        "orig": "override_active_enrollment",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}",
                            "rename": {
                                "param": {
                                    "sequenceId": "sequence_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "sequences"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "lit": "serviceaccounts"
                                },
                                {
                                    "lit": "sequences"
                                },
                                {
                                    "var": "sequence_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "override_active_enrollment",
                                    "sequence_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "sequences",
                                "2026-09",
                                "serviceaccounts",
                                "sequences",
                                "{sequence_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "flow_id",
                                        "orig": "flow_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/automation/v4/flows/{flowId}",
                            "rename": {
                                "param": {
                                    "flowId": "flow_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "v4"
                                },
                                {
                                    "lit": "flows"
                                },
                                {
                                    "var": "flow_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "flow_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "v4",
                                "flows",
                                "{flow_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "sequence"
                    ],
                    [
                        "flow"
                    ]
                ]
            }
        },
        "callback": {
            "fields": [
                {
                    "name": "failureReasonType",
                    "short": "Indicates the reason for the failure of a callback completion.",
                    "type": "`$STRING`"
                },
                {
                    "name": "inputs",
                    "req": true,
                    "short": "An array of CallbackCompletionBatchRequest objects, each representing a single callback completion request.",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 5,
                        "count": 1,
                        "depth": 3
                    }
                },
                {
                    "name": "outputFields",
                    "req": true,
                    "short": "Contains the output fields associated with the callback, with each field represented as a key-value pair.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "requestContext",
                    "short": "Specifies the context in which the request is made, which can be one of several predefined contexts.",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 5,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "typedOutputs",
                    "req": true,
                    "short": "Holds the typed outputs related to the callback, structured as an object.",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "callback",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "callback_id",
                                        "orig": "callback_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/automation/actions/callbacks/2026-09/{callbackId}/complete",
                            "rename": {
                                "param": {
                                    "callbackId": "callback_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "callbacks"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "callback_id"
                                },
                                {
                                    "lit": "complete"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "callback_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "callbacks",
                                "2026-09",
                                "{callback_id}",
                                "complete"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/automation/actions/callbacks/2026-09/complete",
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "callbacks"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "lit": "complete"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "callbacks",
                                "2026-09",
                                "complete"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "2026_09"
                    ]
                ]
            }
        },
        "definition": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "requiresObject",
                    "req": true,
                    "short": "Indicates whether a custom action definition requires an associated object.",
                    "type": "`$BOOLEAN`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id",
                "parts": [
                    "app_id",
                    "definition_id"
                ],
                "sep": "/"
            },
            "name": "definition",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "definition_id",
                                        "orig": "definition_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/automation/actions/2026-09/{appId}/{definitionId}/requires-object",
                            "rename": {
                                "param": {
                                    "appId": "app_id",
                                    "definitionId": "definition_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "app_id"
                                },
                                {
                                    "var": "definition_id"
                                },
                                {
                                    "lit": "requires-object"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "app_id",
                                    "definition_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "2026-09",
                                "{app_id}",
                                "{definition_id}",
                                "requires-object"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "definition_id",
                                        "orig": "definition_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/automation/actions/2026-09/{appId}/{definitionId}",
                            "rename": {
                                "param": {
                                    "appId": "app_id",
                                    "definitionId": "definition_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "app_id"
                                },
                                {
                                    "var": "definition_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "app_id",
                                    "definition_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "2026-09",
                                "{app_id}",
                                "{definition_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "2026_09"
                    ]
                ]
            }
        },
        "email_templates_collection_response_public_folder_forward_paging": {
            "fields": [
                {
                    "format": "int64",
                    "name": "createdAt",
                    "short": "The timestamp indicating when the folder was created, represented as an integer in int64 format.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "The unique identifier for the folder, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name of the folder, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "format": "int64",
                    "name": "updatedAt",
                    "short": "The timestamp indicating when the folder was last updated, represented as an integer in int64 format.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "email_templates_collection_response_public_folder_forward_paging",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "after",
                                        "orig": "after",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/email-templates/2026-09/folders",
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "email-templates"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "lit": "folders"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "after",
                                    "limit"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "email-templates",
                                "2026-09",
                                "folders"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "email_templates_collection_response_public_template_forward_paging": {
            "fields": [
                {
                    "name": "body",
                    "short": "The content of the email template, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "format": "int64",
                    "name": "createdAt",
                    "short": "The timestamp indicating when the email template was created, represented as an integer in int64 format.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "folderId",
                    "short": "The identifier of the folder where the email template is stored, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "The unique identifier for the email template, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name of the email template, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "ownerId",
                    "short": "The identifier of the owner of the email template, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "subject",
                    "short": "The subject line of the email template, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "format": "int64",
                    "name": "updatedAt",
                    "short": "The timestamp indicating when the email template was last updated, represented as an integer in int64 format.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "email_templates_collection_response_public_template_forward_paging",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "after",
                                        "orig": "after",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/email-templates/2026-09",
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "email-templates"
                                },
                                {
                                    "lit": "2026-09"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "after",
                                    "limit"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "email-templates",
                                "2026-09"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "email_templates_public_template": {
            "fields": [
                {
                    "name": "body",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        },
                        "update": {
                            "req": true,
                            "type": "`$OBJECT`"
                        }
                    },
                    "short": "The content of the email template, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "format": "int64",
                    "name": "createdAt",
                    "short": "The timestamp indicating when the email template was created, represented as an integer in int64 format.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "folderId",
                    "op": {
                        "update": {
                            "req": true,
                            "type": "`$OBJECT`"
                        }
                    },
                    "short": "The identifier of the folder where the email template is stored, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "The unique identifier for the email template, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        },
                        "update": {
                            "req": true,
                            "type": "`$OBJECT`"
                        }
                    },
                    "short": "The name of the email template, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "ownerId",
                    "short": "The identifier of the owner of the email template, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "subject",
                    "op": {
                        "update": {
                            "req": true,
                            "type": "`$OBJECT`"
                        }
                    },
                    "short": "The subject line of the email template, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "format": "int64",
                    "name": "updatedAt",
                    "short": "The timestamp indicating when the email template was last updated, represented as an integer in int64 format.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "email_templates_public_template",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/automation/email-templates/2026-09",
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "email-templates"
                                },
                                {
                                    "lit": "2026-09"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "email-templates",
                                "2026-09"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "template_id",
                                        "orig": "template_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/email-templates/2026-09/{templateId}",
                            "rename": {
                                "param": {
                                    "templateId": "template_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "email-templates"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "template_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "template_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "email-templates",
                                "2026-09",
                                "{template_id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "template_id",
                                        "orig": "template_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PATCH",
                            "orig": "/automation/email-templates/2026-09/{templateId}",
                            "rename": {
                                "param": {
                                    "templateId": "template_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "email-templates"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "template_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "template_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "email-templates",
                                "2026-09",
                                "{template_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "2026_09"
                    ]
                ]
            }
        },
        "function": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id",
                "parts": [
                    "function_type",
                    "function_id"
                ],
                "sep": "/"
            },
            "name": "function",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "definition_id",
                                        "orig": "definition_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "function_id",
                                        "orig": "function_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "function_type",
                                        "orig": "function_type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}",
                            "rename": {
                                "param": {
                                    "appId": "app_id",
                                    "definitionId": "definition_id",
                                    "functionId": "function_id",
                                    "functionType": "function_type"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "app_id"
                                },
                                {
                                    "var": "definition_id"
                                },
                                {
                                    "lit": "functions"
                                },
                                {
                                    "var": "function_type"
                                },
                                {
                                    "var": "function_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "app_id",
                                    "definition_id",
                                    "function_id",
                                    "function_type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "2026-09",
                                "{app_id}",
                                "{definition_id}",
                                "functions",
                                "{function_type}",
                                "{function_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "definition_id",
                                        "orig": "definition_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "function_type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}",
                            "rename": {
                                "param": {
                                    "appId": "app_id",
                                    "definitionId": "definition_id",
                                    "functionType": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "app_id"
                                },
                                {
                                    "var": "definition_id"
                                },
                                {
                                    "lit": "functions"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "app_id",
                                    "definition_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "actions",
                                "2026-09",
                                "{app_id}",
                                "{definition_id}",
                                "functions",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "2026_09"
                    ],
                    [
                        "2026_09",
                        "function"
                    ]
                ]
            }
        },
        "sequence": {
            "fields": [
                {
                    "format": "date-time",
                    "name": "createdAt",
                    "req": true,
                    "short": "The date and time when the sequence was created, in ISO 8601 format.",
                    "type": "`$STRING`"
                },
                {
                    "name": "dependencies",
                    "req": true,
                    "short": "An array of dependencies between steps in the sequence, each represented by a PublicSequenceStepDependencyResponse object.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "dynamic",
                    "req": true,
                    "short": "A boolean indicating whether the sequence is dynamic.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "engagementTriggers",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "folderId",
                    "short": "The identifier for the folder containing the sequence.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "The unique identifier for the sequence.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "req": true,
                    "short": "The name of the sequence.",
                    "type": "`$STRING`"
                },
                {
                    "name": "sequence",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "settings",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "steps",
                    "req": true,
                    "short": "An array of steps included in the sequence, each represented by a PublicSequenceStepResponseV2 object.",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "date-time",
                    "name": "updatedAt",
                    "req": true,
                    "short": "The date and time when the sequence was last updated, in ISO 8601 format.",
                    "type": "`$STRING`"
                },
                {
                    "name": "userId",
                    "req": true,
                    "short": "The unique identifier of the user who owns the sequence.",
                    "type": "`$STRING`"
                },
                {
                    "name": "userView",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "sequence",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/automation/sequences/2026-09/serviceaccounts/sequences",
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "sequences"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "lit": "serviceaccounts"
                                },
                                {
                                    "lit": "sequences"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.sequence`"
                            },
                            "parts": [
                                "automation",
                                "sequences",
                                "2026-09",
                                "serviceaccounts",
                                "sequences"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "after",
                                        "orig": "after",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/sequences/2026-09/serviceaccounts/sequences",
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "sequences"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "lit": "serviceaccounts"
                                },
                                {
                                    "lit": "sequences"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "after",
                                    "limit",
                                    "name"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "sequences",
                                "2026-09",
                                "serviceaccounts",
                                "sequences"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "sequence_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}",
                            "rename": {
                                "param": {
                                    "sequenceId": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "sequences"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "lit": "serviceaccounts"
                                },
                                {
                                    "lit": "sequences"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "sequences",
                                "2026-09",
                                "serviceaccounts",
                                "sequences",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "sequence_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}",
                            "rename": {
                                "param": {
                                    "sequenceId": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "sequences"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "lit": "serviceaccounts"
                                },
                                {
                                    "lit": "sequences"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "sequences",
                                "2026-09",
                                "serviceaccounts",
                                "sequences",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "sequences_collection_response_with_total_public_sequence_lite": {
            "fields": [
                {
                    "format": "date-time",
                    "name": "createdAt",
                    "req": true,
                    "short": "The date and time when the sequence was created, in ISO 8601 format.",
                    "type": "`$STRING`"
                },
                {
                    "name": "folderId",
                    "short": "The identifier of the folder containing the sequence, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "The unique identifier for the sequence, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "req": true,
                    "short": "The name of the sequence, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updatedAt",
                    "req": true,
                    "short": "The date and time when the sequence was last updated, in ISO 8601 format.",
                    "type": "`$STRING`"
                },
                {
                    "name": "userId",
                    "req": true,
                    "short": "The unique identifier of the user associated with the sequence, represented as a string.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "sequences_collection_response_with_total_public_sequence_lite",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "after",
                                        "orig": "after",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "user_id",
                                        "orig": "user_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/sequences/2026-09",
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "sequences"
                                },
                                {
                                    "lit": "2026-09"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "after",
                                    "limit",
                                    "name",
                                    "user_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "sequences",
                                "2026-09"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "sequences_public_sequence": {
            "fields": [
                {
                    "format": "date-time",
                    "name": "createdAt",
                    "req": true,
                    "short": "The date and time when the sequence was created, in ISO 8601 format.",
                    "type": "`$STRING`"
                },
                {
                    "name": "dependencies",
                    "req": true,
                    "short": "An array of dependencies between sequence steps, each represented by a PublicSequenceStepDependencyResponse object.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "folderId",
                    "short": "The unique identifier for the folder containing the sequence.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "The unique identifier for the sequence.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "req": true,
                    "short": "The name of the sequence.",
                    "type": "`$STRING`"
                },
                {
                    "name": "settings",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "steps",
                    "req": true,
                    "short": "An array of steps included in the sequence, each represented by a PublicSequenceStepResponse object.",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "date-time",
                    "name": "updatedAt",
                    "req": true,
                    "short": "The date and time when the sequence was last updated, in ISO 8601 format.",
                    "type": "`$STRING`"
                },
                {
                    "name": "userId",
                    "req": true,
                    "short": "The unique identifier of the user who owns the sequence.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "sequences_public_sequence",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "sequence_id",
                                        "orig": "sequence_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "user_id",
                                        "orig": "user_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/sequences/2026-09/{sequenceId}",
                            "rename": {
                                "param": {
                                    "sequenceId": "sequence_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "sequences"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "var": "sequence_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "sequence_id",
                                    "user_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "sequences",
                                "2026-09",
                                "{sequence_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "2026_09"
                    ]
                ]
            }
        },
        "sequences_public_sequence_enrollment": {
            "fields": [
                {
                    "format": "date-time",
                    "name": "enrolledAt",
                    "req": true,
                    "short": "The date and time when the contact was enrolled in the sequence, in ISO 8601 format.",
                    "type": "`$STRING`"
                },
                {
                    "name": "enrolledBy",
                    "req": true,
                    "short": "The unique identifier of the user who enrolled the contact in the sequence.",
                    "type": "`$STRING`"
                },
                {
                    "name": "enrolledByEmail",
                    "req": true,
                    "short": "The email address of the user who enrolled the contact in the sequence.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "The unique identifier for the sequence enrollment.",
                    "type": "`$STRING`"
                },
                {
                    "name": "sequenceId",
                    "req": true,
                    "short": "The unique identifier of the sequence in which the contact is enrolled.",
                    "type": "`$STRING`"
                },
                {
                    "name": "sequenceName",
                    "req": true,
                    "short": "The name of the sequence in which the contact is enrolled.",
                    "type": "`$STRING`"
                },
                {
                    "name": "toEmail",
                    "req": true,
                    "short": "The email address of the contact enrolled in the sequence.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updatedAt",
                    "req": true,
                    "short": "The date and time when the sequence enrollment was last updated, in ISO 8601 format.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "sequences_public_sequence_enrollment",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "contact_id",
                                        "orig": "contact_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/sequences/2026-09/enrollments/contact/{contactId}",
                            "rename": {
                                "param": {
                                    "contactId": "contact_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "sequences"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "lit": "enrollments"
                                },
                                {
                                    "lit": "contact"
                                },
                                {
                                    "var": "contact_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "contact_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "sequences",
                                "2026-09",
                                "enrollments",
                                "contact",
                                "{contact_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "contact"
                    ]
                ]
            }
        },
        "sequences_public_sequence_enrollment_lite": {
            "fields": [
                {
                    "name": "contactId",
                    "req": true,
                    "short": "The unique identifier of the contact to be enrolled in the sequence.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "enrolledAt",
                    "req": true,
                    "short": "The date and time when the contact was enrolled in the sequence, in ISO 8601 format.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "The unique identifier for the sequence enrollment.",
                    "type": "`$STRING`"
                },
                {
                    "name": "senderAliasAddress",
                    "short": "An optional alias email address that can be used as the sender's address.",
                    "type": "`$STRING`"
                },
                {
                    "name": "senderEmail",
                    "req": true,
                    "short": "The email address of the sender responsible for the sequence enrollment.",
                    "type": "`$STRING`"
                },
                {
                    "name": "sequenceId",
                    "req": true,
                    "short": "The unique identifier of the sequence in which the contact is to be enrolled.",
                    "type": "`$STRING`"
                },
                {
                    "name": "toEmail",
                    "req": true,
                    "short": "The email address of the contact who is enrolled in the sequence.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updatedAt",
                    "req": true,
                    "short": "The date and time when the sequence enrollment was last updated, in ISO 8601 format.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "sequences_public_sequence_enrollment_lite",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "user_id",
                                        "orig": "user_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/automation/sequences/2026-09/enrollments",
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "sequences"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "lit": "enrollments"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "user_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "sequences",
                                "2026-09",
                                "enrollments"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/automation/sequences/2026-09/serviceaccounts/enrollments",
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "sequences"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "lit": "serviceaccounts"
                                },
                                {
                                    "lit": "enrollments"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "sequences",
                                "2026-09",
                                "serviceaccounts",
                                "enrollments"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "sequences_public_sequence_performance": {
            "fields": [
                {
                    "name": "companyMetrics",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "sequenceId",
                    "req": true,
                    "short": "The unique identifier for the sequence, represented as a string.",
                    "type": "`$STRING`"
                },
                {
                    "name": "statusByStep",
                    "req": true,
                    "short": "An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "steps",
                    "req": true,
                    "short": "An array of objects, each representing the performance metrics for individual steps within the sequence.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "summary",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "timeline",
                    "req": true,
                    "short": "An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked.",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "sequences_public_sequence_performance",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": null,
                                        "kind": "param",
                                        "name": "sequence_id",
                                        "orig": "sequence_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "timeline_interval",
                                        "orig": "timeline_interval",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}/performance",
                            "rename": {
                                "param": {
                                    "sequenceId": "sequence_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "automation"
                                },
                                {
                                    "lit": "sequences"
                                },
                                {
                                    "lit": "2026-09"
                                },
                                {
                                    "lit": "serviceaccounts"
                                },
                                {
                                    "lit": "sequences"
                                },
                                {
                                    "var": "sequence_id"
                                },
                                {
                                    "lit": "performance"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "sequence_id",
                                    "timeline_interval"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "automation",
                                "sequences",
                                "2026-09",
                                "serviceaccounts",
                                "sequences",
                                "{sequence_id}",
                                "performance"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "sequence"
                    ]
                ]
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map