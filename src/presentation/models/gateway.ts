export type GatewayEvent = {
  body: string | null
  headers: Record<string, string>
  httpMethod: string
  isBase64Encoded: boolean
  multiValueHeaders: Record<string, string[]>
  multiValueQueryStringParameters: Record<string, string[]>
  path: string
  pathParameters: Record<string, string>
  queryStringParameters: Record<string, string | null>
  resource: string
  stageVariables: null
}
