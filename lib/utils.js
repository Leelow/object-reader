module.exports = {

  /**
   * Concat array of arrays
   * @param array
   * @returns {*}
   */
  concat: function (array) {
    if (!Array.isArray(array)) throw new Error('The argument must be an array of arrays.')
    return Array.prototype.concat.apply([], array)
  },

  /**
   * Merge array of object to create a new object with array of values
   * @param array
   * @returns {{}}
   */
  merge: function (array) {
    var result = {}
    array.forEach(function (item) {
      if (Array.isArray(item) || typeof item !== 'object') throw new Error('All the items of the array to merge must be objects.')
      Object.keys(item).forEach(function (key) {
        if (!result.hasOwnProperty(key)) result[key] = [item[key]]
        else result[key].push(item[key])
      })
    })
    return result
  }

}
