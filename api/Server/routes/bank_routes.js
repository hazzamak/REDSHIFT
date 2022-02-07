const express = require('express');
const router = express.Router();
const Sequelize = require("sequelize");
const env = require('../db/env.js');
const bankController = require('bank_controller.js');

const sequelize = new Sequelize(env.database,env.username, env.password,{
    host : env.host,
    port: env.port,
    logging: console.log,
    dialect:'mysql',
    
});

router.get("/bankget/id", bankController.citizen_getbyid);

router.get("/bankget/name/:forenames/:surname", bankController.bank_getbyname);

router.get("/bankget/other/:column/:data", bankController.bank_getother);

router.put("/bankupdate", bankController.bank_update);

router.delete("/bank/:id", bankController.bank_delete);

router.get("/bankgetall/raw", bankController.bank_getallraw);

router.get("/bankgetall", bankController.bank_getall);

router.post("/bank", bankController.bank_create);