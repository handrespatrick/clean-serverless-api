/* istanbul ignore file */
export class RequiredField extends Error {
  constructor(value: string) {
    super(`The field '${value}' was not provided in the query string parameters`)
  }
}
