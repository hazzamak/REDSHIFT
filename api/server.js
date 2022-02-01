// --------- Imports --------- //
const express = require("express");
const cors = require("cors");

// Initializing express
const app = express();

// Common Middleware
app.use(express.json());
app.use(cors());

// --------- Database Connection --------- //

// --------- Listen on 5015 --------- //
const server = app.listen(5015, () => {
    console.log(`Listening on port ${server.address().port}`);
});
