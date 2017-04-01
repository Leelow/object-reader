# object-reader 

[![Greenkeeper badge](https://badges.greenkeeper.io/Leelow/object-reader.svg)](https://greenkeeper.io/)
[![npm version][npm-version-image]][npm-version-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Travis Status][travis-image]][travis-url]
[![Appveyor Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![Dev-dependencies][dev-dependencies-image]][dev-dependencies-url]
[![JavaScript Style Guide][javascript-standard-image]][javascript-standard-url]
[![Codacy Badge][codacy-image]][codacy-url]

This module allows you to access deep properties and make operations on objects using a path.

### What is a "path" ?

A path is a string which describes how an object will be read.

### Install

### Node.js

```bash
npm install object-reader --save
```

### Usage

```javascript
var obj = {
  a: {
    b: 0,
    c: [1, 2]
  },
  d: [
    {
      e: 0,
      f: 1,
      g: 2,
    },
    {
      e: 0,
      f: 2,
      g: 2,
      h: 3
    }
  ],
  g: [ [0, 1], [1, 2] ],
  "b.c": "escaping works !"
};

var objectReader = require("object-reader");

// get property
objectReader.read(obj, "a.b") // 0
objectReader.read(obj, "a.['b']") // 0
objectReader.read(obj, "a.c.[0]") // 1
objectReader.read(obj, "a.c.0") // 1

// get filtered array of objects
objectReader.read(obj, "d.(e='0', f='1')") // [ {e: 0, f: 1, g: 2 } ], get array of objects where e = 0 and f = 1
objectReader.read(obj, "d.(g='2')") // [ {e: 0, f: 1, g: 2 }, {e: 0, f: 2, g: 2, h: 3 } ], get array of objects where g = 2
objectReader.read(obj, "d.(e='1')") // [], return an empty array because there is no object having e = 1

// apply operation
objectReader.read(obj, "g.@concat") // [0, 1, 1, 2], concat array keeping duplicates
objectReader.read(obj, "d.@merge") // {e: [0, 0], f: [1, 2], g: [2, 2], h: [3] }, make array with object fields

// escaping dots
objectReader.read(obj, "a.b\\.c") // "escaping works !"

 ```
### Immutability

Reading operations are guarantee without side effects.

### Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
npm install
npm test
```

## License

[MIT](LICENSE)

[npm-version-image]: https://badge.fury.io/js/object-reader.svg
[npm-version-url]: https://www.npmjs.com/package/object-reader
[downloads-image]: https://img.shields.io/npm/dt/object-reader.svg?maxAge=3600
[downloads-url]: https://www.npmjs.com/package/object-reader
[travis-image]: https://travis-ci.org/Leelow/object-reader.svg?branch=master
[travis-url]: https://travis-ci.org/Leelow/object-reader
[appveyor-image]: https://ci.appveyor.com/api/projects/status/c36ad48d9f3jvpra?svg=true
[appveyor-url]: https://ci.appveyor.com/project/Leelow/object-reader
[coveralls-image]: https://coveralls.io/repos/github/Leelow/object-reader/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/Leelow/object-reader?branch=master
[dependencies-image]: https://david-dm.org/leelow/object-reader/status.svg
[dependencies-url]: https://david-dm.org/leelow/object-reader?type=dev
[dev-dependencies-image]: https://david-dm.org/leelow/object-reader/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/leelow/object-reader?type=dev
[javascript-standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[javascript-standard-url]: http://standardjs.com/
[codacy-image]: https://api.codacy.com/project/badge/Grade/528dc51671de4a218f405116e24fca23
[codacy-url]: https://www.codacy.com/app/leo-lozach/object-reader?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Leelow/object-reader&amp;utm_campaign=Badge_Grade
