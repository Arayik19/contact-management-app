import { FieldComponent, FieldApi } from '@tanstack/react-form';
import { ChangeEvent } from 'react';
import { ContactFormModel } from './contact.model';

export interface ContactFormControlPropsModel {
    formField: FieldComponent<ContactFormModel, any>,
    fieldName: (keyof ContactFormModel),
    inputType?: 'file' | 'text',
    onChange: (e: ChangeEvent<HTMLInputElement>, field: FieldApi<ContactFormModel, (keyof ContactFormModel), any, any>) => void
}

export interface ContactImageControlPropsModel {
    formField: FieldComponent<ContactFormModel, any>,
    initialImage: string | undefined,
}