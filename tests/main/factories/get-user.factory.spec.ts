import { makeGetUserController } from '../../../src/main/factories/get-user.factory'
import { GetUserController } from '../../../src/presentation/controllers/get-user-controller'

describe('makeGetUserController', () => {
  test('Must return a valid instance of GetUserController', () => {
    const userController = makeGetUserController()

    expect(userController).toBeInstanceOf(GetUserController)
  })
})
