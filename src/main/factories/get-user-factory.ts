import { IGetUserController } from '@/presentation/protocols/controller'
import { GetUserController } from '@/presentation/controllers/get-user-controller'

import { makeUseCase } from './use-case-factory'

export const makeGetUser = (): IGetUserController => {
  const useCase = makeUseCase()
  return new GetUserController(useCase)
}
