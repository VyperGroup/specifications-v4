# Bare Client

Bare Client will be forked and it will internally WebTransports rather than the Fetch API. This will allow for QUIC client support.

## Example of an endpoint sorter

```js
function\* sortEndpoints(endpoint): BareClientTypes.SortEndpoints {
  yeild endpoint;
}
```

## Example class structure

```ts
class BareClient {
  this.opts;
  constructor(opts: BareClientOptions) {
    this.opts = opts;
  }
  // Just like fetch
  fetch(url: string, options: RequestOptions): Response {
    ...
  }
}
```

## Bare Client Mix-ins

## Standardized

## A Bare Client that supports HTTP over Websockets

This is an optional specification that allows faster than HTTP proxying. It is meant to be used, if QUIC isn't supported.
This requires this to be added to your bare meta

```json
{
  "supportedSpecifications": [
    {
      "by": "TompHTTP",
      "name": "HTTP over WS",
      "endpoint": "..."
    },
    ...
  ],
  ...
}
```

### Implementation

1. Converts the JS request in the BareClient to be a HTTP request
2. Send the HTTP request through WS
3. Proxy the HTTP request on the server and wait for a raw HTTP response back
4. Send the HTTP response back to the BareClient through WS
5. The BareClient converts it back to a JS response

Ideally this will happen in one WS channel, to prevent to slow-down of switching protocols and spawning new connections. Similar to TCP, the request and the corresponding response will be numbered for this.

## Non-standardized implementations

- [Adrift](https://github.com/MercuryWorkshop/adrift) - P2P implementation using Websockets
- [Middleware BareClient by Vyper Group](https://github.com/VyperGroup/aero/tree/Unstable/src/BareClientMixins/middleware)

Mercury Workshop provides an [extendable version of the bare client](https://www.npmjs.com/package/@mercuryworkshop/bare-client-custom) that lets you freely implement your own specifications. It has been determined that features don't directly involve HTTP or use custom protocols to accomplish a task, should not be standardized and should be left to the bare server implementors to create their independent specifications. We will try to make this compatible with Bare V4's objectives.

### Future Ideas for you to try

Many things that are non essential to Bare's usual HTTP functioning should be accomplished through a new specification independent of TompHTTP and be implemented through a Bare Client mix-in.

Here's some things that can be implemented:

- EE2E using WASM-binded [Rustls](https://github.com/rustls/rustls) and with ChaCha20Poly1305 (thanks Blumiere)
- [P2P onion routing](https://www.onion-router.net). This will use WebRTC with peer finding in the bare server, where it finds peers that have that certain site unblocked with all of the resources unblocked too. It would then develop a route. You may want to specify a custom version to contain "p2p_routing", in the bare meta. This would allow bare to be used exclusively for P2P (no proxying itself, other than the announcements) or combined.
- Create a bare server that attempts to prevent non-browser leeching. If there are known JS runtimes or routers / web frameworks with exposed user-agents, those requests would automatically be blocked, but the IP won't be blocklisted. Additionally, when requests are exclusively being sent to `a set number of` origins, it would check to see, if it is making the requests that a modern browser would normally.
