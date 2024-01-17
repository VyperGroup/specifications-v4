# Proposal wants

## I want to add

- [x] Add more load indicators to the bare meta
- [ ] In the BareClient, you will be able to sort an array, in which backends will be tried first given these load indicators in a function.
- [ ] Bare over WS. This is for faster speeds before WebTransports are supported in major browsers. This will be an optional feature.
- [x] Bare security. This allows for bare hosters to ensure there is minimal leeching.'
- [ ] Port the things from the old Bare specs here

## I want to change

- [x] Deprecate the language property in the bare meta. It's useless.

### ProxyModel.md

- [ ] Discourage the use of parsers for interception, but still provide parsing libraries that can be used
- [x] Specify new functionality of BareClient
- [ ] Explain more for making proxies

### Not really a part of this repo

- [ ] Develop bare-server-rust, which will use Rust, Neko, and Axum. It will support WebTransports and will be the recommended bare server for self-hosted instances.

## Standardize WT (WebTransports protocol) proxying

- [ ] Standardize
- [ ] Propose an alternative specification that will allow for WT over WS to support HTTP/1.1. This is because many reverse proxies that proxy sites use don't yet support HTTP/3, which is required to use WS. WS is most similar to WT.

## Standardize the BareClient

- [x] Standardize

## Typings

- [x] Provide TS types for the bare meta and the BareClient options
- [x] Provide a JSON schema for the bare meta
