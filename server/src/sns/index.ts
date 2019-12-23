import * as AWS from 'aws-sdk'
import {getParams} from '@byu-oit/env-ssm'
import {Event} from '../types'

const sns = new AWS.SNS({region: 'us-west-2', apiVersion: '2010-03-31'})

export async function publish(event: Event): Promise<void> {
  const {BUS_TOPIC_ARN} = await getParams(['BUS_TOPIC_ARN'], {prefix: 'HANDEL_PARAMETER_STORE_PREFIX'})
  await sns.publish({Message: JSON.stringify(event), TopicArn: BUS_TOPIC_ARN}).promise()
}
