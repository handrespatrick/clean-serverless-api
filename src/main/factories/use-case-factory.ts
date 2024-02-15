import { GetUserFromStarwars } from '@/application/services/get-user-from-starwars'
import { IGetUserFromStarwars } from '@/domain/usecases/get-user-from-starwars'
import { makeHttpAdapter } from '@/main/factories/http-factory'

export const makeUseCase = (): IGetUserFromStarwars => {
  const httpAdapter = makeHttpAdapter()
  return new GetUserFromStarwars(httpAdapter)
}
