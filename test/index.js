/* eslint-env mocha */

const assert = require('chai').assert
const ObjectReader = require('../index.js')

describe('Index', function () {
  describe('read', function () {
    it('should return the result without recursion', function () {
      assert.equal(ObjectReader.read({a: 0}, 'a'), 0)
    })

    it('should return the result with recursion', function () {
      assert.equal(ObjectReader.read({a: [0, 'a']}, 'a.1'), 'a')
    })
  })
})
