import { DownloadSimpleIcon } from '@phosphor-icons/react'
import { getExportedCsvUrl } from '../http/get-exported-csv-url'

function ListLinksHeader() {
  const exportCsv = async () => {
    const { exportUrl } = await getExportedCsvUrl()
    const a = document.createElement('a')
    a.href = exportUrl
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
  }
  return (
    <header className="flex items-center justify-between">
      <h2 className="text-lg text-gray-600 h-6">Meus Links</h2>
      <button className="bg-gray-200 h-8 rounded-xs flex gap-1.5 items-center px-2 border border-gray-200 transition-all hover:border-blue-base hover:cursor-pointer">
        <DownloadSimpleIcon
          size={16}
          weight="regular"
          className="fill-gray-600 m-auto"
        />
        <span onClick={exportCsv} className="text-gray-500 text-sm">
          Baixar CSV
        </span>
      </button>
    </header>
  )
}

export default ListLinksHeader
