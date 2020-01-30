import {Request} from 'express'
import {DecodedByuJwt} from 'byu-jwt'
import {EventMessage, NewMessageBody, Validation} from '../types'
import {getParams} from '@byu-oit/env-ssm'

export async function newMessage(req: Request & { verifiedJWTs: DecodedByuJwt }): Promise<Validation<EventMessage>> {
  const errors: string[] = []

  const claims = req.verifiedJWTs.claims
  const sender = {
    firstName: claims.preferredFirstName,
    surname: claims.surname,
    byuId: claims.byuId,
    netId: claims.netId,
    personId: claims.personId,
    email: `${claims.netId}@byu.edu`
  }

  const {to = [], cc = [], bcc = [], subject = '', body = ''} = req.body as NewMessageBody
  if (!to.length && !cc.length && !bcc.length) errors.push('Requires at least one of: to, cc, bcc.')
  if (subject==='') errors.push('Required: subject is a non-empty string.')
  if (body==='') errors.push('Required: body is a non-empty string.')

  // Send email only to sender if in stg environment
  const {HANDEL_ENVIRONMENT_NAME: env} = await getParams(['HANDEL_ENVIRONMENT_NAME'], {prefix: 'HANDEL_PARAMETER_STORE_PREFIX'})
  if (env === 'stg') {
    for (const recipients of [to, cc, bcc]) {
      if (recipients.length){
        recipients.length = 0 // Delete items in the array
        recipients.push(sender.netId)
      }
    }
  }

  const value = {to, cc, bcc, from: sender, subject, body}
  return {value, errors}
}
