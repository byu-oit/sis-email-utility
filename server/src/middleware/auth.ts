import {Request} from 'express'
import {DecodedByuJwt} from 'byu-jwt'
import {generateMetadataResponseObj, HttpStatus} from '../util/uapi'
import {MiddlewareFunction} from '../types'
import debug from 'debug'

const logger = debug('email-utility:authorization')

async function authorize(req: Request & { verifiedJWTs?: DecodedByuJwt }): Promise<boolean> {
  const verifiedJWTs = req.verifiedJWTs
  if (!verifiedJWTs) {
    logger('Not authorized')
    return false
  }
  logger(`Authorized ${verifiedJWTs.claims.preferredFirstName} ${verifiedJWTs.claims.surname} (${verifiedJWTs.claims.byuId})`)
  return true
}

export function middleware(): MiddlewareFunction {
  return async (req, res, next): Promise<any> => {
    logger('Processing authorization request')
    const authorized = await authorize(req)
    logger('Processed authorization request')
    if (!authorized) return res.status(HttpStatus.UNAUTHORIZED).send(generateMetadataResponseObj(HttpStatus.UNAUTHORIZED))
    next()
  }
}
