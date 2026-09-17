import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { SequencesPublicSequenceEnrollmentLite, SequencesPublicSequenceEnrollmentLiteCreateData } from '../HubspotAutomationTypes';
declare class SequencesPublicSequenceEnrollmentLiteEntity extends HubspotAutomationEntityBase<SequencesPublicSequenceEnrollmentLite> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: SequencesPublicSequenceEnrollmentLiteEntity): SequencesPublicSequenceEnrollmentLiteEntity;
    create(this: any, reqdata?: SequencesPublicSequenceEnrollmentLiteCreateData, ctrl?: Control): Promise<SequencesPublicSequenceEnrollmentLiteEntity>;
}
export { SequencesPublicSequenceEnrollmentLiteEntity };
