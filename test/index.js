/* eslint-env mocha */

const assert = require('assert')
const ObjectReader = require('../index.js')

describe('Index', function () {
  describe('read', function () {
    it('should return the result easily', function () {
      assert.equal(ObjectReader.read({a: 0}, 'a'), 0)
    })

    it('should return the result escaping dots', function () {
      assert.equal(ObjectReader.read({a: {'a.e': 'a'}}, 'a.a\\.e'), 'a')
    })

    it('should return the same object', function () {
      assert.deepEqual(ObjectReader.read({a: 0}, ''), {a: 0})
    })

    it('should return undefined', function () {
      assert.equal(ObjectReader.read({a: {b: 1}}, 'a.b.c'), undefined)
      assert.equal(ObjectReader.read({a: {b: 1}}, 'a.c.b'), undefined)
    })
  })
})
