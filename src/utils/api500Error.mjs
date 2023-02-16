import { BaseError } from "./baseError.mjs"
import { httpStatusCodes, httpStatusCodesDescription } from "./httpStatusCodes.mjs"

export class api500Error extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCodes.INTERNAL_SERVER,
        description = httpStatusCodesDescription.INTERNAL_SERVER,
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}
