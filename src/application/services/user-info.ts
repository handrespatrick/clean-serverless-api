import { IStarwarsGateway } from '@/application/protocols/starwars-gateway'
import { IUserInfo } from '@/domain/usecases/user-info'

export class UserInfoUseCase implements IUserInfo {
  constructor(private readonly _starwarsGateway: IStarwarsGateway) {}

  async handle(name: IUserInfo.Params): Promise<IUserInfo.Result> {
    const users = await this._starwarsGateway.getAllUsers()
    const user = users.find((person) => person.name === name)
    if (!user) {
      return null
    }
    return user
  }
}
