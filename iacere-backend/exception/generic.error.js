const StatusCodes = require('http-status-codes');
const ApiError = require("./api.error");

module.exports =  {
  serverError: new ApiError({
    message: "INTERNAL_SERVER_ERROR", code: StatusCodes.INTERNAL_SERVER_ERROR }),
  notFoundApi: new ApiError({ message: "NOT_FOUND_API", code: StatusCodes.NOT_FOUND }),
};
