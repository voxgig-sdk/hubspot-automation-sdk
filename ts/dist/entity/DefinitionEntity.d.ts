import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { Definition, DefinitionCreateData, DefinitionRemoveMatch } from '../HubspotAutomationTypes';
declare class DefinitionEntity extends HubspotAutomationEntityBase<Definition> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: DefinitionEntity): DefinitionEntity;
    create(this: any, reqdata?: DefinitionCreateData, ctrl?: Control): Promise<DefinitionEntity>;
    remove(this: any, reqmatch?: DefinitionRemoveMatch, ctrl?: Control): Promise<DefinitionEntity>;
}
export { DefinitionEntity };
