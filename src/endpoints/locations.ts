import { RESTClient } from "../client/RESTClient"
import { LocationRequest } from "../models/LocationRequest"
import { LocationResponse, LocationType } from "../models/LocationResponse"

export type LocationsPresetRequest =
  | { id: string }
  | { type: LocationType }
  | {} // ⬅︎ no filter allowed

export type LocationSearchRequest = {
  location: LocationRequest
  limit?: number
}

export type LocationSearchResponse = {
  locations: LocationResponse[]
}

export default class LocationsAPIClient {
  constructor(private client: RESTClient) {}

  search(request: LocationSearchRequest) {
    return this.client.post<LocationSearchResponse>(
      "/locations/search",
      request,
    )
  }

  preset(query: Partial<LocationsPresetRequest> = {}) {
    return this.client.get<LocationSearchResponse>("/location/search", query)
  }
}
