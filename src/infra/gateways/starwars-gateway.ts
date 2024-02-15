import { UsersFromStarwarsResponse, UserFromStarwars } from '@/application/models/users-from-starwars-response'
import { IHttpAdapter } from '@/application/protocols/http-adapter'
import { IStarwarsGateway } from '@/application/protocols/starwars-gateway'

export class StarwarsGateway implements IStarwarsGateway {
  constructor(private readonly _httpAdapter: IHttpAdapter) {}

  async getAllUsers(): Promise<UserFromStarwars[]> {
    let response = await this._httpAdapter.get<UsersFromStarwarsResponse>('/people')
    const users = response.results
    while (response.next) {
      const parsedNextUrl = new URL(response.next).search
      response = await this._httpAdapter.get(`/people/${parsedNextUrl}`)
      users.push(...response.results)
    }
    return users
  }
}
