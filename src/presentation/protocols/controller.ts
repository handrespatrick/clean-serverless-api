import { GatewayEvent } from './gateway'
import { HttpResponse } from './http'

export interface IGetUserController {
  handle(body: GatewayEvent): Promise<HttpResponse>
}
