const express = require('express');
const apiRouter = require('./routes');
const cors=require("cors");

const app = express();

app.use(cors());

app.use(express.json());

// app.use((req, res, next) => {
//     console.log("middleware created");
//     next();
// })


// Insert routes here

app.use('/api/citizens', apiRouter);
const server = app.listen(process.env.PORT || '3300',()=>{
    console.log(`Server booted up successfully, on PORT: ${server.address().port}`);
});



