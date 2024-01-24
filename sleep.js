const e = require("express");

/*
@param {number} millis
@return {Promise}

*/
async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(resolve, millis)
        });
    }

async function example() {
    console.log('Before sleep');
    await sleep(2000);
    console.log('After sleep');
}
example();

/**
 * let t = Date.now();
 * sleep(100).then(() => console.log(Date.now() - t));
 */

