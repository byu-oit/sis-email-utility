/*eslint @typescript-eslint/camelcase: ["error", {allow: ["api_type", "value_array", "status_by_id", "status_datetime"]}]*/
import * as Model from '../types/messages/model'
import * as Response from '../types/messages/response'
import {generateCollectionMetadataResponseObj, generateValidationResponseObj} from '../util'

export function formatMessage (message: Model.Message): Response.Message {
  return {
    metadata: generateValidationResponseObj(200),
    id: {
      value: message.id,
      key: true,
      api_type: 'system'
    },
    to: {
      value_array: message.to.map(v => ({
        value: v,
        api_type: 'read-only'
      })),
      api_type: 'read-only'
    },
    cc: {
      value_array: message.cc.map(v => ({
        value: v,
        api_type: 'read-only'
      })),
      api_type: 'read-only'
    },
    bcc: {
      value_array: message.bcc.map(v => ({
        value: v,
        api_type: 'read-only'
      })),
      api_type: 'read-only'
    },
    from: {
      value: message.from,
      api_type: 'system'
    },
    subject: {
      value: message.subject,
      api_type: 'read-only'
    },
    body: {
      value: message.body,
      api_type: 'read-only'
    },
    status: {
      value: message.status,
      api_type: 'system'
    },
    status_datetime: {
      value: message.status_datetime,
      api_type: 'system'
    },
    status_by_id: {
      value: message.status_by_id,
      api_type: 'system'
    }
  }
}

export function formatMessages(messages: Model.Messages): Response.Messages {
  const values = Object.values(messages).map(formatMessage)
  return {
    links: {},
    metadata: generateCollectionMetadataResponseObj(values.length, 200),
    values
  }
}
