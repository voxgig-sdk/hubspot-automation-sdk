import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { Basic, BasicRemoveMatch } from '../HubspotAutomationTypes';
declare class BasicEntity extends HubspotAutomationEntityBase<Basic> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: BasicEntity): BasicEntity;
    remove(this: any, reqmatch?: BasicRemoveMatch, ctrl?: Control): Promise<BasicEntity>;
}
export { BasicEntity };
