"use strict";
const express = require("express");
const router = express.Router();
const fnc = require("../controller/mobileController");

router.get("/name/:forenames/:surname/:dateOfBirth", fnc.getMobileByName);
//===================================================

//Fix to error: TypeError: Router.use() requires a middleware function but got a Object
//When using express.Router() this is a requirement
module.exports = router;
