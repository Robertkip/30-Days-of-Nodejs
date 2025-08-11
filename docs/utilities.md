## Utilities and Helpers

### arraysort.js: `flat(arr, depth)`
- Recursively flattens nested arrays up to `depth`
- Example:
  ```js
  flat([1,[2,[3]]], 2) // [1,2,3]
  ```

### memoize.js: `memoize(func)`
- Caches results by JSON-serialized args
- Examples:
  ```js
  const sum = memoize((a,b) => a + b)
  const fib = memoize(n => n <= 1 ? n : fib(n-1) + fib(n-2))
  const factorial = memoize(n => n <= 1 ? 1 : n * factorial(n-1))
  ```

### sleep.js: `sleep(millis)`
- Returns a Promise that resolves after `millis`
- Example:
  ```js
  await sleep(2000)
  ```

### Timeout.js: `delayExecution(fn, args, t)`
- Schedules `fn(...args)` after `t` ms; returns `cancelFn()` to cancel
- Example:
  ```js
  const cancel = delayExecution(console.log, ['hello'], 3000)
  // cancel()
  ```

### test.js: `promiseAll(functions)`
- Given `[() => Promise, ...]` returns a Promise resolving to an array of results preserving order
- Example:
  ```js
  const promise = promiseAll([() => Promise.resolve(42)])
  promise.then(console.log) // [42]
  ```

### task.js: `filter(arr, fn)`
- Custom implementation of Array.filter
- Example:
  ```js
  filter([0,10,20,30], n => n > 10) // [20,30]
  ```

### Mongodb/app.js: `getHash(content)`
- Returns MD5 hex hash of input; demonstrated by hashing file contents via stream

### github.js
- Express server exposing:
  - GET `/` -> "Hello World"
  - POST `/webhooks` -> echoes and logs body
- Start: `node github.js` (default port 9000)

### remove.js
- Uses `fs-extra` to recursively remove a folder path

### progress.js
- Demonstrates `progress` package usage to render a CLI progress bar

### Day 1/server.js
- Basic Node `http` server responding with plain text
- Start: `node "Day 1/server.js"`

### Day 2/index.js and app.js
- Demonstrates fs read/write/append/rename (sync and async)
- Start: `node "Day 2/index.js"` and `node "Day 2/app.js"`