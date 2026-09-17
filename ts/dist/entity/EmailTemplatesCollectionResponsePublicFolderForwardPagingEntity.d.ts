import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { EmailTemplatesCollectionResponsePublicFolderForwardPaging, EmailTemplatesCollectionResponsePublicFolderForwardPagingListMatch } from '../HubspotAutomationTypes';
declare class EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity extends HubspotAutomationEntityBase<EmailTemplatesCollectionResponsePublicFolderForwardPaging> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity): EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity;
    list(this: any, reqmatch?: EmailTemplatesCollectionResponsePublicFolderForwardPagingListMatch, ctrl?: Control): Promise<EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity[]>;
}
export { EmailTemplatesCollectionResponsePublicFolderForwardPagingEntity };
