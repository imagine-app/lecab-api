import { RESTClient, isRESTClient } from "./client/RESTClient"
import { LeCabSubdomain, LeCabVersion, AxiosClient } from "./client/AxiosClient"

type APIClientParams =
  | RESTClient
  | {
      subdomain: LeCabSubdomain
      apiKey: string
      version?: LeCabVersion
    }

export default class APIClient {
  constructor(params: APIClientParams) {
    const restClient = isRESTClient(params)
      ? params
      : new AxiosClient(params.subdomain, params.apiKey, params.version)
  }
}
