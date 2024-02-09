import { IGetUserFromStarwars } from '@/domain/protocols/get-user/get-user-from-starwars'
import { IGetUserController } from '@/presentation/protocols/controller'

import { parseRequestBody } from '../helpers/common-helper'
import { notFound, ok, serverError } from '../helpers/http-helper'
import { GatewayEvent } from '../protocols/gateway'
import { HttpResponse } from '../protocols/http'

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
