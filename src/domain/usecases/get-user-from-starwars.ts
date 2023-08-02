import { IGetUserFromStarwars } from "../contracts/get-user/get-user-from-starwars";
import {
  IGetUserResponseDto,
  IGetUserFromStarwarsResponseDto,
} from "../contracts/get-user/get-user-request-and-response-dto";

export class GetUserFromStarwars implements IGetUserFromStarwars {
  constructor(private readonly _axios) {}

  async handle(name: string): Promise<IGetUserResponseDto> {
    const url = "https://swapi.dev/api/people";

    let response = await this._axios.get(url);
    let result: IGetUserFromStarwarsResponseDto = await response.data;

    while (result.next) {
      const userInfo = result.results.find((p) => p.name == name);
      if (userInfo) {
        console.log(userInfo);
        return { data: userInfo };
      }

      response = await this._axios.get(result.next);
      result = await response.data;
    }

    return { notFound: true };
  }
}
