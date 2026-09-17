import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { AutomationV4CollectionResponseApiFlowEmailCampaign, AutomationV4CollectionResponseApiFlowEmailCampaignListMatch } from '../HubspotAutomationTypes';
declare class AutomationV4CollectionResponseApiFlowEmailCampaignEntity extends HubspotAutomationEntityBase<AutomationV4CollectionResponseApiFlowEmailCampaign> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: AutomationV4CollectionResponseApiFlowEmailCampaignEntity): AutomationV4CollectionResponseApiFlowEmailCampaignEntity;
    list(this: any, reqmatch?: AutomationV4CollectionResponseApiFlowEmailCampaignListMatch, ctrl?: Control): Promise<AutomationV4CollectionResponseApiFlowEmailCampaignEntity[]>;
}
export { AutomationV4CollectionResponseApiFlowEmailCampaignEntity };
