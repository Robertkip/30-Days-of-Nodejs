/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let result = []
    if(arr.length == 0) return []
    if(size > arr.length) return [arr]
    let count = 0, subArr = []
    for(let i = 0; i < arr.length; i++) {
        count++
        subArr.push(arr[i])
        if(count == size || i == arr.length - 1) {
            count = 0
            result.push(subArr)
            subArr = []
        }
    }
    return result
};