import { IHttpAdapter } from '@/application/protocols'
import { HttpAdapter } from '@/infra/adapters'

export const makeHttpAdapter = (url: string): IHttpAdapter => {
  return new HttpAdapter(url)
}
