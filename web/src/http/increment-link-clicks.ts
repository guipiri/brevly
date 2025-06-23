import { axiosClient } from './client/axios'
import { linksRoute } from './routes'

export const incrementLinkClicks = async (alias: string) => {
  await axiosClient.post(`${linksRoute}/${alias}/increment-clicks`)
}
