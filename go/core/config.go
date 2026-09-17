package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "HubspotAutomation",
			"slug": "hubspot-automation",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.hubapi.com",
			"auth": map[string]any{
				"prefix": "",
				"in": "query",
				"name": "hapikey",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"actions_v4_collection_response_public_action_definition_forward": map[string]any{},
				"actions_v4_collection_response_public_action_function_identifier_no": map[string]any{},
				"actions_v4_collection_response_public_action_revision_forward": map[string]any{},
				"actions_v4_public_action_definition": map[string]any{},
				"actions_v4_public_action_definition_requires_object": map[string]any{},
				"actions_v4_public_action_function": map[string]any{},
				"actions_v4_public_action_function_identifier": map[string]any{},
				"actions_v4_public_action_revision": map[string]any{},
				"automation_v4_api_flow": map[string]any{},
				"automation_v4_batch_response_api_flow": map[string]any{},
				"automation_v4_batch_response_flow_id_workflow_id_mapping": map[string]any{},
				"automation_v4_collection_response_api_flow_email_campaign": map[string]any{},
				"automation_v4_collection_response_api_flow_listing_forward_paging": map[string]any{},
				"automation_v4_collection_response_api_histogram_data_point_no": map[string]any{},
				"basic": map[string]any{},
				"callback": map[string]any{},
				"definition": map[string]any{},
				"email_templates_collection_response_public_folder_forward_paging": map[string]any{},
				"email_templates_collection_response_public_template_forward_paging": map[string]any{},
				"email_templates_public_template": map[string]any{},
				"function": map[string]any{},
				"sequence": map[string]any{},
				"sequences_collection_response_with_total_public_sequence_lite": map[string]any{},
				"sequences_public_sequence": map[string]any{},
				"sequences_public_sequence_enrollment": map[string]any{},
				"sequences_public_sequence_enrollment_lite": map[string]any{},
				"sequences_public_sequence_performance": map[string]any{},
			},
		},
		"entity": map[string]any{
			"actions_v4_collection_response_public_action_definition_forward": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "paging",
						"short": "Paging information for forward-only pagination.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"short": "An array of public action definitions, each represented by a PublicActionDefinition object.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 8,
							"count": 3,
							"depth": 12,
						},
					},
				},
				"name": "actions_v4_collection_response_public_action_definition_forward",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/actions/2026-09/{appId}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"app_id",
										"archived",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"actions",
									"2026-09",
									"{app_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"actions_v4_collection_response_public_action_function_identifier_no": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "functionType",
						"req": true,
						"short": "The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the function.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "actions_v4_collection_response_public_action_function_identifier_no",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "definition_id",
											"orig": "definition_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/actions/2026-09/{appId}/{definitionId}/functions",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"definitionId": "definition_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"var": "definition_id",
									},
									map[string]any{
										"lit": "functions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"definition_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"automation",
									"actions",
									"2026-09",
									"{app_id}",
									"{definition_id}",
									"functions",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"actions_v4_collection_response_public_action_revision_forward": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the action revision was created.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "definition",
						"req": true,
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 8,
							"count": 3,
							"depth": 11,
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the action revision.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "revisionId",
						"req": true,
						"short": "The unique identifier for the specific revision of the action.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "actions_v4_collection_response_public_action_revision_forward",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "definition_id",
											"orig": "definition_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/actions/2026-09/{appId}/{definitionId}/revisions",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"definitionId": "definition_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"var": "definition_id",
									},
									map[string]any{
										"lit": "revisions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"app_id",
										"definition_id",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"actions",
									"2026-09",
									"{app_id}",
									"{definition_id}",
									"revisions",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"actions_v4_public_action_definition": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actionUrl",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The URL endpoint where the action is executed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "archivedAt",
						"short": "A Unix timestamp in milliseconds representing when the action was archived.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "executionRules",
						"short": "An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "functions",
						"req": true,
						"short": "An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the action definition.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputFieldDependencies",
						"short": "An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "inputFields",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of input field definitions required for the action.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "labels",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$OBJECT`",
							},
						},
						"req": true,
						"short": "An object containing labels for the action, with each property being a PublicActionLabels object.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "objectRequestOptions",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "objectTypes",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "An array of strings representing the types of objects associated with the action.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "outputFields",
						"short": "An array of output field definitions produced by the action.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 8,
							"count": 2,
							"depth": 9,
						},
					},
					map[string]any{
						"name": "published",
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$BOOLEAN`",
							},
						},
						"req": true,
						"short": "A boolean indicating whether the action is published and available for use.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "revisionId",
						"req": true,
						"short": "The unique identifier for the current revision of the action definition.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
					"parts": []any{
						"app_id",
						"definition_id",
					},
					"sep": "/",
				},
				"name": "actions_v4_public_action_definition",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/automation/actions/2026-09/{appId}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"actions",
									"2026-09",
									"{app_id}",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "definition_id",
											"orig": "definition_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "archived",
											"orig": "archived",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/actions/2026-09/{appId}/{definitionId}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"definitionId": "definition_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"var": "definition_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"archived",
										"definition_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"actions",
									"2026-09",
									"{app_id}",
									"{definition_id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "definition_id",
											"orig": "definition_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/automation/actions/2026-09/{appId}/{definitionId}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"definitionId": "definition_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"var": "definition_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"definition_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"actions",
									"2026-09",
									"{app_id}",
									"{definition_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"actions_v4_public_action_definition_requires_object": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "requiresObject",
						"req": true,
						"short": "Indicates whether a custom action definition requires an object.",
						"type": "`$BOOLEAN`",
					},
				},
				"name": "actions_v4_public_action_definition_requires_object",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "definition_id",
											"orig": "definition_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/actions/2026-09/{appId}/{definitionId}/requires-object",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"definitionId": "definition_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"var": "definition_id",
									},
									map[string]any{
										"lit": "requires-object",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"definition_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"actions",
									"2026-09",
									"{app_id}",
									"{definition_id}",
									"requires-object",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"actions_v4_public_action_function": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "functionSource",
						"req": true,
						"short": "The source code or script that defines the function's behavior.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "functionType",
						"req": true,
						"short": "The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the action function.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "actions_v4_public_action_function",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "definition_id",
											"orig": "definition_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "function_id",
											"orig": "function_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "function_type",
											"orig": "function_type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"definitionId": "definition_id",
										"functionId": "function_id",
										"functionType": "function_type",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"var": "definition_id",
									},
									map[string]any{
										"lit": "functions",
									},
									map[string]any{
										"var": "function_type",
									},
									map[string]any{
										"var": "function_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"definition_id",
										"function_id",
										"function_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"actions",
									"2026-09",
									"{app_id}",
									"{definition_id}",
									"functions",
									"{function_type}",
									"{function_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "definition_id",
											"orig": "definition_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "function_type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"definitionId": "definition_id",
										"functionType": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"var": "definition_id",
									},
									map[string]any{
										"lit": "functions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"definition_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"actions",
									"2026-09",
									"{app_id}",
									"{definition_id}",
									"functions",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
						[]any{
							"2026_09",
							"function",
						},
					},
				},
			},
			"actions_v4_public_action_function_identifier": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "functionType",
						"req": true,
						"short": "The type of function, with accepted values: POST_ACTION_EXECUTION, POST_FETCH_OPTIONS, PRE_ACTION_EXECUTION, PRE_FETCH_OPTIONS.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier for the function.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"from": map[string]any{
						"function_type": "functionType",
					},
					"name": "id",
					"parts": []any{
						"function_type",
						"function_id",
					},
					"sep": "/",
				},
				"name": "actions_v4_public_action_function_identifier",
				"op": map[string]any{
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "definition_id",
											"orig": "definition_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "function_id",
											"orig": "function_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "function_type",
											"orig": "function_type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"definitionId": "definition_id",
										"functionId": "function_id",
										"functionType": "function_type",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"var": "definition_id",
									},
									map[string]any{
										"lit": "functions",
									},
									map[string]any{
										"var": "function_type",
									},
									map[string]any{
										"var": "function_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"definition_id",
										"function_id",
										"function_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"actions",
									"2026-09",
									"{app_id}",
									"{definition_id}",
									"functions",
									"{function_type}",
									"{function_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "definition_id",
											"orig": "definition_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "function_type",
											"orig": "function_type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"definitionId": "definition_id",
										"functionType": "function_type",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"var": "definition_id",
									},
									map[string]any{
										"lit": "functions",
									},
									map[string]any{
										"var": "function_type",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"definition_id",
										"function_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"actions",
									"2026-09",
									"{app_id}",
									"{definition_id}",
									"functions",
									"{function_type}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
							"function",
						},
					},
				},
			},
			"actions_v4_public_action_revision": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actionUrl",
						"req": true,
						"short": "The URL endpoint where the action is executed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "archivedAt",
						"short": "A Unix timestamp in milliseconds representing when the action was archived.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "executionRules",
						"short": "An array of execution translation rules for the action, where each item is a PublicExecutionTranslationRule.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "functions",
						"req": true,
						"short": "An array of function identifiers associated with the action, where each item is a PublicActionFunctionIdentifier.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the action definition.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputFieldDependencies",
						"short": "An array of dependencies between input fields, where each item can be a PublicSingleFieldDependency or PublicConditionalSingleFieldDependency.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "inputFields",
						"req": true,
						"short": "An array of input field definitions required for the action.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "labels",
						"req": true,
						"short": "An object containing labels for the action, with each property being a PublicActionLabels object.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "objectRequestOptions",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "objectTypes",
						"req": true,
						"short": "An array of strings representing the types of objects associated with the action.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "outputFields",
						"short": "An array of output field definitions produced by the action.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 8,
							"count": 2,
							"depth": 9,
						},
					},
					map[string]any{
						"name": "published",
						"req": true,
						"short": "A boolean indicating whether the action is published and available for use.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "revisionId",
						"req": true,
						"short": "The unique identifier for the current revision of the action definition.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "actions_v4_public_action_revision",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "definition_id",
											"orig": "definition_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "revision_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/actions/2026-09/{appId}/{definitionId}/revisions/{revisionId}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"definitionId": "definition_id",
										"revisionId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"var": "definition_id",
									},
									map[string]any{
										"lit": "revisions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"definition_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.definition`",
								},
								"parts": []any{
									"automation",
									"actions",
									"2026-09",
									"{app_id}",
									"{definition_id}",
									"revisions",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"automation_v4_api_flow": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "automation_v4_api_flow",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/automation/v4/flows",
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "v4",
									},
									map[string]any{
										"lit": "flows",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"v4",
									"flows",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "flow_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/v4/flows/{flowId}",
								"rename": map[string]any{
									"param": map[string]any{
										"flowId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "v4",
									},
									map[string]any{
										"lit": "flows",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"v4",
									"flows",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "flow_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/automation/v4/flows/{flowId}",
								"rename": map[string]any{
									"param": map[string]any{
										"flowId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "v4",
									},
									map[string]any{
										"lit": "flows",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"v4",
									"flows",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"automation_v4_batch_response_api_flow": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"short": "The date and time when the batch process was completed, formatted as a date-time string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "links",
						"short": "A collection of URLs related to the batch process, empty for this operation.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"short": "The date and time when the batch request was initiated, formatted as a date-time string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 20,
							"count": 59,
							"depth": 55,
						},
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"short": "The date and time when the batch process began, formatted as a date-time string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING.",
						"type": "`$STRING`",
					},
				},
				"name": "automation_v4_batch_response_api_flow",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/automation/v4/flows/batch/read",
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "v4",
									},
									map[string]any{
										"lit": "flows",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"v4",
									"flows",
									"batch",
									"read",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"automation_v4_batch_response_flow_id_workflow_id_mapping": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "completedAt",
						"req": true,
						"short": "The date and time when the batch process was completed, formatted as a date-time string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "links",
						"short": "A collection of URLs related to the batch process.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "requestedAt",
						"short": "The date and time when the batch request was initiated, formatted as a date-time string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "results",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"req": true,
						"short": "The date and time when the batch process began, formatted as a date-time string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "The current status of the batch process, with possible values: CANCELED, COMPLETE, PENDING, PROCESSING.",
						"type": "`$STRING`",
					},
				},
				"name": "automation_v4_batch_response_flow_id_workflow_id_mapping",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/automation/v4/workflow-id-mappings/batch/read",
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "v4",
									},
									map[string]any{
										"lit": "workflow-id-mappings",
									},
									map[string]any{
										"lit": "batch",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"v4",
									"workflow-id-mappings",
									"batch",
									"read",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"automation_v4_collection_response_api_flow_email_campaign": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "emailCampaignId",
						"req": true,
						"short": "The unique identifier for the email campaign associated with the automation flow.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "emailContentId",
						"req": true,
						"short": "The unique identifier for the email content used in the email campaign.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "flowId",
						"req": true,
						"short": "The unique identifier for the automation flow associated with the email campaign.",
						"type": "`$STRING`",
					},
				},
				"name": "automation_v4_collection_response_api_flow_email_campaign",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "flow_id",
											"orig": "flow_id",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/v4/flows/email-campaigns",
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "v4",
									},
									map[string]any{
										"lit": "flows",
									},
									map[string]any{
										"lit": "email-campaigns",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"before",
										"flow_id",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"v4",
									"flows",
									"email-campaigns",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"automation_v4_collection_response_api_flow_listing_forward_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the automation flow was created, formatted as a date-time string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "flowType",
						"req": true,
						"short": "Specifies the type of the automation flow (PLATFORM vs.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the automation flow.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isEnabled",
						"req": true,
						"short": "Indicates whether the automation flow is currently active.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"short": "The name assigned to the automation flow.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "objectTypeId",
						"req": true,
						"short": "Represents the ID of the object type associated with the automation flow.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "revisionId",
						"req": true,
						"short": "The identifier for the current revision of the automation flow.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date and time when the automation flow was last updated, formatted as a date-time string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uuid",
						"short": "The universally unique identifier for the automation flow.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "automation_v4_collection_response_api_flow_listing_forward_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/v4/flows",
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "v4",
									},
									map[string]any{
										"lit": "flows",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"v4",
									"flows",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"automation_v4_collection_response_api_histogram_data_point_no": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "results",
						"req": true,
						"type": "`$ARRAY`",
					},
				},
				"name": "automation_v4_collection_response_api_histogram_data_point_no",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "flow_id",
											"orig": "flow_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "bucket_type",
											"orig": "bucket_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "end",
											"orig": "end",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "first_day",
											"orig": "first_day",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/v4/flows/performance/{flowId}",
								"rename": map[string]any{
									"param": map[string]any{
										"flowId": "flow_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "v4",
									},
									map[string]any{
										"lit": "flows",
									},
									map[string]any{
										"lit": "performance",
									},
									map[string]any{
										"var": "flow_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"bucket_type",
										"end",
										"first_day",
										"flow_id",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"v4",
									"flows",
									"performance",
									"{flow_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"performance",
						},
					},
				},
			},
			"basic": map[string]any{
				"fields": []any{},
				"name": "basic",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "sequence_id",
											"orig": "sequence_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "override_active_enrollment",
											"orig": "override_active_enrollment",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}",
								"rename": map[string]any{
									"param": map[string]any{
										"sequenceId": "sequence_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "sequences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "serviceaccounts",
									},
									map[string]any{
										"lit": "sequences",
									},
									map[string]any{
										"var": "sequence_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"override_active_enrollment",
										"sequence_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"sequences",
									"2026-09",
									"serviceaccounts",
									"sequences",
									"{sequence_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "flow_id",
											"orig": "flow_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/automation/v4/flows/{flowId}",
								"rename": map[string]any{
									"param": map[string]any{
										"flowId": "flow_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "v4",
									},
									map[string]any{
										"lit": "flows",
									},
									map[string]any{
										"var": "flow_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"flow_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"v4",
									"flows",
									"{flow_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"sequence",
						},
						[]any{
							"flow",
						},
					},
				},
			},
			"callback": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "failureReasonType",
						"short": "Indicates the reason for the failure of a callback completion.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "inputs",
						"req": true,
						"short": "An array of CallbackCompletionBatchRequest objects, each representing a single callback completion request.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 5,
							"count": 1,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "outputFields",
						"req": true,
						"short": "Contains the output fields associated with the callback, with each field represented as a key-value pair.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "requestContext",
						"short": "Specifies the context in which the request is made, which can be one of several predefined contexts.",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 5,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "typedOutputs",
						"req": true,
						"short": "Holds the typed outputs related to the callback, structured as an object.",
						"type": "`$OBJECT`",
					},
				},
				"name": "callback",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "callback_id",
											"orig": "callback_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/automation/actions/callbacks/2026-09/{callbackId}/complete",
								"rename": map[string]any{
									"param": map[string]any{
										"callbackId": "callback_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "callbacks",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "callback_id",
									},
									map[string]any{
										"lit": "complete",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"callback_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"actions",
									"callbacks",
									"2026-09",
									"{callback_id}",
									"complete",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/automation/actions/callbacks/2026-09/complete",
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "callbacks",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "complete",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"actions",
									"callbacks",
									"2026-09",
									"complete",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"definition": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "requiresObject",
						"req": true,
						"short": "Indicates whether a custom action definition requires an associated object.",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
					"parts": []any{
						"app_id",
						"definition_id",
					},
					"sep": "/",
				},
				"name": "definition",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "definition_id",
											"orig": "definition_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/automation/actions/2026-09/{appId}/{definitionId}/requires-object",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"definitionId": "definition_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"var": "definition_id",
									},
									map[string]any{
										"lit": "requires-object",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"definition_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"actions",
									"2026-09",
									"{app_id}",
									"{definition_id}",
									"requires-object",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "definition_id",
											"orig": "definition_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/automation/actions/2026-09/{appId}/{definitionId}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"definitionId": "definition_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"var": "definition_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"definition_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"actions",
									"2026-09",
									"{app_id}",
									"{definition_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"email_templates_collection_response_public_folder_forward_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "int64",
						"name": "createdAt",
						"short": "The timestamp indicating when the folder was created, represented as an integer in int64 format.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the folder, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the folder, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "updatedAt",
						"short": "The timestamp indicating when the folder was last updated, represented as an integer in int64 format.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "email_templates_collection_response_public_folder_forward_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/email-templates/2026-09/folders",
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "email-templates",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "folders",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"email-templates",
									"2026-09",
									"folders",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"email_templates_collection_response_public_template_forward_paging": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "body",
						"short": "The content of the email template, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "createdAt",
						"short": "The timestamp indicating when the email template was created, represented as an integer in int64 format.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "folderId",
						"short": "The identifier of the folder where the email template is stored, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the email template, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the email template, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ownerId",
						"short": "The identifier of the owner of the email template, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subject",
						"short": "The subject line of the email template, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "updatedAt",
						"short": "The timestamp indicating when the email template was last updated, represented as an integer in int64 format.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "email_templates_collection_response_public_template_forward_paging",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/email-templates/2026-09",
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "email-templates",
									},
									map[string]any{
										"lit": "2026-09",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"email-templates",
									"2026-09",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"email_templates_public_template": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "body",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The content of the email template, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "createdAt",
						"short": "The timestamp indicating when the email template was created, represented as an integer in int64 format.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "folderId",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The identifier of the folder where the email template is stored, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the email template, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The name of the email template, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ownerId",
						"short": "The identifier of the owner of the email template, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subject",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
						"short": "The subject line of the email template, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "updatedAt",
						"short": "The timestamp indicating when the email template was last updated, represented as an integer in int64 format.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "email_templates_public_template",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/automation/email-templates/2026-09",
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "email-templates",
									},
									map[string]any{
										"lit": "2026-09",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"email-templates",
									"2026-09",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "template_id",
											"orig": "template_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/email-templates/2026-09/{templateId}",
								"rename": map[string]any{
									"param": map[string]any{
										"templateId": "template_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "email-templates",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "template_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"template_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"email-templates",
									"2026-09",
									"{template_id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "template_id",
											"orig": "template_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PATCH",
								"orig": "/automation/email-templates/2026-09/{templateId}",
								"rename": map[string]any{
									"param": map[string]any{
										"templateId": "template_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "email-templates",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "template_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"template_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"email-templates",
									"2026-09",
									"{template_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"function": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
					"parts": []any{
						"function_type",
						"function_id",
					},
					"sep": "/",
				},
				"name": "function",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "definition_id",
											"orig": "definition_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "function_id",
											"orig": "function_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "function_type",
											"orig": "function_type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}/{functionId}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"definitionId": "definition_id",
										"functionId": "function_id",
										"functionType": "function_type",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"var": "definition_id",
									},
									map[string]any{
										"lit": "functions",
									},
									map[string]any{
										"var": "function_type",
									},
									map[string]any{
										"var": "function_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"definition_id",
										"function_id",
										"function_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"actions",
									"2026-09",
									"{app_id}",
									"{definition_id}",
									"functions",
									"{function_type}",
									"{function_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "app_id",
											"orig": "app_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "definition_id",
											"orig": "definition_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "function_type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/automation/actions/2026-09/{appId}/{definitionId}/functions/{functionType}",
								"rename": map[string]any{
									"param": map[string]any{
										"appId": "app_id",
										"definitionId": "definition_id",
										"functionType": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "app_id",
									},
									map[string]any{
										"var": "definition_id",
									},
									map[string]any{
										"lit": "functions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"app_id",
										"definition_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"actions",
									"2026-09",
									"{app_id}",
									"{definition_id}",
									"functions",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
						[]any{
							"2026_09",
							"function",
						},
					},
				},
			},
			"sequence": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the sequence was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dependencies",
						"req": true,
						"short": "An array of dependencies between steps in the sequence, each represented by a PublicSequenceStepDependencyResponse object.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "dynamic",
						"req": true,
						"short": "A boolean indicating whether the sequence is dynamic.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "engagementTriggers",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "folderId",
						"short": "The identifier for the folder containing the sequence.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the sequence.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the sequence.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sequence",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "settings",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "steps",
						"req": true,
						"short": "An array of steps included in the sequence, each represented by a PublicSequenceStepResponseV2 object.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date and time when the sequence was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "userId",
						"req": true,
						"short": "The unique identifier of the user who owns the sequence.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "userView",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "sequence",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/automation/sequences/2026-09/serviceaccounts/sequences",
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "sequences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "serviceaccounts",
									},
									map[string]any{
										"lit": "sequences",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.sequence`",
								},
								"parts": []any{
									"automation",
									"sequences",
									"2026-09",
									"serviceaccounts",
									"sequences",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/sequences/2026-09/serviceaccounts/sequences",
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "sequences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "serviceaccounts",
									},
									map[string]any{
										"lit": "sequences",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"limit",
										"name",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"sequences",
									"2026-09",
									"serviceaccounts",
									"sequences",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "sequence_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}",
								"rename": map[string]any{
									"param": map[string]any{
										"sequenceId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "sequences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "serviceaccounts",
									},
									map[string]any{
										"lit": "sequences",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"sequences",
									"2026-09",
									"serviceaccounts",
									"sequences",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "id",
											"orig": "sequence_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}",
								"rename": map[string]any{
									"param": map[string]any{
										"sequenceId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "sequences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "serviceaccounts",
									},
									map[string]any{
										"lit": "sequences",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"sequences",
									"2026-09",
									"serviceaccounts",
									"sequences",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"sequences_collection_response_with_total_public_sequence_lite": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the sequence was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "folderId",
						"short": "The identifier of the folder containing the sequence, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the sequence, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the sequence, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date and time when the sequence was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "userId",
						"req": true,
						"short": "The unique identifier of the user associated with the sequence, represented as a string.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "sequences_collection_response_with_total_public_sequence_lite",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "after",
											"orig": "after",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/sequences/2026-09",
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "sequences",
									},
									map[string]any{
										"lit": "2026-09",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"after",
										"limit",
										"name",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"sequences",
									"2026-09",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"sequences_public_sequence": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"short": "The date and time when the sequence was created, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dependencies",
						"req": true,
						"short": "An array of dependencies between sequence steps, each represented by a PublicSequenceStepDependencyResponse object.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "folderId",
						"short": "The unique identifier for the folder containing the sequence.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the sequence.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the sequence.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "settings",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "steps",
						"req": true,
						"short": "An array of steps included in the sequence, each represented by a PublicSequenceStepResponse object.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date and time when the sequence was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "userId",
						"req": true,
						"short": "The unique identifier of the user who owns the sequence.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "sequences_public_sequence",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "sequence_id",
											"orig": "sequence_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/sequences/2026-09/{sequenceId}",
								"rename": map[string]any{
									"param": map[string]any{
										"sequenceId": "sequence_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "sequences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"var": "sequence_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"sequence_id",
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"sequences",
									"2026-09",
									"{sequence_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"2026_09",
						},
					},
				},
			},
			"sequences_public_sequence_enrollment": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "enrolledAt",
						"req": true,
						"short": "The date and time when the contact was enrolled in the sequence, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enrolledBy",
						"req": true,
						"short": "The unique identifier of the user who enrolled the contact in the sequence.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enrolledByEmail",
						"req": true,
						"short": "The email address of the user who enrolled the contact in the sequence.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the sequence enrollment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sequenceId",
						"req": true,
						"short": "The unique identifier of the sequence in which the contact is enrolled.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sequenceName",
						"req": true,
						"short": "The name of the sequence in which the contact is enrolled.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "toEmail",
						"req": true,
						"short": "The email address of the contact enrolled in the sequence.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date and time when the sequence enrollment was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "sequences_public_sequence_enrollment",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "contact_id",
											"orig": "contact_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/sequences/2026-09/enrollments/contact/{contactId}",
								"rename": map[string]any{
									"param": map[string]any{
										"contactId": "contact_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "sequences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "enrollments",
									},
									map[string]any{
										"lit": "contact",
									},
									map[string]any{
										"var": "contact_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contact_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"sequences",
									"2026-09",
									"enrollments",
									"contact",
									"{contact_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"contact",
						},
					},
				},
			},
			"sequences_public_sequence_enrollment_lite": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "contactId",
						"req": true,
						"short": "The unique identifier of the contact to be enrolled in the sequence.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "enrolledAt",
						"req": true,
						"short": "The date and time when the contact was enrolled in the sequence, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier for the sequence enrollment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "senderAliasAddress",
						"short": "An optional alias email address that can be used as the sender's address.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "senderEmail",
						"req": true,
						"short": "The email address of the sender responsible for the sequence enrollment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sequenceId",
						"req": true,
						"short": "The unique identifier of the sequence in which the contact is to be enrolled.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "toEmail",
						"req": true,
						"short": "The email address of the contact who is enrolled in the sequence.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"short": "The date and time when the sequence enrollment was last updated, in ISO 8601 format.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "sequences_public_sequence_enrollment_lite",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "user_id",
											"orig": "user_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/automation/sequences/2026-09/enrollments",
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "sequences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "enrollments",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"user_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"sequences",
									"2026-09",
									"enrollments",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/automation/sequences/2026-09/serviceaccounts/enrollments",
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "sequences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "serviceaccounts",
									},
									map[string]any{
										"lit": "enrollments",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"sequences",
									"2026-09",
									"serviceaccounts",
									"enrollments",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"sequences_public_sequence_performance": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "companyMetrics",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "sequenceId",
						"req": true,
						"short": "The unique identifier for the sequence, represented as a string.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "statusByStep",
						"req": true,
						"short": "An array of objects detailing the enrollment status for each step in the sequence, including the count and current step order.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "steps",
						"req": true,
						"short": "An array of objects, each representing the performance metrics for individual steps within the sequence.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "summary",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "timeline",
						"req": true,
						"short": "An array of objects representing points in time with specific performance metrics, such as enrollments and meetings booked.",
						"type": "`$ARRAY`",
					},
				},
				"name": "sequences_public_sequence_performance",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": nil,
											"kind": "param",
											"name": "sequence_id",
											"orig": "sequence_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "timeline_interval",
											"orig": "timeline_interval",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/automation/sequences/2026-09/serviceaccounts/sequences/{sequenceId}/performance",
								"rename": map[string]any{
									"param": map[string]any{
										"sequenceId": "sequence_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "automation",
									},
									map[string]any{
										"lit": "sequences",
									},
									map[string]any{
										"lit": "2026-09",
									},
									map[string]any{
										"lit": "serviceaccounts",
									},
									map[string]any{
										"lit": "sequences",
									},
									map[string]any{
										"var": "sequence_id",
									},
									map[string]any{
										"lit": "performance",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"sequence_id",
										"timeline_interval",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"automation",
									"sequences",
									"2026-09",
									"serviceaccounts",
									"sequences",
									"{sequence_id}",
									"performance",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"sequence",
						},
					},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
