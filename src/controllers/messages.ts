import {Request, Response} from 'express'
import * as validate from '../validate/messages'
import * as db from '../s3/messages'
import * as email from '../ses/messages'
import {generateMetadataResponseObj, HttpStatus} from '../util/uapi'
import { DecodedByuJwt } from 'byu-jwt'

export async function sendMessage(req: Request & { verifiedJWTs: DecodedByuJwt }, res: Response): Promise<any> {
  const validation = await validate.newMessage(req)
  if (validation.errors.length) return res.status(HttpStatus.BAD_REQUEST).send(generateMetadataResponseObj(HttpStatus.BAD_REQUEST, undefined, validation.errors))

  // Try sending email
  try {
    await email.send(validation.value)
  } catch (e) {
    return res.status(HttpStatus.INTERNAL_ERROR).send(generateMetadataResponseObj(HttpStatus.INTERNAL_ERROR))
  }

  // Store message
  await db.storeMessage(validation.value)

  res.header('location', `/messages/${validation.value.id}`)
  return res.status(HttpStatus.CREATED).send('Created')
}
