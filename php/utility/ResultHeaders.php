<?php
declare(strict_types=1);

// HubspotAutomation SDK utility: result_headers

class HubspotAutomationResultHeaders
{
    public static function call(HubspotAutomationContext $ctx): ?HubspotAutomationResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
