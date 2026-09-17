import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { AutomationV4CollectionResponseApiFlowListingForwardPaging, AutomationV4CollectionResponseApiFlowListingForwardPagingListMatch } from '../HubspotAutomationTypes';
declare class AutomationV4CollectionResponseApiFlowListingForwardPagingEntity extends HubspotAutomationEntityBase<AutomationV4CollectionResponseApiFlowListingForwardPaging> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: AutomationV4CollectionResponseApiFlowListingForwardPagingEntity): AutomationV4CollectionResponseApiFlowListingForwardPagingEntity;
    list(this: any, reqmatch?: AutomationV4CollectionResponseApiFlowListingForwardPagingListMatch, ctrl?: Control): Promise<AutomationV4CollectionResponseApiFlowListingForwardPagingEntity[]>;
}
export { AutomationV4CollectionResponseApiFlowListingForwardPagingEntity };
