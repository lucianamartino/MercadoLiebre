const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.listen(3000, ()=>{
    console.log('Servidor corriendo');
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
