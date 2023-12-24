/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

// let dumb = wait(2000);
// console.log("check1");
// dumb.then(function(){console.log("Shit")});
// console.log("check2");
module.exports = wait;
