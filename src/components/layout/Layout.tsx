import { Outlet } from '@tanstack/react-router';
import { Sidebar } from '..';
import { ContactsQueryModel } from '../../models';
import useContacts from '../../hooks/use-contacts-context';
import { useIsFetching } from '@tanstack/react-query';

const Layout = () => {
    const { data, errorMessage }: ContactsQueryModel = useContacts();
    const isFetching = useIsFetching();

    if (errorMessage) return errorMessage;

    return (
        <div className="flex h-svh">
            {
                isFetching ?
                    <div>....Loading</div> :
                    <>
                        <Sidebar contacts={data} />
                        <div className="flex bg-white py-6 px-10 justify-start w-full">
                            <Outlet />
                        </div>
                    </>
            }
        </div>
    );
}

export default Layout;