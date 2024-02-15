import { IGetUserFromStarwars } from '@/domain/usecases/get-user-from-starwars'
import { parseRequestBody } from '@/presentation/helpers/common-helper'
import { notFound, ok, serverError } from '@/presentation/helpers/http-helper'
import { IGetUserController } from '@/presentation/protocols/controller'
import { GatewayEvent } from '@/presentation/protocols/gateway'
import { HttpResponse } from '@/presentation/protocols/http'

export class GetUserController implements IGetUserController {
  constructor(private readonly _useCase: IGetUserFromStarwars) {}

  async handle({ body }: GatewayEvent): Promise<HttpResponse> {
    try {
      const { name } = parseRequestBody(body)
      const result = await this._useCase.handle(name)

      if (!result) {
        return notFound(name)
      }

      return ok(result)
    } catch (error) {
      return serverError(error)
    }
  }
}
