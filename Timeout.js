function delayExecution(fn, args, t) {
    let timerId;
    
    const cancelFn = () => {
      clearTimeout(timerId);
      console.log('Execution canceled');
    };
    
    timerId = setTimeout(() => {
      fn(...args);
    }, t);
    
    return cancelFn;
  }
  
  // Example usage
  function myFunction(message) {
    console.log(message);
  }
  
  const cancelDelayedExecution = delayExecution(myFunction, ['Delayed execution', 3000]);
  
  // To cancel the delayed execution
  // cancelDelayedExecution();
  