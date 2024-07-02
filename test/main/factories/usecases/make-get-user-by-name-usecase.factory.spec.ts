import { GetUserByNameUsecase } from '@/application/usecases'
import { makeGetUserByNameUseCase } from '@/main/factories/usecases'

describe('FACTORY - makeGetUserByNameUseCase', () => {
  it('Must return a valid instance of GetUserByNameUsecase', () => {
    const useCase = makeGetUserByNameUseCase()
    expect(useCase).toBeInstanceOf(GetUserByNameUsecase)
  })
})
