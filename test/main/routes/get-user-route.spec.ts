import * as GetUserFactoryModule from '@/main/factories/get-user-factory'
import { getUserHandler } from '@/main/routes/get-user-route'

describe('getUserHandler', () => {
  it('should handle the getUser request and return a valid response', async () => {
    const mockEvent = {
      body: JSON.stringify({ name: 'John Doe' }),
      headers: {},
      multiValueHeaders: {},
      httpMethod: '',
      isBase64Encoded: false,
      path: '',
      pathParameters: {},
      resource: ''
    }
    const mockResult = {
      statusCode: 200,
      body: {
        id: 1,
        name: 'John Doe'
      }
    }

    const makeGetUserSpy = jest.spyOn(GetUserFactoryModule, 'makeGetUser')
    makeGetUserSpy.mockReturnValue({
      handle: jest.fn().mockResolvedValue(mockResult)
    })

    const result = await getUserHandler(mockEvent)

    expect(result).toEqual({
      statusCode: 200,
      body: JSON.stringify(mockResult)
    })

    expect(makeGetUserSpy).toHaveBeenCalledWith()
    // expect(makeGetUserSpy().handle).toHaveBeenCalledWith(mockEvent)

    makeGetUserSpy.mockRestore()
  })
})
