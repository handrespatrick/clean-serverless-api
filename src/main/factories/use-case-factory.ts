import { UserInfoUseCase } from '@/application/services/user-info'
import { IUserInfo } from '@/domain/usecases/user-info'
import { makeStarwarsGateway } from '@/main/factories/starwars-gateway-factory'

export const makeUseCase = (): IUserInfo => {
  const starwarsGateway = makeStarwarsGateway()
  return new UserInfoUseCase(starwarsGateway)
}
