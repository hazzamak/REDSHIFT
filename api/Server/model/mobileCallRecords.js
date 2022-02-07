'use strict';
// ===================================================
// Middleware
const Sequelize = require("sequelize"); // Sequelize is not an object, its about the details of the connection to the db

// ===================================================

// ===================================================
// Creating model and exporting it, this data matches the data in the mysql database

module.exports =function(sequelize, DataTypes){
return  sequelize.define("mobileCallRecords",{
    timestamp:{
        type: Sequelize.STRING

    },
    callerMSISDN:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    callCellTowerID:{
        type: Sequelize.INTEGER
    },
    receiverMSIDN:{
        type: Sequelize.STRING
    },
    receiverTowerId:{
        type: Sequelize.INTEGER,

    }
    },{
        modelName: "MobileCallRecords", //This should match the const in the import below
        timestamps: false,
        freezeTableName: true,

});
}
// ===================================================
// Import code for queries
// To export copy and paste into routes:

// const MobileCallRecords = require(path.join("../model/mobileCallRecords.js"))(sequelize, Sequelize.DataTypes);
// name differs from database name, Tower is capitalized, could cause confusion 

// ===================================================