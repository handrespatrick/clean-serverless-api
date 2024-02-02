/* istanbul ignore file */
export class NotFound extends Error {
  constructor(value: string) {
    super(`The name '${value}' was not found`)
  }
}
