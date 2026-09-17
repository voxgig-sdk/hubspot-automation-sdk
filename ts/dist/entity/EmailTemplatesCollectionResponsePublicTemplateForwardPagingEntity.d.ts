import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { EmailTemplatesCollectionResponsePublicTemplateForwardPaging, EmailTemplatesCollectionResponsePublicTemplateForwardPagingListMatch } from '../HubspotAutomationTypes';
declare class EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity extends HubspotAutomationEntityBase<EmailTemplatesCollectionResponsePublicTemplateForwardPaging> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity): EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity;
    list(this: any, reqmatch?: EmailTemplatesCollectionResponsePublicTemplateForwardPagingListMatch, ctrl?: Control): Promise<EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity[]>;
}
export { EmailTemplatesCollectionResponsePublicTemplateForwardPagingEntity };
