import { ContactsQueryModel } from '../models';
import { useContext } from 'react';
import { ContactsContext } from '../context/contacts-context';

const useContactsContext = (): ContactsQueryModel => {
    const context = useContext(ContactsContext);

    if (!context) {
      throw new Error('CommentsContext must be within CommentsContextProvider');
    }

    return context;
}

export default useContactsContext;