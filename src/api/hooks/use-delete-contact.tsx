import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { deleteContact } from '../services';
import { useNavigate } from '@tanstack/react-router';

const useDeleteContact = (): UseMutationResult<void, any, any> => {
    const queryClient = useQueryClient();
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationFn: deleteContact,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contacts'] }).then(() => {
                navigate({ to: '/' })
            });
        },
    })

    return mutation;
}

export default useDeleteContact;