import { UserInfoUseCase } from '@/application/services/user-info'
import { makeUseCase } from '@/main/factories/use-case-factory'

describe('makeUseCase', () => {
  it('Must return a valid instance of UserInfoUseCase', () => {
    const useCase = makeUseCase()

    expect(useCase).toBeInstanceOf(UserInfoUseCase)
  })
})
