[![npm](https://img.shields.io/npm/dt/object-reader.svg?maxAge=2592000)](https://www.npmjs.com/package/object-reader)
[![Build Status](https://travis-ci.org/Leelow/object-reader.svg?branch=master)](https://travis-ci.org/Leelow/object-reader)
[![Coverage Status](https://coveralls.io/repos/github/Leelow/object-reader/badge.svg?branch=master)](https://coveralls.io/github/Leelow/object-reader?branch=master)
[![Dependencies](https://david-dm.org/leelow/object-reader/status.svg)](https://david-dm.org/leelow/object-reader)
[![Dev-dependencies](https://david-dm.org/leelow/object-reader/dev-status.svg)](https://david-dm.org/leelow/object-reader?type=dev)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm](https://img.shields.io/npm/l/object-reader.svg?maxAge=2592000)](http://spdx.org/licenses/MIT)

# object-reader 
This modules allows you to access deep properties and make operations on objects using a path.

### What is a "path" ?

A part is a string which describes how an object will be read.

### Install

### Node.js

    npm install object-reader --save

### Usage

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
      g: [ [0, 1], [1, 2] ]
    };
    
    var objectReader = require("object-reader");
    
    // get property
    objectReader.read(obj, "a.b") // 0
    objectReader.read(obj, "a.['b']") // 0
    objectReader.read(obj, "a.c.[0]") // 1
    objectReader.read(obj, "a.c.0") // 1
    
    // get filtered array of objects
    objectReader.read(obj, "a.d.(e='0', f='1')" // [ {e: 0, f: 1, g: 2 } ], get array of objects where e = 0 and f = 1
    objectReader.read(obj, "a.d.(g='2')" // [ {e: 0, f: 1, g: 2 }, {e: 0, f: 2, g: 2, h: 3 } ], get array of objects where g = 2
    objectReader.read(obj, "a.d.(e='1')" // [], return an empty array because there is no object having e = 1
    
    // apply operation
    objectReader.read(obj, "g.@concat") // [0, 1, 1, 2], concat array keeping duplicates
    objectReader.read(obj, "a.d.@merge") // {e: [0, 0], f: [1, 2], g: [2, 2], h: [3] }, make array with object fields
    
### Immutability

Reading operations are guarantee without side effects.
