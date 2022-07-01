const fs  = require('fs')
const path = require('path')

fs.readFile('./Basics/fileRW/name.txt', (err,data) => {
    if (err)
    {
        throw err
    }
    else
    {
        console.log("FILE READ COMPLETE")
    }

    console.log(data.toString())
})

fs.writeFile(path.join(__dirname,'name_return.txt'),'What should I do with your stupid name file?',(err) =>{
    if (err)
    {
        throw err
    }
    else
    {
        console.log("FILE WRITE COMPLETE")
    }

    //DUE TO ASYNC NATURE ONE SHOULD PUT THE APPEND PART INSIDE THE FILE WRITE SO WE KNOW it's APPENDED

    fs.appendFile(path.join(__dirname,'name_return.txt'),"\n THIS HAS BEEN APPENDED", (err) =>
    {
        if(err)
        {
            throw err
        }
        else
        {
            console.log("APPENDED")
        }
    })
})

console.log("Hello") //Note that hello is printed first and write is completed second because of ASYNC that means other processing is done while the file is being read

process.on('uncaughtException', err => {
    console.log(err)
})