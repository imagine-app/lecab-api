import axios, { AxiosInstance } from "axios"
import { RESTClient, LeCabCredentials } from "./RESTClient"

export type LeCabSubdomain = "testapi" | "api"
export type LeCabVersion = "release"

export class AxiosClient implements RESTClient {
  private client: AxiosInstance

  constructor(
    subdomain: string,
    credentials: LeCabCredentials,
    version: LeCabVersion = "release",
  ) {
    const authorizationHeader: string =
      typeof credentials["apiKey"] === "string"
        ? `X-Api-Key ${credentials["apiKey"]}`
        : `Bearer ${credentials["oauthCustomertoken"]}`
    this.client = axios.create({
      baseURL: `https://${subdomain}.lecab.fr/${version}`,
      headers: {
        Authorization: authorizationHeader,
      },
    })
  }

  async get<T = any>(path: string, params?: any): Promise<T> {
    const res = await this.client.get<T>(path, { params })
    return res.data
  }

  async post<T = any>(path: string, params?: any): Promise<T> {
    const res = await this.client.post<T>(path, params)
    return res.data
  }

  async put<T = any>(path: string, params?: any): Promise<T> {
    const res = await this.client.put<T>(path, params)
    return res.data
  }
}
