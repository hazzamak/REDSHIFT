'use strict';

//===================================================
//Middleware

const express = require('express');
const apiRouter = require('./routes');
const cors=require("cors");

const app = express();

app.use(cors());

app.use(express.json());
//===================================================



//===================================================
//Testing the http request with this,
app.use('/', apiRouter);
const server = app.listen(process.env.PORT || '3300',()=>{
    console.log(`Server booted up successfully, on PORT: ${server.address().port}`);
});

//===================================================


