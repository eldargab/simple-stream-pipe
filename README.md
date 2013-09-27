# simple-stream-pipe

Pipe [simple-stream](https://github.com/eldargab/stream-simple) to node's core
writable stream.

## Usage

```javascript
var pipe = require('simple-stream-pipe')
pipe(src, writable)
```

You can also pass optional callback function which will be called
on a `src` error.

`pipe()` has "fire and forget" semantics and assumes that it is the
only writer to writable.

Writables that have a resource behind must have `.destroy()` method.

## Installation

via npm

```
npm install simple-stream-pipe
```

## License

MIT