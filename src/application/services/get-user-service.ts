import { GetUserResponseDto } from '../../domain/protocols/get-user/get-user-from-starwars'
import { IGetUserService } from '../../domain/protocols/get-user/service'
import { GetUserFromStarwars } from '../usecases/get-user-from-starwars'

export class GetUserService implements IGetUserService {
  constructor(private readonly _getUserFromStarWars: GetUserFromStarwars) {}

  async handle(name: string): Promise<GetUserResponseDto> {
    return this._getUserFromStarWars.handle(name)
  }
}
