# Vault Basics

1. Set up vault.  Install directly or using a package manager like Chocolatey.
   `choco install vault`
2. Start Vault in dev mode
3. In another terminal instance, set the following environment variables:
    1. `$env:VAULT_ADDR="http://127.0.0.1:8200"`
    2. `$env:VAULT_TOKEN="<your_token>"`  *Note: the best practice is to not use use this token.  The only exception would be when you are testing out a Vault setup.*  Also be aware that this relates to the **Secret Zero Problem** which can be mitigated using AppRole authentication method in Vault.
4. Put a secret in: `vault kv put -mount=secret hello foo=world`
5. Put another multiple secret in: `vault kv put -mount=secret hello foo=world excited=yes`
6. Retrieve secrets: `vault kv get -mount=secret hello`
7. Print only value of a field: `vault kv get -mount=secret -field=excited hello`
8. List all secret engines: `vault secrets list`
9. List all secrets within kv2: `vault kv list secret/`
