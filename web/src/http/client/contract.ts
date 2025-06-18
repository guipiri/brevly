export interface HttpClient {
  get<T>(route: string, params?: string): Promise<T>
  post<T>(route: string, body?: unknown): Promise<T>
}
