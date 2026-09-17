<?php
declare(strict_types=1);

// HubspotAutomation SDK utility: result_body

class HubspotAutomationResultBody
{
    public static function call(HubspotAutomationContext $ctx): ?HubspotAutomationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
