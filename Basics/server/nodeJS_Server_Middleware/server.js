
const express = require('express')
const path = require('path')
const port = process.env.PORT | 3500

app = express()

//3 Types of middleware
//Custom, Builtin, thirdparty

//below is first built in middleware app.use is to apply to all routes
//this one handles urlencoded data
//aka form data
//urlencoded data is sent to the server parsing the html body
//JSON is just the format in which the data will be sent 
//Both are part of body-parser in require 


//BOTH ARE USED FOR POST REQUESTS

app.use(express.urlencoded({extended:false})) //false means cant post nested objects {username: {firstname : x}} 
app.use(express.json()) //enables to send json objects

app.use('/',express.static(path.join(__dirname,'/public')))

app.use('/employee',require('./router/api/employee'))
app.use('/register', require('./router/api/registeration'))
app.use('/login', require('./router/api/authentication'))
app.use('/',require('./router/dir'))
app.listen(port, ()=>{
    console.log(`Port Listening at ${port}`)
})
