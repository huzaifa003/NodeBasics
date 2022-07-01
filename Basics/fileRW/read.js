const fs = require('fs')


fs.readFile('./Basics/fileRW/name.txt',(err,data)=> { //reading the file
    if (err) 
    {
        throw err
    }
    else
    {
        console.log(data.toString())
    }
})


fs.readFile('./Basics/fileRW/name.txt','utf8',(err,data)=> { //reading the file with ENCODING
    if (err) 
    {
        throw err
    }
    else
    {
        console.log(data)
    }
})


fs.readFile('./Basics/fileRW/name2.txt','utf8',(err,data)=> { //ERROR IN name2
    if (err) 
    {
        throw err
    }
    else
    {
        console.log(data)
    }
})

process.on('uncaughtException', err=> {
    console.log(`HERE IS AN UNCALLED ERROR: ${err}`)
    process.exit(1)
})