import { RESTClient } from "../client/RESTClient"
import { StrictLocationRequest } from "../models/StrictLocationRequest"
import { Service } from "../models/Service"
import { PaymentType } from "../models/PaymentType"
import { PaymentDatas } from "../models/PaymentDatas"
import { Contact, Contacts } from "../models/Contact"
import { Transport } from "../models/Transport"
import { GPSCoordinate } from "../models/GPSCoordinate"
import { LocationResponse } from "../models/LocationResponse"
import { Driver } from "../models/Driver"
import { Notes } from "../models/Notes"
import { JobHistory } from "../models/JobHistory"

export type JobsEstimateRequest = {
  id?: string
  pickup: StrictLocationRequest
  drop: StrictLocationRequest
  stops?: StrictLocationRequest[]
  service?: Service
  date?: Date
  payment?: {
    type: PaymentType
  }
  discount?: string
}

export type JobsEstimateResponse = {
  pickup: LocationResponse
  stops?: LocationResponse[]
  drop: LocationResponse
  price_net: number
  price: number
  duration_min: number
  duration_max: number
  delay: number
  estimate_id: string
  universalling: string
}

export type JobsConfirmRequest = {
  estimate_id: string
  payment: {
    type: PaymentType
    datas?: PaymentDatas
  }
  contacts: Contacts
  passengers?: Contact[]
  notes?: Notes
  references?: {
    [reference_name: string]: any
  }
  transports?: {
    pickup?: Transport
    stops?: Transport[]
  }
}

export type JobsConfirmResponse = {
  id: string
  number: string
  pickup: LocationResponse
  stops?: LocationResponse[]
  drop: LocationResponse
  price_net: number
  price: number
  delay: number
}

export type JobsCancelRequest = {
  id: string
  charge?: number
}

export type JobsCancelResponse = {
  id: string
} & ChargeInfo

type ChargeInfo = { type: "FREE" } | { type: "CHARGE"; charge: number }

export type JobsDetailRequest = {
  id: string
}

export type JobsDetailResponse = JobHistory & {
  followurl?: string
  driver?: Driver
  notes?: Notes
  stops?: LocationResponse[]
}

export type JobsHistoryRequest = {
  limit?: number
  current_only?: boolean
  start_date?: Date
}

export type JobsHistoryResponse = {
  bookings: JobHistory[]
}

export type JobsSearchRequest = {
  references: {
    [reference_name: string]: any
  }
}

export type JobsSearchResponse = {
  id: string
}

export default class JobsAPIClient {
  constructor(private client: RESTClient) {}

  estimate(request: JobsEstimateRequest) {
    return this.client.post<JobsEstimateResponse>("/jobs/estimate", request)
  }

  quote(request: JobsEstimateRequest) {
    return this.client.post<JobsEstimateResponse>("/jobs/quote", request)
  }

  confirm(request: JobsConfirmRequest) {
    return this.client.post<JobsConfirmResponse>("/jobs/confirm", request)
  }

  cancel(request: JobsCancelRequest) {
    return this.client.post<JobsCancelResponse>("/jobs/cancel", request)
  }

  position(request: JobsDetailRequest) {
    return this.client.post<GPSCoordinate>("/jobs/position", request)
  }

  detail(request: JobsDetailRequest) {
    return this.client.post<JobsDetailResponse>("/jobs/detail", request)
  }

  history(request: JobsHistoryRequest) {
    return this.client.post<JobsHistoryResponse>("/jobs/history", request)
  }

  search(request: JobsSearchRequest) {
    return this.client.post<JobsSearchResponse>("/jobs/search", request)
  }
}
