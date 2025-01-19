import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ContactsContextProvider } from './components'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ContactsContextProvider>
        <RouterProvider router={router} />
      </ContactsContextProvider>
    </QueryClientProvider>
  )
}

export default App
