import { generateRequestID } from "../src/utils/generateRequestID.mjs";
import { httpStatusCodes } from "../src/utils/httpStatusCodes.mjs";
import { auth } from "../src/services/authenticationService.mjs";

export const index = async function (context, req) {
  const requestId =
    context && context.executionContext.invocationId
      ? context.executionContext.invocationId
      : generateRequestID();
  try {
    const response = await auth();
    context.res = {
      body: response,
      status: httpStatusCodes.CREATED,
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    context.res = {
      body: error,
      status: error.statusCode || httpStatusCodes.INTERNAL_SERVER,
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
