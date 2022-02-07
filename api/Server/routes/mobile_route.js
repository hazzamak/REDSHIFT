const express = require('express');
const router = express.Router();
const Sequelize = require("sequelize");
const env = require('../db/env.js');
const mobileController = require('mobile_controller.js');

const sequelize = new Sequelize(env.database,env.username, env.password,{
    host : env.host,
    port: env.port,
    logging: console.log,
    dialect:'mysql',
    
});

router.get("/mobileget/:dateOfBirth", mobileController.citizen_getbydateOfBirth);

router.get("/mobileget/name/:forenames", mobileController.citizen_getbyname);

router.get("/mobileget/:phonenumber", mobileController.citizen_getbyphonenumber);

router.put("/mobileupdate", mobileController.mobile_update);

router.delete("/mobile/:id", mobileController.mobile_delete);

router.get("/mobilegetall/raw", mobileController.mobile_getallraw);

router.get("/mobilegetall", mobileController.mobile_getall);

router.post("/mobile", mobileController.citizen_create);

module.exports = router;