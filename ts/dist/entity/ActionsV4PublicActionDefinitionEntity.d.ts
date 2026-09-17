import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { ActionsV4PublicActionDefinition, ActionsV4PublicActionDefinitionLoadMatch, ActionsV4PublicActionDefinitionCreateData, ActionsV4PublicActionDefinitionUpdateData } from '../HubspotAutomationTypes';
declare class ActionsV4PublicActionDefinitionEntity extends HubspotAutomationEntityBase<ActionsV4PublicActionDefinition> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: ActionsV4PublicActionDefinitionEntity): ActionsV4PublicActionDefinitionEntity;
    load(this: any, reqmatch?: ActionsV4PublicActionDefinitionLoadMatch, ctrl?: Control): Promise<ActionsV4PublicActionDefinitionEntity>;
    create(this: any, reqdata?: ActionsV4PublicActionDefinitionCreateData, ctrl?: Control): Promise<ActionsV4PublicActionDefinitionEntity>;
    update(this: any, reqdata?: ActionsV4PublicActionDefinitionUpdateData, ctrl?: Control): Promise<ActionsV4PublicActionDefinitionEntity>;
}
export { ActionsV4PublicActionDefinitionEntity };
