import { RESTClient } from "../client/RESTClient"

export type ServerStatusResponse = {
  online: boolean
}

export default class ServerAPIClient {
  constructor(private client: RESTClient) {}

  status() {
    return this.client.get<ServerStatusResponse>("/server/status")
  }
}
