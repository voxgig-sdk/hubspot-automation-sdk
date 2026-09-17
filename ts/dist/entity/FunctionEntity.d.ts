import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { FunctionType, FunctionRemoveMatch } from '../HubspotAutomationTypes';
declare class FunctionEntity extends HubspotAutomationEntityBase<FunctionType> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: FunctionEntity): FunctionEntity;
    remove(this: any, reqmatch?: FunctionRemoveMatch, ctrl?: Control): Promise<FunctionEntity>;
}
export { FunctionEntity };
