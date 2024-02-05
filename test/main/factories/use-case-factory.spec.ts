import { GetUserFromStarwars } from '@/application/usecases/get-user-from-starwars'
import { makeUseCase } from '@/main/factories/use-case-factory'

describe('makeUseCase', () => {
  it('Must return a valid instance of GetUserFromStarwars', () => {
    const useCase = makeUseCase()

    expect(useCase).toBeInstanceOf(GetUserFromStarwars)
  })
})
