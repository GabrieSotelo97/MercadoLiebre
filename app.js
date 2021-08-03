const express = require('express');
const app= express();
const path = require('path');
app.use(express.static('public'))
const port =3030;

app.get('/home',(req,res)=> res.sendFile(path.join(__dirname,'views','home.html')))


app.listen(port,()=> console.log('servidor corriendo en http://localhost:'+ port + '/home'))