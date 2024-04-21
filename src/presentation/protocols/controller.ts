import { GatewayEvent } from '@/presentation/models/gateway'
import { HttpResponse } from '@/presentation/models/http'

export interface IUserInfoController {
  handle(body: IUserInfoController.Params): Promise<IUserInfoController.Result>
}

export namespace IUserInfoController {
  export type Params = GatewayEvent
  export type Result = HttpResponse
}
