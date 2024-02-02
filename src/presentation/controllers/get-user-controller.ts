import { notFound, ok, serverError } from '../http/http'
import { IGetUserController } from '../../domain/protocols/get-user/controller'
import { GetUserRequestDto } from '../../domain/protocols/get-user/get-user-from-starwars'
import { IHttpResponse } from '../protocols/http'
import { GetUserService } from '../../application/services/get-user-service'

export class GetUserController implements IGetUserController {
  constructor(private readonly _service: GetUserService) {}

  async handle({ name }: GetUserRequestDto): Promise<IHttpResponse> {
    try {
      const result = await this._service.handle(name)

      if (result.notFound) {
        return notFound(name)
      }

      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
