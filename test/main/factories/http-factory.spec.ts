import { HttpAdapter } from '@/infra/adapters/http-adapter'
import { makeHttpAdapter } from '@/main/factories/http-factory'

describe('makeHttpAdapter', () => {
  it('Must return a valid instance of HttpAdapter', () => {
    const httpAdapter = makeHttpAdapter()

    expect(httpAdapter).toBeInstanceOf(HttpAdapter)
  })
})
