const fs = require('fs');

try{
    // Write to file synchronously
    fs.writeFileSync('./myFolder/myFileSync.txt', 'This is a sample text file created using Node.js! kwkwkwkwkwwkwk', {encoding: 'utf-8'});
    console.log('Write operation successful');

  

} catch(err){
    console.log('Error occurred!');
    console.log(err);
}