function customReduce(nums, fn, init) {
    var result = init;
    for (var i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result;
}

var nums = [1, 2, 3, 4, 5];
var reducerFn = (acc, val) => acc + val;
var init = 0;

var finalResult = customReduce(nums, reducerFn, init);
console.log(finalResult);