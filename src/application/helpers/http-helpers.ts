import { HttpResponse } from '../../domain/contracts/helpers/http-response'
import { NotFound } from '../errors/not-found'
import { ServerError } from '../errors/server-error'

export const ok = (value: string): HttpResponse => ({
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
