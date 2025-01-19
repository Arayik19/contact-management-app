import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { updateContact } from '../services';
import { useNavigate } from '@tanstack/react-router';
import { ContactModel } from '../../models';

const useUpdateContact = (): UseMutationResult<ContactModel, any, any> => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: updateContact,
        onSuccess: ({id}) => {
            queryClient.invalidateQueries({ queryKey: ['contacts'] }).then(() => {
                navigate({to: `/contacts/${id}`});
            });
        },
    });

    return mutation;
}

export default useUpdateContact;