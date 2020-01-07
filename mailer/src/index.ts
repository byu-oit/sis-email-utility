/*eslint @typescript-eslint/camelcase: ["error", {allow: ["status_by_id", "status_datetime"]}]*/
import uuid from 'uuid'
import {send} from './ses/messages'
import {storeMessage} from './s3/messages'
import {resolveIds} from './external/persons'
import {Message} from './types/model'
import {SNSEvent} from 'aws-lambda'
import * as validate from './validate'

export async function handler (event: SNSEvent): Promise<void> {
  const email = validate.emailNotification(event)
  console.log(`Message body: ${JSON.stringify(email, null, 2)}`)

  console.log('Resolving identities')
  const [to, cc, bcc, sender] = await Promise.all([resolveIds(...email.to), resolveIds(...email.cc), resolveIds(...email.bcc), resolveIds(email.from)])
  console.log('Resolved identities')

  if (!to.length && !cc.length && !sender.length) throw new Error('Missing recipient(s)')
  if (!sender.length) throw new Error('Missing sender')

  const message: Message = {
    id: uuid(),
    to,
    cc,
    bcc,
    from: sender[0],
    subject: email.subject,
    body: email.body,
    status: 'sent',
    status_datetime: new Date().toISOString(),
    status_by_id: sender[0].byuId
  }

  console.log('Sending message')
  await send(message)
  console.log('Sent message')

  console.log('Storing message')
  await storeMessage(message)
  console.log('Stored message')
}
