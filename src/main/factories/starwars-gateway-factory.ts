import { IStarwarsGateway } from '@/application/protocols/starwars-gateway'
import { StarwarsGateway } from '@/infra/gateways/starwars-gateway'
import { makeHttpAdapter } from '@/main/factories/http-factory'

export const makeStarwarsGateway = (): IStarwarsGateway => {
  const http = makeHttpAdapter()
  return new StarwarsGateway(http)
}
