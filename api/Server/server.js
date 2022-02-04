const express = require('express');
const apiRouter = require('./routes/index.js');

const app = express();

app.use(express.json());




app.use('/citzensdb',apiRouter)

app.listen(process.env.PORT || '3000', ()=>{
    console.log(`Server is running on port: ${process.env.PORT || '3000'} `);
});







