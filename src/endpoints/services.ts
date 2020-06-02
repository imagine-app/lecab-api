import { RESTClient } from "../client/RESTClient"
import { LocationRequest } from "../models/LocationRequest"
import { LocationResponse } from "../models/LocationResponse"
import { Service } from "../models/Service"
import { PaymentType } from "../models/PaymentType"

export type ServicesAvailableRequest = {
  location: LocationRequest
}

export type ServicesAvailableResponse = {
  location: LocationResponse
  services: Service[]
}

export type ServicesEstimateRequest = {
  location: LocationRequest
  service: Service
  payment: {
    type: PaymentType
  }
}

export type ServicesEstimateResponse = {
  location: LocationResponse
  delay: number
}

export default class ServicesAPIClient {
  constructor(private client: RESTClient) {}

  available(request: ServicesAvailableRequest) {
    return this.client.post<ServicesAvailableResponse>(
      "/services/available",
      request,
    )
  }

  estimate(request: ServicesEstimateRequest) {
    return this.client.get<ServicesEstimateResponse>(
      "/services/estimate",
      request,
    )
  }
}
