import { GetUserService } from '../../../../src/application/services/get-user-service'
import { GetUserFromStarwars } from '../../../../src/application/usecases/get-user-from-starwars'
import { HttpAdapter } from '../../../../src/infra/adapters/http-adapter'

type SutTypes = {
  sut: GetUserService
  getUserFromStarwars: GetUserFromStarwars
  httpAdapter: HttpAdapter
}

const makeSut = (): SutTypes => {
  const baseUrl = 'http://localhost:'
  const httpAdapter = new HttpAdapter(baseUrl)
  const getUserFromStarwars = new GetUserFromStarwars(httpAdapter)
  const sut = new GetUserService(getUserFromStarwars)

  return {
    sut,
    getUserFromStarwars,
    httpAdapter
  }
}

describe('GetUserService', () => {
  it('Should call GetUserFromStarwars with the correct name', async () => {
    const name = 'Luke Skywalker'
    const { sut, getUserFromStarwars } = makeSut()

    const spyGetUserFromStarwars = jest
      .spyOn(getUserFromStarwars, 'handle')
      .mockResolvedValue({ data: { name: 'Luke Skywalker', height: '172' } })

    const result = await sut.handle(name)

    expect(spyGetUserFromStarwars).toHaveBeenCalledWith('Luke Skywalker')

    expect(result).toEqual({ data: { name: 'Luke Skywalker', height: '172' } })
  })
})
