import { HttpResponse } from '@/presentation/models'

export const ok = (value: any): HttpResponse => ({
  title: 'ok',
  statusCode: 200,
  body: value
})

export const notFound = (error: Error): HttpResponse => ({
  title: 'Not Found',
  statusCode: 404,
  body: error.message
})

export const requiredField = (value: string): HttpResponse => ({
  title: 'Bad Request',
  statusCode: 400,
  body: `${value} is required`
})

export const serverError = (error: Error): HttpResponse => ({
  title: 'Internal Server Error',
  statusCode: 500,
  body: error.message
})
