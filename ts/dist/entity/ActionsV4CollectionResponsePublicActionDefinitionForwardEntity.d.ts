import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { ActionsV4CollectionResponsePublicActionDefinitionForward, ActionsV4CollectionResponsePublicActionDefinitionForwardLoadMatch } from '../HubspotAutomationTypes';
declare class ActionsV4CollectionResponsePublicActionDefinitionForwardEntity extends HubspotAutomationEntityBase<ActionsV4CollectionResponsePublicActionDefinitionForward> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: ActionsV4CollectionResponsePublicActionDefinitionForwardEntity): ActionsV4CollectionResponsePublicActionDefinitionForwardEntity;
    load(this: any, reqmatch?: ActionsV4CollectionResponsePublicActionDefinitionForwardLoadMatch, ctrl?: Control): Promise<ActionsV4CollectionResponsePublicActionDefinitionForwardEntity>;
}
export { ActionsV4CollectionResponsePublicActionDefinitionForwardEntity };
