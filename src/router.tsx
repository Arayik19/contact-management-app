import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import { ContactDetailsPage, CreateEditContactPage, HomePage, NotFoundPage } from './pages';
import { Layout } from './components';

const rootRoute = createRootRoute({
    component: Layout,
    notFoundComponent: NotFoundPage
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: HomePage,
})

const contactRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/contacts/$contactId',
    component: ContactDetailsPage,
    
});

const contactEditRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/contacts/$contactId/edit',
    component: CreateEditContactPage,
})

const contactCreateRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/contacts/create',
    component: CreateEditContactPage,
})

const routeTree = rootRoute.addChildren([indexRoute, contactRoute, contactEditRoute, contactCreateRoute]);

const router = createRouter({ routeTree });


export { router };