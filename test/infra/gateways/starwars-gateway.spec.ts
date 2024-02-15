import { IHttpAdapter } from '@/application/protocols/http-adapter'
import { StarwarsGateway } from '@/infra/gateways/starwars-gateway'

describe('StarwarsGateway', () => {
  let httpAdapterMock: IHttpAdapter
  let starwarsGateway: StarwarsGateway

  beforeEach(() => {
    httpAdapterMock = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn()
    }
    starwarsGateway = new StarwarsGateway(httpAdapterMock)
  })

  describe('getAllUsers', () => {
    it('should return an array of UserFromStarwars objects', async () => {
      const mockResponse1 = {
        results: [{ name: 'Luke Skywalker' }],
        next: 'http://example.com/next'
      }

      const mockResponse2 = {
        results: [{ name: 'Leia Organa' }],
        next: null
      }

      jest.spyOn(httpAdapterMock, 'get').mockResolvedValueOnce(mockResponse1)
      jest.spyOn(httpAdapterMock, 'get').mockResolvedValueOnce(mockResponse2)

      const result = await starwarsGateway.getAllUsers()

      expect(result).toEqual([{ name: 'Luke Skywalker' }, { name: 'Leia Organa' }])
      expect(httpAdapterMock.get).toHaveBeenCalledTimes(2)
      expect(httpAdapterMock.get).toHaveBeenCalledWith('/people')
    })

    it('should handle empty response', async () => {
      const mockResponse1 = {
        results: [],
        next: null
      }

      jest.spyOn(httpAdapterMock, 'get').mockResolvedValueOnce(mockResponse1)

      const result = await starwarsGateway.getAllUsers()

      expect(result).toEqual([])
      expect(httpAdapterMock.get).toHaveBeenCalledTimes(1)
      expect(httpAdapterMock.get).toHaveBeenCalledWith('/people')
    })

    it('should handle response with only one page', async () => {
      const mockResponse1 = {
        results: [{ name: 'Obi-Wan Kenobi' }],
        next: null
      }

      jest.spyOn(httpAdapterMock, 'get').mockResolvedValueOnce(mockResponse1)

      const result = await starwarsGateway.getAllUsers()

      expect(result).toEqual([{ name: 'Obi-Wan Kenobi' }])
      expect(httpAdapterMock.get).toHaveBeenCalledTimes(1)
      expect(httpAdapterMock.get).toHaveBeenCalledWith('/people')
    })
  })
})
