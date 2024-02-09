import {
  IGetUserFromStarwars,
  GetUserFromStarwarsResponseDto
} from '@/domain/protocols/get-user/get-user-from-starwars'

import { IHttpAdapter } from '../protocols/http-adapter'

export class GetUserFromStarwars implements IGetUserFromStarwars {
  constructor(private readonly _httpAdapter: IHttpAdapter) {}

  async handle(name: IGetUserFromStarwars.Input): Promise<IGetUserFromStarwars.Output> {
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
