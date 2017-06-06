/* eslint-env mocha */

const assert = require('assert')
const Regexes = require('./../../lib/regexes.js')

describe('Regexes', function () {
  describe('regex test', function () {
    it('should return an error with unknown regex', function () {
      assert.throws(function () {
        Regexes.exec('unknownRegex', '[0]')
      })
    })

    it('should match (getArrayIndex)', function () {
      assert.deepEqual(Regexes.exec('getArrayIndex', '[0]'), [{index: '0'}])
      assert.equal('[bad_index]'.match(Regexes.list.getArrayIndex), null)
    })

    it('should match (getObjectKey)', function () {
      assert.deepEqual(Regexes.exec('getObjectKey', "['a']"), [{index: 'a'}])
      assert.equal('[0]'.match(Regexes.list.getObjectKey), null)
    })

    it('should match (objectArrayFilterAnd)', function () {
      assert.deepEqual(Regexes.exec('objectArrayFilterAnd', ("(a='1', b='2')")),
        [{key: 'a', value: '1'}, {key: 'b', value: '2'}])
      assert.equal('[0]'.match(Regexes.list.objectArrayFilterAnd), null)
    })

    it('should match (operation)', function () {
      assert.deepEqual(Regexes.exec('operation', '@operation'), [{operation: 'operation'}])
      assert.equal('_@err'.match(Regexes.list.operation), null)
    })
  })
})
