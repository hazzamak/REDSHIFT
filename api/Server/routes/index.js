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
            
        });
});


//get all raw/ uses less MB
router.get("/getall-raw",function(req, res){

    sequelize.query("SELECT * FROM citizen",{
        type: sequelize.QueryTypes.SELECT
    }).then(response=>{
        res.status(200).json({
            status: 1,
            message: "Citizen found",
            data: response
        }).catch(error=>{
            console.log(error);
        });
    })

});



//get by id

router.get("/get/:id",function(req, res){

    sequelize.query("SELECT * FROM citizen WHERE citizenID ="+ req.params.id,{
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



//find and count all coming soon



//Sync connection:
sequelize.sync();


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

//Fix to error: TypeError: Router.use() requires a middleware function but got a Object
module.exports = router;
