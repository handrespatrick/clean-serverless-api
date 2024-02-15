import { IUserInfo } from '@/domain/usecases/user-info'
import { notFound, ok, serverError } from '@/presentation/helpers/http-helper'
import { IUserInfoController } from '@/presentation/protocols/controller'
import { GatewayEvent } from '@/presentation/protocols/gateway'
import { HttpResponse } from '@/presentation/protocols/http'

export class UserInfoController implements IUserInfoController {
  constructor(private readonly _useCase: IUserInfo) {}

  async handle({ pathParameters: { name } }: GatewayEvent): Promise<HttpResponse> {
    try {
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
