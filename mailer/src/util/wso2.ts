import {request, setOauthSettings} from 'byu-wso2-request'
import {RequestPromiseOptions} from 'request-promise'
import {getParams} from '@byu-oit/env-ssm'

type WSO2Request = (settings: RequestPromiseOptions, originalJWT?: string) => Promise<any>

let client: WSO2Request

export async function configure(): Promise<any> {
  if (!client) {
    const params = await getParams(['CLIENT_KEY', 'CLIENT_SECRET'], {prefix: 'HANDEL_PARAMETER_STORE_PREFIX'})
    await setOauthSettings(params.CLIENT_KEY, params.CLIENT_SECRET)
    client = request
  }
  return client
}
