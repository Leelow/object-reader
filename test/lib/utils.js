/* eslint-env mocha */

const assert = require('assert')
const Utils = require('./../../lib/utils.js')

describe('Utils', function () {
  describe('concat', function () {
    it('should return a concatenated array', function () {
      assert.deepEqual(Utils.concat([[1], [2], [3]]), [1, 2, 3])
    })

    it('should return an error when arg is not an array', function () {
      assert.throws(function () {
        Utils.concat({})
      })
    })
  })

  describe('merge', function () {
    it('should return a merged object', function () {
      assert.deepEqual(Utils.merge([{a: 0, b: 1}, {a: 2, b: 3}]), {a: [0, 2], b: [1, 3]})
    })

    it('should return an error when array does not only contain object', function () {
      assert.throws(function () {
        Utils.merge([{a: 0}, {a: 1}, 'r'])
      })
    })
  })
})
