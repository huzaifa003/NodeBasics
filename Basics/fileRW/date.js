// const fs = require('fs') //OBJECT IMPORT
// console.log(typeof(fs)) //OBJECT 

const { format } = require('date-fns') //CURLY BRACES MEANS THAT MULTIPLE (FUNCTIONS IN THIS CASE ) ARE BEING PARSED
console.log(typeof(format))


console.log(format(new Date(), 'yyyyMMdd'))