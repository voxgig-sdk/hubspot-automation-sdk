<?php
declare(strict_types=1);

// HubspotAutomation SDK exists test

require_once __DIR__ . '/../hubspotautomation_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = HubspotAutomationSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
