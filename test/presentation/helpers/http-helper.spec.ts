import { ServerError, NotFound } from '@/presentation/errors'
import { notFound, ok, serverError } from '@/presentation/helpers/http-helper'

describe('http-helpers', () => {
  test('Should return an HTTP response with status 200 and the given value', () => {
    const value = 'Hello, World!'
    const response = ok(value)

    expect(response.statusCode).toBe(200)
    expect(response.body).toBe(value)
  })

  test('Should return an HTTP response with status 404 and NotFound error message', () => {
    const value = 'UserNotFound'
    const response = notFound(value)

    expect(response.statusCode).toBe(404)
    expect(response.body).toBe(new NotFound(value).message)
  })

  test('Should return an HTTP response with status 500 and the error message ServerError', () => {
    const errorMessage = 'Test Error'
    const error = new Error(errorMessage)
    const response = serverError(error)

    expect(response.statusCode).toBe(500)
    expect(response.body).toBe(new ServerError(error).message)
  })
})
