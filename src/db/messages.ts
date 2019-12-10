import { Model } from '../types/messages'
import store from './store'
import {HTTPError} from "../util"

export async function getMessages(userId: string): Promise<Model.Messages> {
  return store[userId] || {}
}

export async function storeMessage(userId: string, body: Model.Message): Promise<void> {
  if (!store[userId]) {
    store[userId] = {}
  }
  store[userId][body.id] = body
}

export async function getMessage(userId: string, messageId: string): Promise<Model.Message> {
  if (!store[userId] || !store[userId][messageId]) {
    throw new HTTPError(404)
  }
  return store[userId][messageId]
}

export async function deleteMessage(userId: string, messageId: string): Promise<void> {
  if (store[userId] && store[userId][messageId]) {
    delete store[userId][messageId]
  }
}
