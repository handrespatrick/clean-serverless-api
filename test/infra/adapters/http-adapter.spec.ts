import { HttpAdapter } from '@/infra/adapters/http-adapter'
import axios, { AxiosInstance } from 'axios'

type SutTypes = {
  sut: HttpAdapter
  axiosInstanceMock: AxiosInstance
}

const makeSut = (): SutTypes => {
  const axiosInstanceMock = axios.create()
  const baseUrl = 'http://localhost:'
  const sut = new HttpAdapter(baseUrl)

  return {
    sut,
    axiosInstanceMock
  }
}

describe('HttpAdapter', () => {
  test('The get method must return the response data correctly', async () => {
    const expectedData = { name: 'John Doe', age: 30 }
    const { sut, axiosInstanceMock } = makeSut()
    const spyAxios = jest.spyOn(axiosInstanceMock, 'get').mockResolvedValueOnce({ data: expectedData })

    sut['axiosInstance'] = axiosInstanceMock

    const response = await sut.get('/users/1')

    expect(response).toEqual(expectedData)
    expect(spyAxios).toHaveBeenCalledWith('/users/1', undefined)
  })

  test('The post method must return the response data correctly', async () => {
    const requestData = { name: 'John Doe', age: 30 }
    const expectedData = { id: 1, ...requestData }
    const { sut, axiosInstanceMock } = makeSut()
    const spyAxios = jest.spyOn(axiosInstanceMock, 'post').mockResolvedValueOnce({ data: expectedData })

    sut['axiosInstance'] = axiosInstanceMock

    const response = await sut.post('/users', requestData)

    expect(response).toEqual(expectedData)
    expect(spyAxios).toHaveBeenCalledWith('/users', requestData, undefined)
  })

  test('The put method must return the response data correctly', async () => {
    const requestData = { name: 'John Doe', age: 30 }
    const expectedData = { id: 1, ...requestData }
    const { sut, axiosInstanceMock } = makeSut()

    const spyAxios = jest.spyOn(axiosInstanceMock, 'put').mockResolvedValueOnce({ data: expectedData })

    sut['axiosInstance'] = axiosInstanceMock

    const response = await sut.put('/users/1', requestData)

    expect(response).toEqual(expectedData)
    expect(spyAxios).toHaveBeenCalledWith('/users/1', requestData, undefined)
  })

  test('The delete method must return the response data correctly', async () => {
    const expectedData = { status: 'deleted' }
    const { sut, axiosInstanceMock } = makeSut()

    const spyAxios = jest.spyOn(axiosInstanceMock, 'delete').mockResolvedValueOnce({ data: expectedData })

    sut['axiosInstance'] = axiosInstanceMock

    const response = await sut.delete('/users/1')

    expect(response).toEqual(expectedData)
    expect(spyAxios).toHaveBeenCalledWith('/users/1', undefined)
  })
})
