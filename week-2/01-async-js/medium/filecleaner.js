const fs = require('fs');
const filename ='truman.txt';
const Writefilename = 'gotcha.txt';
function cleaner(){
    fs.readFile(filename,'utf8',function (err,data){
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

            clean = (data) => {
              
                  const datatobewritten = data.split(/\s+/).join(" ");
                    fs.writeFile(Writefilename,datatobewritten,'utf8',function(err){
                        console.log("Data after writing is");
                        fs.readFile(Writefilename,'utf8',function(err,data){console.log(data);})

                    })      
            }
            
            clean(data);
        });
        return;    
}
cleaner();