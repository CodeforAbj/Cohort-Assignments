const fs = require('fs');
function reader (filename){
    console.log("Called for Reader");
   const prevdata = fs.readFile(filename,'utf8',function (err,data){
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
        
        console.log(data);
        return data;
    });
    return prevdata;    
}

function writer(filename){
    console.log("Called for Writer");
   fs.writeFile(filename,datatobewritten,'utf8',function (err){
    if (err) {
        console.error('Error writing the file:', err);
        return;
    }
    console.log("Data Written");
    });
    return;    
}
const prev = reader("Sample-Text.txt");
const datatobewritten = prev + "Hoo is You !!"; //fails due to async nature
writer("Sample-Text.txt");
reader("Sample-Text.txt");