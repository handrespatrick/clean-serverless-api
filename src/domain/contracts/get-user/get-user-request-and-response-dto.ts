export interface IGetUserRequestDto {
  name: string;
}

export interface IGetUserResponseDto {
  data?: IUserFromStarwarsDto;
  notFound?: boolean;
}

export interface IGetUserFromStarwarsResponseDto {
  count: number;
  next: string;
  previous: any;
  results: Array<IUserFromStarwarsDto>;
}

interface IUserFromStarwarsDto {
  name: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  films?: Array<string>;
  species?: [];
  vehicles?: Array<string>;
  starships?: Array<string>;
  created?: string;
  edited?: string;
  url?: string;
}
