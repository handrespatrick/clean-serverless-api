export interface IGetUserService {
  handle(email: string): Promise<any>;
}
