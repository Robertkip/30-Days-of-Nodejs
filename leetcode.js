
// Memoization function
function memoize(func) {
  let cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    } else {
      const result = func(...args);
      cache[args] = result;
      return result;
    }
  };
}

// Original functions
const sum = memoize(function(a, b) {
  return a + b;
});

const fib = memoize(function(n) {
  if (n <= 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
});

const factorial = memoize(function(n) {
  if (n <= 1) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
});

// Test the memoized functions
console.log(sum(3, 4)); // This will calculate and cache the result
console.log(sum(3, 4)); // This will return the cached result without recalculating
console.log(fib(5));     // This will calculate and cache the result
console.log(fib(5));     // This will return the cached result without recalculating
console.log(factorial(4)); // This will calculate and cache the result
console.log(factorial(4)); // This will return the cached result without recalculating
