
//import express module
const express = require('express')


//create application object
const app = express()

//define port
const port = 3000

//GetMapping
app.get('/',(req,res)=>{
    res.sendStatus()
})

//called app.listen method
app.listen(port,()=>{
    console.log('server is start up');
})