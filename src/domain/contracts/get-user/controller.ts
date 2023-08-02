import { HttpResponse } from "../helpers/http-response";
import { IGetUserRequestDto } from "./get-user-request-and-response-dto";

export interface IGetUserController {
  handle(body: IGetUserRequestDto): Promise<HttpResponse>;
}
