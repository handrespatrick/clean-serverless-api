import { GatewayEvent } from '@/presentation/protocols/gateway'
import { HttpResponse } from '@/presentation/protocols/http'

export interface IGetUserController {
  handle(body: GatewayEvent): Promise<HttpResponse>
}
