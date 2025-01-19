import { useQuery } from '@tanstack/react-query';
import { fetchContacts } from '../services';
import { ContactsQueryModel } from '../../models';

const useFetchContactsData = (): ContactsQueryModel => {
    const { data, error } = useQuery({
        queryKey: ['contacts'],
        queryFn: fetchContacts,
        refetchOnWindowFocus: false,
    })

    return { data, errorMessage: error?.message  }
}

export default useFetchContactsData;