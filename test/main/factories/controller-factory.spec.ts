import { makeController } from '@/main/factories/controller-factory'
import { UserInfoController } from '@/presentation/controllers/user-info-controller'

describe('makeController', () => {
  test('Must return a valid instance of GetUserController', () => {
    const userController = makeController()

    expect(userController).toBeInstanceOf(UserInfoController)
  })
})
