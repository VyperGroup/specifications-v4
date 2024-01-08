# Bare Server V3 Endpoints

All endpoints are prefixed with `/v{version}/`

The endpoint `/` on v4 would be `/v4/`

This is an extension of [V3](./BareServerV3.md).

## Bare Request Headers

- X-Bare-Origin: The origin that the SW is registered on
  > Required, if you want to secure your bare server
- TODO: ...

## Bare Response Headers

- Access-Control-Allow-Origin: If X-Bare-Origin was provided, it will look in its records to find all of the proxy site instances that the bare server allows to use. If the domain matches, it would set Access-Control-Allow-Origin to the domain that is allowed. Otherwise it would be denied, and it will return "Deny". In my bare servers, I will provide syncing with Dispenser for this.
- TODO: ...
