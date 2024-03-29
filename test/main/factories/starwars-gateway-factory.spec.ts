import { StarwarsGateway } from '@/infra/gateways/starwars-gateway'
import { makeStarwarsGateway } from '@/main/factories/starwars-gateway-factory'

describe('makeStarwarsGateway', () => {
  test('Must return a valid instance of StarwarsGateway', () => {
    const starwarsGateway = makeStarwarsGateway()

    expect(starwarsGateway).toBeInstanceOf(StarwarsGateway)
  })
})
