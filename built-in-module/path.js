const path = require('path')

// Assigning a path to the myPath variable
const myPath = 'Desktop/NodeJSTut/app.js'

const pathInfo = {
    fileName: path.basename(myPath),
    folderName: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath),
}

// Let's See The Results:
console.log(pathInfo);
console.log(path.join('grandParentFolder', 'parentFolder', 'child.txt'))