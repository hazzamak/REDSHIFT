'use strict';

//===================================================
//Middleware

const express = require('express');
const citizenRouter = require('./routes');
const vehicleRouter = require('./routes/vehicleRouter.js');

const cors=require("cors");

const app = express();

app.use(cors());

app.use(express.json());
//===================================================



//===================================================
//Testing the http request with this,
app.use('/', citizenRouter);
app.use('/vehicle', vehicleRouter);


const server = app.listen(process.env.PORT || '3300',()=>{
    console.log(`Server booted up successfully, on PORT: ${server.address().port}`);
});

//===================================================


