const express = require('express');
const router = express.Router();
const Sequelize = require("sequelize");
const env = require('../db/env.js');
const citizenController = require('citizen_controller.js');

const sequelize = new Sequelize(env.database,env.username, env.password,{
    host : env.host,
    port: env.port,
    logging: console.log,
    dialect:'mysql',
    
});

router.get("/mobileget/id", citizenController.citizen_getbyid);

router.get("/mobileget/name/:forenames/:surname", citizenController.citizen_getbyname);

router.get("/mobileget/other/:column/:data", citizenController.citizen_getother);

router.put("/mobileupdate", citizenController.citizen_update);

router.delete("/mobile/:id", citizenController.citizen_delete);

router.get("/mobilegetall/raw", citizenController.citizen_getallraw);

router.get("/mobilegetall", citizenController.citizen_getall);

router.post("/mobile", citizenController.citizen_create);

module.exports = router;