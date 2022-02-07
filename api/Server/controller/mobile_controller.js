'use strict';
//===================================================
//controller index must be set up 
const db = require('../db');
const citizen = require(path.join('../model/')(sequelize, Sequelize.DataTypes));

exports.bank_getbyid = req, res => {
    //Using a CRUD query here is the simplest way to get by id
    sequelize.query("SELECT * FROM bank_tables WHERE bankID = '"+ req.body.id +"'",{
        type: sequelize.QueryTypes.SELECT
    }).then(response=>{
        res.status(200).json({
            status: 1,
            message: "Bank found",
            data: response
        });
        }).catch(error=>{
            console.log(error);
        });
};

exports.bank_getbyname = req, res => {
        //Using a CRUD query here is the simplest way to get by id
        console.log(req.params);
        sequelize.query("SELECT * FROM bank_tables WHERE dateOfBirth = '"+ req.params.dateOfBirth,{
    
            type: sequelize.QueryTypes.SELECT
        }).then(response=>{
            res.status(200).json({
                status: 1,
                message: "Bank found",
                data: response
            });
            }).catch(error=>{
                console.log(error);
            });
};
exports.bank_getother = req, res => {
    //Using a CRUD query here is the simplest way to get by id
    console.log(req.params);
    sequelize.query("SELECT * FROM bank_tables WHERE " + req.params.column +" = '"+ req.params.data +"'" ,{

        type: sequelize.QueryTypes.SELECT
    }).then(response=>{
        res.status(200).json({
            status: 1,
            message: "Bank found",
            data: response
        });
        }).catch(error=>{
            console.log(error);
        });
};
exports.bank_update = req, res => {

        Bank.update({
            cardNumber: req.body.cardNumber,
            sortCode: req.body.sortCode,
            bankAccountId: req.body.bankAccountId,
            accountNumber: req.body.accountNumber,
            bank: req.body.placeOfBirth
        },{
            where:{
                bankCardId: req.body.citizenID,
            }
        }).then(response =>{
            res.status(200).json({
                status: 1,
                message:`bank: ${req.body.bankCardId} has been updated successfully`
            })
        }).catch(error =>{
            res.status(500).json({
                status: -1,
                message: `Failed to update bank: ${req.body.bankCardId}`,
                data : error
            })
        });
    
    
};
exports.bank_delete = req, res => {
    Bank.destroy({
        where:{
            bankCardId: req.params.bankCardId
        }
    }).then(data=>{
        res.status(200).json({
            status: 1,
            message: `Bank: ${req.params.bankCardId} has been removed from the database`
        });
    }).catch(error=>{
        res.status(500).json({
            status: -1,
            message: `Failed to delete citizen: ${req.params.bankCardId}`,
            data: error
        });
    });
};
exports.bank_getallraw = req, res => {
    
    sequelize.query("SELECT * FROM bank_tables",{
        type: sequelize.QueryTypes.SELECT
    }).then(response=>{
        res.status(200).json({
            status: 1,
            message: "Bank found",
            data: response
        
        })
        }).catch(error=>{
            console.log(error);
    })

};
exports.bank_getall = req, res => {
    Bank.findAll().then(function(citizens){
        res.status(200).json({
            status: 1,
            message: "Got banks in the database",
            data: citizens
        }).then(response =>{
            res.status(200).json({
                status: 1,
                message: "Successful get request for all banks"
            })
        })
    }).catch(error =>{
        res.status(500).json({
            status: -1,
            message: `Failed get request for all banks`,
            data : error
        })
        
    })
};
exports.bank_create = req,res => {

    console.log(req.body); 
        Bank.create(req.body).then(function(response){
            res.status(200).json({
                status : 1,
                message: "New bank identity created"
            });
        }).catch(function(err){
            console.log(err)
 
        });
    
};