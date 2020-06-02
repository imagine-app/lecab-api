import { GPSCoordinate } from "./GPSCoordinate"

export type LocationResponse = {
  id?: string
  address: string
  name?: string
} & Type &
  OptionalGPSCoordinates

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
