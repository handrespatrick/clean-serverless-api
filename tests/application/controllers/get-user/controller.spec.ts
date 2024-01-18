// Importe as dependências necessárias para os testes
import { GetUserController } from '../../../../src/application/controllers/get-user/controller'
import { GetUserService } from '../../../../src/application/controllers/get-user/service'
import { GetUserFromStarwars } from '../../../../src/domain/usecases/get-user-from-starwars'
import { HttpAdapter } from '../../../../src/infra/adapters/http-adapter'

type SutTypes = {
  sut: GetUserController
  getUserService: GetUserService
  getUserFromStarwars: GetUserFromStarwars
  httpAdapter: HttpAdapter
}

const makeSut = (): SutTypes => {
  const baseUrl = 'http://localhost:'
  const httpAdapter = new HttpAdapter(baseUrl)
  const getUserFromStarwars = new GetUserFromStarwars(httpAdapter)
  const getUserService = new GetUserService(getUserFromStarwars)
  const sut = new GetUserController(getUserService)

  return {
    sut,
    getUserService,
    getUserFromStarwars,
    httpAdapter
  }
}

describe('GetUserController', () => {
  test('Should call service with the correct name', async () => {
    const name = 'John Doe'
    const { sut, getUserService } = makeSut()
    const spyGetUserService = jest.spyOn(getUserService, 'handle')

    await sut.handle({ name })

    expect(spyGetUserService).toBeCalledWith('John Doe')
  })

  test('Should return status 200 if name was found', async () => {
    const expectedUser = { id: 1, name: 'John Doe' }
    const { sut, getUserService } = makeSut()

    jest.spyOn(getUserService, 'handle').mockResolvedValue(expectedUser)

    const response = await sut.handle({ name: 'John Doe' })

    expect(response.statusCode).toBe(200)
    expect(response.body).toBe(expectedUser)
  })

  test('Should return status 400 if name was not found', async () => {
    const name = 'any_name'
    const { sut, getUserService } = makeSut()

    jest.spyOn(getUserService, 'handle').mockResolvedValue({ notFound: true })

    const response = await sut.handle({ name })

    expect(response.statusCode).toBe(404)
    expect(response.body).toEqual(`The name '${name}' was not found`)
  })

  // Caso de teste para o cenário em que ocorre um erro no serviço
  test('Should return status 500 if throw an error', async () => {
    const error = new Error('Test Error')
    const { sut, getUserService } = makeSut()

    jest.spyOn(getUserService, 'handle').mockRejectedValue(error)

    const response = await sut.handle({ name: 'John Doe' })

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual('Internal server error')
  })
})
