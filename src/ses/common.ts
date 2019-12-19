import AWS from 'aws-sdk'
import debug from 'debug'

const logger = debug('email-utility:ses')

const ses = new AWS.SESV2({apiVersion: '2019-09-27', region: 'us-west-2'})

export async function checkDomainIdentityExists(domainName: string) {
  const identityType = 'DOMAIN'
  const list = await ses.listEmailIdentities().promise()
  if (!list.EmailIdentities) throw new Error('No Email Identities found.')
  const emailIdentity = list.EmailIdentities.find(identity => identity.IdentityName===domainName && identity.IdentityType===identityType)
  if (!emailIdentity) throw new Error(`Could not find email identity for ${identityType} ${identityType}.`)
  if (!emailIdentity.SendingEnabled) throw new Error(`Sending must be enabled for ${identityType} ${identityType} before continuing.`)
}
