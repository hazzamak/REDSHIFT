'use strict';
// ===================================================
// Middleware
const Sequelize = require("sequelize"); // Sequelize is not an object, its about the details of the connection to the db

// ===================================================

// ===================================================
// Creating model and exporting it, this data matches the data in the mysql database

module.exports =function(sequelize, DataTypes){
return  sequelize.define("vehicleObservations",{
    ANPRPointID:{
        type: Sequelize.INTEGER
    },
    timestamp:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    vehicleRegistrationNumber:{
        type: Sequelize.STRING
    }
    },{
        modelName: "VehicleObservations", //This should match the const in the import below
        timestamps: false,
        freezeTableName: true,

});
}
// ===================================================
// Import code for queries
// To export copy and paste into routes:

// const VehicleObervations = require(path.join("../model/vehicleObservations.js"))(sequelize, Sequelize.DataTypes);


// ===================================================