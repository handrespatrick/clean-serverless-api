import { IStarwarsGateway } from '@/application/protocols'
import { NotFoundError } from '@/domain/exceptions'
import { IGetUserByName } from '@/domain/protocols'

export class GetUserByNameUsecase implements IGetUserByName {
  constructor(private readonly _starwarsGateway: IStarwarsGateway) {}

  async handle(name: string): Promise<IGetUserByName.Result> {
    const users = await this._starwarsGateway.getAllUsers()
    const user = users.find((person) => person.name === name)
    if (!user) {
      throw new NotFoundError(`User ${name} not found`)
    }
    return user
  }
}
