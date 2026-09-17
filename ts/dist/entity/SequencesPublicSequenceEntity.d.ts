import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { SequencesPublicSequence, SequencesPublicSequenceLoadMatch } from '../HubspotAutomationTypes';
declare class SequencesPublicSequenceEntity extends HubspotAutomationEntityBase<SequencesPublicSequence> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: SequencesPublicSequenceEntity): SequencesPublicSequenceEntity;
    load(this: any, reqmatch?: SequencesPublicSequenceLoadMatch, ctrl?: Control): Promise<SequencesPublicSequenceEntity>;
}
export { SequencesPublicSequenceEntity };
