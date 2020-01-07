import AWS from 'aws-sdk'
import {GetObjectOutput, ListObjectsOutput, StorageClass} from 'aws-sdk/clients/s3'
import debug from 'debug'
import {getParams} from '@byu-oit/env-ssm'
import Cache from '../util/cache'
import * as Model from '../types'

const logger = debug('email-utility-mailer:s3')

const s3 = new AWS.S3({apiVersion: '2006-03-01', region: 'us-west-2'})

const objectListCache = Cache<ListObjectsOutput>()

export async function retrieveObject(target: string, id: string): Promise<GetObjectOutput> {
  const {EMAIL_BUCKET_NAME} = await getParams(['EMAIL_BUCKET_NAME'])
  const Key = `${target}/${id}.json`
  logger(`retrieving object: ${Key}`)
  const obj = await s3.getObject({Bucket: EMAIL_BUCKET_NAME, Key}).promise()
  logger(`retrieved object: ${Key}`)
  return obj
}

export async function storeObject(target: string, id: string, body: Record<string, any>, storageClass: StorageClass = 'STANDARD_IA'): Promise<void> {
  const {EMAIL_BUCKET_NAME} = await getParams(['EMAIL_BUCKET_NAME'])
  const Key = `${target}/${id}.json`
  const Body = JSON.stringify(body)
  const StorageClass = storageClass
  logger(`storing object: ${Key}`)
  await s3.putObject({Bucket: EMAIL_BUCKET_NAME, Key, Body, StorageClass}).promise()
  logger(`stored object: ${Key}`)
}

export async function removeObject(target: string, id: string): Promise<void> {
  const {EMAIL_BUCKET_NAME} = await getParams(['EMAIL_BUCKET_NAME'])
  const Key = `${target}/${id}.json`
  logger(`removing object: ${Key}`)
  await s3.deleteObject({Bucket: EMAIL_BUCKET_NAME, Key}).promise()
  logger(`removed object: ${Key}`)
}

async function objectExists(objectKey: string, caching = false): Promise<boolean> {
  const {EMAIL_BUCKET_NAME} = await getParams(['EMAIL_BUCKET_NAME'])
  let objects = objectListCache.getCache()
  if (!caching || !objects) objects = await s3.listObjects({Bucket: EMAIL_BUCKET_NAME}).promise()
  if (caching && objectListCache.getCache()!==objects) objectListCache.setCache(objects)
  return !!objects.Contents && !!objects.Contents.find(obj => obj.Key===objectKey)
}

async function ensureObjectExists(objectKey: string, body: Record<string, any>, storageClass: StorageClass = 'STANDARD_IA'): Promise<void> {
  const {EMAIL_BUCKET_NAME} = await getParams(['EMAIL_BUCKET_NAME'])
  logger(`Ensuring object "${objectKey}" exists`)
  if (!(await objectExists(objectKey, true))) {
    await s3.putObject({Bucket: EMAIL_BUCKET_NAME, Key: objectKey, Body: JSON.stringify(body), StorageClass: storageClass}).promise()
  }
  logger(`Object "${objectKey}" exists`)
}

export async function ensureUserExists(userId: string): Promise<void> {
  const metaFileNames = ['sent', 'inbox', 'archive']
  const promises = []
  for (const filename of metaFileNames) {
    promises.push(ensureObjectExists(`${userId}/${filename}.json`, {}, 'STANDARD'))
  }
  await Promise.all(promises)
}


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
