/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    
    return arr.sort((z,y) => fn(z)-fn(y));
};