import { makeUseCase } from '@/main/factories/use-case-factory'
import { UserInfoController } from '@/presentation/controllers/user-info-controller'
import { IUserInfoController } from '@/presentation/protocols/controller'

export const makeController = (): IUserInfoController => {
  const useCase = makeUseCase()
  return new UserInfoController(useCase)
}
