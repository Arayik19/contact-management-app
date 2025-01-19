import { useNavigate, useParams } from '@tanstack/react-router';
import useContactsContext from '../../hooks/use-contacts-context';
import { useEffect, useState } from 'react';
import { ContactModel } from '../../models';
import { useDeleteContact } from '../../api/hooks';
import { ConfirmDeleteDialog } from '../../components';

const ContactDetailsPage = () => {
  const { contactId } = useParams({ from: '/contacts/$contactId' });
  const contactsContext = useContactsContext();
  const deleteContactMutation = useDeleteContact();
  const navigate = useNavigate();
  const [contact, setContact] = useState<ContactModel>();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  useEffect(() => {
    if (contactsContext) {
      const selectedContact = contactsContext.data?.find(({ id }) => id === contactId);

      setContact(selectedContact);
    }
  }, [contactsContext, contactId]);

  const onEdit = () => {
    navigate({
      to: 'edit',
      state: { contact } as any
    })
  }
  

  const toggleConfirmDialog = () => {
    setIsDeleteDialogOpen(prevState => !prevState);
  }

  const onConfirmDelete = async () => {
    deleteContactMutation.mutate(contactId);
    toggleConfirmDialog();
  }


  return (
    <>
      <div className="flex gap-8 flex-col justify-start md:flex-row">
        <img
          src={contact?.image || ''}
          alt={contact?.userName}
          className="w-40 h-40 rounded-lg"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{contact?.userName}</h1>

          <a href={`${contact?.socialMediaUrl}`} className="text-blue-500">
            {contact?.userName}
          </a>

          <p className="mt-3">{contact?.description}</p>

          <div className="mt-4 flex gap-2">
            <button className="text-blue-500 shadow py-2 px-4 rounded-lg hover:bg-gray-200" onClick={onEdit}>Edit</button>
            <button className="text-red-500 shadow py-2 px-4 rounded-lg hover:bg-gray-200" onClick={toggleConfirmDialog}>Delete</button>
          </div>
        </div>
      </div>
      <ConfirmDeleteDialog isOpen={isDeleteDialogOpen} onConfirm={onConfirmDelete} onClose={toggleConfirmDialog}/>
    </>


  );
}

export default ContactDetailsPage;