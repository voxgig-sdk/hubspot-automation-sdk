import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { ActionsV4PublicActionRevision, ActionsV4PublicActionRevisionLoadMatch } from '../HubspotAutomationTypes';
declare class ActionsV4PublicActionRevisionEntity extends HubspotAutomationEntityBase<ActionsV4PublicActionRevision> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: ActionsV4PublicActionRevisionEntity): ActionsV4PublicActionRevisionEntity;
    load(this: any, reqmatch?: ActionsV4PublicActionRevisionLoadMatch, ctrl?: Control): Promise<ActionsV4PublicActionRevisionEntity>;
}
export { ActionsV4PublicActionRevisionEntity };
