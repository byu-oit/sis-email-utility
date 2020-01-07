import {SNSEvent} from 'aws-lambda'
import {SNSEventMessage} from '../types/model'

export function emailNotification (event: SNSEvent): SNSEventMessage {
  const eventStr = event.Records[0].Sns.Message
  const message = JSON.parse(eventStr)
  const expected = ['to', 'cc', 'bcc', 'from', 'subject', 'body',]
  const errors = []
  for (const prop in expected) {
    if (!(prop in message)) errors.push(`Missing property "${prop}" in message`)
  }
  if (errors.length) throw new Error(`Validation Errors: ${errors.join(', ')}`)
  return message as SNSEventMessage
}
