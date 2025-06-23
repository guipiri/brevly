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
    <div className="scrollbar scrollbar-w-1 scrollbar-thumb-blue-base scrollbar-thumb-rounded-full p-6 w-full max-w-[40rem] sm:max-w-[36.25rem] bg-white rounded-sm flex flex-col gap-4 overflow-y-scroll h-full">
      <ListLinksHeader />

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
