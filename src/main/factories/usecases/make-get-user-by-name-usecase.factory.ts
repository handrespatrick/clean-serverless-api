import { GetUserByNameUsecase } from '@/application/usecases'
import { IGetUserByName } from '@/domain/protocols'
import { makeStarwarsGateway } from '@/main/factories/infra/gateways'

export const makeGetUserByNameUseCase = (): IGetUserByName => {
  const starwarsGateway = makeStarwarsGateway()
  return new GetUserByNameUsecase(starwarsGateway)
}
