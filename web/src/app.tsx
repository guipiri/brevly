import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './routes/home'
import { BrowserRouter, Route, Routes } from 'react-router'
import Redirect from './routes/redirect'
import NotFound from './routes/not-found'
import GlobalLayout from './global-layout'
import { AlertProvider } from './contexts/AlertContext'

const queryClient = new QueryClient({
  defaultOptions: { queries: { experimental_prefetchInRender: true } },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<GlobalLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/:alias" element={<Redirect />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </QueryClientProvider>
  )
}

export default App
