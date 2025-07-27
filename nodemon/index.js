const express = require('express');
const app = express();


//enviando arquivos
app.get('/',(req, res) => {
    res.sendFile(__dirname + "/frontend/index.html");
})














app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});