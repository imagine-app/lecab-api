import { JobStatus } from "./JobStatus"
import { LocationResponse } from "./LocationResponse"
import { PaymentType } from "./PaymentType"
import { Service } from "./Service"
import { Contacts } from "./Contact"

export type JobHistory = {
  id: string
  status: JobStatus
  number: string
  date: Date
  pickup: LocationResponse
  drop: LocationResponse
  cancellable?: boolean
  price_net?: number
  price?: number
  payment?: {
    type: PaymentType
  }
  service?: Service
  contacts?: Contacts
}
