# WebSocket Protocol Encoding

> The functionality of WS has not changed since
> [Implementation](https://github.com/tomphttp/specifications/blob/master/encodeProtocol.js)

This encoding is similar to URIComponent encoding.

The `Sec-WebSocket-Protocol` header contains protocols. Protocol values have a [character set](#websocket-protocol-characters). This encoding is used when TompHTTP requires characters outside this range in protocols.

## Encoding

Each character in a string is checked to see if it's in the [character set](#websocket-protocol-characters) or a [reserved character](#reserved-characters).

The character is replaced with an escaped value if this condition is met. An escaped value is a percent symbol (`0x37`, ASCII) followed by the characters hexadecimal code. For example, the string `1/100%` would become `1%2F100%25`.

## Decoding

Each character in a string is iterated over. If the character begins with `%`, the following two characters are assumed to be hexadecimal codes. The hexadecimal will be read, followed by the `%` symbol, and the next 2 characters are replaced with the character belonging to the hexadecimal code.

## Reserved Characters

`%`

## WebSocket Protocol Characters

`!#$%&'*+-.0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ^_\abcdefghijklmnopqrstuvwxyz|~`

ASCII characters. 77 Total.
