import { authenticate } from "./userLoginService.mjs";
import docusign from "docusign-esign";

export async function retireveEnvelopes(envelopeId) {
  let accountInfo = await authenticate();
  console.log({ accountInfo });

  let dsApiClient = new docusign.ApiClient();
  dsApiClient.setBasePath(accountInfo.basePath);
  dsApiClient.addDefaultHeader(
    "Authorization",
    "Bearer " + accountInfo.accessToken
  );

  console.log("test");
  let envelopesApi = new docusign.EnvelopesApi(dsApiClient),
    results = null;

  console.log({ envelopesApi });

  // Step 1. Call Envelopes::get
  // Exceptions will be caught by the calling function
  results = await envelopesApi.getEnvelope(
    accountInfo.apiAccountId,
    envelopeId,
    null
  );
  console.log({ results });
  return results;
}
