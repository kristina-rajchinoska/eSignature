import { BaseError } from "./baseError.mjs"
import { httpStatusCodes, httpStatusCodesDescription } from "./httpStatusCodes.mjs"

export class api403Error extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCodes.FORBIDDEN,
        description = httpStatusCodesDescription.FORBIDDEN,
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}
