const Operations = require('./lib/operations.js')

/**
 * Split a path escaping dots
 * @param path
 * @returns {Array}
 */
function splitPath (path) {
  return path.split(/(.*?[^\\])\./).filter(function (item) {
    return item !== ''
  }).map(function (item) {
    return item.replace(/\\/g, '')
  })
}

module.exports = {

  /**
   * Loop over the object using path
   * @param obj
   * @param path
   * @returns {*}
   */
  read: function (obj, path) {
    var split = splitPath(path)
    while (split.length > 0) {
      obj = Operations.apply(obj, split.shift())
    }
    return obj
  }

}
