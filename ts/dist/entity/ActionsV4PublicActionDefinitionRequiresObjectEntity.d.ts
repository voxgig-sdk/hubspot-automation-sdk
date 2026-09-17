import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { ActionsV4PublicActionDefinitionRequiresObject, ActionsV4PublicActionDefinitionRequiresObjectLoadMatch } from '../HubspotAutomationTypes';
declare class ActionsV4PublicActionDefinitionRequiresObjectEntity extends HubspotAutomationEntityBase<ActionsV4PublicActionDefinitionRequiresObject> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: ActionsV4PublicActionDefinitionRequiresObjectEntity): ActionsV4PublicActionDefinitionRequiresObjectEntity;
    load(this: any, reqmatch?: ActionsV4PublicActionDefinitionRequiresObjectLoadMatch, ctrl?: Control): Promise<ActionsV4PublicActionDefinitionRequiresObjectEntity>;
}
export { ActionsV4PublicActionDefinitionRequiresObjectEntity };
