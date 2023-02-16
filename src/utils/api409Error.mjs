import { BaseError } from "./baseError.mjs"
import { httpStatusCodes, httpStatusCodesDescription } from "./httpStatusCodes.mjs"

export class api409Error extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCodes.CONFLICT,
        description = httpStatusCodesDescription.CONFLICT,
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}
