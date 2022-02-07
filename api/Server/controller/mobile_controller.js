'use strict';
//===================================================
//controller index must be set up 
const db = require('../db');
const citizen = require(path.join('../model/')(sequelize, Sequelize.DataTypes));

exports.mobile_getbydateOfBirth = req, res => {
    //Using a CRUD query here is the simplest way to get by id
    sequelize.query("SELECT * FROM mobile_table WHERE dateOfBirth = '"+ req.body.dateOfBirth +"'",{
        type: sequelize.QueryTypes.SELECT
    }).then(response=>{
        res.status(200).json({
            status: 1,
            message: "Mobile found",
            data: response
        });
        }).catch(error=>{
            console.log(error);
        });
};

exports.mobile_getbyname = req, res => {
        //Using a CRUD query here is the simplest way to get by id
        console.log(req.params);
        sequelize.query("SELECT * FROM mobile_tables WHERE dateOfBirth = '"+ req.params.dateOfBirth,{
    
            type: sequelize.QueryTypes.SELECT
        }).then(response=>{
            res.status(200).json({
                status: 1,
                message: "Mobile found",
                data: response
            });
            }).catch(error=>{
                console.log(error);
            });
};
exports.mobile_getbyphonenumber = req, res => {
    //Using a CRUD query here is the simplest way to get by id
    console.log(req.params);
    sequelize.query("SELECT * FROM mobile_table WHERE " + req.params.phonenumber, {

        type: sequelize.QueryTypes.SELECT
    }).then(response=>{
        res.status(200).json({
            status: 1,
            message: "Mobile found",
            data: response
        });
        }).catch(error=>{
            console.log(error);
        });
};
exports.mobile_update = req, res => {

        Mobile.update({
            forenames: req.body.forenames,
            surname: req.body.surname,
            dateOfBirth: req.body.dateOfBirth,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            network: req.body.network
        },{
            where:{
                phoneNumber: req.body.phoneNumber,
            }
        }).then(response =>{
            res.status(200).json({
                status: 1,
                message:`Mobile: ${req.body.id} has been updated successfully`
            })
        }).catch(error =>{
            res.status(500).json({
                status: -1,
                message: `Failed to update mobile: ${req.body.id}`,
                data : error
            })
        });
    
    
};
exports.mobile_delete = req, res => {
    Mobile.destroy({
        where:{
            bankCardId: req.params.id
        }
    }).then(data=>{
        res.status(200).json({
            status: 1,
            message: `Bank: ${req.params.id} has been removed from the database`
        });
    }).catch(error=>{
        res.status(500).json({
            status: -1,
            message: `Failed to delete mobile: ${req.params.id}`,
            data: error
        });
    });
};
exports.mobile_getallraw = req, res => {
    
    sequelize.query("SELECT * FROM mobile_table",{
        type: sequelize.QueryTypes.SELECT
    }).then(response=>{
        res.status(200).json({
            status: 1,
            message: "Mobile found",
            data: response
        
        })
        }).catch(error=>{
            console.log(error);
    })

};
exports.mobile_getall = req, res => {
    Bank.findAll().then(function(citizens){
        res.status(200).json({
            status: 1,
            message: "Got mobiles in the database",
            data: citizens
        }).then(response =>{
            res.status(200).json({
                status: 1,
                message: "Successful get request for all mobiles"
            })
        })
    }).catch(error =>{
        res.status(500).json({
            status: -1,
            message: `Failed get request for all mobiles`,
            data : error
        })
        
    })
};
exports.mobile_create = req,res => {

    console.log(req.body); 
        Bank.create(req.body).then(function(response){
            res.status(200).json({
                status : 1,
                message: "New mobile identity created"
            });
        }).catch(function(err){
            console.log(err)
 
        });
    
};