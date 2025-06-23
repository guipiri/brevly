import { axiosClient } from './client/axios'
import type { ILink } from './fetch-links'
import { linksRoute } from './routes'

export const getLinkByAlias = async (alias: string) => {
  const res = await axiosClient.get<{ link: ILink | null }>(
    `${linksRoute}/${alias}`
  )
  return res.data
}
