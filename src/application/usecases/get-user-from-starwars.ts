import {
  IGetUserFromStarwars,
  GetUserResponseDto,
  GetUserFromStarwarsResponseDto
} from '@/domain/protocols/get-user/get-user-from-starwars'

import { IHttpAdapter } from '../protocols/http-adapter'

export class GetUserFromStarwars implements IGetUserFromStarwars {
  constructor(private readonly _httpAdapter: IHttpAdapter) {}

  async handle(name: string): Promise<GetUserResponseDto> {
    let response: GetUserFromStarwarsResponseDto = await this._httpAdapter.get('/people')

    while (response.next) {
      const userInfo = response.results.find((p) => p.name == name)

      if (userInfo) {
        return { data: userInfo }
      }

      const parsedNextUrl = new URL(response.next).search
      response = await this._httpAdapter.get(`/${parsedNextUrl}`)
    }

    return { notFound: true }
  }
}
