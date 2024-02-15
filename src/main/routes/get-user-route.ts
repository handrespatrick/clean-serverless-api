import { makeGetUser } from '@/main/factories/get-user-factory'
import { GatewayEvent } from '@/presentation/protocols/gateway'

export async function getUserHandler(event: GatewayEvent) {
  const controller = makeGetUser()
  const result = await controller.handle(event)

  return {
    statusCode: result.statusCode,
    body: JSON.stringify(result)
  }
}
