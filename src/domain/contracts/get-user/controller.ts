import { HttpResponse } from "../helpers/http-response";
import { GetUserRequestDto } from "./get-user-request-and-response-dto";

export interface IGetUserController {
  handle(body: GetUserRequestDto): Promise<HttpResponse>;
}
