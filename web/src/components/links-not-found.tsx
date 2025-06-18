import { LinkIcon } from '@phosphor-icons/react'

function LinksNotFound() {
  return (
    <>
      <hr className="border-gray-200" />
      <div className="pt-4 pb-6 flex flex-col gap-3 items-center">
        <LinkIcon size={32} className="fill-gray-400" />
        <span className="text-xs text-gray-500 uppercase">
          ainda não existem links cadastrados
        </span>
      </div>
    </>
  )
}

export default LinksNotFound
