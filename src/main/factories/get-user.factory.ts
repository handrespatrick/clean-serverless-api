import { GetUserController } from '../../application/controllers/get-user/controller'
import { GetUserService } from '../../application/controllers/get-user/service'
import { GetUserFromStarwars } from '../../domain/usecases/get-user-from-starwars'
import { HttpAdapter } from '../../infra/adapters/http-adapter'

export const makeGetUserController = () => {
  const baseUrl = 'https://swapi.dev/api'
  const httpAdapter = new HttpAdapter(baseUrl)
  const getUserFromStarwars = new GetUserFromStarwars(httpAdapter)
  const service = new GetUserService(getUserFromStarwars)
  return new GetUserController(service)
}
