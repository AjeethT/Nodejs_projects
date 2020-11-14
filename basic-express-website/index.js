const express = require('express');
const app =express();

app.get('/',(req,res)=>{
    res.send('I am learning nodejs');
})

app.listen(3000,()=>console.log('Basic express site deployed'));