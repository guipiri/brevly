import { axiosClient } from './client/axios'
import type { HttpClient } from './client/contract'
import type { ILink } from './fetch-links'
import { linksRoute } from './routes'

export class DeleteLink {
  httpClient: HttpClient
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  async exec(alias: string) {
    const link = await this.httpClient.delete<ILink>(`${linksRoute}/${alias}`)
    return link
  }
}

export const createLinkWithAxios = new DeleteLink(axiosClient)
