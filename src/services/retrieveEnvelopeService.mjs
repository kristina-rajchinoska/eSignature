import { authenticate } from "./userLoginService.mjs";
import docusign from "docusign-esign";
import { api400Error } from "../utils/api400Error.mjs";
//import(api);

export async function retireveEnvelopes(envelopeId, requestId) {
  let accountInfo;
  try {
    accountInfo = await authenticate();
  } catch (error) {
    throw new api400Error("Unauthorized");
  }
  console.log({ accountInfo });

  let dsApiClient = new docusign.ApiClient();
  dsApiClient.setBasePath(accountInfo.basePath);
  dsApiClient.addDefaultHeader(
    "Authorization",
    "Bearer " + accountInfo.accessToken
  );

  console.log("test");
  try {
    let envelopesApi = new docusign.EnvelopesApi(dsApiClient),
      results = null;

    // Step 1. Call Envelopes::get
    // Exceptions will be caught by the calling function
    results = await envelopesApi.getEnvelope(
      accountInfo.apiAccountId,
      envelopeId,
      null
    );
    console.log({ results });
    return results;
  } catch (error) {
    throw error;
  }
}
