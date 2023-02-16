import { DefaultAzureCredential } from "@azure/identity"
import { SecretClient } from "@azure/keyvault-secrets"

const url = process.env.KEY_VAULT_URL

const values = {}
let client

export const getKeyVaultValue = async (key) => {
    if (!values[key]) {
        const client = createSecretClient()
        const secretKey = await client.getSecret(key)

        values[key] = secretKey.value
    }

    return values[key]
}

const createSecretClient = () => {
    if (!client) {
        const credential = new DefaultAzureCredential()
        client = new SecretClient(url, credential)
    }

    return client
}
