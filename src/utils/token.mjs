import jwt from "jsonwebtoken"
import { getKeyVaultValue } from "./keyVault.mjs"
import { api401Error } from "../utils/api401Error.mjs"

const JWT_PRIVATE_KEY = await getKeyVaultValue("JWTPRIVATEKEY")

export const verifyToken = (token) => {
    try {        
        return jwt.verify(token, JWT_PRIVATE_KEY)
    } catch (error) {
        throw new api401Error("Token is not valid")
    }
}

export const createToken = (payload, options) => {
    return jwt.sign(payload, JWT_PRIVATE_KEY, options)
}

export const decodeToken = (token) => {
    return jwt.decode(token, JWT_PRIVATE_KEY)
}

export const userFromToken = (token) => {
    return jwt.decode(token, JWT_PRIVATE_KEY).user
}
