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

// citizen

//===================================================
//get by id
router.get("/get/name/:forenames/:surname",function(req, res){
    //Using a CRUD query here is the simplest way to get by id
    console.log(req.params);
    sequelize.query("SELECT * FROM citizen WHERE forenames = '"+ req.params.forenames+"' AND surname = '"+req.params.surname+"'",{

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

router.get("/get/other/:column/:data",function(req, res){
    //Using a CRUD query here is the simplest way to get by id
    console.log(req.params);
    sequelize.query("SELECT * FROM citizen WHERE " + req.params.column +" = '"+ req.params.data +"'" ,{

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

// bank_tables

//===================================================

router.get("/get/bank/name/:forenames/:surname",function(req, res){
    //Using a CRUD query here is the simplest way to get by id
    console.log(req.params);
    sequelize.query("SELECT * FROM bank_tables WHERE forenames = '"+ req.params.forenames+"' AND surname = '"+req.params.surname+"'",{

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

router.get("/get/bank/other/:column/:data",function(req, res){
    //Using a CRUD query here is the simplest way to get by id
    console.log(req.body);
    sequelize.query("SELECT * FROM bank_tables WHERE " + req.params.column +" = '"+ req.params.data +"'" ,{

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

// mobile_table

//===================================================

router.get("/get/mobile/name/:forenames/:surname",function(req, res){
    //Using a CRUD query here is the simplest way to get by id
    console.log(req.params);
    sequelize.query("SELECT * FROM mobile_table WHERE forenames = '"+ req.params.forenames+"' AND surname = '"+req.params.surname+"'",{

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

router.get("/get/mobile/other/:column/:data",function(req, res){
    //Using a CRUD query here is the simplest way to get by id
    console.log(req.params);
    sequelize.query("SELECT * FROM mobile_table WHERE " + req.params.column +" = '"+ req.params.data +"'" ,{

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

// vehicle_table

//===================================================

router.get("/get/vehicle/name/:forenames/:surname",function(req, res){
    //Using a CRUD query here is the simplest way to get by id
    console.log(req.params);
    sequelize.query("SELECT * FROM vehicle_table WHERE forenames = '"+ req.params.forenames+"' AND surname = '"+req.params.surname+"'",{

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

router.get("/get/vehicle/other/:column/:data",function(req, res){
    //Using a CRUD query here is the simplest way to get by id
    console.log(req.params);
    sequelize.query("SELECT * FROM vehicle_table WHERE " + req.params.column +" = '"+ req.params.data +"'" ,{

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



//===================================================
// to be moved out of routes
var Citizen = sequelize.define("citizen",{
    citizenID:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        
        autoIncrement: true
        
    },
    forenames:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    surname:{
        type: Sequelize.STRING
    },
    homeAddress:{
        type: Sequelize.STRING
    },
    dateOfBirth:{
        type: Sequelize.STRING,
        
    },
    placeOfBirth:{
        type: Sequelize.STRING
    },
    sex:{
        type: Sequelize.STRING
    }},{
        modelName: "Citizen",
        timestamps: false,
        freezeTableName: true


});
//===================================================



//Fix to error: TypeError: Router.use() requires a middleware function but got a Object 
//When using express.Router() this is a requirement 
module.exports = router;
