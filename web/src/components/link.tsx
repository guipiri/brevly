import { CopyIcon, TrashIcon } from '@phosphor-icons/react'
import type { ILink } from '../http/fetch-links'
import { deleteLinkWithAxios } from '../http/delete-link'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { removeHttp } from '../utils/removeHttp'

const baseUrl = import.meta.env.VITE_FRONTEND_URL

function Link({ link }: { link: ILink }) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: deleteLinkWithAxios,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['links'] })
    },
  })

  const shortLink = `${baseUrl}/${link.alias}`

  const shortLinkFormated = removeHttp(shortLink)

  return (
    <div className="flex flex-col gap-4">
      <hr className="border-gray-200" />
      <div className="py-0.5 flex gap-4 justify-between items-center flex-nowrap">
        <div className="gap-1 grid">
          <a
            className="text-blue-base text-md block truncate"
            target="_blank"
            href={shortLink}
          >
            {shortLinkFormated}
          </a>
          <span className="text-sm text-gray-500 truncate">
            {removeHttp(link.url)}
          </span>
        </div>

        <div className="ml-auto">
          <span className="text-sm text-gray-500 text-nowrap">
            {link.clicks} acessos
          </span>
        </div>

        <div className="flex gap-1">
          <button className="aspect-square size-8 bg-gray-200 rounded-xs transition-all border border-gray-200 flex hover:border-blue-base hover:cursor-pointer">
            <CopyIcon
              onClick={() => {
                navigator.clipboard.writeText(shortLink)
                alert('Link copiado para a área de transferência.')
              }}
              size={16}
              weight="regular"
              className="fill-gray-600 m-auto"
            />
          </button>
          <button className="aspect-square size-8 bg-gray-200 rounded-xs transition-all border border-gray-200 flex hover:border-blue-base hover:cursor-pointer">
            <TrashIcon
              onClick={() => mutation.mutate(link.alias)}
              size={16}
              weight="regular"
              className="fill-gray-600 m-auto"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Link
