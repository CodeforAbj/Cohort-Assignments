/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    console.log("Begin");
    let currentTime = new Date();

    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    let currentMilliseconds = currentTime.getMilliseconds();
    let t1=currentMilliseconds;
    console.log(`Current time: ${currentHours}:${currentMinutes}:${currentSeconds}.${currentMilliseconds}`);

    let sum=0;
    for(let i=1;i<=n;i++)
    {
        sum=sum+i;
    }
    console.log("End");
    currentTime = new Date();

    currentHours = currentTime.getHours();
    currentMinutes = currentTime.getMinutes();
    currentSeconds = currentTime.getSeconds();
    currentMilliseconds = currentTime.getMilliseconds();
    t2=currentMilliseconds;
    console.log(`Current time: ${currentHours}:${currentMinutes}:${currentSeconds}.${currentMilliseconds}`);
    console.log("Time elapsed " + (t2-t1)+"ms");

}
calculateTime(100);