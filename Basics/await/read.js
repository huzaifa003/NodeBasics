const fsPromise = require('fs').promises
//TYPES OF PROMISES
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

async function asyncOps() {
   
    try {
        console.log("HELLO")
        let data = await fsPromise.readFile('./Basics/await/name.txt','utf-8')
        console.log(data)

        data = await fsPromise.readFile('./Basics/await/name.txt','utf8') //omit await and check results
        console.log(data)
        
        console.log("hello") // HERE HELLO ONLY PRINTS AFTER THE FULES ARE READn

    } catch (err) {
        console.log(err)
    }
}


asyncOps()

process.on('uncaughtException', err=> {
    console.log(`HERE IS AN UNCALLED ERROR: ${err}`)
    process.exit(1)
})