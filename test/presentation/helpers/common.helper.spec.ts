import { parseRequestBody, serializeToJson } from '@/presentation/helpers'

describe('HELPER - serializeToJson', () => {
  it('should serialize an object to JSON', () => {
    const data = { key: 'value' }

    const result = serializeToJson(data)

    expect(result).toEqual(JSON.stringify(data))
  })

  it('should handle undefined input', () => {
    const result = serializeToJson(undefined)

    expect(result).toEqual(undefined)
  })
})

describe('HELPER - parseRequestBody', () => {
  it('should parse a JSON string to an object', () => {
    const jsonString = '{"key": "value"}'

    const result = parseRequestBody(jsonString)

    expect(result).toEqual({ key: 'value' })
  })

  it('should handle invalid JSON input', () => {
    const invalidJsonString = 'not a valid JSON'

    expect(() => parseRequestBody(invalidJsonString)).toThrow(SyntaxError)
  })
})
