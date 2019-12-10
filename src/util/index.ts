import {UAPI} from '@byu-oit/uapi-ts'
import {Request, Response} from 'express'

function getResponseForReturnCode(code: number) {
  if (code===200) return 'Success'
  if (code===201) return 'Created'
  if (code===204) return 'No Content'
  if (code===400) return 'Bad Request'
  if (code===401) return 'Unauthorized'
  if (code===403) return 'Forbidden'
  if (code===404) return 'Not Found'
  if (code===409) return 'Conflict'
  if (code===500) return 'Internal Server Error'
  return ''
}

export function generateValidationResponseObj(code: number, message?: string, validation: string[] = []): UAPI.SimpleMetadata {
  if (code===undefined) code = 200
  if ([200, 201, 204, 400, 401, 403, 404, 409, 500].indexOf(code)=== -1) code = 409
  if (message === undefined) message = getResponseForReturnCode(code)
  return {
    validation_response: {code, message},
    ...validation.length && {validation_information: validation}
  }
}

export function generateMetadataResponseObj(code: number, message?: string, validation: string[] = []): { metadata: UAPI.SimpleMetadata } {
  return {metadata: generateValidationResponseObj(code, message, validation)}
}

export function generateCollectionMetadataResponseObj(
  size: number,
  code: number,
  message?: string,
  validation: string[] = []
): UAPI.CollectionMetadata {
  return {
    collection_size: size,
    ...generateValidationResponseObj(code, message, validation)
  }
}

export class HTTPError extends Error {
  http: {
    code: number
    message: string
    validationInformation: string[]
  }

  constructor(code: number, message?: string, validationInformation: string[] = []) {
    super(`UAPI Error code ${code}: ${message}`)
    this.http = {
      code,
      message: message || getResponseForReturnCode(code),
      validationInformation
    }
  }
}

// Wrapper function for handling UAPI Errors in Express
export function handleHTTPErrors(req: Request, res: Response, fn: (req: Request, res: Response) => Promise<any>): Promise<any> {
  return fn(req, res)
    .catch(err => {
      if (!(err instanceof HTTPError)) {
        console.error(err.stack)
        return res.status(500).send(generateMetadataResponseObj(500))
      }
      const {http} = err
      return res.status(http.code).send(generateMetadataResponseObj(http.code, http.message, http.validationInformation))
    })
}
