export interface PersonInfo {
  firstName: string
  surname: string
  byuId: string
  netId: string
  personId: string
  email: string
}

export interface SNSEventMessage {
  to: string[]
  cc: string[]
  bcc: string[]
  from: string
  subject: string
  body: string
}

export interface Message {
  id: string
  to: PersonInfo[]
  cc: PersonInfo[]
  bcc: PersonInfo[]
  from: PersonInfo
  subject: string
  body: string
  status: string
  status_datetime: string
  status_by_id: string
}

export interface SimpleMessage {
  id: string
  from: PersonInfo
  subject: string
  timestamp: string
}

export interface MessageList {
  [id: string]: SimpleMessage
}

export type Category = 'sent' | 'archive' | 'inbox'
