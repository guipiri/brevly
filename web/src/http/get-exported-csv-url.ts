import { axiosClient } from './client/axios'
import { linksRoute } from './routes'

export const getExportedCsvUrl = async () => {
  const res = await axiosClient.get<{ exportUrl: string }>(
    `${linksRoute}/export-csv`
  )
  return res.data
}
