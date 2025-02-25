# Bare Server

This extends [V3](TODO: Link to the old repo instead).

## Changes to the [bare meta](BareServerForHosters.md#request-server-info)

### Custom server specifications

You are now able to define new endpoints that correspond to your own changes to the standard.

## Reassignability

Reassignability can help with implementing to remedy automatic filter detection of bare servers. Although it's not foolproof without a proper EE2E implementation, that is up to the implementor of the bare server with their own custom server specifications. The specific properties involved are set on the `reassign`.

### endpoints

You will be able to change where the endpoints are.

If you want to reroute the standard endpoints, you can add an extra field inside of your bare meta called `reassign.endpoints`. Reroute will be an object with the key signifiying the endpoint to replace and the new endpoint being the value.

### headers

You will be able to change the keys of the headers

If you want to reroute the standard header keys, you can add an extra field inside of your bare meta called `reassign.headers`. Reroute will be an object with the key signifiying the key to replace and the new key being the value.

### Deprecating the versions field

There will only be one default endpoint. It will be "proxy".

### Deprecating the language field

The `language` field should no longer be used. This is due to the realized possibility of multiple bare servers using the same language. The other project field in the bare meta are sufficient enough for this purpose.

## Bare Security

If you want to secure your bare servers, set `isSecured` to true in the bare meta. And the bare servers should interpret this and listen.

## New protocol support (Bare over ...)

These modes will still be compatible with older bare clients, since it would occur over another version and endpoint.

## Bare Request Headers

- X-Bare-Origin: The origin that the SW is registered on. This is ignored, when bare security is disabled.

## Bare Response Headers

- Access-Control-Allow-Origin: If X-Bare-Origin was provided, it will look in its records to find all of the proxy site instances that the bare server allows to use. If the domain matches, it would set Access-Control-Allow-Origin to the domain that is allowed. Otherwise it would be denied, and it will return "Deny". If bare security is disabled, it is set to "\*". Normally you would list multiple origins, but this would leak all your proxy site instances. In my bare servers, I will provide syncing with Dispenser for this.
