import AWS from 'aws-sdk'
import Cache from '../util/cache'
import {GetObjectOutput, ListBucketsOutput, ListObjectsOutput, StorageClass} from 'aws-sdk/clients/s3'
import debug from 'debug'
const logger = debug('email-utility:s3')

const s3 = new AWS.S3({apiVersion: '2006-03-01', region: 'us-west-2'})

const bucketListCache = Cache<ListBucketsOutput>()
const objectListCache = Cache<ListObjectsOutput>()

export const Bucket = 'email-utility'
const NoReplyUserName = 'no-reply'

export async function retrieveObject(target: string, id: string): Promise<GetObjectOutput> {
  const Key = `${target}/${id}.json`
  logger(`retrieving object: ${Key}`)
  const obj = await s3.getObject({Bucket, Key}).promise()
  logger(`retrieved object: ${Key}`)
  return obj
}

export async function storeObject(target: string, id: string, body: Record<string, any>, storageClass: StorageClass = 'STANDARD_IA'): Promise<void> {
  const Key = `${target}/${id}.json`
  const Body = JSON.stringify(body)
  const StorageClass = storageClass
  logger(`storing object: ${Key}`)
  await s3.putObject({Bucket, Key, Body, StorageClass}).promise()
  logger(`stored object: ${Key}`)
}

export async function removeObject(target: string, id: string): Promise<void> {
  const Key = `${target}/${id}.json`
  logger(`removing object: ${Key}`)
  await s3.deleteObject({Bucket, Key}).promise()
  logger(`removed object: ${Key}`)
}

async function bucketExists(caching = false): Promise<boolean> {
  let buckets = bucketListCache.getCache()
  if (!caching || !buckets) buckets = await s3.listBuckets().promise()
  if (caching && bucketListCache.getCache()!==buckets) bucketListCache.setCache(buckets)
  return !!buckets.Buckets && !!buckets.Buckets.find(bucket => bucket.Name===Bucket)
}

async function createBucket(): Promise<void> {
  logger(`Creating bucket "${Bucket}"`)
  await s3.createBucket({Bucket}).promise()
  logger(`Created bucket "${Bucket}"`)
}

async function ensureBucketExists(): Promise<void> {
  logger(`Ensuring bucket "${Bucket}" exists`)
  if (!(await bucketExists(true))) {
    await createBucket()
  }
  logger(`Bucket "${Bucket}" exists`)
}

async function objectExists(objectKey: string, caching = false): Promise<boolean> {
  let objects = objectListCache.getCache()
  if (!caching || !objects) objects = await s3.listObjects({Bucket}).promise()
  if (caching && objectListCache.getCache()!==objects) objectListCache.setCache(objects)
  return !!objects.Contents && !!objects.Contents.find(obj => obj.Key===objectKey)
}

async function ensureObjectExists(objectKey: string, body: Record<string, any>, storageClass: StorageClass = 'STANDARD_IA'): Promise<void> {
  logger(`Ensuring object "${objectKey}" exists`)
  if (!(await objectExists(objectKey, true))) {
    await s3.putObject({Bucket, Key: objectKey, Body: JSON.stringify(body), StorageClass: storageClass}).promise()
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

export async function ensureS3ResourcesExist(): Promise<void> {
  logger('Ensuring S3 resources exist')
  await ensureBucketExists()
  await ensureUserExists(NoReplyUserName)
  logger('S3 resources exist')
}
