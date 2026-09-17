import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { ActionsV4CollectionResponsePublicActionFunctionIdentifierNo, ActionsV4CollectionResponsePublicActionFunctionIdentifierNoListMatch } from '../HubspotAutomationTypes';
declare class ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity extends HubspotAutomationEntityBase<ActionsV4CollectionResponsePublicActionFunctionIdentifierNo> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity): ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity;
    list(this: any, reqmatch?: ActionsV4CollectionResponsePublicActionFunctionIdentifierNoListMatch, ctrl?: Control): Promise<ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity[]>;
}
export { ActionsV4CollectionResponsePublicActionFunctionIdentifierNoEntity };
