import { makeGetUserController } from "./get-user.factory";
import { GetUserController } from "../../application/controllers/get-user/controller";

describe("makeGetUserController", () => {
  test("Must return a valid instance of GetUserController", () => {
    const userController = makeGetUserController();

    expect(userController).toBeInstanceOf(GetUserController);
  });
});
