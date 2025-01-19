import { Link, useNavigate } from '@tanstack/react-router';
import { ContactModel } from '../../models';
import { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


interface SidebarProps {
    contacts: ContactModel[] | null | undefined
}

const Sidebar = ({ contacts }: SidebarProps) => {
    const navigate = useNavigate();
    const [filteredContacts, setFilteredContacts] = useState(contacts);

    const onNew = () => {
        navigate({ to: '/contacts/create' })
    }

    const onSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const searchedItems = contacts?.filter(({ userName }) => userName.toLowerCase().includes(target.value.toLowerCase().trim()));

        setFilteredContacts(searchedItems);
    }

    return (
        <div className='max-w-80 w-full bg-gray-100 py-6 h-full border-r-2 border-gray-200'>
            <div className='flex gap-2 mb-8 border-b-2 border-gray-200 px-8'>
                <div className="relative flex bg-white-2 rounded-lg min-w-24">
                    <FontAwesomeIcon
                        className="absolute left-2.5 top-3 text-gray-400"
                        icon={faMagnifyingGlass}
                    />
                    <input
                        type="text"
                        className='w-full mb-4 p-2 pl-8 border border-gray-300 shadow rounded-lg'
                        placeholder="Search"
                        onChange={onSearch}
                    />
                </div>
                <button
                    className='flex-1 w-full mb-4 bg-white border border-gray-300 shadow text-blue-500 py-2 px-4 rounded-lg hover:bg-gray-200'
                    onClick={onNew}
                >
                    New
                </button>
            </div>

            <ul className='px-8'>
                {
                    filteredContacts?.length ? filteredContacts?.map(({ id, userName }) => {
                        return (
                            <li key={id}>
                                <Link
                                    to={'/contacts/$contactId'}
                                    params={{ contactId: id }}
                                    activeProps={{
                                        className: 'bg-blue-700 text-white'
                                    }}
                                    className='block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-200'
                                >
                                    {userName}
                                </Link>
                            </li>
                        )
                    }) :
                        <p>No contacts found!</p>
                }
            </ul>
        </div>
    );
}

export default Sidebar;