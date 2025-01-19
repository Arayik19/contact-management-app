import { standardSchemaValidator, useForm } from '@tanstack/react-form';
import { ContactModel } from '../../models';
import { FormEvent, useCallback, useEffect } from 'react';
import { contactFormSchema } from '../../constants';
import ContactFormControl from '../../components/contact-form-control/ContactFormControl';
import ContactImageControl from '../../components/contact-image-control/ContactImageControl';
import { useUpdateContact } from '../../api/hooks';
import { AnyRouter, useNavigate, useRouterState } from '@tanstack/react-router';
import useCreateContact from '../../api/hooks/use-create-contact';
import { generateUniqueId } from '../../utils';

const CreateEditContactPage = () => {
    const contact = useRouterState<AnyRouter, ContactModel>({ select: ({ location }) => (location.state as any).contact });
    const navigate = useNavigate();
    const updateContactMutation = useUpdateContact();
    const createContactMutation = useCreateContact();
    const form = useForm({
        defaultValues: contact || {
            image: '',
            userName: '',
            socialMediaUrl: '',
            description: ''
        },
        validatorAdapter: standardSchemaValidator(),
        validators: {
            onChange: contactFormSchema
        },
        onSubmit: ({ value }) => {
            if(contact) {
                updateContactMutation.mutate(value)
            } else {
                const newContact: ContactModel = {...value, id: generateUniqueId()};
                
                createContactMutation.mutate(newContact);
            }
        },
    });

    useEffect(() => {
        if (!contact) {
            form.reset();
        } 
    }, [contact, form])

    useEffect(() => {
        form.validateAllFields('mount');
    }, [form])

    const onFormSubmit = (e: FormEvent): void => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
    }

    const onCancel = useCallback(() => {
        navigate({ to: contact ? `/contacts/${contact.id}` : '/' })
    }, [contact, navigate])

    return (
        <form onSubmit={onFormSubmit} className='flex flex-col max-w-lg w-full justify-start'>
            <div className='flex w-full flex-col  md:flex-row'>
                <ContactImageControl formField={form.Field} initialImage={contact?.image} />
                <div className='flex flex-col grow gap-1'>
                    <ContactFormControl
                        formField={form.Field}
                        fieldName='userName'
                        onChange={
                            ({ target }, field) => field.handleChange(target.value)
                        }
                    />
                    <ContactFormControl
                        formField={form.Field}
                        fieldName='socialMediaUrl'
                        onChange={
                            ({ target }, field) => field.handleChange(target.value)
                        }
                    />
                    <ContactFormControl
                        formField={form.Field}
                        fieldName='description'
                        onChange={
                            ({ target }, field) => field.handleChange(target.value)
                        }
                    />
                </div>
            </div>
            <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                    <div className='flex gap-2 mt-4'>
                        <button
                            type="submit"
                            className='w-full mb-4 shadow text-blue-500 py-2 px-4 rounded-lg disabled:text-gray-400 disabled:hover:bg-white hover:bg-gray-200'
                            disabled={!canSubmit}
                        >
                            {isSubmitting ? '...' : 'Submit'}
                        </button>
                        <button
                            type="button"
                            className='w-full mb-4 text-red-500 shadow py-2 px-4 rounded-lg hover:bg-gray-200'
                            onClick={onCancel}
                        >
                            Cancel
                        </button>
                    </div>

                )}
            />
        </form>
    );
}

export default CreateEditContactPage;