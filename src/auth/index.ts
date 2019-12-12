import { Request, Response, NextFunction} from 'express'
import {generateMetadataResponseObj, HttpStatus} from '../util/uapi'
import debug from 'debug'
const logger = debug('email-utility:authorization')

type MiddlewareFunction = (req: Request, res: Response, next: NextFunction) => any

async function authorize(): Promise<boolean> {
  logger('Implement authorization middleware!')
  return true
}

export function middleware (): MiddlewareFunction {
  return async (req, res, next): Promise<any> => {
    const authorized = await authorize()
    if (!authorized) return res.status(HttpStatus.UNAUTHORIZED).send(generateMetadataResponseObj(HttpStatus.UNAUTHORIZED))
    next()
  }
}
