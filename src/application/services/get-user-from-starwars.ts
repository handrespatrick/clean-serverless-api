import { GetUserFromStarwarsResponseDto } from '@/application/models/users-from-starwars-response'
import { IHttpAdapter } from '@/application/protocols/http-adapter'
import { IGetUserFromStarwars } from '@/domain/usecases/get-user-from-starwars'

export class GetUserFromStarwars implements IGetUserFromStarwars {
  constructor(private readonly _httpAdapter: IHttpAdapter) {}

  async handle(name: IGetUserFromStarwars.Params): Promise<IGetUserFromStarwars.Result> {
    let response: GetUserFromStarwarsResponseDto = await this._httpAdapter.get('/people')

    while (response.next) {
      const userInfo = response.results.find((person) => person.name === name)

      if (userInfo) {
        return userInfo
      }

      const parsedNextUrl = new URL(response.next).search
      response = await this._httpAdapter.get(`/${parsedNextUrl}`)
    }

    return null
  }
}
