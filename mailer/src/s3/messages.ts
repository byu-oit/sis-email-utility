import * as Model from '../types/model'
import {ensureUserExists, retrieveObject, storeObject} from './common'

async function deliverMessage(category: Model.Category, personInfo: Model.PersonInfo, message: Model.Message): Promise<void> {
  // Ensure that the user exists
  await ensureUserExists(personInfo.byuId)

  // Simplify the message
  const newSimpleMessage: Model.SimpleMessage = {
    id: message.id,
    from: message.from,
    subject: message.subject,
    timestamp: (new Date()).toISOString()
  }

  // Update each box file
  const email: { [key: string]: Model.MessageList } = {}
  for (const box of ['sent', 'archive', 'inbox']) {
    let updated = false
    // Get the box files
    const targetObject = await retrieveObject(personInfo.byuId, `${box}`)
    email[box] = JSON.parse(targetObject.Body as string) as Model.MessageList

    // Add/Remove message to/from box:
    //  1. Always add message to the category specified
    //  2. If the message isn't added, check that the message isn't sent and remove the entry (if present)
    // This ensures that sent messages are delivered properly and that a message is not inboxed and archived
    // simultaneously.
    if (box===category) {
      email[box] = {...email[box], [message.id]: newSimpleMessage, ...email.box} // Merge target and new object
      updated = true
    }
    else if (category !== 'sent' && email[box].hasOwnProperty(message.id)) {
      delete email[box][message.id] // Remove object
      updated = true
    }

    // Save the changes to the box file if it has been updated
    if (updated) await storeObject(personInfo.byuId, category, email[box], 'STANDARD')
  }
}

export async function storeMessage(message: Model.Message): Promise<void> {
  // Store message object
  await storeObject('__email', message.id, message)

  // Deliver message to recipients' boxes
  const recipients = [...message.to, ...message.cc, ...message.bcc]
  await Promise.all(recipients.map(recipient => deliverMessage('inbox', recipient, message)))

  // Mark message as sent
  await deliverMessage('sent', message.from, message)
}
