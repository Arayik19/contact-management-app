import { ContactFormModel } from './contact.model';

export interface CreateEditContactProps {
    contact?: ContactFormModel,
    onSubmit: (formValues: ContactFormModel) => void,
    onCancel: () => void,
}
