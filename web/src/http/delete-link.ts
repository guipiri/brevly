import { axiosClient } from './client/axios'
import { linksRoute } from './routes'

export const deleteLinkWithAxios = async (alias: string) => {
  await axiosClient.delete<void>(`${linksRoute}/${alias}`)
}
