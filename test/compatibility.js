/* eslint-env mocha */

const Utils = require('./utils.js')
const decache = require('decache')
const assert = require('chai').assert

describe('Index', function () {
  describe('read', function () {
    it('should return an object-reader instance using node require', function () {
      var ObjectReader = require('../index.js')
      assert.deepEqual(Object.keys(ObjectReader), ['read'])
      decache('../index')
    })

    it('should return an object-reader instance loading as requirejs module', function () {
      var ObjectReader = Utils.requireJS('../index.js')
      assert.deepEqual(Object.keys(ObjectReader), ['read'])
      decache('../index.js')
    })
  })
})
