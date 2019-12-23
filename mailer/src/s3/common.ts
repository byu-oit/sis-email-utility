import AWS from 'aws-sdk'
import {GetObjectOutput, ListObjectsOutput, StorageClass} from 'aws-sdk/clients/s3'
import debug from 'debug'
import {getParams} from '@byu-oit/env-ssm'
import Cache from '../util/cache'
const logger = debug('email-utility:s3')

const s3 = new AWS.S3({apiVersion: '2006-03-01', region: 'us-west-2'})

const objectListCache = Cache<ListObjectsOutput>()

export async function retrieveObject(target: string, id: string): Promise<GetObjectOutput> {
  const {EMAIL_BUCKET_NAME} = await getParams(['EMAIL_BUCKET_NAME'], {prefix: 'HANDEL_PARAMETER_STORE_PREFIX'})
  const Key = `${target}/${id}.json`
  logger(`retrieving object: ${Key}`)
  const obj = await s3.getObject({Bucket: EMAIL_BUCKET_NAME, Key}).promise()
  logger(`retrieved object: ${Key}`)
  return obj
}

export async function storeObject(target: string, id: string, body: Record<string, any>, storageClass: StorageClass = 'STANDARD_IA'): Promise<void> {
  const {EMAIL_BUCKET_NAME} = await getParams(['EMAIL_BUCKET_NAME'], {prefix: 'HANDEL_PARAMETER_STORE_PREFIX'})
  const Key = `${target}/${id}.json`
  const Body = JSON.stringify(body)
  const StorageClass = storageClass
  logger(`storing object: ${Key}`)
  await s3.putObject({Bucket: EMAIL_BUCKET_NAME, Key, Body, StorageClass}).promise()
  logger(`stored object: ${Key}`)
}

export async function removeObject(target: string, id: string): Promise<void> {
  const {EMAIL_BUCKET_NAME} = await getParams(['EMAIL_BUCKET_NAME'], {prefix: 'HANDEL_PARAMETER_STORE_PREFIX'})
  const Key = `${target}/${id}.json`
  logger(`removing object: ${Key}`)
  await s3.deleteObject({Bucket: EMAIL_BUCKET_NAME, Key}).promise()
  logger(`removed object: ${Key}`)
}

async function objectExists(objectKey: string, caching = false): Promise<boolean> {
  const {EMAIL_BUCKET_NAME} = await getParams(['EMAIL_BUCKET_NAME'], {prefix: 'HANDEL_PARAMETER_STORE_PREFIX'})
  let objects = objectListCache.getCache()
  if (!caching || !objects) objects = await s3.listObjects({Bucket: EMAIL_BUCKET_NAME}).promise()
  if (caching && objectListCache.getCache()!==objects) objectListCache.setCache(objects)
  return !!objects.Contents && !!objects.Contents.find(obj => obj.Key===objectKey)
}

async function ensureObjectExists(objectKey: string, body: Record<string, any>, storageClass: StorageClass = 'STANDARD_IA'): Promise<void> {
  const {EMAIL_BUCKET_NAME} = await getParams(['EMAIL_BUCKET_NAME'], {prefix: 'HANDEL_PARAMETER_STORE_PREFIX'})
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
