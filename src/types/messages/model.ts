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

export interface SimpleMessage {
  id: string
  from: string
  subject: string
  timestamp: string
}

export interface MessageList {
  [id: string]: SimpleMessage
}

export interface Validation<T> {
  value: T
  errors?: string[]
}
