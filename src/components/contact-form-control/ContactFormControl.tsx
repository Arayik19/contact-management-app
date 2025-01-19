import { ContactFormLabels } from '../../constants/contact-form-labels.const';
import { ContactFormControlPropsModel, ContactFormLabelKeysModel } from '../../models';
import FieldValidationMessage from '../field-validation-message/FieldValidationMessage';

const ContactFormControl = ({
    formField: FormFieldComponent,
    fieldName,
    onChange
}: ContactFormControlPropsModel) => {

    return <FormFieldComponent name={fieldName}
        children={(field) => {
            return <div>
                <input
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => onChange(e, field)}
                    placeholder={ContactFormLabels[field.name as ContactFormLabelKeysModel]}
                    className='w-full py-2 px-4 rounded-lg border border-gray-300 focus:ring focus:ring-zinc-400'
                />
                <div className="h-10">
                    <FieldValidationMessage field={field} />
                </div>
            </div>
        }
        }>
    </FormFieldComponent>
}

export default ContactFormControl;