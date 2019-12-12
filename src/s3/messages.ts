import * as Model from '../types/messages/model'
import {ensureUserExists, removeObject, retrieveObject, storeObject} from './common'
import {Category} from '../types/messages/request'

async function deliverMessage(category: Category, userId: string, message: Model.Message): Promise<void> {
  // Ensure that the user exists
  await ensureUserExists(userId)

  // Simplify the message
  const newSimpleMessage: Model.SimpleMessage = {
    id: message.id,
    from: message.from,
    subject: message.subject,
    timestamp: (new Date()).toUTCString()
  }

  // Update each box file
  const email: { [key: string]: Model.MessageList } = {}
  for (const box of ['sent', 'archive', 'inbox']) {
    let updated = false
    // Get the box files
    const targetObject = await retrieveObject(userId, `${box}`)
    email[box] = JSON.parse(targetObject.Body as string) as Model.MessageList

    // Add/Remove message to/from box:
    //  1. Always add message to the category specified
    //  2. If the message isn't added, check that the message isn't sent and remove the entry (if present)
    // This ensures that sent messages are delivered properly and that a message is not inboxed and archived
    // simultaneously.
    if (box===category) {
      email[box] = {[message.id]: newSimpleMessage, ...email.box}
      updated = true
    }
    else if (category !== 'sent' && email[box].hasOwnProperty(message.id)) {
      delete email[box][message.id]
      updated = true
    }

    // Save the changes to the box file if it has been updated
    if (updated) await storeObject(userId, category, email[box], 'STANDARD')
  }
}

export async function getMessageList(userId: string, category: Category): Promise<Model.MessageList> {
  const obj = await retrieveObject(userId, category)
  return JSON.parse(obj.Body as string) as Model.MessageList
}

export async function getMessage(userId: string, messageId: string): Promise<Model.Message> {
  const obj = await retrieveObject(userId, messageId)
  return JSON.parse(obj.Body as string) as Model.Message
}

export async function getMessages(userId: string, category: Category): Promise<Model.Messages> {
  const list = await getMessageList(userId, category)

  // Get contents of each object
  const promises = []
  for (const obj of Object.values(list)) {
    if (obj.id) {
      promises.push(getMessage(userId, obj.id))
    }
  }
  const messageObjects = await Promise.all(promises)

  // Transform objects slightly
  return messageObjects.reduce((agg, cur) => ({...agg, [cur.id]: cur}), {})
}

export async function sendMessage(message: Model.Message): Promise<void> {
  // Store message object
  await storeObject('__email', message.id, message)

  // Deliver message to recipients
  const recipients = [...message.to, ...message.cc, ...message.bcc]
  await Promise.all(recipients.map(recipient => deliverMessage('inbox', recipient, message)))

  // Mark message as sent
  await deliverMessage('sent', message.from, message)
}

export async function deleteMessage(messageId: string): Promise<void> {
  await removeObject('__email', messageId)
}
