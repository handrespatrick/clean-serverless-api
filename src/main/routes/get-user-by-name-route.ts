import 'dotenv/config'
import { makeGetUserByNameController } from '@/main/factories/controllers'
import { GatewayEvent } from '@/presentation/models'

export async function getUserByName(event: GatewayEvent) {
  const controller = makeGetUserByNameController()
  const result = await controller.handle(event)
  return {
    title: result.title,
    statusCode: result.statusCode,
    body: JSON.stringify(result)
  }
}
