export const serializeToJson = <T = any>(data: T): string => {
  return JSON.stringify(data)
}

export const parseRequestBody = <T = any>(body: string): T => {
  return JSON.parse(body)
}
