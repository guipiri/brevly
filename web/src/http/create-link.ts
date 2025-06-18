import { axiosClient } from './client/axios'
import type { HttpClient } from './client/contract'
import type { ILink } from './fetch-links'
import { linksRoute } from './routes'

export interface ICreateLink {
  url: string
  alias: string
}

export class CreateLink {
  httpClient: HttpClient
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  async exec(body: ICreateLink) {
    const { link } = await this.httpClient.post<{ link: ILink }>(
      linksRoute,
      body
    )
    return link
  }
}

export const createLinkWithAxios = new CreateLink(axiosClient)
