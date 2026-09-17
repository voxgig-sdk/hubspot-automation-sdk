import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { Callback, CallbackCreateData } from '../HubspotAutomationTypes';
declare class CallbackEntity extends HubspotAutomationEntityBase<Callback> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: CallbackEntity): CallbackEntity;
    create(this: any, reqdata?: CallbackCreateData, ctrl?: Control): Promise<CallbackEntity>;
}
export { CallbackEntity };
