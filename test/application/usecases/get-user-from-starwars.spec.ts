import { IHttpAdapter } from '@/application/protocols/http-adapter'
import { UserInfoUseCase } from '@/application/services/user-info'
import { IUserInfo } from '@/domain/usecases/user-info'
import { HttpAdapter } from '@/infra/adapters/http-adapter'
import { StarwarsGateway } from '@/infra/gateways/starwars-gateway'

type SutTypes = {
  sut: IUserInfo
  httpAdapter: IHttpAdapter
  starwarsGateway: StarwarsGateway
}

const makeSut = (): SutTypes => {
  const baseUrl = 'http://localhost:'
  const httpAdapter = new HttpAdapter(baseUrl)
  const starwarsGateway = new StarwarsGateway(httpAdapter)
  const sut = new UserInfoUseCase(starwarsGateway)

  return {
    sut,
    httpAdapter,
    starwarsGateway
  }
}

describe('UserInfoUseCase', () => {
  test('Should return the user if was found', async () => {
    const { sut, starwarsGateway } = makeSut()
    const name = 'John Doe'
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

    jest.spyOn(starwarsGateway, 'getAllUsers').mockResolvedValueOnce([expectedUser])

    const response = await sut.handle(name)

    expect(response).toEqual(expectedUser)
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
    expect(response).toBeNull()
  })
})
