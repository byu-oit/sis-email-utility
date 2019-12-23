import * as AWS from 'aws-sdk'
import debug from 'debug'
import {Message, PersonInfo} from '../types/model'
import {SendEmailRequest} from 'aws-sdk/clients/sesv2'

const logger = debug('email-utility:ses')
const ses = new AWS.SESV2({apiVersion: '2019-09-27', region: 'us-west-2'})

function formatEmailAddress(person: PersonInfo): string {
  return `${person.firstName} ${person.surname} <${person.email}>`
}

export async function send(message: Message): Promise<void> {
  const params: SendEmailRequest = {
    Destination: {
      BccAddresses: message.bcc.map(formatEmailAddress),
      CcAddresses: message.cc.map(formatEmailAddress),
      ToAddresses: message.to.map(formatEmailAddress)
    },
    Content: {
      Simple: {
        Body: {
          Text: {
            Data: message.body
          }
        },
        Subject: {
          Data: message.subject
        }
      }
    },
    FromEmailAddress: formatEmailAddress(message.from)
  }
  logger(`sending message "${message.id}"`)
  await ses.sendEmail(params).promise()
  logger(`sent message "${message}"`)
}
