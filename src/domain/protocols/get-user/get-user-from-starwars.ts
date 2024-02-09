export interface IGetUserFromStarwars {
  handle(email: IGetUserFromStarwars.Input): Promise<IGetUserFromStarwars.Output>
}

export namespace IGetUserFromStarwars {
  export type Input = string
  export type Output = UserFromStarwarsDto | null
}

export type UserFromStarwarsDto = {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

export type GetUserFromStarwarsResponseDto = {
  count: number
  next: string
  previous: any
  results: Array<UserFromStarwarsDto>
}
