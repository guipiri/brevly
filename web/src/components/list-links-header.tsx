import { DownloadSimpleIcon } from '@phosphor-icons/react'
import { getExportedCsvUrl } from '../http/get-exported-csv-url'
import { useMutation } from '@tanstack/react-query'
import LoadingBar from './loading-bar'
import { useAlert } from '../contexts/AlertContext'

function ListLinksHeader() {
  const { showAlert } = useAlert()
  const exportCsv = async () => {
    const { exportUrl } = await getExportedCsvUrl()
    const a = document.createElement('a')
    a.href = exportUrl
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
  }

  const mutation = useMutation({
    mutationFn: exportCsv,
    mutationKey: ['export-csv'],
    onError: ({ message }) => {
      showAlert({ message, type: 'error' })
    },
    onSuccess: () => {
      showAlert({ message: 'Exportação feita com sucesso!', type: 'success' })
    },
  })

  return (
    <header className="flex items-center justify-between">
      <LoadingBar active={mutation.isPending} />
      <h2 className="text-lg text-gray-600 h-6">Meus Links</h2>
      <button
        className={`bg-gray-200 h-8 rounded-xs flex gap-1.5 items-center px-2 border border-gray-200 transition-all hover:border-blue-base hover:cursor-pointer ${
          mutation.isPending && 'opacity-50 hover:border-gray-200'
        }`}
      >
        <DownloadSimpleIcon
          size={16}
          weight="regular"
          className="fill-gray-600 m-auto"
        />
        <span
          onClick={() => {
            if (mutation.isPending) return
            mutation.mutate()
          }}
          className="text-gray-500 text-sm"
        >
          Baixar CSV
        </span>
      </button>
    </header>
  )
}

export default ListLinksHeader
