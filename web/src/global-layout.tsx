import { Outlet } from 'react-router'

function GlobalLayout() {
  return (
    <div className="p-2 bg-gray-200 h-dvh pt-8">
      <Outlet />
    </div>
  )
}

export default GlobalLayout
