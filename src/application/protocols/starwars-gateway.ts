import { UserFromStarwars } from '@/application/models/users-from-starwars-response'

export interface IStarwarsGateway {
  getAllUsers(): Promise<UserFromStarwars[]>
}
