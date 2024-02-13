/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let task = {};

    this.forEach(i => {
        if (task[fn(i)]) task[fn(i)].push(i);
        else task[fn(i)] = [i]
    });
    return task
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */