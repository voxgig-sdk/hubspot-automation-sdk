import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { ActionsV4CollectionResponsePublicActionRevisionForward, ActionsV4CollectionResponsePublicActionRevisionForwardListMatch } from '../HubspotAutomationTypes';
declare class ActionsV4CollectionResponsePublicActionRevisionForwardEntity extends HubspotAutomationEntityBase<ActionsV4CollectionResponsePublicActionRevisionForward> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: ActionsV4CollectionResponsePublicActionRevisionForwardEntity): ActionsV4CollectionResponsePublicActionRevisionForwardEntity;
    list(this: any, reqmatch?: ActionsV4CollectionResponsePublicActionRevisionForwardListMatch, ctrl?: Control): Promise<ActionsV4CollectionResponsePublicActionRevisionForwardEntity[]>;
}
export { ActionsV4CollectionResponsePublicActionRevisionForwardEntity };
