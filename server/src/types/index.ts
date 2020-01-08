import {UAPI} from '@byu-oit/uapi-ts/index'
import {NextFunction, Request, Response} from "express"
import {DecodedByuJwt} from "byu-jwt"

export interface Validation<T> {
  value: T
  errors: string[]
}

export interface PersonInfo {
  firstName: string
  surname: string
  byuId: string
  netId: string
  personId: string
  email: string
}

export interface NewMessageBody {
  to?: string[]
  cc?: string[]
  bcc?: string[]
  subject?: string
  body?: string
}

export interface EventMessage {
  to?: string[]
  cc?: string[]
  bcc?: string[]
  from: PersonInfo
  subject: string
  body: string
}


export interface MessageModel {
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

export interface MessagesModel {
  [id: string]: MessageModel
}

export interface SimpleMessageModel {
  id: string
  from: PersonInfo
  subject: string
  timestamp: string
}

export interface MessageListModel {
  [id: string]: SimpleMessageModel
}

export interface UAPIMessage {
  metadata: UAPI.SimpleMetadata
  id: UAPI.Value & { key: true; api_type: 'system' }
  to: UAPI.ValueArray<{ api_type: 'read-only' }>
  cc: UAPI.ValueArray<{ api_type: 'read-only' }>
  bcc: UAPI.ValueArray<{ api_type: 'read-only' }>
  from: UAPI.Value & { api_type: 'system' }
  subject: UAPI.Value & { api_type: 'read-only' }
  body: UAPI.Value & { api_type: 'read-only' }
  status: UAPI.Value & { api_type: 'system' }
  status_datetime: UAPI.Value & { api_type: 'system' }
  status_by_id: UAPI.Value & { api_type: 'system' }
}

export interface UAPIMessages {
  links: {
    emails__info?: UAPI.Link
    emails__first?: UAPI.Link
    emails__next?: UAPI.Link
    emails__last?: UAPI.Link
    emails__create?: UAPI.Link
    emails__prev?: UAPI.Link
  }
  metadata: UAPI.CollectionMetadata
  values: UAPIMessage[]
}

export type MiddlewareFunction = (req: Request & { verifiedJWTs?: DecodedByuJwt }, res: Response, next: NextFunction) => any
