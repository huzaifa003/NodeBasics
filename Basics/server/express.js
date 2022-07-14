const express = require('express')
const port = 3500

app = express()

app.get('^/$|/index(.html)?',(req,res)=> {
    console.log("Redirecting from index")
    res.redirect('/weather')
    
})

app.get('/weather',(req,res)=> {
    console.log("Hello Form Weathe")
    res.send("Hello From Weather")
})

app.get('/*',(req,res, next)=>{
    console.log("This is a 404 PAge")
    res.status(404).send("404")
    next()
},(req,res) =>{
    console.log("This is error page")
})

app.listen(port, ()=> {
    console.log(`Listening on  ${port}`);
})