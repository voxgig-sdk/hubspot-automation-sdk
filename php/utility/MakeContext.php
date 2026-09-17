<?php
declare(strict_types=1);

// HubspotAutomation SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class HubspotAutomationMakeContext
{
    public static function call(array $ctxmap, ?HubspotAutomationContext $basectx): HubspotAutomationContext
    {
        return new HubspotAutomationContext($ctxmap, $basectx);
    }
}
