<?php
declare(strict_types=1);

// HubspotAutomation SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/DebugFeature.php';
require_once __DIR__ . '/feature/IdempotencyFeature.php';
require_once __DIR__ . '/feature/MetricsFeature.php';
require_once __DIR__ . '/feature/PagingFeature.php';
require_once __DIR__ . '/feature/RatelimitFeature.php';
require_once __DIR__ . '/feature/RetryFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';
require_once __DIR__ . '/feature/TimeoutFeature.php';


class HubspotAutomationFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new HubspotAutomationBaseFeature();
            case "debug":
                return new HubspotAutomationDebugFeature();
            case "idempotency":
                return new HubspotAutomationIdempotencyFeature();
            case "metrics":
                return new HubspotAutomationMetricsFeature();
            case "paging":
                return new HubspotAutomationPagingFeature();
            case "ratelimit":
                return new HubspotAutomationRatelimitFeature();
            case "retry":
                return new HubspotAutomationRetryFeature();
            case "test":
                return new HubspotAutomationTestFeature();
            case "timeout":
                return new HubspotAutomationTimeoutFeature();
            default:
                return new HubspotAutomationBaseFeature();
        }
    }

    /**
     * Does a generated feature class back this name? False for a name only
     * an options extend instance can supply (the station adopt path) - the
     * constructor uses this to skip make_feature for such names instead of
     * adding a stray BaseFeature.
     */
    public static function has_feature(string $name): bool
    {
        switch ($name) {
            case "base":
            case "debug":
            case "idempotency":
            case "metrics":
            case "paging":
            case "ratelimit":
            case "retry":
            case "test":
            case "timeout":
                return true;
            default:
                return false;
        }
    }
}
