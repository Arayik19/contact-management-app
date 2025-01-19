import { FieldApi } from '@tanstack/react-form';
import { useEffect, useState } from 'react';
import { ContactFormModel, ContactImageControlPropsModel } from '../../models';
import { encodeBase64 } from '../../utils';
import FieldValidationMessage from '../field-validation-message/FieldValidationMessage';

const ContactImageControl = ({
    formField: FormFieldComponent,
    initialImage,
}: ContactImageControlPropsModel) => {
    const [uploadedImage, setUploadedImage] = useState<string | undefined>();

    useEffect(() => {
        setUploadedImage(initialImage);
    }, [initialImage])

    const onImageUpload = async (
        target: HTMLInputElement,
        field: FieldApi<ContactFormModel, 'image', any, any>
    ): Promise<void> => {
        const image = target.files?.[0];

        if (image) {
            const base64Img: string = await encodeBase64(image)

            setUploadedImage(base64Img);
            field.handleChange(base64Img)
        }
    }

    return <FormFieldComponent
        name="image"
        children={(field) => {
            return <div className="mb-4 flex flex-col gap-3 w-40 md:mr-4">
                <img src={uploadedImage} className="w-40 h-40 rounded-lg" />
                <label htmlFor="image" className="py-2 px-4 cursor-pointer shadow rounded-lg text-center hover:bg-gray-200">
                    Select Image
                </label>
                <input
                    className="hidden"
                    id='image'
                    type='file'
                    name={field.name}
                    onBlur={field.handleBlur}
                    onChange={
                        ({ target }) => {
                            onImageUpload(target, field);
                        }
                    }
                />
                <FieldValidationMessage field={field} />
            </div>
        }
        }>


    </FormFieldComponent>
}

export default ContactImageControl;