import { getUserHandler } from "./src/main/routes/get-user-route";

export const getUserInfo = async (event) => {
  const result = await getUserHandler(event);

  return {
    statusCode: result.statusCode,
    body: JSON.stringify(result),
  };
};
