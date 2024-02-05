import { makeGetUser } from '@/main/factories/get-user-factory'
import { GetUserController } from '@/presentation/controllers/get-user-controller'

describe('makeGetUserController', () => {
  test('Must return a valid instance of GetUserController', () => {
    const userController = makeGetUser()

    expect(userController).toBeInstanceOf(GetUserController)
  })
})
