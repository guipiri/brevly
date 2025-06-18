import { axiosClient } from './client/axios'
import type { HttpClient } from './client/contract'
import { linksRoute } from './routes'

export class DeleteLink {
  httpClient: HttpClient
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  async exec(alias: string) {
    await this.httpClient.delete<void>(`${linksRoute}/${alias}`)
  }
}

export const deleteLinkWithAxios = new DeleteLink(axiosClient)
