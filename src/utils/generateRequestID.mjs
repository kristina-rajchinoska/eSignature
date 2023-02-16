import crypto from "crypto"

export const generateRequestID = () => {
    return crypto.randomUUID()
}

