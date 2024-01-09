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

## Bare Client Mix-ins

## Standardized

## Bare Client that supports TCP over websockets

TODO: ...

## Non-standardized implementations

- [Adrift](https://github.com/MercuryWorkshop/adrift) - P2P implementation using Websockets
- [Middleware BareClient by Vyper Group](https://github.com/VyperGroup/aero/tree/Unstable/src/BareClientMixins/middleware)

Mercury Workshop provides an [extendable version of the bare client](https://www.npmjs.com/package/@mercuryworkshop/bare-client-custom) that lets you freely implement your own specifications. It has been determined that features don't directly involve HTTP or use custom protocols to accomplish a task, should not be standardized and should be left to the bare server implementors to create their independent specifications.

### Future Ideas for you to try

Many things that are non essential to Bare's usual HTTP functioning should be accomplished through a new specification independent of TompHTTP and be implemented through a Bare Client mix-in.

Here's some things that can be implemented:

- EE2E using WASM-binded [Rustls](https://github.com/rustls/rustls) and with ChaCha20Poly1305 (thanks Blumiere)
- [P2P onion routing](https://www.onion-router.net). This will use WebRTC with peer finding in the bare server, where it finds peers that have that certain site unblocked with all of the resources unblocked too. It would then develop a route. You may want to specify a custom version to contain "p2p_routing", in the bare meta. This would allow bare to be used exclusively for P2P (no proxying itself, other than the announcements) or combined.
- Create a bare server that attempts to prevent non-browser leeching. If there are known JS runtimes or routers / web frameworks with exposed user-agents, those requests would automatically be blocked, but the IP won't be blocklisted. Additionally, when requests are exclusively being sent to `a set number of` origins, it would check to see, if it is making the requests that a modern browser would normally.
