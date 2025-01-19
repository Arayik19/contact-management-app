import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { createContact } from '../services';
import { useNavigate } from '@tanstack/react-router';
import { ContactModel } from '../../models';

const useCreateContact = (): UseMutationResult<ContactModel, any, any> => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: createContact,
        onSuccess: ({id}) => {
            queryClient.invalidateQueries({ queryKey: ['contacts'] }).then(() => {
                navigate({to: `/contacts/${id}`})
            });
        },
    })

    return mutation;
}

export default useCreateContact;