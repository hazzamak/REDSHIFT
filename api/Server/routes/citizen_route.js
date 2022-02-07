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

router.get("/get/id", citizenController.citizen_getbyid);

router.get("/get/name/:forenames/:surname", citizenController.citezen_getbyname);

router.get("/get/other/:column/:data", citizenController.citizen_getother);

router.put("/update", citizenController.citizen_update);

router.delete("/citizen/:id", citizenController.citizen_delete);

router.get("/getall/raw", citizenController.citizen_getallraw);

router.get("/getall", citizenController.citizen_getall);

router.post("/citizen", citizenController.citizen_create);

module.exports = router;