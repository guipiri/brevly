import axios from 'axios'
import type { HttpClient } from './contract'

export class AxiosClient implements HttpClient {
  axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
  })

  async get<T>(route: string) {
    const res = await this.axiosInstance.get<T>(route)
    return res.data
  }

  async post(route: string, body: unknown) {
    const res = await this.axiosInstance.post(route, body)
    return res.data
  }

  async delete(route: string) {
    const res = await this.axiosInstance.delete(route)
    return res.data
  }
}

export const axiosClient = new AxiosClient()
