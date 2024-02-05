import { IHttpAdapter } from '@/application/protocols/http-adapter'
import { GetUserFromStarwars } from '@/application/usecases/get-user-from-starwars'
import { IGetUserFromStarwars } from '@/domain/protocols/get-user/get-user-from-starwars'
import { HttpAdapter } from '@/infra/adapters/http-adapter'
import { GetUserController } from '@/presentation/controllers/get-user-controller'
import { IGetUserController } from '@/presentation/protocols/controller'

type SutTypes = {
  sut: IGetUserController
  useCase: IGetUserFromStarwars
  httpAdapter: IHttpAdapter
}

const makeSut = (): SutTypes => {
  const baseUrl = 'http://localhost:'
  const httpAdapter = new HttpAdapter(baseUrl)
  const useCase = new GetUserFromStarwars(httpAdapter)
  const sut = new GetUserController(useCase)

  return {
    sut,
    useCase,
    httpAdapter
  }
}

describe('GetUserController', () => {
  const event = {
    body: JSON.stringify({ name: 'John Doe' }),
    headers: {},
    multiValueHeaders: {},
    httpMethod: '',
    isBase64Encoded: false,
    path: '',
    pathParameters: {},
    resource: ''
  }

  it('Should call service with the correct name', async () => {
    const { sut, useCase } = makeSut()
    const spyUseCase = jest.spyOn(useCase, 'handle')

    await sut.handle(event)

    expect(spyUseCase).toHaveBeenCalledWith('John Doe')
  })

  it('Should return status 200 if name was found', async () => {
    const expectedUser = {
      data: { id: 1, name: 'John Doe' }
    }
    const { sut, useCase } = makeSut()

    jest.spyOn(useCase, 'handle').mockResolvedValue(expectedUser)

    const response = await sut.handle(event)

    expect(response.statusCode).toBe(200)
    expect(response.body).toBe(expectedUser)
  })

  it('Should return status 400 if name was not found', async () => {
    const name = 'John Doe'
    const { sut, useCase } = makeSut()

    jest.spyOn(useCase, 'handle').mockResolvedValue({ notFound: true })

    const response = await sut.handle(event)

    expect(response.statusCode).toBe(404)
    expect(response.body).toEqual(`The name '${name}' was not found`)
  })

  it('Should return status 500 if throw an error', async () => {
    const error = new Error('Error')
    const { sut, useCase } = makeSut()

    jest.spyOn(useCase, 'handle').mockRejectedValue(error)

    const response = await sut.handle(event)

    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual('Internal server error')
  })
})
