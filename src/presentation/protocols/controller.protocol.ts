import { HttpResponse, GatewayEvent } from '@/presentation/models'

export interface IController {
  handle(body: IController.Params): Promise<IController.Result>
}

export namespace IController {
  export type Params = GatewayEvent
  export type Result = HttpResponse
}
