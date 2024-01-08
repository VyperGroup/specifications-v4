# Bare Client

Bare Client will be forked and it will internally WebTransports rather than the Fetch API. This will allow for QUIC client support.

## Load balancing options

BareClient(..., loadHandler: LoadHandler)

```ts

interface BareLoad = {
  endpoint: string, // The name of the bare endpoint
  // From the bare meta
  identifier: string,
  num_active_conns: string,
  ram_usage: {
    free: number,
    used: number
  },
}
type loadHandler = (bareEndpoints: string[], load: LoadOptions) => string[] // The return is the list of the bare endpoints to fallback on

BareClient(..., loadHandler: loadHandler);
```

## Bare Client over WebRTC

TODO: ...

## Bare Client over WS

TODO: ...

...
