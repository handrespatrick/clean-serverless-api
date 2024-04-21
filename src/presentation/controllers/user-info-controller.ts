import { IUserInfo } from '@/domain/protocols/user-info'
import { notFound, ok, requiredField, serverError } from '@/presentation/helpers'
import { IUserInfoController } from '@/presentation/protocols/controller'

export class UserInfoController implements IUserInfoController {
  constructor(private readonly _useCase: IUserInfo) {}

  async handle(event: IUserInfoController.Params): Promise<IUserInfoController.Result> {
    try {
      if (!event.queryStringParameters.name) {
        return requiredField('name')
      }

      const name = event.queryStringParameters.name
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
