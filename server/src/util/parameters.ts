import * as AWS from 'aws-sdk'
import {SSM} from 'aws-sdk'
import debug from 'debug'

const logger = debug('email-utility:parameters')

type ParametersFound = Record<string, string>
type ParametersMissing = string []
type GetParamsResult = { found: ParametersFound; missing: ParametersMissing }

export let params: ParametersFound

const expectedParams = [
  'EMAIL_BUCKET_NAME',
  'CLIENT_KEY',
  'CLIENT_SECRET'
]

export const ssm = {
  getParameters: (ssmParams: SSM.Types.GetParametersRequest): Promise<SSM.Types.GetParametersResult> => {
    const ssm = new AWS.SSM({ apiVersion: '2014-11-06', region: 'us-west-2' })
    return ssm.getParameters(ssmParams).promise()
  }
}

// Exported for test purposes
export function getParamsFromEnv (paramsToGet: string[]): GetParamsResult {
  const found: ParametersFound = {}
  const missing: string[] = []

  const existingEnvVars = Object.keys(process.env)
  paramsToGet.forEach(paramName => {
    if (existingEnvVars.includes(paramName)) {
      Object.defineProperty(found, paramName, {
        value: process.env[paramName],
        writable: false
      })
    } else {
      missing.push(paramName)
    }
  })
  if (missing.length === 0) {
    logger('Set parameters entirely from environment variables')
  } else if (Object.keys(found).length > 0) {
    logger('Got some (but not all) parameters from environment variables')
  }
  return { found, missing }
}

// Exported for test purposes
export async function getParamsFromSSM (paramsToGet: string[]): Promise<GetParamsResult> {
  logger('Trying to get parameters from AWS SSM (EC2 Parameter Store)')

  if (!process.env.HANDEL_PARAMETER_STORE_PREFIX) {
    throw new Error('Environment variable HANDEL_PARAMETER_STORE_PREFIX not set')
  }

  const found: ParametersFound = {}
  let missing: ParametersMissing = []

  const ssmResponse = await ssm.getParameters({
    WithDecryption: true,
    Names: paramsToGet.map(name => `${process.env.HANDEL_PARAMETER_STORE_PREFIX}.${name}`)
  })

  const prefixLength = process.env.HANDEL_PARAMETER_STORE_PREFIX.length + 1 // +1 to account for extra '.'
  if (ssmResponse.Parameters) {
    ssmResponse.Parameters.forEach(({ Name, Value }) => {
      if (Name && Value) {
        const key = Name.substring(prefixLength) // Anything after 'byuapi-students-v2.dev.' (or whatever the prefix is)
        found[key] = Value
      }
    })
  }
  if (ssmResponse.InvalidParameters) {
    missing = ssmResponse.InvalidParameters.map(param => param.substring(prefixLength))
  }

  return { found, missing }
}

export async function getParams (): Promise<ParametersFound> {
  if (params) {
    return params
  }

  const env = getParamsFromEnv(expectedParams)
  if (env.missing.length === 0) {
    params = env.found
    return params
  }

  const ssm = await getParamsFromSSM(env.missing)
  if (ssm.missing.length > 0) {
    logger(`Unable to retrieve all parameters - Missing: ${JSON.stringify(ssm.missing)}`)
    throw new Error('Unable to retrieve all parameters')
  }

  logger('Successfully retrieved all parameters')
  params = Object.assign(env.found, ssm.found)
  return params
}
