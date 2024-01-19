import { NotFound } from '../../../src/application/errors/not-found'

describe('NotFound', () => {
  it('should create an instance of NotFound with the correct error message', () => {
    const name = 'John'
    const notFoundError = new NotFound(name)

    expect(notFoundError).toBeInstanceOf(Error)
    expect(notFoundError.message).toBe(`The name '${name}' was not found`)
  })
})
