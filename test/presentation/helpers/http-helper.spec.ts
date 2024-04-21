import { ServerError, NotFound, RequiredField } from '@/presentation/errors'
import { notFound, ok, requiredField, serverError } from '@/presentation/helpers'

describe('http-helpers', () => {
  it('Should return an HTTP response with status 200 and the given value', () => {
    const value = 'Hello, World!'
    const response = ok(value)

    expect(response.statusCode).toBe(200)
    expect(response.body).toBe(value)
  })

  it('Should return an HTTP response with status 404 and NotFound error message', () => {
    const value = 'UserNotFound'
    const response = notFound(value)

    expect(response.statusCode).toBe(404)
    expect(response.body).toBe(new NotFound(value).message)
  })

  it('Should return an HTTP response with status 500 and the error message ServerError', () => {
    const errorMessage = 'Test Error'
    const error = new Error(errorMessage)
    const response = serverError(error)

    expect(response.statusCode).toBe(500)
    expect(response.body).toBe(new ServerError(error).message)
  })

  it('Should return an HTTP response with status 404 and RequiredField error message', () => {
    const value = 'RequiredField'
    const response = requiredField(value)

    expect(response.statusCode).toBe(404)
    expect(response.body).toBe(new RequiredField(value).message)
  })
})
