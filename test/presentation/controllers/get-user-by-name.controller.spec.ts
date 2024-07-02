import { IHttpAdapter } from '@/application/protocols'
import { GetUserByNameUsecase } from '@/application/usecases'
import { NotFoundError } from '@/domain/exceptions'
import { IGetUserByName } from '@/domain/protocols'
import { HttpAdapter } from '@/infra/adapters'
import { StarwarsGateway } from '@/infra/gateways'
import { GetUserByNameController } from '@/presentation/controllers/get-user-by-name.controller'
import { IController } from '@/presentation/protocols'

type SutTypes = {
  sut: IController
  useCase: IGetUserByName
  httpAdapter: IHttpAdapter
}

const makeSut = (): SutTypes => {
  const baseUrl = 'http://localhost:'
  const httpAdapter = new HttpAdapter(baseUrl)
  const starwarsGateway = new StarwarsGateway(httpAdapter)
  const useCase = new GetUserByNameUsecase(starwarsGateway)
  const sut = new GetUserByNameController(useCase)

  return {
    sut,
    useCase,
    httpAdapter
  }
}

describe('CONTROLLER - GetUserByNameController', () => {
  const event = {
    body: {},
    headers: {},
    httpMethod: 'get',
    isBase64Encoded: false,
    multiValueHeaders: {},
    multiValueQueryStringParameters: {},
    path: '',
    pathParameters: {},
    queryStringParameters: {
      name: 'John Doe'
    },
    resource: '',
    stageVariables: null
  }

  it('Should call service with the correct name', async () => {
    const { sut, useCase } = makeSut()
    const spyUseCase = jest.spyOn(useCase, 'handle')

    await sut.handle(event)

    expect(spyUseCase).toHaveBeenCalledWith('John Doe')
  })

  it('Should return status 200 if name was found', async () => {
    const expectedUser = {
      name: 'John Doe',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/6/'
      ],
      species: [],
      vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
      starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      url: 'https://swapi.dev/api/people/1/'
    }
    const { sut, useCase } = makeSut()

    jest.spyOn(useCase, 'handle').mockResolvedValue(expectedUser)

    const response = await sut.handle(event)

    expect(response.title).toEqual(`ok`)
    expect(response.statusCode).toBe(200)
    expect(response.body).toBe(expectedUser)
  })

  it('Should return status 400 if name was not found', async () => {
    const name = 'John Doe'
    const { sut, useCase } = makeSut()

    jest.spyOn(useCase, 'handle').mockRejectedValue(new NotFoundError(`User ${name} not found`))

    const response = await sut.handle(event)

    expect(response.title).toEqual(`Not Found`)
    expect(response.statusCode).toBe(404)
    expect(response.body).toEqual(`User ${name} not found`)
  })

  it('Should return status 500 if throw an error', async () => {
    const error = new Error('any_error')
    const { sut, useCase } = makeSut()

    jest.spyOn(useCase, 'handle').mockRejectedValue(error)

    const response = await sut.handle(event)

    expect(response.title).toEqual(`Internal Server Error`)
    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual('any_error')
  })

  it('Should return status 400 if queryStringParameters was not provided', async () => {
    const { sut } = makeSut()

    const response = await sut.handle({ ...event, queryStringParameters: { name: null } })

    expect(response.title).toEqual(`Bad Request`)
    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(`name is required`)
  })
})
