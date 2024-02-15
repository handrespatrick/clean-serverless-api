import { GatewayEvent } from '@/presentation/protocols/gateway'
import { HttpResponse } from '@/presentation/protocols/http'

export interface IUserInfoController {
  handle(body: GatewayEvent): Promise<HttpResponse>
}
