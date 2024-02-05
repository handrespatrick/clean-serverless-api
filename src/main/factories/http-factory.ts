import { IHttpAdapter } from '@/application/protocols/http-adapter'
import { HttpAdapter } from '@/infra/adapters/http-adapter'

export const makeHttpAdapter = (): IHttpAdapter => {
  const BASE_URL = 'https://swapi.dev/api'
  return new HttpAdapter(BASE_URL)
}
