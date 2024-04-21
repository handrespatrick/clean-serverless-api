import { User } from '@/domain/models/user'

export interface IUserInfo {
  handle(name: string): Promise<IUserInfo.Result>
}

export namespace IUserInfo {
  export type Result = User | null
}
