import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { AutomationV4BatchResponseFlowIdWorkflowIdMapping, AutomationV4BatchResponseFlowIdWorkflowIdMappingCreateData } from '../HubspotAutomationTypes';
declare class AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity extends HubspotAutomationEntityBase<AutomationV4BatchResponseFlowIdWorkflowIdMapping> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity): AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity;
    create(this: any, reqdata?: AutomationV4BatchResponseFlowIdWorkflowIdMappingCreateData, ctrl?: Control): Promise<AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity>;
}
export { AutomationV4BatchResponseFlowIdWorkflowIdMappingEntity };
