import { GatewayEvent } from '@/presentation/protocols/gateway'

import { makeGetUser } from '../factories/get-user-factory'

export async function getUserHandler(event: GatewayEvent) {
  const controller = makeGetUser()
  const result = await controller.handle(event)

  return {
    statusCode: result.statusCode,
    body: JSON.stringify(result)
  }
}
