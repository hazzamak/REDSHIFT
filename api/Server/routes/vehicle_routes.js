const express = require('express');
const router = express.Router();
const Sequelize = require("sequelize");
const env = require('../db/env.js');
const vehicleController = require('vehicle_controller.js');

const sequelize = new Sequelize(env.database,env.username, env.password,{
    host : env.host,
    port: env.port,
    logging: console.log,
    dialect:'mysql',
    
});

router.get("/vehicleget/:id", vehicleController.vehicle_getbyid);

router.get("/vehicleget/name/:forenames/:surname", vehicleController.vehicle_getbyname);

router.get("/vehicleget/other/:column/:data", vehicleController.vehicle_getother);

router.put("/vehicleupdate", vehicleController.vehicle_update);

router.delete("/vehicle/:id", vehicleController.vehicle_delete);

router.get("/vehiclegetall/raw", vehicleController.vehicle_getallraw);

router.get("/vehiclegetall", vehicleController.vehicle_getall);

router.post("/vehicle", vehicleController.vehicle_create);

module.exports = router;