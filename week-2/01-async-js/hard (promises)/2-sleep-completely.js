/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(function(resolve,reject){
        const initialTime = Date.now();
        while(Date.now()-initialTime<milliseconds)
        {
            // Eat five star and do nothing 
        }
        resolve();
    });
}


module.exports = sleep;
