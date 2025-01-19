import { createContext } from 'react';
import { ContactsQueryModel } from '../models';

export const ContactsContext = createContext<ContactsQueryModel>({ data: [], errorMessage: '' });

