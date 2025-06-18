import { DownloadSimpleIcon } from '@phosphor-icons/react'
import Link from './link'
import LinksNotFound from './links-not-found'
import { useQuery } from '@tanstack/react-query'
import { fetchLinksWithAxios } from '../http/fetch-links'

function ListLinks() {
  const query = useQuery({
    queryKey: ['links'],
    queryFn: fetchLinksWithAxios,
  })

  const links = query.data?.links || []

  return (
    <div className="p-6 w-full max-w-[40rem] sm:max-w-[36.25rem] bg-white rounded-sm flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <h2 className="text-lg text-gray-600 h-6">Meus Links</h2>
        <button className="bg-gray-200 h-8 rounded-xs flex gap-1.5 items-center px-2 border border-gray-200 transition-all hover:border-blue-base hover:cursor-pointer">
          <DownloadSimpleIcon
            size={16}
            weight="regular"
            className="fill-gray-600 m-auto"
          />
          <span className="text-gray-500 text-sm">Baixar CSV</span>
        </button>
      </header>

      {links && links.length > 0 ? (
        links.map((link) => {
          return <Link key={link.alias} link={link} />
        })
      ) : (
        <LinksNotFound />
      )}
    </div>
  )
}

export default ListLinks
