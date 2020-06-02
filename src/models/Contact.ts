export type Contact = {
  firstname: string
  lastname: string
  phone: string
  email?: string
}

export type Contacts = {
  global: Contact
  pickup?: Contact
  drop?: Contact
  stops?: Contact[]
}
