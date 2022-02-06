'use strict';
//Middleware
const Sequelize = require("sequelize"); // Sequelize is not an object, its about the details of the connection to the db


//Create model => first way to create models in sequelize

module.exports =function(sequelize, DataTypes){
return Citizen = sequelize.define("citizen",{
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
        freezeTableName: true,
        
        


});
}