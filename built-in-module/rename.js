const fs = require('fs');

fs.rename('./myFolder/mFile.txt', 'myFileAs.txt', (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('File renamed successfully!')
})