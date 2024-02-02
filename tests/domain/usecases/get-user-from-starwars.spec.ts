// Importe as dependências necessárias para os testes
import { GetUserFromStarwars } from '../../../src/application/usecases/get-user-from-starwars'
import { HttpAdapter } from '../../../src/infra/adapters/http-adapter'

type SutTypes = {
  sut: GetUserFromStarwars
  httpAdapter: HttpAdapter
}

const makeSut = (): SutTypes => {
  const baseUrl = 'http://localhost:'
  const httpAdapter = new HttpAdapter(baseUrl)
  const sut = new GetUserFromStarwars(httpAdapter)

  return {
    sut,
    httpAdapter
  }
}

describe('GetUserFromStarwars', () => {
  test('Should return the user if was found', async () => {
    const { sut, httpAdapter } = makeSut()
    const name = 'Luke Skywalker'
    const expectedUser = { name: 'Luke Skywalker', height: '172', mass: '77' }

    const spyHttpAdapter = jest
      .spyOn(httpAdapter, 'get')
      .mockResolvedValueOnce({ next: 'https://example.com/page2', results: [] })
      .mockResolvedValueOnce({ results: [expectedUser], next: 'page2' })

    const response = await sut.handle(name)

    expect(spyHttpAdapter).toHaveBeenCalledWith('/people')
    expect(response).toEqual({ data: expectedUser })
  })

  test('Should return notFound if user was not found', async () => {
    const name = 'UserNotFound'
    const { sut, httpAdapter } = makeSut()
    const spyHttpAdapter = jest.spyOn(httpAdapter, 'get').mockResolvedValue({
      next: null,
      results: []
    })

    const response = await sut.handle(name)

    expect(spyHttpAdapter).toHaveBeenCalledWith('/people')
    expect(response).toEqual({ notFound: true })
  })
})
