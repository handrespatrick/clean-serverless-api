import { makeGetUserByNameUseCase } from '@/main/factories/usecases'
import { GetUserByNameController } from '@/presentation/controllers/get-user-by-name.controller'
import { IController } from '@/presentation/protocols'

export const makeGetUserByNameController = (): IController => {
  const useCase = makeGetUserByNameUseCase()
  return new GetUserByNameController(useCase)
}
