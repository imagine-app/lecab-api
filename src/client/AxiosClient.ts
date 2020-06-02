import axios, { AxiosInstance } from "axios"
import { RESTClient } from "./RESTClient"

export type LeCabSubdomain = "testapi" | "api"
export type LeCabVersion = "release"

export class AxiosClient implements RESTClient {
  private client: AxiosInstance

  constructor(
    subdomain: string,
    apiKey: string,
    version: LeCabVersion = "release",
  ) {
    this.client = axios.create({
      baseURL: `https://${subdomain}.mysam.fr/${version}`,
      headers: {
        Authorization: `Bearer ${apiKey}`,
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
