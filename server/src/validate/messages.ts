/*eslint @typescript-eslint/camelcase: ["error", {allow: ["status_datetime", "status_by_id"]}]*/
import Express from 'express'
import uuid from 'uuid'
import get from 'lodash.get'
import {DecodedByuJwt} from 'byu-jwt'
import {persons} from '../types/persons'
import * as Model from '../types/messages/model'
import * as Request from '../types/messages/request'
import * as wso2 from '../util/wso2'

function isByuId (v: any): boolean {
  return typeof v === 'string' && /^[0-9]{9}$/.test(v)
}
function isNetId(v: any): boolean {
  return typeof v === 'string' && /^[a-z][a-z0-9]{0,8}$/.test(v)
}
function isPersonId(v: any): boolean {
  return typeof v === 'string' && /^[0-9]{3}2[0-9]{4}2$/.test(v)
}

async function resolveIds(ids: string[]): Promise<Model.PersonInfo[]> {
  let url = 'https://api.byu.edu/byuapi/persons/v3/?'
  const personIds = []
  const byuIds = []
  const netIds = []

  for (const id of ids) {
    if (isPersonId(id)) personIds.push(id)
    else if (isByuId(id)) byuIds.push(id)
    else if (isNetId(id)) netIds.push(id)
  }

  if (personIds.length) url += `person_ids=${personIds.join(',')}`
  if (byuIds.length) url += `byu_ids=${byuIds.join(',')}`
  if (netIds.length) url += `net_ids=${netIds.join(',')}`

  const request = await wso2.configure()
  const result = await request({url}) as persons
  if (!result.values) return []

  return result.values.map(value => {
    const netId = get(value, 'basic.net_id.value')
    return {
      firstName: get(value, 'basic.first_name.value'),
      surname: get(value, 'basic.surname.value'),
      byuId: get(value, 'basic.byu_id.value'),
      netId,
      personId: get(value, 'basic.person_id.value'),
      email: `${netId}@byu.edu`
    }
  })
}

export async function newMessage (req: Express.Request & { verifiedJWTs: DecodedByuJwt}): Promise<Model.Validation<Model.Message>> {
  const errors: string[] = []

  const claims = req.verifiedJWTs.claims
  const fromId = {
    firstName: claims.preferredFirstName,
    surname: claims.surname,
    byuId: claims.byuId,
    netId: claims.netId,
    personId: claims.personId,
    email: `${claims.netId}@byu.edu`
  }

  const message = req.body as Request.NewMessage
  if (!message.to && !message.cc && !message.bcc) {
    errors.push('Missing: (any of) to, cc, bcc.')
  }
  if (!message.body) {
    errors.push('Missing: body.')
  }
  if (!message.subject) {
    errors.push('Missing: subject.')
  }

  // Merge defaults with the request body
  const value: Model.Message = {
    id: uuid(),
    to: [],
    cc: [],
    bcc: [],
    from: fromId,
    subject: message.subject || '',
    body: message.body || '',
    status: 'sent',
    status_datetime: new Date().toISOString(),
    status_by_id: claims.byuId
  }

  if (!errors.length) {
    value.to = message.to ? await resolveIds(message.to) : []
    value.cc = message.cc ? await resolveIds(message.cc) : []
    value.bcc = message.bcc ? await resolveIds(message.bcc) : []
  }

  return {value, errors}
}
