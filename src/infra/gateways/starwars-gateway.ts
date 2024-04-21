import { IStarwarsGateway, IHttpAdapter, UserFromStarwars, UsersFromStarwarsResponse } from '@/application/protocols'

export class StarwarsGateway implements IStarwarsGateway {
  constructor(private readonly _httpAdapter: IHttpAdapter) {}

  async getAllUsers(): Promise<UserFromStarwars[]> {
    let response: UsersFromStarwarsResponse = await this._httpAdapter.get('/people')
    const users = response.results
    while (response.next) {
      const parsedNextUrl = new URL(response.next).search
      response = await this._httpAdapter.get(`/people/${parsedNextUrl}`)
      users.push(...response.results)
    }
    return users
  }
}
