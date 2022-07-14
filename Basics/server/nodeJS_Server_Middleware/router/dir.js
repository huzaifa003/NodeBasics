const express = require('express')
const path  = require('path')
const router = express.Router()


router.get('^/$|/index(.html)?',(req,res)=> {
    res.sendFile(path.join(__dirname,'../views/index.html'));
    console.log("Redirecting from index")
    // res.redirect('/weather')
    
})

router.get('/new-page(.html)?',(req,res)=> {
    res.sendFile(path.join(__dirname,'../views/new-page.html'));
    console.log("Redirecting from index")
})


router.get('/weather',(req,res)=> {
    console.log("Hello Form Weathe")
    res.send("Hello From Weather")
})

router.get('/*',(req,res, next)=>{
    console.log("This is a 404 PAge")
    res.status(404).sendFile(path.join(__dirname,'../views/404.html'))
    next()
},(req,res) =>{
    console.log("This is error page")
})



module.exports = router