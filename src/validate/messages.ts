import {Request} from 'express'
import uuid from 'uuid'
import * as Email from '../types/messages'
import {HTTPError} from '../util'

export function newMessageRequest (req: Request): Email.Model.Message {
  const errors: string[] = []
  const fromId = req.headers['user-id'] as string
  const body = req.body as Email.Request.NewMessage
  if (!fromId) {
    errors.push('Cannot determine the message sender: missing userId header.')
  }
  if (!body.to && !body.cc && !body.bcc) {
    errors.push('Request must include at least one of the following parameters: to, cc, bcc.')
  }

  if (errors.length) {
    throw new HTTPError(400, 'Bad Request', errors)
  }

  const newRequest: Email.Model.Message = {
    id: uuid(),
    to: [],
    cc: [],
    bcc: [],
    from: fromId,
    subject: '',
    body: '',
    status: 'sent',
    status_datetime: new Date().toISOString(),
    status_by_id: fromId
  }

  return Object.assign(newRequest, body)
}
