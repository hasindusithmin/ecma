
//import express module
const express = require('express')


//create application object
const app = express()

//define port
const port = 3000

//GetMapping
app.get('/',(req,res)=>{
    res.sendStatus(200)
})

//GetMapping add two number http://127.0.0.1/add/2/6
app.get('/add/:num1/:num2',(req,res)=>{
    const {num1,num2} = req.params
    const ans = num1 + num2;
    res.send(ans)
})

//called app.listen method
app.listen(port,()=>{
    console.log('server is start up');
})