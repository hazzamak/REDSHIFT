// 'use strict';
// //===================================================
// //controller index must be set up 
// const db = require('../db');
// const citizen = require(path.join('../model/')(sequelize, Sequelize.DataTypes));
// const path = require('path');
// const sequelize = new Sequelize(env.database,env.username, env.password,{

//     host : env.host,

//     port: env.port,

//     logging: console.log,

//     dialect:'mysql',

   

// });
// const Citizen = require(path.join("../model/citizens.js"))(sequelize, Sequelize.DataTypes);

// exports.vehicle_getbyid = req, res => {
//     //Using a CRUD query here is the simplest way to get by id
//     sequelize.query("SELECT * FROM citizen WHERE citizenID = '"+ req.body.id +"'",{
//         type: sequelize.QueryTypes.SELECT
//     }).then(response=>{
//         res.status(200).json({
//             status: 1,
//             message: "Vehicle found",
//             data: response
//         });
//         }).catch(error=>{
//             console.log(error);
//         });
// };

// exports.citizen_getbyname = req, res => {
//         //Using a CRUD query here is the simplest way to get by id
//         console.log(req.params);
//         sequelize.query("SELECT * FROM citizen WHERE forenames = '"+ req.params.forenames+"' AND surname = '"+req.params.surname+"'",{
    
//             type: sequelize.QueryTypes.SELECT
//         }).then(response=>{
//             res.status(200).json({
//                 status: 1,
//                 message: "Vehicle found",
//                 data: response
//             });
//             }).catch(error=>{
//                 console.log(error);
//             });
// };
// exports.citizen_getother = req, res => {
//     //Using a CRUD query here is the simplest way to get by id
//     console.log(req.params);
//     sequelize.query("SELECT * FROM citizen WHERE " + req.params.column +" = '"+ req.params.data +"'" ,{

//         type: sequelize.QueryTypes.SELECT
//     }).then(response=>{
//         res.status(200).json({
//             status: 1,
//             message: "Vehicle found",
//             data: response
//         });
//         }).catch(error=>{
//             console.log(error);
//         });
// };
// exports.citizen_update = req, res => {

//         Citizen.update({
//             forenames: req.body.forenames,
//             surname: req.body.surname,
//             homeAddress: req.body.homeAddress,
//             dateOfBirth: req.body.dateOfBirth,
//             placeOfBirth: req.body.placeOfBirth,
//             sex: req.body.sex
//         },{
//             where:{
//                 citizenID: req.body.citizenID,
//             }
//         }).then(response =>{
//             res.status(200).json({
//                 status: 1,
//                 message:`Vehicle: ${req.body.id} has been updated successfully`
//             })
//         }).catch(error =>{
//             res.status(500).json({
//                 status: -1,
//                 message: `Failed to update vehicle: ${req.body.id}`,
//                 data : error
//             })
//         });
    
    
// };
// exports.vehicle_delete = req, res => {
//     Citizen.destroy({
//         where:{
//             citizenID: req.params.id
//         }
//     }).then(data=>{
//         res.status(200).json({
//             status: 1,
//             message: `Vehicle: ${req.params.id} has been removed from the database`
//         });
//     }).catch(error=>{
//         res.status(500).json({
//             status: -1,
//             message: `Failed to delete vehicle: ${req.params.id}`,
//             data: error
//         });
//     });
// };
// exports.vehicle_getallraw = req, res => {
    
//     sequelize.query("SELECT * FROM vehicle_table",{
//         type: sequelize.QueryTypes.SELECT
//     }).then(response=>{
//         res.status(200).json({
//             status: 1,
//             message: "Vehicle found",
//             data: response
        
//         })
//         }).catch(error=>{
//             console.log(error);
//     })

// };
// exports.vehicle_getall = req, res => {
//     Citizen.findAll().then(function(citizens){
//         res.status(200).json({
//             status: 1,
//             message: "Got vehicles in the database",
//             data: citizens
//         }).then(response =>{
//             res.status(200).json({
//                 status: 1,
//                 message: "Successful get request for all vehicles"
//             })
//         })
//     }).catch(error =>{
//         res.status(500).json({
//             status: -1,
//             message: `Failed get request for all vehicles`,
//             data : error
//         })
        
//     })
// };
// exports.vehicle_create = req,res => {

//     console.log(req.body); 
//         Citizen.create(req.body).then(function(response){
//             res.status(200).json({
//                 status : 1,
//                 message: "New vehicle created"
//             });
//         }).catch(function(err){
//             console.log(err)
 
//         });
    
// };

// exports.citizen 