import { ContactModel } from './contact.model';

export type ContactFormLabelKeysModel = keyof Pick<ContactModel, 'userName' | 'description' | 'socialMediaUrl'>;

export type ContactFormLabelsModel = Record<ContactFormLabelKeysModel, string>;