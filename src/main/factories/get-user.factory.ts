import { GetUserController } from '../../presentation/controllers/get-user-controller'
import { GetUserService } from '../../application/services/get-user-service'
import { GetUserFromStarwars } from '../../application/usecases/get-user-from-starwars'
import { HttpAdapter } from '../../infra/adapters/http-adapter'

const BASE_URL = 'https://swapi.dev/api'

export const makeGetUserController = () => {
  const httpAdapter = new HttpAdapter(BASE_URL)
  const getUserFromStarwars = new GetUserFromStarwars(httpAdapter)
  const service = new GetUserService(getUserFromStarwars)
  return new GetUserController(service)
}
