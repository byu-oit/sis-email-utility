/*eslint @typescript-eslint/camelcase: ["error", {allow: ["status_by_id", "status_datetime", "status_information"]}]*/
import uuid from 'uuid'
import {send} from './aws/ses'
import {storeMessage} from './aws/s3'
import {Message} from './types'
import {SNSEvent} from 'aws-lambda'
import * as validate from './validate'
import {resolveIds} from './external/persons'

export async function handler (event: SNSEvent): Promise<void> {
  try {
    const email = await validate.emailNotification(event)
    console.log(`Message body: ${JSON.stringify(email, null, 2)}`)

    const [to, cc, bcc] = await Promise.all([resolveIds(email.to), resolveIds(email.cc), resolveIds(email.bcc),])

    const message: Message = {
      id: uuid(),
      to,
      cc,
      bcc,
      from: email.from,
      subject: email.subject,
      body: email.body,
      status: 'sent',
      status_datetime: new Date().toISOString(),
      status_by_id: email.from.byuId
    }

    console.log('Sending message')
    await send(message)
    console.log('Sent message')

    console.log('Storing message')
    await storeMessage(message)
    console.log('Stored message')
  } catch (e) {
    console.error(e)
  }
}
