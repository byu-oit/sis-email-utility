import { request, setOauthSettings } from 'byu-wso2-request'
import {RequestPromiseOptions} from 'request-promise'
import {getParams} from './parameters'

type WSO2Request = (settings: RequestPromiseOptions, originalJWT?: string) => Promise<any>

let client: WSO2Request

export async function configure(): Promise<any> {
  if (!client) {
    const params = await getParams()
    await setOauthSettings(params.CLIENT_KEY, params.CLIENT_SECRET)
    client = request
  }
  return client
}
