import { IHttpResponse } from '../../../presentation/protocols/http'
import { GetUserRequestDto } from './get-user-from-starwars'

export interface IGetUserController {
  handle(body: GetUserRequestDto): Promise<IHttpResponse>
}
