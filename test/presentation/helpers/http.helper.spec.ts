import { NotFoundError } from '@/domain/exceptions'
import { notFound, ok, requiredField, serverError } from '@/presentation/helpers'

describe('HELPER - http', () => {
  it('Should return an HTTP response with status 200 and the given value', () => {
    const value = 'Hello, World!'
    const response = ok(value)

    expect(response.title).toEqual('ok')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual(value)
  })

  it('Should return an HTTP response with status 404 and NotFound error message', () => {
    const error = new NotFoundError('Not Found Error')
    const response = notFound(error)

    expect(response.title).toEqual('Not Found')
    expect(response.statusCode).toBe(404)
    expect(response.body).toEqual(error.message)
  })

  it('Should return an HTTP response with status 500 and the error message ServerError', () => {
    const errorMessage = 'Internal Server Error'
    const error = new Error(errorMessage)
    const response = serverError(error)

    expect(response.title).toEqual('Internal Server Error')
    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual(error.message)
  })

  it('Should return an HTTP response with status 404 and RequiredField error message', () => {
    const value = 'RequiredField'
    const response = requiredField(value)

    expect(response.title).toEqual('Bad Request')
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual('RequiredField is required')
  })
})
