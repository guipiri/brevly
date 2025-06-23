import { Outlet } from 'react-router'

function GlobalLayout() {
  return (
    <div className="p-2 pt-4 bg-gray-200 h-dvh sm:pt-8 flex flex-col">
      <Outlet />
    </div>
  )
}

export default GlobalLayout
