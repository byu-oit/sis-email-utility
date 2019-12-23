import {Request} from 'express'
import {DecodedByuJwt} from 'byu-jwt'
import {Event, NewMessageBody, Validation} from '../types'

export function newMessage(req: Request & { verifiedJWTs: DecodedByuJwt}): Validation<Event> {
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
  if (subject === '') errors.push('Required: subject is a non-empty string.')
  if (body === '') errors.push('Required: body is a non-empty string.')

  const value = {to, cc, bcc, from: sender, subject, body}
  return { value, errors }
}
