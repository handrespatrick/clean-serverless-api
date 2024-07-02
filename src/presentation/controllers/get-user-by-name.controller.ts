import { IGetUserByName } from '@/domain/protocols'
import { notFound, ok, requiredField, serverError } from '@/presentation/helpers'
import { IController } from '@/presentation/protocols'

export class GetUserByNameController implements IController {
  constructor(private readonly _getUserByNameUsecase: IGetUserByName) {}

  async handle(event: IController.Params): Promise<IController.Result> {
    try {
      if (!event.queryStringParameters?.name) {
        return requiredField('name')
      }
      const name = event.queryStringParameters.name
      const result = await this._getUserByNameUsecase.handle(name)
      return ok(result)
    } catch (error) {
      return this.handleError(error)
    }
  }

  private handleError(error: Error): IController.Result {
    if (error.name === 'NotFoundError') {
      return notFound(error)
    }
    return serverError(error)
  }
}
