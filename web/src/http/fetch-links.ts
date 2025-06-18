import { axiosClient } from './client/axios'
import type { HttpClient } from './client/contract'
import { linksRoute } from './routes'

export interface ILink {
  id: string
  url: string
  alias: string
  clicks: number
  createdAt: Date
}

export class FetchLinks {
  httpClient: HttpClient
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
  }

  async exec() {
    const { links } = await this.httpClient.get<{ links: ILink[] | null }>(
      linksRoute
    )
    return links
  }
}

export const fetchLinksWithAxios = new FetchLinks(axiosClient)
