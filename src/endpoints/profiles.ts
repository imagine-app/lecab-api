import { RESTClient } from "../client/RESTClient"
import { Service } from "../models/Service"
import { PaymentType } from "../models/PaymentType"

export type ProfilesSettingsResponse = {
  services?: Service[]
  payments?: Array<{ type: PaymentType }>
  settings?: {
    encryption_key: string
  }
  references?: {
    [reference_name: string]: any
  }
}

export default class ProfilesAPIClient {
  constructor(private client: RESTClient) {}

  settings() {
    return this.client.get<ProfilesSettingsResponse>("/profiles/settings")
  }
}
