const express = require('express');
const apiRouter = require('./routes');

const app = express();

app.use(express.json());

app.use('/citizens', apiRouter)
app.listen(process.env.PORT || '3306',()=>{
    console.log("server is very much working");
});