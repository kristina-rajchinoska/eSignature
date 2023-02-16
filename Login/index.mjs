import { generateRequestID } from "../src/utils/generateRequestID.mjs";
import { httpStatusCodes } from "../src/utils/httpStatusCodes.mjs";
import { authenticate } from "../src/services/userLoginService.mjs";

export const index = async function (context, req) {
  const requestId =
    context && context.executionContext.invocationId
      ? context.executionContext.invocationId
      : generateRequestID();
  try {
    const response = await authenticate();
    context.res = {
      body: response,
      status: httpStatusCodes.CREATED,
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    //  logger.error(error, { requestId: requestId, api: "user/login" });
    context.res = {
      body: error,
      status: error.statusCode || httpStatusCodes.INTERNAL_SERVER,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
