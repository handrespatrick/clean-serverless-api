import { IGetUserService } from '../../../domain/contracts/get-user/service'
import { GetUserFromStarwars } from '../../../domain/usecases/get-user-from-starwars'

export class GetUserService implements IGetUserService {
  constructor(private readonly _getUserFromStarWars: GetUserFromStarwars) {}

  async handle(name: string): Promise<any> {
    return this._getUserFromStarWars.handle(name)
  }
}
