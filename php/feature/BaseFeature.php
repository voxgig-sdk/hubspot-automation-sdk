<?php
declare(strict_types=1);

// HubspotAutomation SDK base feature

class HubspotAutomationBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(HubspotAutomationContext $ctx, array $options): void {}
    public function PostConstruct(HubspotAutomationContext $ctx): void {}
    public function PostConstructEntity(HubspotAutomationContext $ctx): void {}
    public function SetData(HubspotAutomationContext $ctx): void {}
    public function GetData(HubspotAutomationContext $ctx): void {}
    public function GetMatch(HubspotAutomationContext $ctx): void {}
    public function SetMatch(HubspotAutomationContext $ctx): void {}
    public function PrePoint(HubspotAutomationContext $ctx): void {}
    public function PreSpec(HubspotAutomationContext $ctx): void {}
    public function PreRequest(HubspotAutomationContext $ctx): void {}
    public function PreResponse(HubspotAutomationContext $ctx): void {}
    public function PreResult(HubspotAutomationContext $ctx): void {}
    public function PreDone(HubspotAutomationContext $ctx): void {}
    public function PreUnexpected(HubspotAutomationContext $ctx): void {}
}
