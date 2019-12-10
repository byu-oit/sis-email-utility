import {Request, Response} from 'express'
import * as validate from '../validate/messages'
import * as db from '../db/messages'
import * as format from '../format/messages'
import {handleHTTPErrors} from '../util'

export function getMessages(req: Request, res: Response): Promise<any> {
  return handleHTTPErrors(req, res, async (req, res) => {
    const userId = req.headers['user-id'] as string
    const data = await db.getMessages(userId)
    const formatted = format.formatMessages(data)
    return res.status(200).send(formatted)
  })
}

export function sendMessage(req: Request, res: Response): Promise<any> {
  return handleHTTPErrors(req, res, async (req, res) => {
    const userId = req.headers['user-id'] as string
    const validated = validate.newMessageRequest(req)
    await db.storeMessage(userId, validated)
    res.header('location', `/messages/${validated.id}`)
    return res.status(201).send('Created')
  })
}

export function getMessage(req: Request, res: Response): Promise<any> {
  return handleHTTPErrors(req, res, async (req, res) => {
    const userId = req.headers['user-id'] as string
    const messageId = req.params['message_id'] as string
    const data = await db.getMessage(userId, messageId)
    const formatted = format.formatMessage(data)
    return res.status(200).send(formatted)
  })
}

export function deleteMessage(req: Request, res: Response): Promise<any> {
  return handleHTTPErrors(req, res, async (req, res) => {
    const userId = req.headers['user-id'] as string
    const messageId = req.params['message_id'] as string
    await db.deleteMessage(userId, messageId)
    return res.status(204).send()
  })
}
