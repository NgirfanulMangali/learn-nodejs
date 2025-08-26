const fs = require('fs');


const data = 
  {  id: 1,
    description: 'Buy groceries',
    status: 'done',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()}
;

fs.writeFile('./myFolder/myFile.json', JSON.stringify(data, null, 2), (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('Written to file successfully!');
  }
});