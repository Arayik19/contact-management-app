import { ContactModel } from '../../models';
import axios from 'axios';

const contactsApi: string = 'http://localhost:3000/contacts';

export const fetchContacts = async (): Promise<ContactModel[]> => {
  const response = await axios.get(contactsApi)
    .then(({ data }) => data)
    .catch(() => {
      throw new Error('Something went wrong with the request!');
    });

  return response;
};

export const createContact = async (contact: ContactModel): Promise<ContactModel> => {
  const response = await axios.post(`${contactsApi}`, contact)
    .then(({data}) => data)
    .catch(() => {
      throw new Error('Something went wrong with the request!');
    });

  return response;
}

export const updateContact = async (contact: ContactModel): Promise<ContactModel> => {
  const response = await axios.put(`${contactsApi}/${contact.id}`, contact)
    .then(({data}) => data)
    .catch(() => {
      throw new Error('Something went wrong with the request!');
    });

  return response;
}

export const deleteContact = async (contactId: number) => {
  await axios.delete(`${contactsApi}/${contactId}`)
    .catch(() => {
      throw new Error('Something went wrong with the request!');
    });
}
