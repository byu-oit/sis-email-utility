import {Request, Response} from 'express'
import * as validate from '../validate/messages'
import * as db from '../s3/messages'
import {generateMetadataResponseObj, HttpStatus} from '../util/uapi'

export async function sendMessage(req: Request, res: Response): Promise<any> {
  const validation = validate.newMessageRequest(req)
  if (!validation.errors) return res.status(HttpStatus.NOT_FOUND).send(generateMetadataResponseObj(HttpStatus.NOT_FOUND))
  await db.sendMessage(validation.value)
  res.header('location', `/messages/${validation.value.id}`)
  return res.status(HttpStatus.CREATED).send('Created')
}
