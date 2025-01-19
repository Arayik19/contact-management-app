import { PropsWithChildren, useMemo } from 'react';
import { useFetchContactsData } from '../../api/hooks';
import { ContactsContext } from '../../context/contacts-context';

const ContactsContextProvider = ({ children }: PropsWithChildren) => {
    const { data, errorMessage } = useFetchContactsData();

    const contactsContext = useMemo(
        () => ({ data, errorMessage }),
        [data, errorMessage],
    );

    return (
        <ContactsContext.Provider value={contactsContext}>
            {children}
        </ContactsContext.Provider>
    );
};

export default ContactsContextProvider;