import { User } from '@/domain/entities/user'

export interface IUserInfo {
  handle(name: IUserInfo.Params): Promise<IUserInfo.Result>
}

export namespace IUserInfo {
  export type Params = string
  export type Result = User | null
}
