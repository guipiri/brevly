import Link from './link'
import LinksNotFound from './links-not-found'
import { useQuery } from '@tanstack/react-query'
import { fetchLinksWithAxios } from '../http/fetch-links'
import ListLinksHeader from './list-links-header'

function ListLinks() {
  const query = useQuery({
    queryKey: ['links'],
    queryFn: fetchLinksWithAxios,
  })

  const links = query.data?.links || []

  return (
    <div className="p-6 w-full max-w-[40rem] sm:max-w-[36.25rem] bg-white rounded-sm flex flex-col gap-4 h-full">
      <ListLinksHeader />
      <div className="scrollbar scrollbar-w-1 scrollbar-thumb-blue-base scrollbar-thumb-rounded-full overflow-y-scroll flex flex-col gap-4 h-full px-1">
        {links && links.length > 0 ? (
          links.map((link) => {
            return <Link key={link.alias} link={link} />
          })
        ) : (
          <LinksNotFound />
        )}
      </div>
    </div>
  )
}

export default ListLinks
