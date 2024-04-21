import { IUserInfo } from '@/domain/protocols/user-info'
import { notFound, ok, serverError } from '@/presentation/helpers'
import { IUserInfoController } from '@/presentation/protocols/controller'

export class UserInfoController implements IUserInfoController {
  constructor(private readonly _useCase: IUserInfo) {}

  async handle({ pathParameters: { name } }: IUserInfoController.Params): Promise<IUserInfoController.Result> {
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
