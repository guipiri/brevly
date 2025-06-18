import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './routes/home'
import { BrowserRouter, Route, Routes } from 'react-router'
import Redirect from './routes/redirect'
import NotFound from './routes/not-found'

const queryClient = new QueryClient({
  defaultOptions: { queries: { experimental_prefetchInRender: true } },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:alias" element={<Redirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
