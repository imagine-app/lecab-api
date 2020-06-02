import { StrictLocationRequest } from "./StrictLocationRequest"

export type LocationRequest = StrictLocationRequest | { address: string }
