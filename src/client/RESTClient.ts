export type LeCabCredentials =
  | { apiKey: string }
  | { oauthCustomertoken: string }

export type RESTClient = {
  get<T>(path: string, params?: any): Promise<T>
  post<T>(path: string, params?: any): Promise<T>
  put<T>(path: string, params?: any): Promise<T>
}

export function isRESTClient(some: any): some is RESTClient {
  if (typeof some["get"] !== "function") return false
  if (typeof some["post"] !== "function") return false
  if (typeof some["put"] !== "function") return false
  return true
}
