/*eslint @typescript-eslint/camelcase: ["error", {allow: ["status_datetime", "status_by_id"]}]*/
import Express from 'express'
import uuid from 'uuid'
import * as Model from '../types/messages/model'
import * as Request from '../types/messages/request'

export function newMessageRequest (req: Express.Request): Model.Validation<Model.Message> {
  const errors: string[] = []
  const fromId = req.headers['user-id'] as string
  const body = req.body as Request.NewMessage

  if (!fromId) {
    errors.push('Cannot determine the message sender: missing userId header.')
  }
  if (!body.to && !body.cc && !body.bcc) {
    errors.push('Request must include at least one of the following parameters: to, cc, bcc.')
  }

  const value: Model.Message = {
    id: uuid(),
    to: [],
    cc: [],
    bcc: [],
    from: fromId,
    subject: '',
    body: '',
    status: 'sent',
    status_datetime: new Date().toISOString(),
    status_by_id: fromId,
    ...body
  }

  return {value, errors}
}
