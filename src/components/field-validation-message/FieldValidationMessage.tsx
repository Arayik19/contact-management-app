import { FieldApi } from '@tanstack/react-form';

const FieldValidationMessage = ({ field }: { field: FieldApi<any, any, any, any> }) => {
    return field.state.meta.isTouched && field.state.meta.isDirty && field.state.meta.errors.length ? (
        <em className="text-red-500">{field.state.meta.errors.join(',')}</em>
    ) : null;
}

export default FieldValidationMessage;