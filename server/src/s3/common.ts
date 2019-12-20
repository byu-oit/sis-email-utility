import AWS from 'aws-sdk'
import Cache from '../util/cache'
import {GetObjectOutput, ListBucketsOutput, ListObjectsOutput, StorageClass} from 'aws-sdk/clients/s3'
import debug from 'debug'
import {getParams} from '../util/parameters'
const logger = debug('email-utility:s3')

const s3 = new AWS.S3({apiVersion: '2006-03-01', region: 'us-west-2'})

const bucketListCache = Cache<ListBucketsOutput>()
const objectListCache = Cache<ListObjectsOutput>()

async function bucketExists(bucketName: string, caching = false): Promise<boolean> {
  let buckets = bucketListCache.getCache()
  if (!caching || !buckets) buckets = await s3.listBuckets().promise()
  if (caching && bucketListCache.getCache()!==buckets) bucketListCache.setCache(buckets)
  return !!buckets.Buckets && !!buckets.Buckets.find(bucket => bucket.Name===bucketName)
}

async function createBucket(bucketName: string): Promise<void> {
  logger(`Creating bucket "${bucketName}"`)
  await s3.createBucket({Bucket: bucketName}).promise()
  logger(`Created bucket "${bucketName}"`)
}

async function ensureBucketExists(bucketName: string): Promise<void> {
  logger(`Ensuring bucket "${bucketName}" exists`)
  if (!(await bucketExists(bucketName, true))) {
    await createBucket(bucketName)
  }
  logger(`Bucket "${bucketName}" exists`)
}

export async function ensureS3ResourcesExist(): Promise<void> {
  logger('Ensuring S3 resources exist')
  const {EMAIL_BUCKET_NAME} = await getParams()
  await ensureBucketExists(EMAIL_BUCKET_NAME)
  logger('S3 resources exist')
}

export async function retrieveObject(target: string, id: string): Promise<GetObjectOutput> {
  const {EMAIL_BUCKET_NAME} = await getParams()
  const Key = `${target}/${id}.json`
  logger(`retrieving object: ${Key}`)
  const obj = await s3.getObject({Bucket: EMAIL_BUCKET_NAME, Key}).promise()
  logger(`retrieved object: ${Key}`)
  return obj
}

export async function storeObject(target: string, id: string, body: Record<string, any>, storageClass: StorageClass = 'STANDARD_IA'): Promise<void> {
  const {EMAIL_BUCKET_NAME} = await getParams()
  const Key = `${target}/${id}.json`
  const Body = JSON.stringify(body)
  const StorageClass = storageClass
  logger(`storing object: ${Key}`)
  await s3.putObject({Bucket: EMAIL_BUCKET_NAME, Key, Body, StorageClass}).promise()
  logger(`stored object: ${Key}`)
}

export async function removeObject(target: string, id: string): Promise<void> {
  const {EMAIL_BUCKET_NAME} = await getParams()
  const Key = `${target}/${id}.json`
  logger(`removing object: ${Key}`)
  await s3.deleteObject({Bucket: EMAIL_BUCKET_NAME, Key}).promise()
  logger(`removed object: ${Key}`)
}

async function objectExists(objectKey: string, caching = false): Promise<boolean> {
  const {EMAIL_BUCKET_NAME} = await getParams()
  let objects = objectListCache.getCache()
  if (!caching || !objects) objects = await s3.listObjects({Bucket: EMAIL_BUCKET_NAME}).promise()
  if (caching && objectListCache.getCache()!==objects) objectListCache.setCache(objects)
  return !!objects.Contents && !!objects.Contents.find(obj => obj.Key===objectKey)
}

async function ensureObjectExists(objectKey: string, body: Record<string, any>, storageClass: StorageClass = 'STANDARD_IA'): Promise<void> {
  const {EMAIL_BUCKET_NAME} = await getParams()
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
