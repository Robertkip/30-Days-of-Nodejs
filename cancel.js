const cancellable = function(fn, args, t) {
    let timerId;
    const cancelFn = () => {
        clearTimeout(timerId);
        console.log('Cancelled');
    };
    timerId = setTimeout(() => {
        fn(...args);
    }, t);
    return cancelFn;
}

function myFunction(message) {
    console.log(message);
}

const cancelDelayedExecution = cancellable(myFunction, ['Welcome to cancel task!'], 1000);