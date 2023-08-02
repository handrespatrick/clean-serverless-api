import { notFound, ok, serverError } from "../../helpers/http-helpers";
import { IGetUserController } from "../../../domain/contracts/get-user/controller";
import { GetUserRequestDto } from "../../../domain/contracts/get-user/get-user-request-and-response-dto";
import { HttpResponse } from "../../../domain/contracts/helpers/http-response";
import { GetUserService } from "./service";

export class GetUserController implements IGetUserController {
  constructor(private readonly _service: GetUserService) {}
  async handle({ name }: GetUserRequestDto): Promise<HttpResponse> {
    try {
      const result = await this._service.handle(name);

      if (result.notFound) {
        return notFound(name);
      }
      return ok(result);
    } catch (error) {
      return serverError(error);
    }
  }
}
