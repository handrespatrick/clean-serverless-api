import { UserInfoUseCase } from '@/application/usecases/user-info'
import { IUserInfo } from '@/domain/protocols/user-info'
import { makeStarwarsGateway } from '@/main/factories/starwars-gateway-factory'

export const makeUseCase = (): IUserInfo => {
  const starwarsGateway = makeStarwarsGateway()
  return new UserInfoUseCase(starwarsGateway)
}
