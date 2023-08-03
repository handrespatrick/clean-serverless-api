import { getUserHandler } from "./get-user-route";
import { makeGetUserController } from "../factories/get-user.factory";

jest.mock("../factories/get-user.factory", () => ({
  makeGetUserController: jest.fn().mockReturnValue({
    handle: jest.fn().mockResolvedValue("Test Response"),
  }),
}));

describe("getUserHandler", () => {
  test("Should call the controller.handle with the provided body", async () => {
    const body = JSON.stringify({ name: "John Doe" });

    const response = await getUserHandler({ body });

    expect(makeGetUserController).toHaveBeenCalled();
    expect(makeGetUserController().handle).toHaveBeenCalledWith({
      name: "John Doe",
    });
    expect(response).toBe("Test Response");
  });
});
