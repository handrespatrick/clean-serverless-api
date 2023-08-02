import { GetUserController } from "../../application/controllers/get-user/controller";
import { GetUserService } from "../../application/controllers/get-user/service";
import { GetUserFromStarwars } from "../../domain/usecases/get-user-from-starwars";
import axios from "axios";

export const makeGetUserController = () => {
  const getUserFromStarwars = new GetUserFromStarwars(axios);
  const service = new GetUserService(getUserFromStarwars);
  return new GetUserController(service);
};
