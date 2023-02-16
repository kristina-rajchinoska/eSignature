import { BaseError } from "./baseError.mjs"
import { httpStatusCodes, httpStatusCodesDescription } from "./httpStatusCodes.mjs"

export class api401Error extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCodes.UNAUTHORIZED,
        description = httpStatusCodesDescription.UNAUTHORIZED,
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}
