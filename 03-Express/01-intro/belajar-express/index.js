//import from 'express'
const express = require ('express');

//instanlate express
const app = express();

// routing index: / menggunakan GET
app.get('/', (req, res) => {
    res.send('Hello world!');
});

//tentukan port dari server
app.listen(3000 , () =>{
    console.log('Server berjalan di port 3000');
});