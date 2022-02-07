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
//===================================================

//Declaring connection details from the env file
const env = require('../db/env.js');


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


//Not needed, will be moved to a test folder in db and not used in final program
sequelize.authenticate().then(function(success){

    console.log("connection to db is a success")
}).catch(function(err){
    console.log("we have this error: ", err);
});

//===================================================
const Citizen = require(path.join("../model/citizens.js"))(sequelize, Sequelize.DataTypes);

//error in this
// const Citizen = sequelize.define("../model/citizens.js");

router.post("/citizen",function(req,res){

    console.log(req.body); 
  
        //static send
    
        // Citizen.create({
        //     // citizenID: null,
        //     forenames: "Declan Djik",
        //     surname:"Tyson",
        //     homeAddress:"10 KINGS DRIVE",
        //     dateOfBirth:"10-10-2020",
        //     placeOfBirth: " WEST SWANINGBOROUGH UNDER ORWELL ON SEA",
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
 
        });
    
    });


//===================================================
//Get all

router.get("/getall",function(req, res){
        Citizen.findAll().then(function(citizens){
            res.status(200).json({
                status: 1,
                message: "Got citizens in the database",
                data: citizens
            }).then(response =>{
                res.status(200).json({
                    status: 1,
                    message: "Successful get request for all citizens"
                })
            })
        }).catch(error =>{
            res.status(500).json({
                status: -1,
                message: `Failed get request for all citizens`,
                data : error
            })
            
        })
});
//===================================================



//===================================================
//get all raw
router.get("/getall/raw",function(req, res){
    
    sequelize.query("SELECT * FROM citizen",{
        type: sequelize.QueryTypes.SELECT
    }).then(response=>{
        res.status(200).json({
            status: 1,
            message: "Citizen found",
            data: response
        
        })
        }).catch(error=>{
            console.log(error);
    })

});
//Front- end may prefer this format 
//===================================================



//===================================================
//get by id
router.get("/get/id",function(req, res){
    //Using a CRUD query here is the simplest way to get by id
    sequelize.query("SELECT * FROM citizen WHERE citizenID = '"+ req.body.id +"'",{
        type: sequelize.QueryTypes.SELECT
    }).then(response=>{
        res.status(200).json({
            status: 1,
            message: "Citizen found",
            data: response
        });
        }).catch(error=>{
            console.log(error);
        });
    });
//===================================================

//===================================================
//get by id
router.get("/get/name",function(req, res){
    //Using a CRUD query here is the simplest way to get by id
    console.log(req.body);
    sequelize.query("SELECT * FROM citizen WHERE forenames = '"+ req.body.forenames+"' AND surname = '"+req.body.surname+"'",{

        type: sequelize.QueryTypes.SELECT
    }).then(response=>{
        res.status(200).json({
            status: 1,
            message: "Citizen found",
            data: response
        });
        }).catch(error=>{
            console.log(error);
        });
    });
//===================================================

router.get("/get/other",function(req, res){
    //Using a CRUD query here is the simplest way to get by id
    console.log(req.body);
    sequelize.query("SELECT * FROM citizen WHERE " + req.body.column +" = '"+ req.body.data +"'" ,{

        type: sequelize.QueryTypes.SELECT
    }).then(response=>{
        res.status(200).json({
            status: 1,
            message: "Citizen found",
            data: response
        });
        }).catch(error=>{
            console.log(error);
        });
    });
//===================================================

//===================================================
//Update
router.put("/update", function(req, res){

    Citizen.update({
        forenames: req.body.forenames,
        surname: req.body.surname,
        homeAddress: req.body.homeAddress,
        dateOfBirth: req.body.dateOfBirth,
        placeOfBirth: req.body.placeOfBirth,
        sex: req.body.sex
    },{
        where:{
            citizenID: req.body.citizenID,
        }
    }).then(response =>{
        res.status(200).json({
            status: 1,
            message:`citizen: ${req.body.citizenID} has been updated successfully`
        })
    }).catch(error =>{
        res.status(500).json({
            status: -1,
            message: `Failed to update citizen: ${req.body.citizenID}`,
            data : error
        })
    });


})
//===================================================



//===================================================
//Destroy/ Delete/ Remove/ Exterminate

router.delete("/citizen/:id", function(req, res){
    Citizen.destroy({
        where:{
            citizenID: req.params.id
        }
    }).then(data=>{
        res.status(200).json({
            status: 1,
            message: `Citizen: ${req.params.id} has been removed from the database`
        });
    }).catch(error=>{
        res.status(500).json({
            status: -1,
            message: `Failed to delete citizen: ${req.params.id}`,
            data: error
        });
    });
});
//===================================================






//Sync connection:
sequelize.sync();



//Fix to error: TypeError: Router.use() requires a middleware function but got a Object 
//When using express.Router() this is a requirement 
module.exports = router;
