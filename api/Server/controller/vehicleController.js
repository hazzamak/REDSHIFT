"use strict";
//===================================================
//Middleware
const express = require("express");
const router = express.Router();
const Sequelize = require("sequelize");
const path = require("path");
//===================================================

//Declaring connection details from the env file
const env = require("../db/env.js");

// const connection = require('../db/index.js');
// const sequelize = require(path.join("../db/index.js"))(Sequelize.DataTypes);

//Needs to be fixed, model is at the bottom for the moment
//Declaring a variable to store the model details
//const {Citizen} = require('../model/citizens.js');

//===================================================
//DB connection stored as sequelize, to be moved to own file
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    port: env.port,
    logging: console.log,
    dialect: "mysql",
}); // by using sequelize a db connection has been made

// Not needed, will be moved to a test folder in db and not used in final program
// sequelize.authenticate().then(function(success){

//     console.log("connection to db is a success")
// }).catch(function(err){
//     console.log("we have this error: ", err);
// });

//===================================================
const VehicleTable = require(path.join("../model/modelViews/vehicleView.js"))(sequelize, Sequelize.DataTypes);

exports.vehicleGetByName = (req, res) => {
    //Using a CRUD query here is the simplest way to get by id
    console.log(req.params);
    sequelize
        .query("SELECT * FROM vehicle_table WHERE forenames = '" + req.params.forenames + "' AND surname = '" + req.params.surname + "' AND dateOfBirth = '" + req.params.dateOfBirth + "'", {
            type: sequelize.QueryTypes.SELECT,
        })
        .then((response) => {
            res.status(200).json({
                status: 1,
                message: "Vehicle found",
                data: response,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

// Searching by numberplate
exports.searchByNumberPlate = (req, res) => {
    //Using a CRUD query here is the simplest way to get by id
    console.log(req.params);
    sequelize
        .query(`SELECT forenames, surname, address AS homeAddress, dateOfBirth FROM vehicleRegistration WHERE vehicleRegistrationNo ='${req.params.numberPlate}'`, {
            type: sequelize.QueryTypes.SELECT,
        })
        .then((response) => {
            res.status(200).json({
                status: 1,
                message: "Vehicle found",
                data: response,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
