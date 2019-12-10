export interface Message {
  id: string
  to: string[]
  cc: string[]
  bcc: string[]
  from: string
  subject: string
  body: string
  status: string
  status_datetime: string
  status_by_id: string
}

export interface Messages {
  [id: string]: Message
}
