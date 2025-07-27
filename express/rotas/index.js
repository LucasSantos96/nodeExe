const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Hello, World!');
}),

app.get('/sobre', (req,res)=>{
    res.send("Pagina sobre!")
})

app.get('/blog', (req, res) => {
    res.send('Bem-vindo ao blog!');
})



app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});