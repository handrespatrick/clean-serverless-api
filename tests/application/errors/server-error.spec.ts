import { ServerError } from '../../../src/application/errors/server-error'

describe('ServerError', () => {
  it('should create an instance of ServerError with the correct error message', () => {
    const originalError = new Error('Some internal error')
    const serverError = new ServerError(originalError)

    expect(serverError).toBeInstanceOf(Error)
    expect(serverError.message).toBe('Internal server error')
  })
})
