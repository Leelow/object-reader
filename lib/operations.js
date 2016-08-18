const Regexes = require('./regexes.js')
const Utils = require('./utils.js')

module.exports = {

  /**
   * Available operations
   */
  list: {

    /**
     * Return an item in an array
     * @param arr
     * @param path
     * @returns {*}
     */
    getArrayIndex: function (arr, path) {
      return arr[Regexes.exec('getArrayIndex', path)[0].index]
    },

    /**
     * Return a field in an object
     * @param obj
     * @param path
     * @returns {*}
     */
    getObjectKey: function (obj, path) {
      return obj[Regexes.exec('getObjectKey', path)[0].index]
    },

    /**
     * Filter fields to select objects in an object array
     * @param arr
     * @param path
     * @returns {Array|Array.<T>|*}
     */
    objectArrayFilterAnd: function (arr, path) {
      if (!Array.isArray(arr)) throw new Error('The object must be an Array at path "' + path + '".')
      var groups = Regexes.exec('objectArrayFilterAnd', path)
      return arr.filter(function (item) {
        return !groups.find(function (group) {
          return String(item[group.key]) !== String(group.value)
        })
      })
    },

    /**
     * Others operations on array/object
     * @param obj
     * @param path
     * @returns {*}
     */
    operation: function (obj, path) {
      var operation = Regexes.exec('operation', path)[0].operation.toLowerCase()
      switch (operation) {
        case 'concat':
          return Utils.concat(obj)
        case 'merge':
          return Utils.merge(obj)
        default:
          return obj
      }
    }
  },

  /**
   * Apply an operation corresponding to the path on an object
   * @param obj
   * @param path
   * @returns {*}
   */
  apply: function (obj, path) {
    var regex = null
    var regexName = null
    Object.keys(Regexes.list).forEach(function (name) {
      if (path.match(Regexes.list[name])) {
        regex = Regexes.list[name]
        regexName = name
      }
    })
    if (!regex) return obj[path]
    return this.list[regexName](obj, path)
  }

}
