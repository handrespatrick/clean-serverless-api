import { makeController } from '@/main/factories/controller-factory'
import { GatewayEvent } from '@/presentation/protocols/gateway'

export async function getUserHandler(event: GatewayEvent) {
  const controller = makeController()
  const result = await controller.handle(event)

  return {
    statusCode: result.statusCode,
    body: JSON.stringify(result)
  }
}
