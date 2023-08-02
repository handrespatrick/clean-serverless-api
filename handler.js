"use strict";

const { getUserHandler } = require("./src/main/routes/get-user-route");

module.exports.getUsersInfo = async (event) => {
  const result = await getUserHandler(event);

  return {
    statusCode: result.statusCode,
    body: JSON.stringify(result),
  };
};
