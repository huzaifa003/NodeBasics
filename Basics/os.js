console.log('hello world')
const os = require('os')

console.log(os.type())
console.log(os.release())
console.log(os.homedir())

console.log(__dirname) //Current directory name
console.log(__filename) //Current filename

const path = require('path') //getting the path

console.log(path.dirname(__filename)) //same as directory name gives the directory in which file exists
console.log(path.basename(__filename)) //simple filename
console.log(path.extname(__filename)) //extension name of the file

console.log(path.parse(__filename)) //all as json object