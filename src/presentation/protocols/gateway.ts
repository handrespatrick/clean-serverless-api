export type GatewayEvent = {
  body: string
  headers: Record<string, string>
  multiValueHeaders: Record<string, string[]>
  httpMethod: string
  isBase64Encoded: boolean
  path: string
  pathParameters: Record<string, string>
  resource: string
}
