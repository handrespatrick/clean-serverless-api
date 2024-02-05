import { GetUserFromStarwars } from '@/application/usecases/get-user-from-starwars'
import { IGetUserFromStarwars } from '@/domain/protocols/get-user/get-user-from-starwars'

import { makeHttpAdapter } from './http-factory'

export const makeUseCase = (): IGetUserFromStarwars => {
  const httpAdapter = makeHttpAdapter()
  return new GetUserFromStarwars(httpAdapter)
}
