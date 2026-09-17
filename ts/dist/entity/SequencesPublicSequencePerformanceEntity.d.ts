import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { SequencesPublicSequencePerformance, SequencesPublicSequencePerformanceListMatch } from '../HubspotAutomationTypes';
declare class SequencesPublicSequencePerformanceEntity extends HubspotAutomationEntityBase<SequencesPublicSequencePerformance> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: SequencesPublicSequencePerformanceEntity): SequencesPublicSequencePerformanceEntity;
    list(this: any, reqmatch?: SequencesPublicSequencePerformanceListMatch, ctrl?: Control): Promise<SequencesPublicSequencePerformanceEntity[]>;
}
export { SequencesPublicSequencePerformanceEntity };
