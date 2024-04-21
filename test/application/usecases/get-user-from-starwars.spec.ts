import { IStarwarsGateway, UserFromStarwars } from '@/application/protocols'
import { UserInfoUseCase } from '@/application/usecases/user-info'
import { IUserInfo } from '@/domain/protocols/user-info'

const makeFakeUser = () => ({
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
})

const makeStarwarsGatewayStub = () => {
  class StarwarsGatewayStub implements IStarwarsGateway {
    async getAllUsers(): Promise<UserFromStarwars[]> {
      return new Promise((resolve) => resolve([makeFakeUser(), makeFakeUser()]))
    }
  }

  return new StarwarsGatewayStub()
}

type SutTypes = {
  sut: IUserInfo
  starwarsGateway: IStarwarsGateway
}

const makeSut = (): SutTypes => {
  const starwarsGateway = makeStarwarsGatewayStub()
  const sut = new UserInfoUseCase(starwarsGateway)

  return {
    sut,
    starwarsGateway
  }
}

const name = 'John Doe'

describe('UserInfoUseCase', () => {
  it('Should return the user if was found', async () => {
    const { sut, starwarsGateway } = makeSut()
    jest.spyOn(starwarsGateway, 'getAllUsers').mockResolvedValueOnce([makeFakeUser(), makeFakeUser()])

    const response = await sut.handle(name)

    expect(response).toEqual(makeFakeUser())
  })

  it('Should return null if user was not found', async () => {
    const { sut, starwarsGateway } = makeSut()
    jest.spyOn(starwarsGateway, 'getAllUsers').mockResolvedValueOnce([makeFakeUser(), makeFakeUser()])

    const response = await sut.handle('any_name')

    expect(response).toBeNull()
  })

  it('Should throw if getAllUsers throws', async () => {
    const { sut, starwarsGateway } = makeSut()
    jest.spyOn(starwarsGateway, 'getAllUsers').mockRejectedValueOnce(new Error())

    const promise = sut.handle(name)

    expect(promise).rejects.toThrow()
  })

  it('Should call getAllUsers method', async () => {
    const { sut, starwarsGateway } = makeSut()
    const getAllUsersSpy = jest.spyOn(starwarsGateway, 'getAllUsers')

    await sut.handle(name)

    expect(getAllUsersSpy).toHaveBeenCalled()
  })
})
