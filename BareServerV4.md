# Bare Server V3 Endpoints

All endpoints are prefixed with `/v{version}/`

The endpoint `/` on v4 would be `/v4/`

This is an extension of [V3](./BareServerV3.md).

## Changes to the [bare meta](./BareServer.md#request-server-info)

### Deprecating the language field

The `language` field should no longer be used. This is due to the realized possibility of multiple bare servers using the same language. The project.respository and project.version fields in the bare meta is sufficient enough for this purpose.

## Bare Security

If you want to secure your bare servers, set `isSecured` to true in the bare meta. And the bare servers should interpret this and listen

## New protocol support (Bare over ...)

These modes will still be compatible with older bare clients, since it would occur over another version and endpoint.

### Bare over WebRTC

TODO: ...

### Bare over Websockets

TODO: ...

## Bare Request Headers

- X-Bare-Origin: The origin that the SW is registered on. This is ignored, when bare security is disabled.
- TODO: ...

## Bare Response Headers

- Access-Control-Allow-Origin: If X-Bare-Origin was provided, it will look in its records to find all of the proxy site instances that the bare server allows to use. If the domain matches, it would set Access-Control-Allow-Origin to the domain that is allowed. Otherwise it would be denied, and it will return "Deny". If bare security is disabled, it is set to "\*". Normally you would list multiple origins, but this would leak all your proxy site instances. In my bare servers, I will provide syncing with Dispenser for this.
- TODO: ...
