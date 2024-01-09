# Bare Server

The TompHTTP Bare Server is a server that will receive requests from a service worker (or any client) and forward a request to the specified URL.

Bare Servers can run on directories. For example, if the directory was `/bare/` then the bare origin would look like `http://example.org/bare/`. The bare origin is passed to clients.

- [Errors](./BareServerErrors.md)
- [V1 Endpoints](./BareServerV1.md)
- [V2 Endpoints](./BareServerV2.md)
- [V3 Endpoints](./BareServerV3.md)

## Considerations when running an implementation under NGINX, Apache2, or Lighttpd

Due to the nature of header values being large, you must configure your web server to allow these large headers.

NGINX:

```nginx
server {
	# ...
	# Upgrade WebSockets
	proxy_set_header Upgrade $http_upgrade;
	proxy_set_header Connection 'Upgrade';
	# Increase header buffer
	proxy_connect_timeout 10;
	proxy_send_timeout 90;
	proxy_read_timeout 90;
	proxy_buffer_size 128k;
	proxy_buffers 4 256k;
	proxy_busy_buffers_size 256k;
	proxy_temp_file_write_size 256k;
	# proxy_pass http://localhost:8001;
	# ...
}
```

## Request server info

| Method | Endpoint |
| ------ | -------- |
| `GET`  | /        |

This endpoint is not subject to change. It will remain the same across versions.

Response Headers:

```
Content-Type: application/json
```

Response Body:

```json
{
  "reassignEndpoint": {
    "proxy", "current" /* Instead of requesting /bare/proxy you request /bare/current */
  },
  "supportedSpecifications": [
    {
      by: "TompHTTP",
      name: "HTTP over WS",
      endpoint: "http-over-ws"
    }
  ],
  "isSecured": "true",
  "loadIndicators": {
    "memoryTotal": "8010000", /* kb */
    "memoryFree": "6970000", /* kb */
    "activeConns": "9000",
    "latency": "200ms"
  },
  "maintainer": {
    "email": "maintenance@example.org",
    "website": "https://projects.example.org/"
  },
  "project": {
    "name": "Project",
    "description": "Unique TOMP implementation",
    "email": "development@example.org",
    "website": "https://git.example.org/",
    "repository": "https://git.example.org/dev/project.git",
    "version": "1.0.0"
  }
}
```

> View the [json schema](./bare-meta-schema.json), if you want to know it is typed.

A ? after the property indicates it's optional.

- maintainer {Object}?
  - email {String}?
  - website {String}?
- project {Object}?: The project's information.
  - name {String}?
  - description {String}?
  - email {String}?
  - website {String}?
  - repository {String}?: A link to the project's .git file.
  - version {String}?: The [semver](https://semver.org/) version number of this project's backend.
- versions {Array{String}}: A list of version names this server supports. (resolvable to http://server/versionName/)
- language {String{NodeJS,Deno,Bun,ServiceWorker,Java,PHP,Rust,C,C++,C#,Ruby,Go,Crystal,Shell}}: The runtime. "language" is kept for legacy purposes.
- memoryUsage {Number}?: The memory used by the server in base MB.

> TODO: Instead of providing this provide types inside of the repo

In NodeJS, memoryUsage should be calculated by:

```js
Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100;
```
