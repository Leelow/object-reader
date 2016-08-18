const namedRegexp = require('named-js-regexp')
const deepEqual = require('deep-equal')

module.exports = {

  /**
   * Implemented regex
   */
  list: {
    getArrayIndex: namedRegexp(/^\[(:<index>\d+)]$/),  // [0]
    getObjectKey: namedRegexp(/^\['(:<index>[a-zA-Z0-9_]*)']$/),  // ['a']
    objectArrayFilterAnd: namedRegexp(/\(?,?\s*((:<key>[^()*=\s']*)?\s*=\s*'(:<value>([^']*)?)'?)+?\)?/g),  // (a='1', b='2')
    operation: namedRegexp(/^@(:<operation>.+)$/)  // @operation
  },

  /**
   * Execute one of the listed regex on a string
   * @param regexName
   * @param string
   * @returns {Array}
   */
  exec: function (regexName, string) {
    if (!this.list.hasOwnProperty(regexName)) throw new Error('The is no regex called "' + regexName + '".')
    var result = []
    var oldObj = null
    var isActive = true
    while (isActive) {
      var res = this.list[regexName].exec(string)
      if (!res) isActive = false
      else {
        var groups = res.groups()
        if (deepEqual(oldObj, groups)) isActive = false
        else {
          oldObj = groups
          result.push(groups)
        }
      }
    }
    return result
  }

}
