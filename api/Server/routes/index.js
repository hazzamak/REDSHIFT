'use strict';

//Middleware
const express = require('express');
const router = express.Router();
const Sequelize = require("sequelize");

//Declaring connection details from the env file
const env = require('../db/env.js');

//Declaring a variable to store the model details
//const {Citizen} = require('../model/citizens.js');




//DB connection stored as sequelize
const sequelize = new Sequelize(env.database,env.username, env.password,{
    host : env.host,
    port: env.port,
    logging: console.log,
    dialect:'mysql',
    
}); // by using sequelize a db connection has been made

sequelize.authenticate().then(function(success){

    console.log("connection to db is a success")
}).catch(function(err){
    console.log("we have this error: ", err);
});
const Citizen = sequelize.define("../model/citizens.js");

router.post("/citizen",function(req,res){

    console.log(req.body); 
  
        //static send
    
        // Citizen.create({
        //     // citizenID: null,
        //     forenames: "Declan Djik",
        //     surname:"Tyson",
        //     homeAddress:"10 KINGS DRIVE",
        //     dateOfBirth:"10-10-2020",
        //     placeOfBirth: "MIDDLESBROUGH",
        //     sex:"Male"
        // }).then(function(response){
        //     res.status(200).json({
        //         status:1,
        //         message: "Person identity created"
        //     });
        // }).catch(function(error){
        //     console.log(error);
        // });
    
        Citizen.create(req.body).then(function(response){
            res.status(200).json({
                status : 1,
                message: "New citizen identity created"
            });
        }).catch(function(err){
            console.log(err)
            // .then(function(response){
            //     res.status(404).json({
            //     status: -1,
            //     message: "Post request rejected"
            // Error message not working
            // })
        // })
        })
    
    });

//To confirm the database is connected

//Sync connection:
sequelize.sync();
// var Citizen = sequelize.define("citizen",{
//     citizenID:{
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         allowNull: false,
        
//         autoIncrement: true
        
//     },
//     forenames:{
//         type: Sequelize.STRING
//        // defaultValue: "Unkown"
//     },
//     surname:{
//         type: Sequelize.STRING
//     },
//     homeAddress:{
//         type: Sequelize.STRING
//     },
//     dateOfBirth:{
//         type: Sequelize.STRING,
        
//     },
//     placeOfBirth:{
//         type: Sequelize.STRING
//     },
//     sex:{
//         type: Sequelize.STRING
//     }},{
//         modelName: "Citizen",
//         timestamps: false,
//         freezeTableName: true


// });

//Fix to error: TypeError: Router.use() requires a middleware function but got a Object
module.exports = router;
