import { IHttpResponse } from '../protocols/http'
import { NotFound, ServerError } from '../errors'

export const ok = (value: any): IHttpResponse => ({
  statusCode: 200,
  body: value
})

export const notFound = (value: string): IHttpResponse => ({
  statusCode: 404,
  body: new NotFound(value).message
})

export const serverError = (error: Error): IHttpResponse => ({
  statusCode: 500,
  body: new ServerError(error).message
})
