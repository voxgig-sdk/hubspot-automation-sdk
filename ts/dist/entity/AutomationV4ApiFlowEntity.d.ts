import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { AutomationV4ApiFlow, AutomationV4ApiFlowLoadMatch, AutomationV4ApiFlowCreateData, AutomationV4ApiFlowUpdateData } from '../HubspotAutomationTypes';
declare class AutomationV4ApiFlowEntity extends HubspotAutomationEntityBase<AutomationV4ApiFlow> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: AutomationV4ApiFlowEntity): AutomationV4ApiFlowEntity;
    load(this: any, reqmatch?: AutomationV4ApiFlowLoadMatch, ctrl?: Control): Promise<AutomationV4ApiFlowEntity>;
    create(this: any, reqdata?: AutomationV4ApiFlowCreateData, ctrl?: Control): Promise<AutomationV4ApiFlowEntity>;
    update(this: any, reqdata?: AutomationV4ApiFlowUpdateData, ctrl?: Control): Promise<AutomationV4ApiFlowEntity>;
}
export { AutomationV4ApiFlowEntity };
