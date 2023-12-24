
clock = () => {
    const dateToBeUsed = new Date();
    let hours = dateToBeUsed.getHours()
    const ampm = hours<=12 ? 'AM' :'PM';
    hours = hours%12 || 12;
    console.log(`${hours}:${dateToBeUsed.getMinutes()}:${dateToBeUsed.getSeconds()} ${ampm}`);
}
const intID = setInterval(clock,1000);
setTimeout(clearInterval,10000,intID);
