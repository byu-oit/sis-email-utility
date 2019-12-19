import { Request, Response, NextFunction} from 'express'
import {DecodedByuJwt} from '../../../byu-jwt-nodejs'
import {generateMetadataResponseObj, HttpStatus} from '../util/uapi'
import debug from 'debug'
const logger = debug('email-utility:authorization')

type MiddlewareFunction = (req: Request & { verifiedJWTs?: DecodedByuJwt}, res: Response, next: NextFunction) => any

async function authorize(req: Request & { verifiedJWTs?: DecodedByuJwt}, res: Response): Promise<boolean> {
  return !!req.verifiedJWTs
}

export function middleware (): MiddlewareFunction {
  return async (req, res, next): Promise<any> => {
    const authorized = await authorize(req, res)
    if (!authorized) return res.status(HttpStatus.UNAUTHORIZED).send(generateMetadataResponseObj(HttpStatus.UNAUTHORIZED))
    next()
  }
}
