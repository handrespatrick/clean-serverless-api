import { NotFound, ServerError } from '../errors'
import { HttpResponse } from '../protocols/http'

export const ok = (value: any): HttpResponse => ({
  statusCode: 200,
  body: value
})

export const notFound = (value: string): HttpResponse => ({
  statusCode: 404,
  body: new NotFound(value).message
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error).message
})
