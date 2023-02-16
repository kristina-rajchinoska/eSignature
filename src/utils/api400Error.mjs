import { BaseError } from "./baseError.mjs"
import { httpStatusCodes, httpStatusCodesDescription } from "./httpStatusCodes.mjs"

export class api400Error extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCodes.BAD_REQUEST,
        description = httpStatusCodesDescription.BAD_REQUEST,
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}
