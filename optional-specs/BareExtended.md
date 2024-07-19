# Bare Extended

We are at the point in the web where more than wisp/bare is needed in SW proxies. Two years ago, the W3C introduced new web APIs for security and web advertising, which bypasses the SW entirely. There are now many APIs whose requests can't be intercepted by SWs. While they aren't widely adopted APIs, they will eventually become more widely used, and I imagine that more APIs will be immune to SW proxies than they are now. Therefore, I need to design a new standard for a proxy that can be paired with bare/wisp, and that's what I've been working on. I am designing it in a way where it is selective of what type of requests it would proxy rather than proxying anything HTTP so that it isn't wrongly used as a replacement to bare/wisp and instead as a supplement. It would rarely take those requests, but it is vital for the rare instances when those APIs are needed.

In these APIs, we can't proxy the requests they emit in a SW proxy because it will never have the chance to receive those requests in the transport since the SW won't pick up on them. They are designed this way for security reasons. We highly recommend deleting these APIs until you can introduce bare-extended support into your proxy with the API interceptors supporting it. Many APIs can easily IP log your users and reveal your site to the filters and the proxied site.

> More APIs whose requests can bypass the SW will inevitably be drafted and released on the web. Most of these violating APIs are in the draft stage.

The easiest way to search for these APIs through [looking here](https://github.com/search?q=org%3Aw3c+NOT+is%3Afork+path%3A*.bs+OR+path%3A*.html+"%5B%3Drequest%2Fservice-workers+mode%3D%5D"&type=code). You specifically want to check to see if the directive `[service-workers mode]` on the Request initiation is set to false. You may have to search APIs provided by Fido in a slightly different way.

## APIs you should delete

- [FedCM](https://developer.mozilla.org/en-US/docs/Web/API/FedCM_API) - This one is hazardous because it is the easiest to log IPs from. When it requests for the user identity endpoint, which returns a JSON, you return the user's IP in the JSON, and then back on the client who used the API, you post that IP to an endpoint on your server. It is only possible to entirely prevent this by deleting the API or updating your interceptors to support proxying under bare-extended.
  - [FedCM IdentityProvider - Config URL](https://fedidcg.github.io/FedCM/#dom-identityproviderconfig-configurl)
  - [FedCM Config File](https://fedidcg.github.io/FedCM/#fetch-config-file)
- Web Credentials API
