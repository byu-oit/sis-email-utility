import {Request, Response} from 'express'
import { DecodedByuJwt } from 'byu-jwt'
import * as validate from '../validate'
import * as bus from '../sns'
import {generateMetadataResponseObj, HttpStatus} from '../util/uapi'

export async function sendMessage(req: Request & { verifiedJWTs: DecodedByuJwt }, res: Response): Promise<any> {
  const validation = await validate.newMessage(req)
  if (validation.errors.length) return res.status(HttpStatus.BAD_REQUEST).send(generateMetadataResponseObj(HttpStatus.BAD_REQUEST, undefined, validation.errors))

  try {
    await bus.publish(validation.value)
  } catch (e) {
    return res.status(HttpStatus.INTERNAL_ERROR).send(generateMetadataResponseObj(HttpStatus.INTERNAL_ERROR))
  }

  return res.status(HttpStatus.ACCEPTED).send('Accepted')
}
