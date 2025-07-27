const express = require('express');

const app = express();




app.get('/',(req,res)=>{
    res.end('Página principal')
})

app.get('/user/:name/:cargo',(req,res)=>{
    res.send("<h1>Olá " +req.params.name+ "</h1>")
})





app.listen(8000,()=>{
    console.log('Server is running on http://localhost:8000');

})