'use strict';


//===================================================
//Middleware
const express = require('express');
const router = express.Router();
const Sequelize = require("sequelize");
const path = require('path');
const fnc = require('../controller/citizenController');
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

// sequelize.authenticate().then(function(success){

//     console.log("connection to db is a success")
// }).catch(function(err){
//     console.log("we have this error: ", err);
// });

//Sync connection is an alternative :
// sequelize.sync();

//===================================================
const Citizen = require(path.join("../model/citizens.js"))(sequelize, Sequelize.DataTypes);

//===================================================


//===================================================
//Creating new citizen
//Not needed in the current specification 
router.post("/citizen",fnc.citizenCreate);
//===================================================
//Get all
//Not needed in the current specification 
router.get("/getall", fnc.citizenGetAll);
//===================================================

//===================================================
//Get by id

router.get("/get/id", fnc.citizenGetById);
//===================================================

//===================================================
//Get by forenames and surname

router.get("/get/name", fnc.citizenGetByName);
//===================================================
/* This query takes data in a json body then does a search with an AND 
This is a robust query as you set column name and data

Expected json body being sent:
{
      "column": "forenames",
      "data": "Geoffrey Adrian"

}
*/

router.get("/get/other", fnc.citizenGetByOther);
//===================================================

//Update
router.put("/update", fnc.citizenUpdate);
//===================================================

//Destroy/ Delete/ Remove/ Exterminate

router.delete("/citizen/:id", fnc.citizenDelete);
//===================================================


//===================================================
//Get by query in bank
// const BankView = require(path.join("../model/modelViews/bankView.js"))(sequelize, Sequelize.DataTypes);
// router.get("/get/bank/other",function(req, res){
//     //Using a CRUD query here is the simplest way to get by id
//     console.log(req.body);
//     sequelize.query("SELECT * FROM bank_tables WHERE " + req.body.column +" = '"+ req.body.data +"'" ,{

//         type: sequelize.QueryTypes.SELECT
//     }).then(response=>{
//         res.status(200).json({
//             status: 1,
//             message: "Citizen found",
//             data: response
//         });
//         }).catch(error=>{
//             console.log(error);
//         });
//     });

// Test for accessing data in bank_tables using bank model

//===================================================
//






//Fix to error: TypeError: Router.use() requires a middleware function but got a Object 
//When using express.Router() this is a requirement 
module.exports = router;
