# encody

Tagged string helper for `encodeURIComponent`.

[![npm](https://img.shields.io/npm/v/encody.svg?style=flat-square)](https://www.npmjs.com/package/encody)
[![Build Status](https://img.shields.io/travis/seangenabe/encody/master.svg?style=flat-square)](https://travis-ci.org/seangenabe/encody)
[![node](https://img.shields.io/node/v/encody.svg?style=flat-square)](https://nodejs.org/en/download/)

## Usage

In cases where you would do:

```javascript
let url = 'http://example.com/?cat=' + encodeURIComponent('meow') + '&dog=' + encodeURIComponent('woof')
```

you can just do:
```javascript
const encody = require('encody')
let url = encody`http://example.com?cat=${meow}&dog=${woof}`
```

### encody(strings, ...vals)

Tag function for template string literals.

Encodes everything in `vals` with `encodeURIComponent`.

Returns: String

## License

MIT
