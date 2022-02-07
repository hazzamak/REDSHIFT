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

router.get("/citizenget/id", citizenController.citizen_getbyid);

router.get("/citizenget/name/:forenames/:surname", citizenController.citizen_getbyname);

router.get("/citizenget/other/:column/:data", citizenController.citizen_getother);

router.put("/citizenupdate", citizenController.citizen_update);

router.delete("/citizen/:id", citizenController.citizen_delete);

router.get("/citizengetall/raw", citizenController.citizen_getallraw);

router.get("/citizengetall", citizenController.citizen_getall);

router.post("/citizen", citizenController.citizen_create);

module.exports = router;