import { axiosClient } from './client/axios'
import { linksRoute } from './routes'

export interface ILink {
  id: string
  url: string
  alias: string
  clicks: number
  createdAt: Date
}

export const fetchLinksWithAxios = async () => {
  const res = await axiosClient.get<{ links: ILink[] }>(linksRoute)
  return res.data
}
