import { Request, Response, NextFunction} from 'express'
import debug from 'debug'
import {HTTPError} from '../util'
const log = debug('authorization:middleware')

type MiddlewareFunction = (req: Request, res: Response, next: NextFunction) => void

function authorized(): boolean {
  log('Implement authorization middleware!')
  return true
}

export function middleware (): MiddlewareFunction {
  return (req: Request, res: Response, next: NextFunction): void => {
    if (!authorized()) throw new HTTPError(403, 'User not authorized')
    next()
  }
}
