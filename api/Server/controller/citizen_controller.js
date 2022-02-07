'use strict';
//===================================================
//controller index must be set up 
const db = require('../db');

exports.citizen_getbyid = router.get("/get/id",function(req, res){
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

exports.citizen_getbyname = router.get("/get/name/:forenames/:surname",function(req, res){
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
exports.citizen_getother = router.get("/get/other/:column/:data",function(req, res){
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
exports.citizen_update = router.put("/update", function(req, res){

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
exports.citizen_delete = router.delete("/citizen/:id", function(req, res){
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
exports.citizen_getallraw = router.get("/getall/raw",function(req, res){
    
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