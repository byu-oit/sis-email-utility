/*eslint @typescript-eslint/camelcase: ["error", {allow: ["status_by_id", "status_datetime"]}]*/
import uuid from 'uuid'
import {send} from './ses/messages'
import {storeMessage} from './s3/messages'
import {resolveIds} from './validate/messages'
import {Event, Message} from './types/model'

export async function handler (event: Event): Promise<void> {
  const [to, cc, bcc, from] = await Promise.all([resolveIds(...event.to), resolveIds(...event.cc), resolveIds(...event.bcc), resolveIds(event.from)])
  const message: Message = {
    id: uuid(),
    to,
    cc,
    bcc,
    from: from[0],
    subject: event.subject,
    body: event.body,
    status: 'sent',
    status_datetime: new Date().toISOString(),
    status_by_id: from[0].byuId
  }
  await send(message)
  await storeMessage(message)
}
