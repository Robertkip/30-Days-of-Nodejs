//javascript
function sumOfPromises(promise1, promise2) {
  return new Promise((resolve, reject) => {
    Promise.all([promise1, promise2])
      .then((values) => {
        const sum = values[0] + values[1];
        resolve(sum);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Example usage
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 1500);
});

sumOfPromises(promise1, promise2)
  .then((result) => {
    console.log('Sum of promises:', result); // Output: Sum of promises: 15
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
