const http = require('http');
const url = require('url')
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events');
class Emitter extends EventEmitter { };
// initialize object 
const myEmitter = new Emitter();
myEmitter.on('log', (msg, fileName) => logEvents(msg, fileName));


const PORT = process.env.PORT || 3500;

var server = http.createServer(function (req, res) {   // 2 - creating server

    console.log("SERVER LISTENING")
   
    res.writeHead(200,{'content_type' : 'text/html'}) //200 means okie then content type is html to be written
    res.write(req.url);
    
    query = url.parse(req.url,true).query //PARSES THE URL GET REQUEST ?year=2000&month=4

    console.log(query)

    res.end(query.year);
    
    //handle incomming requests here..

});

server.listen(PORT);
