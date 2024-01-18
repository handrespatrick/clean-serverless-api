import { HttpAdapter } from '../../infra/adapters/http-adapter'
import { IGetUserFromStarwars } from '../contracts/get-user/get-user-from-starwars'
import {
  GetUserResponseDto,
  GetUserFromStarwarsResponseDto
} from '../contracts/get-user/get-user-request-and-response-dto'

export class GetUserFromStarwars implements IGetUserFromStarwars {
  constructor(private readonly _httpAdapter: HttpAdapter) {}

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
