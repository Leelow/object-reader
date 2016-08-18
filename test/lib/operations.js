/* eslint-env mocha */

const assert = require('chai').assert
const Operations = require('./../../lib/operations.js')

describe('Operations', function () {
  describe('operations test', function () {
    it('should return the object field', function () {
      assert.equal(Operations.apply({a: 0}, 'a'), 0)
      assert.equal(Operations.apply({a: 0}, "['a']"), 0)
    })

    it('should return the array item', function () {
      assert.equal(Operations.apply(['a'], '0'), 'a')
      assert.equal(Operations.apply(['a'], '[0]'), 'a')
    })

    it('should return the filtered objects array', function () {
      assert.deepEqual(Operations.apply([{a: 0, b: 1}, {a: 1, b: 1}, {a: 0, b: 0}], "(a='0',b='0'"), [{a: 0, b: 0}])
      assert.deepEqual(Operations.apply([{a: 0, b: 1}, {a: 1, b: 1}, {a: 0, b: 0}], "(a='2',b='2'"), [])
      assert.throws(function () {
        Operations.apply({}, "(a='2',b='2'")
      })
    })

    it('should return the object after operation', function () {
      assert.deepEqual(Operations.apply([[0], [1], [2]], '@concat'), [0, 1, 2])
      assert.deepEqual(Operations.apply([[0], [1], [2]], '@coNcat'), [0, 1, 2])
      assert.deepEqual(Operations.apply([{a: 0, b: 3}, {a: 1, b: 4}, {a: 2, b: 5}], '@merge'), {a: [0, 1, 2], b: [3, 4, 5]})
      assert.deepEqual(Operations.apply({a: 0}, '@unknown'), {a: 0})
    })
  })
})
