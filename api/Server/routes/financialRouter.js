"use strict";
const express = require("express");
const router = express.Router();
const fnc = require("../controller/financialController");

router.get("/name/:forenames/:surname/:dateOfBirth", fnc.getFinancialByName);
//===================================================

//Fix to error: TypeError: Router.use() requires a middleware function but got a Object
//When using express.Router() this is a requirement
module.exports = router;
