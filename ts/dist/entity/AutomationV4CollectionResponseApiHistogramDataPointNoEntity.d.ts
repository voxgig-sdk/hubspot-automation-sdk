import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { AutomationV4CollectionResponseApiHistogramDataPointNo, AutomationV4CollectionResponseApiHistogramDataPointNoLoadMatch } from '../HubspotAutomationTypes';
declare class AutomationV4CollectionResponseApiHistogramDataPointNoEntity extends HubspotAutomationEntityBase<AutomationV4CollectionResponseApiHistogramDataPointNo> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: AutomationV4CollectionResponseApiHistogramDataPointNoEntity): AutomationV4CollectionResponseApiHistogramDataPointNoEntity;
    load(this: any, reqmatch?: AutomationV4CollectionResponseApiHistogramDataPointNoLoadMatch, ctrl?: Control): Promise<AutomationV4CollectionResponseApiHistogramDataPointNoEntity>;
}
export { AutomationV4CollectionResponseApiHistogramDataPointNoEntity };
