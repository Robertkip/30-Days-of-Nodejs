/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, i) {
    if(i==0) return arr;
    let result = [];
    const traverse = (a, i) => {
        for(let j in a) {
            if(i>0 && Array.isArray(a[j]))
                traverse(a[j], i-1)
            else
                result.push(a[j])
        }
    }
    traverse(arr, i);
    return result;
};