import { IGetUserResponseDto } from "./get-user-request-and-response-dto";

export interface IGetUserFromStarwars {
  handle(email: string): Promise<IGetUserResponseDto>;
}
