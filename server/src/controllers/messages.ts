import {Request, Response} from 'express'
import { DecodedByuJwt } from 'byu-jwt'
import * as validate from '../validate'
import * as bus from '../aws/sns'
import {generateMetadataResponseObj, HttpStatus} from '../util/uapi'

export async function sendMessage(req: Request & { verifiedJWTs: DecodedByuJwt }, res: Response): Promise<any> {
  console.log(`Invoked ${sendMessage.name}`)
  const validation = await validate.newMessage(req)
  if (validation.errors.length) {
    console.log(`Bad Request Error during ${sendMessage.name}: ${validation.errors}`)
    return res.status(HttpStatus.BAD_REQUEST).send(generateMetadataResponseObj(HttpStatus.BAD_REQUEST, undefined, validation.errors))
  }

  try {
    await bus.publish(validation.value)
  } catch (e) {
    console.log(`Internal Error during ${sendMessage.name}: ${e}`)
    return res.status(HttpStatus.INTERNAL_ERROR).send(generateMetadataResponseObj(HttpStatus.INTERNAL_ERROR))
  }

  console.log(`Finished ${sendMessage.name}`)
  return res.status(HttpStatus.ACCEPTED).send('Accepted')
}
