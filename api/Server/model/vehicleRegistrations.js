'use strict';
// ===================================================
// Middleware
const Sequelize = require("sequelize"); // Sequelize is not an object, its about the details of the connection to the db

// ===================================================

// ===================================================
// Creating model and exporting it, this data matches the data in the mysql database

module.exports =function(sequelize, DataTypes){
return  sequelize.define("vehicleRegistration ",{
    registrationID:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,

        autoIncrement: true
    },
    registrationDate:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    vehicleRegistrationNo:{
        type: Sequelize.STRING
    },
    make:{
        type: Sequelize.STRING
    },
    model:{
        type: Sequelize.STRING,

    },
    colour:{
        type: Sequelize.STRING,
    },
    forenames:{
        type: Sequelize.STRING,
    },
    surname:{
        type: Sequelize.STRING,
    },
    address:{
        type: Sequelize.STRING,
    },
    dateOfBirth:{
        type: Sequelize.STRING,
    },
    driverLicenceID:{
        type: Sequelize.STRING,
    }
    },{
        modelName: "VehicleRegistration", //This should match the const in the import below
        timestamps: false,
        freezeTableName: true,

});
}
// ===================================================
// Import code for queries
// To export copy and paste into routes:

// const VehicleRegistration = require(path.join("../model/vehicleRegistrations.js"))(sequelize, Sequelize.DataTypes);
// name differs from database name, Mobile is capitalized, could cause confusion 

// ===================================================