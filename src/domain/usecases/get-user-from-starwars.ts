import { UserFromStarwarsDto } from '@/domain/entities/users-from-starwars'

export interface IGetUserFromStarwars {
  handle(name: IGetUserFromStarwars.Params): Promise<IGetUserFromStarwars.Result>
}

export namespace IGetUserFromStarwars {
  export type Params = string
  export type Result = UserFromStarwarsDto | null
}
