import { makeUseCase } from '@/main/factories/use-case-factory'
import { GetUserController } from '@/presentation/controllers/get-user-controller'
import { IGetUserController } from '@/presentation/protocols/controller'

export const makeGetUser = (): IGetUserController => {
  const useCase = makeUseCase()
  return new GetUserController(useCase)
}
