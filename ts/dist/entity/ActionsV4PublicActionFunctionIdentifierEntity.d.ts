import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { ActionsV4PublicActionFunctionIdentifier, ActionsV4PublicActionFunctionIdentifierUpdateData } from '../HubspotAutomationTypes';
declare class ActionsV4PublicActionFunctionIdentifierEntity extends HubspotAutomationEntityBase<ActionsV4PublicActionFunctionIdentifier> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: ActionsV4PublicActionFunctionIdentifierEntity): ActionsV4PublicActionFunctionIdentifierEntity;
    update(this: any, reqdata?: ActionsV4PublicActionFunctionIdentifierUpdateData, ctrl?: Control): Promise<ActionsV4PublicActionFunctionIdentifierEntity>;
}
export { ActionsV4PublicActionFunctionIdentifierEntity };
