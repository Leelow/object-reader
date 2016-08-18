const Operations = require('./lib/operations.js')

module.exports = {

  /**
   * Loop over the object using path
   * @param obj
   * @param path
   * @returns {*}
   */
  read: function (obj, path) {
    if (path.indexOf('.') === -1) return Operations.apply(obj, path)
    else {
      var arr = path.split('.')
      return this.read(Operations.apply(obj, arr.shift()), arr.join('.'))
    }
  }

}
