import { HubspotAutomationEntityBase } from '../HubspotAutomationEntityBase';
import type { HubspotAutomationSDK } from '../HubspotAutomationSDK';
import type { Control } from '../types';
import type { EmailTemplatesPublicTemplate, EmailTemplatesPublicTemplateLoadMatch, EmailTemplatesPublicTemplateCreateData, EmailTemplatesPublicTemplateUpdateData } from '../HubspotAutomationTypes';
declare class EmailTemplatesPublicTemplateEntity extends HubspotAutomationEntityBase<EmailTemplatesPublicTemplate> {
    constructor(client: HubspotAutomationSDK, entopts: any);
    make(this: EmailTemplatesPublicTemplateEntity): EmailTemplatesPublicTemplateEntity;
    load(this: any, reqmatch?: EmailTemplatesPublicTemplateLoadMatch, ctrl?: Control): Promise<EmailTemplatesPublicTemplateEntity>;
    create(this: any, reqdata?: EmailTemplatesPublicTemplateCreateData, ctrl?: Control): Promise<EmailTemplatesPublicTemplateEntity>;
    update(this: any, reqdata?: EmailTemplatesPublicTemplateUpdateData, ctrl?: Control): Promise<EmailTemplatesPublicTemplateEntity>;
}
export { EmailTemplatesPublicTemplateEntity };
