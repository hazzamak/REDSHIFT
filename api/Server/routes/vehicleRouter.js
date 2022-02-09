'use strict';
//===================================================
/*
File is named



*/
//===================================================

//===================================================
//Middleware
const express = require('express');
const router = express.Router();
const Sequelize = require("sequelize");
const path = require('path');
const fnc = require('../controller/vehicle_controller');
//===================================================

//Declaring connection details from the env file
const env = require('../db/env.js');

// const connection = require('../db/index.js');
// const sequelize = require(path.join("../db/index.js"))(Sequelize.DataTypes);


//Needs to be fixed, model is at the bottom for the moment
//Declaring a variable to store the model details
//const {Citizen} = require('../model/citizens.js');


//===================================================
//DB connection stored as sequelize, to be moved to own file
const sequelize = new Sequelize(env.database,env.username, env.password,{
    host : env.host,
    port: env.port,
    logging: console.log,
    dialect:'mysql',
    
}); // by using sequelize a db connection has been made


// Not needed, will be moved to a test folder in db and not used in final program
sequelize.authenticate().then(function(success){

    console.log("connection to db is a success")
}).catch(function(err){
    console.log("we have this error: ", err);
});

//===================================================
const VehicleTable = require(path.join("../model/modelViews/vehicleView.js"))(sequelize, Sequelize.DataTypes);
//===================================================
//get by id
router.get("/get/other", fnc.vehicleGetOther);
//===================================================


//Sync connection:
sequelize.sync();

//ifdnm

//Fix to error: TypeError: Router.use() requires a middleware function but got a Object 
//When using express.Router() this is a requirement 
module.exports = router;
