const express = require('express');
const app = express();
const apiRouter = require('./routes');

app.use('api/redshift', apiRouter)

app.use(express.json());

app.listen(3000, () => {
    console.log("Connected on port 3000")
})

