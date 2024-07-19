# TOMPHTTP Specifications - bare v4 Edition

## **Deprecation Notice**

> Bare v4 is the last update and version of bare

In 2024, bare shouldn't be used for general proxying in SWs (standard bare). You should only use it if you can't afford proper server hosting and rely on cheaper hosting that doesn't support Web Sockets. You should switch to wisp at the very least and to [epoxy-tls](https://github.com/MercuryWorkshop/epoxy-tls) if you have the resources to do so. I only recommend bare for bare-extended, which should be in any proxy that has API interceptors to take advantage of those features as a supplement to wisp. It is more important to ensure the safety of your users rather than speed. Regardless, most wisp servers are more optimized than bare, so you will likely notice a speed improvement when switching.

> Standard bare refers to bare without the regular proxying functionality, and the entire bare meta is used for alternative transports.

### bare -> wisp migration guide

- Change your imports from bare-server-node to [wisp-server-node](https://github.com/MercuryWorkshop/wisp-server-node)
- If you are using bare-mux, as you should, switch your bare transport to [EpoxyTransport](https://github.com/MercuryWorkshop/EpoxyTransport)

> wisp won't give you the E2EE benefits that epoxy has, but it will be maintained more often and will make your transition to epoxy more easier

## What is TOMP?

TOMP (acronym for Too Many Proxies) is an organization containing new standards and implementations for web proxies built on Service Workers.

## Why should I use the TOMP specifications?

Many proxies have been successful without following any specifications. Although the proxies may run very well, a unified backend or protocol must exist. Before the TOMP model, if you wanted to set up `n` proxies, you needed to set up `n` servers. The TOMP model accomplishes a unified backend. In practice, you can have `n` implementations that use only one bare server, saving resources and the maintenance required for multiple servers.

Creating specifications allows for productivity. One developer can implement the TOMP model without writing an entire backend. Instead, they can set up a Bare Server. This saves valuable time and allows the developer to focus more on their code, not HTTPS frameworks or URL parsing libraries.

We want to provide as little as possible for a wide range of compatibility while allowing others to extend the standard.

## What if I want to do something radical instead

That's fine! It should be easy to migrate to a different backend because the BareClient is still standardized. You can swap the backend if you provide a BareClient-compatible implementation.

## Listing

- [Bare Server](./specs/BareServerChanges.md)

- [Bare Client](https://github.com/MercuryWorkshop/bare-mux#bare-mux)

- [WebSocket Protocol](./specs/WebSocketProtocol.md)

## [List of implementations](https://github.com/tomphttp/implementations)

## Planning

Although we take issues and pull requests, much planning for new specifications happens [here](https://discord.gg/UfETkrJBtT).
