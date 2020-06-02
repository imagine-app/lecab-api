import { GPSCoordinate } from "./GPSCoordinate"

type LocationResponseBase = {
  id?: string
  address: string
  name?: string
} & Type

export type LocationResponse = LocationResponseBase & OptionalGPSCoordinates

export type LocationResponseWithCoordinate = LocationResponseBase &
  GPSCoordinate

export const hasGPSCoordinate = (
  locationResponse: LocationResponse,
): locationResponse is LocationResponseWithCoordinate => {
  return locationResponse["latitude"] && locationResponse["longitude"]
}

type Type =
  | { type: "LEAF" }
  // subtype only makes sense when type is NODE
  | { type: "NODE"; subtype: LocationSubType }

type OptionalGPSCoordinates = GPSCoordinate | {}

export type LocationType = Type["type"]

export type LocationSubType =
  | "AIRPORT"
  | "TRAIN"
  | "SPECIAL_PLACE"
  | "AIRPORT_TERMINAL"
  | "TRAIN_MEETING_POINT"
  | "MEETING_POINT"
