import { GPSCoordinate } from "./GPSCoordinate"

export type StrictLocationRequest =
  | {
      id?: string
    }
  | GPSCoordinate
