# Bare Server

The TompHTTP Bare Server is a server that receives requests from a service worker (or any client) and forwards them to the specified URL.

Bare Servers can run on directories. For example, if the directory were `/bare/`, the bare origin would look like `http://example.org/bare/`. The bare origin is passed to clients.

For information about errors, please refer to the bare v3 docs.

## Implementations

## Request server info

| Method | Endpoint |
| ------ | -------- |
| `GET`  | /        |

This endpoint is not subject to change. It will remain the same across versions. However, new endpoints can be created, and version endpoints can be changed through implementation.

Response Headers:

```yaml
Content-Type: application/json
```

Response Body:

A JSON response that confirms to the [schema](../types/schema.json), although not all of the properties.

> View the [JSON schema](../types/schema.json), if you want to know it is typed.
> In a TS project, you can interact with [these type modules](../types/index.d.ts)

## For hosters

### Utilizing the Bare server

The standard Bare Client is now [bare-mux](https://github.com/MercuryWorkshop/bare-mux#bare-mux).

## Considerations when running an implementation under NGINX, Apache2, or Lighttpd

Due to the extensive nature of header values, you must configure your web server to allow these large headers.

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

### Future Ideas for you to try

- A bare v4 server in Go that uses [quic-go](https://pkg.go.dev/github.com/lucas-clemente/quic-go).
- Develop bare-server-js, which supports the basic JS Request and Response. Bare-server-js would encompass all JS runtimes, albeit node with a bit of polyfilling.
