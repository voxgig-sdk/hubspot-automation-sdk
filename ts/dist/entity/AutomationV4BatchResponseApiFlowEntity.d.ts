import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { AutomationV4BatchResponseApiFlow, AutomationV4BatchResponseApiFlowCreateData } from '../HubspotAutomationTypes';
declare class AutomationV4BatchResponseApiFlowEntity extends HubspotAutomationEntityBase<AutomationV4BatchResponseApiFlow> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: AutomationV4BatchResponseApiFlowEntity): AutomationV4BatchResponseApiFlowEntity;
    create(this: any, reqdata?: AutomationV4BatchResponseApiFlowCreateData, ctrl?: Control): Promise<AutomationV4BatchResponseApiFlowEntity>;
}
export { AutomationV4BatchResponseApiFlowEntity };
