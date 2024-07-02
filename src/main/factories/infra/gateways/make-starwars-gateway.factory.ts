import { IStarwarsGateway } from '@/application/protocols'
import { StarwarsGateway } from '@/infra/gateways'
import { Environment } from '@/main/config/env'
import { makeHttpAdapter } from '@/main/factories/infra/adapters'

export const makeStarwarsGateway = (): IStarwarsGateway => {
  const environment = new Environment()
  const http = makeHttpAdapter(environment.starwarsUrl)
  return new StarwarsGateway(http)
}
