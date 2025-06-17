import { CopyIcon, DownloadSimpleIcon, TrashIcon } from '@phosphor-icons/react'

function ListLinks() {
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

      <div className="flex flex-col gap-4">
        <hr className="border-gray-200" />
        <div className="py-0.5 flex gap-4 justify-between items-center flex-nowrap">
          <div className="gap-1 grid">
            <a
              className="text-blue-base text-md block truncate"
              href="https://google.com.br"
            >
              brev.ly/google
            </a>
            <span className="text-sm text-gray-500 truncate">
              www.google.com.br/uma-url-muito-gigantesca-e-ai?-o-que-fazer
            </span>
          </div>

          <div className="ml-auto">
            <span className="text-sm text-gray-500 text-nowrap">
              30 acessos
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
                size={16}
                weight="regular"
                className="fill-gray-600 m-auto"
              />
            </button>
          </div>
        </div>
      </div>

      {/* <hr className="border-gray-200" />
      <div className="pt-4 pb-6 flex flex-col gap-3 items-center">
        <LinkIcon size={32} className="fill-gray-400" />
        <span className="text-xs text-gray-500 uppercase">
          ainda não existem links cadastrados
        </span>
      </div> */}
    </div>
  )
}

export default ListLinks
