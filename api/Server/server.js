const express = require('express');
const apiRouter = require('./routes');
const cors=require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/citizens', apiRouter);
app.listen(process.env.PORT || '3300',()=>{
    console.log("server is very much working");
});



