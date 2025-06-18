import { axiosClient } from './client/axios'
import { linksRoute } from './routes'

export interface ICreateLink {
  url: string
  alias: string
}

export const createLinkWithAxios = async (input: ICreateLink) => {
  await axiosClient.post(linksRoute, input)
}
