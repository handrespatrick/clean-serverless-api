import { HttpAdapter } from '@/infra/adapters'
import { makeHttpAdapter } from '@/main/factories/infra/adapters'

describe('FACTORY - makeHttpAdapter', () => {
  it('Must return a valid instance of HttpAdapter', () => {
    const httpAdapter = makeHttpAdapter('any_url')
    expect(httpAdapter).toBeInstanceOf(HttpAdapter)
  })
})
