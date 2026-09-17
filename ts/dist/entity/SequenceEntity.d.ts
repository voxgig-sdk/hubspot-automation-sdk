import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { Sequence, SequenceLoadMatch, SequenceListMatch, SequenceCreateData, SequenceUpdateData } from '../HubspotAutomationTypes';
declare class SequenceEntity extends HubspotAutomationEntityBase<Sequence> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: SequenceEntity): SequenceEntity;
    load(this: any, reqmatch?: SequenceLoadMatch, ctrl?: Control): Promise<SequenceEntity>;
    list(this: any, reqmatch?: SequenceListMatch, ctrl?: Control): Promise<SequenceEntity[]>;
    create(this: any, reqdata?: SequenceCreateData, ctrl?: Control): Promise<SequenceEntity>;
    update(this: any, reqdata?: SequenceUpdateData, ctrl?: Control): Promise<SequenceEntity>;
}
export { SequenceEntity };
