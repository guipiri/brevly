import { CopyIcon, TrashIcon } from '@phosphor-icons/react'
import type { ILink } from '../http/fetch-links'
import { deleteLinkWithAxios } from '../http/delete-link'

function Link({ link, refetch }: { link: ILink; refetch: () => void }) {
  const deleteLinkByAlias = async (alias: string) => {
    await deleteLinkWithAxios.exec(alias)
    refetch()
  }

  return (
    <div className="flex flex-col gap-4">
      <hr className="border-gray-200" />
      <div className="py-0.5 flex gap-4 justify-between items-center flex-nowrap">
        <div className="gap-1 grid">
          <a className="text-blue-base text-md block truncate" href={link.url}>
            {link.alias}
          </a>
          <span className="text-sm text-gray-500 truncate">{link.url}</span>
        </div>

        <div className="ml-auto">
          <span className="text-sm text-gray-500 text-nowrap">
            {link.clicks} acessos
          </span>
        </div>

        <div className="flex gap-1">
          <button className="aspect-square size-8 bg-gray-200 rounded-xs transition-all border border-gray-200 flex hover:border-blue-base hover:cursor-pointer">
            <CopyIcon
              size={16}
              weight="regular"
              className="fill-gray-600 m-auto"
            />
          </button>
          <button className="aspect-square size-8 bg-gray-200 rounded-xs transition-all border border-gray-200 flex hover:border-blue-base hover:cursor-pointer">
            <TrashIcon
              onClick={() => deleteLinkByAlias(link.alias)}
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
