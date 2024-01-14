# Bare Server

The TompHTTP Bare Server is a server that will receive requests from a service worker (or any client) and forward a request to the specified URL.

Bare Servers can run on directories. For example, if the directory was `/bare/` then the bare origin would look like `http://example.org/bare/`. The bare origin is passed to clients.

For error information, please refer to the Bare V3 docs.

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

This endpoint is not subject to change. It will remain the same across versions. However, new endpoints can be created and version endpoints can be changed by an implementation.

Response Headers:

```yaml
Content-Type: application/json
```

Response Body:

A JSON response that confirms to the [schema](./types/schema.json), although not all of the properties

> View the [json schema](./types/schema.json.json), if you want to know it is typed.
> In a TS projects you can interact with [these type modules](types/index.d.ts)
