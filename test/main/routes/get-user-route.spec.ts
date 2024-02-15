import * as GetUserFactoryModule from '@/main/factories/controller-factory'
import { getUserHandler } from '@/main/routes/get-user-route'

describe('getUserHandler', () => {
  it('should handle the getUser request and return a valid response', async () => {
    const mockEvent = {
      body: '',
      headers: {},
      httpMethod: 'get',
      isBase64Encoded: false,
      multiValueHeaders: {},
      multiValueQueryStringParameters: {},
      path: '',
      pathParameters: {
        name: 'John Doe'
      },
      queryStringParameters: {},
      resource: '',
      stageVariables: null
    }
    const mockResult = {
      statusCode: 200,
      body: {
        id: 1,
        name: 'John Doe'
      }
    }

    const makeControllerSpy = jest.spyOn(GetUserFactoryModule, 'makeController')
    makeControllerSpy.mockReturnValue({
      handle: jest.fn().mockResolvedValue(mockResult)
    })

    const result = await getUserHandler(mockEvent)

    expect(result).toEqual({
      statusCode: 200,
      body: JSON.stringify(mockResult)
    })

    expect(makeControllerSpy).toHaveBeenCalledWith()
    makeControllerSpy.mockRestore()
  })
})
