import { StarwarsGateway } from '@/infra/gateways'
import { makeStarwarsGateway } from '@/main/factories/infra/gateways'

describe('FACTORY - makeStarwarsGateway', () => {
  it('Must return a valid instance of StarwarsGateway', () => {
    const starwarsGateway = makeStarwarsGateway()
    expect(starwarsGateway).toBeInstanceOf(StarwarsGateway)
  })
})
