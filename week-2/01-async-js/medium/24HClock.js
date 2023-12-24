
clock = () => {
    const dateToBeUsed = new Date();
    console.log(`${dateToBeUsed.getHours()}:${dateToBeUsed.getMinutes()}:${dateToBeUsed.getSeconds()}`);
}
const intID = setInterval(clock,1000);
setTimeout(clearInterval,10000,intID);
