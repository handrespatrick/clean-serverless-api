import { makeGetUserByNameController } from '@/main/factories/controllers'
import { GetUserByNameController } from '@/presentation/controllers'

describe('FACTORY - makeGetUserByNameController', () => {
  it('Must return a valid instance of GetUserController', () => {
    const userController = makeGetUserByNameController()
    expect(userController).toBeInstanceOf(GetUserByNameController)
  })
})
