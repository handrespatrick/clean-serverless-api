import { makeGetUserController } from '../factories/get-user.factory'

export function getUserHandler({ body }) {
  const controller = makeGetUserController()

  return controller.handle(JSON.parse(body))
}
