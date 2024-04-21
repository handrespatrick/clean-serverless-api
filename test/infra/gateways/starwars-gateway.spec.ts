import { IStarwarsGateway } from '@/application/protocols'
import { IHttpAdapter } from '@/application/protocols/http-adapter'
import { StarwarsGateway } from '@/infra/gateways/starwars-gateway'

const makeFakeResponse = () => ({
  results: [{ name: 'Luke Skywalker' }],
  next: null
})

const makeHttpAdapterStub = () => {
  class HttpAdapterStub implements IHttpAdapter {
    async get(): Promise<any> {
      return new Promise((resolve) => resolve(makeFakeResponse()))
    }

    async post(): Promise<any> {
      return null
    }

    async put(): Promise<any> {
      return null
    }

    async delete(): Promise<any> {
      return null
    }
  }
  return new HttpAdapterStub()
}

type SutTypes = {
  sut: IStarwarsGateway
  httpAdapterStub: IHttpAdapter
}

const makeSut = (): SutTypes => {
  const httpAdapterStub = makeHttpAdapterStub()
  const sut = new StarwarsGateway(httpAdapterStub)
  return { sut, httpAdapterStub }
}

describe('StarwarsGateway', () => {
  describe('getAllUsers', () => {
    it('should return an array of UserFromStarwars objects', async () => {
      const { sut, httpAdapterStub } = makeSut()

      jest
        .spyOn(httpAdapterStub, 'get')
        .mockResolvedValueOnce({ ...makeFakeResponse(), next: 'http://example.com/next' })
      jest
        .spyOn(httpAdapterStub, 'get')
        .mockResolvedValueOnce({ ...makeFakeResponse(), results: [{ name: 'Leia Organa' }] })

      const result = await sut.getAllUsers()

      expect(result).toEqual([{ name: 'Luke Skywalker' }, { name: 'Leia Organa' }])
      expect(httpAdapterStub.get).toHaveBeenCalledTimes(2)
    })

    it('should handle empty response', async () => {
      const { sut, httpAdapterStub } = makeSut()
      jest.spyOn(httpAdapterStub, 'get').mockResolvedValueOnce({ ...makeFakeResponse(), results: [] })

      const result = await sut.getAllUsers()

      expect(result).toEqual([])
    })

    it('should handle response with only one page', async () => {
      const { sut } = makeSut()

      const result = await sut.getAllUsers()

      expect(result).toEqual([{ name: 'Luke Skywalker' }])
    })

    it('should call httpAdapter.get method with correct parameters', async () => {
      const { sut, httpAdapterStub } = makeSut()
      const getSpy = jest.spyOn(httpAdapterStub, 'get')

      await sut.getAllUsers()

      expect(getSpy).toHaveBeenCalledWith('/people')
    })

    it('should throw if httpAdapter.get throws', async () => {
      const { sut, httpAdapterStub } = makeSut()
      jest.spyOn(httpAdapterStub, 'get').mockRejectedValueOnce(new Error())

      const promise = sut.getAllUsers()

      expect(promise).rejects.toThrow()
    })
  })
})
