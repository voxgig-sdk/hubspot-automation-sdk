import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { SequencesPublicSequenceEnrollment, SequencesPublicSequenceEnrollmentLoadMatch } from '../HubspotAutomationTypes';
declare class SequencesPublicSequenceEnrollmentEntity extends HubspotAutomationEntityBase<SequencesPublicSequenceEnrollment> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: SequencesPublicSequenceEnrollmentEntity): SequencesPublicSequenceEnrollmentEntity;
    load(this: any, reqmatch?: SequencesPublicSequenceEnrollmentLoadMatch, ctrl?: Control): Promise<SequencesPublicSequenceEnrollmentEntity>;
}
export { SequencesPublicSequenceEnrollmentEntity };
