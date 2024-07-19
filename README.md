# TOMPHTTP Specifications - V4

## What is TOMP?

TOMP (acronym for Too Many Proxies) is an organization containing new standards and implementations for web proxies built on Service Workers.

## Why should I use the TOMP specifications?

Many proxies have been successful without following any specifications. Although the proxies may run very well, a unified backend or protocol must exist. Before the TOMP model, if you wanted to set up `n` proxies, you needed to set up `n` servers. The TOMP model accomplishes a unified backend. In practice, you can have `n` implementations that use only one bare server, saving resources and the maintenance required for multiple servers.

Creating specifications allows for productivity. One developer can implement the TOMP model without writing an entire backend. Instead, they can set up a Bare Server. This saves valuable time and allows the developer to focus more on the code they write, not HTTPS frameworks or URL parsing libraries.

We want to provide as little as possible for a wide range of compatibility while allowing others to extend the standard.

## What if I want to do something radical instead

That's fine! It should be easy to migrate to a different backend because the BareClient is still standardized. You can swap the backend if you provide a BareClient-compatible implementation.

## Listing

- [Bare Server](./specs/BareServerChanges.md)

- [Bare Client](https://github.com/MercuryWorkshop/bare-mux#bare-mux)

- [WebSocket Protocol](./WebSocketProtocol.md)

### Listing - Optional specs

> These aren't finished

- [Bare over WT](./specs/BareWT.md)

## [List of implementations](https://github.com/tomphttp/implementations)

## Planning

Although we take issues and pull requests, much planning for new specifications happens [here](https://discord.gg/UfETkrJBtT).
