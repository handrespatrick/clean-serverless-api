export type GetUserRequestDto = {
  name: string;
};

export type GetUserResponseDto = {
  data?: UserFromStarwarsDto;
  notFound?: boolean;
};

export type GetUserFromStarwarsResponseDto = {
  count: number;
  next: string;
  previous: any;
  results: Array<UserFromStarwarsDto>;
};

type UserFromStarwarsDto = {
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
};
