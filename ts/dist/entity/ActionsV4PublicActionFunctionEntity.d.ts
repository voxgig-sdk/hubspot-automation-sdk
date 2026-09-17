import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { ActionsV4PublicActionFunction, ActionsV4PublicActionFunctionLoadMatch } from '../HubspotAutomationTypes';
declare class ActionsV4PublicActionFunctionEntity extends HubspotAutomationEntityBase<ActionsV4PublicActionFunction> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: ActionsV4PublicActionFunctionEntity): ActionsV4PublicActionFunctionEntity;
    load(this: any, reqmatch?: ActionsV4PublicActionFunctionLoadMatch, ctrl?: Control): Promise<ActionsV4PublicActionFunctionEntity>;
}
export { ActionsV4PublicActionFunctionEntity };
