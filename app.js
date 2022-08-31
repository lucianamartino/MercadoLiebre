const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor funcionando en el puerto 3030")
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login.html', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register.html', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
