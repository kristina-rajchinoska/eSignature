import { generateRequestID } from "../src/utils/generateRequestID.mjs";
import { httpStatusCodes } from "../src/utils/httpStatusCodes.mjs";
import { retireveEnvelopes } from "../src/services/retrieveEnvelopeService.mjs";
import { api400Error } from "../src/utils/api400Error.mjs";

export const index = async function (context, req) {
  let envelopeId = req?.params?.id;
  if (!envelopeId) {
    throw new api400Error("Bad request");
  }
  const requestId =
    context && context.executionContext.invocationId
      ? context.executionContext.invocationId
      : generateRequestID();
  try {
    const response = await retireveEnvelopes(envelopeId, requestId);
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
