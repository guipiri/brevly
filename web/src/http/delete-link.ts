import { axiosClient } from './client/axios'
import { linksRoute } from './routes'

export const deleteLinkWithAxios = async (alias: string) => {
  await new Promise((resolve) => {
    setTimeout(() => resolve(''), 3000)
  })
  await axiosClient.delete<void>(`${linksRoute}/${alias}`)
}
