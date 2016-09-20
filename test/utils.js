const decache = require('decache')

module.exports = {

  /**
   * Require module as RequireJS
   * @param module
   * @returns {*}
   */
  requireJS: function (module) {
    var oldDefine = global.define // Save old "define"
    var res = null
    global.define = function (obj) { // Fake define function to catch the object
      res = obj()
    }
    global.define.amd = true  // Fake define identifier
    decache(module) // Decache module in case of precedent node require
    require(module) // Node require
    if (oldDefine) global.define = oldDefine // Reload old "define" or clean the fake
    else delete global.define
    return res
  }
}
