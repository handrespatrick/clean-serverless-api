import { GetUserService } from "./service";
import { GetUserFromStarwars } from "../../../domain/usecases/get-user-from-starwars";
import { IGetUserService } from "../../../domain/contracts/get-user/service";
import { IGetUserFromStarwars } from "../../../domain/contracts/get-user/get-user-from-starwars";

interface SutTypes {
  sut: IGetUserService;
  getUserFromStarwars: IGetUserFromStarwars;
}

const makeSut = (): SutTypes => {
  const mockAxios = {
    get: jest.fn(),
  };
  const getUserFromStarwars = new GetUserFromStarwars(mockAxios);
  const sut = new GetUserService(getUserFromStarwars);

  return {
    sut,
    getUserFromStarwars,
  };
};

describe("GetUserService", () => {
  it("Should call handle method with the correct name", async () => {
    const name = "Luke Skywalker";
    const { sut, getUserFromStarwars } = makeSut();

    jest
      .spyOn(getUserFromStarwars, "handle")
      .mockResolvedValue({ data: { name: "Luke Skywalker", height: "172" } });

    const result = await sut.handle(name);

    expect(getUserFromStarwars.handle).toHaveBeenCalledWith("Luke Skywalker");

    expect(result).toEqual({ data: { name: "Luke Skywalker", height: "172" } });
  });
});
