import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { SequencesCollectionResponseWithTotalPublicSequenceLite, SequencesCollectionResponseWithTotalPublicSequenceLiteListMatch } from '../HubspotAutomationTypes';
declare class SequencesCollectionResponseWithTotalPublicSequenceLiteEntity extends HubspotAutomationEntityBase<SequencesCollectionResponseWithTotalPublicSequenceLite> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: SequencesCollectionResponseWithTotalPublicSequenceLiteEntity): SequencesCollectionResponseWithTotalPublicSequenceLiteEntity;
    list(this: any, reqmatch?: SequencesCollectionResponseWithTotalPublicSequenceLiteListMatch, ctrl?: Control): Promise<SequencesCollectionResponseWithTotalPublicSequenceLiteEntity[]>;
}
export { SequencesCollectionResponseWithTotalPublicSequenceLiteEntity };
