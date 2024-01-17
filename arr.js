/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i);
}
return result;
};