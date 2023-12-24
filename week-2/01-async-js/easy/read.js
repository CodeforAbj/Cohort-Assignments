const fs = require('fs');

function counter(t){
    if(t>0){
        console.log(t);
        t--;
        setTimeout(counter,1000,t);
        
    }
    else{
        console.log("Here it is");
        return;
    }
}
function reader (filename){
    console.log("Called for Reader");
   fs.readFile(filename,'utf8',function (err,data){
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
        console.log(data);
    });
    return;    
}
console.log("This program answer's Universe's Secrets");

reader("Sample-Text.txt");
function timeEater(){
    for(let i=0;i<100000000;i++){

    }
    console.log("Time Wasted");
}
timeEater();