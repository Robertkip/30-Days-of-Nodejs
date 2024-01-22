/**
 * @param {Function} fn
 * @return {Function}
 */
// Memoization function for caching function results
function memoize(func) {
    let cache = {};
    return function (...args) {
      let key = JSON.stringify(args);
      if (!(key in cache)) {
        cache[key] = func(...args);
      }
      return cache[key];
    };
  }
  
  // Memoized sum function
  const sum = memoize(function (a, b) {
    return a + b;
  });
  
  // Memoized fib function
  const fib = memoize(function (n) {
    if (n <= 1) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  });
  
  // Memoized factorial function
  const factorial = memoize(function (n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  });
  
  // Test the memoized functions
  console.log(sum(2, 3));        // Output: 5
  console.log(fib(6));           // Output: 8
  console.log(factorial(5));     // Output: 120