import { BaseError } from "./baseError.mjs"
import { httpStatusCodes, httpStatusCodesDescription } from "./httpStatusCodes.mjs"

export class api404Error extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCodes.NOT_FOUND,
        description = httpStatusCodesDescription.NOT_FOUND,
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}
