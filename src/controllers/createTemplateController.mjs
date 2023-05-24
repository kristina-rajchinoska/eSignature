import { authenticate } from "../services/userLoginService.mjs";
import { createTemplate } from "../services/createTemplateService.mjs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const demoDocsPath = path.resolve(__dirname, "../../demo_documents");

//const docFile = "World_Wide_Corp_fields.pdf";
//const templateName = "Example Signer and CC template";

export const createTemplateController = async (req, res) => {
  const docFile = req.body.docFile;
  const templateName = req.body.templateName;
  let accountInfo = await authenticate();
  // Step 2. Call the worker method
  const args = {
    accessToken: accountInfo.accessToken,
    basePath: accountInfo.basePath,
    accountId: accountInfo.apiAccountId,
    templateName: templateName,
    docFile: path.resolve(demoDocsPath, docFile),
  };
  let results = null;

  try {
    results = await createTemplate(args);
    return results;
  } catch (error) {
    const errorBody = error && error.response && error.response.body;
    // we can pull the DocuSign error code and message from the response body
    const errorCode = errorBody && errorBody.errorCode;
    const errorMessage = errorBody && errorBody.message;
    // In production, may want to provide customized error messages and
    // remediation advice to the user.
    res.render("pages/error", { err: error, errorCode, errorMessage });
  }
};
