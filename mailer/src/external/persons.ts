import get from 'lodash.get'
import {persons} from '../types/persons'
import * as Model from '../types/model'
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

export async function resolveIds(...ids: string[]): Promise<Model.PersonInfo[]> {
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
