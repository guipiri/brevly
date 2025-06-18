import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CreateLink from './components/create-link'
import HomeHeader from './components/home-header'
import ListLinks from './components/list-links'

const queryClient = new QueryClient({
  defaultOptions: { queries: { experimental_prefetchInRender: true } },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-2 bg-gray-200 h-dvh pt-8">
        <HomeHeader />

        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:items-start">
          <CreateLink />

          <ListLinks />
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
