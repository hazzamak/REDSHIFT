'use strict';
// ===================================================
// Middleware
const Sequelize = require("sequelize"); // Sequelize is not an object, its about the details of the connection to the db

// ===================================================

// ===================================================
// Creating model and exporting it, this data matches the data in the mysql database

module.exports =function(sequelize, DataTypes){
return  sequelize.define("peoplemobile",{
    forenames:{
        type: Sequelize.STRING
    },
    surname:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    dateOfBirth:{
        type: Sequelize.STRING
    },
    address:{
        type: Sequelize.STRING
    },
    phoneNumber:{
        type: Sequelize.STRING,

    },
    network:{
        type: Sequelize.STRING,
    }
    },{
        modelName: "PeopleMobile", //This should match the const in the import below
        timestamps: false,
        freezeTableName: true,

});
}
// ===================================================
// Import code for queries
// To export copy and paste into routes:

// const PeopleMobile = require(path.join("../model/peopleMobiles.js"))(sequelize, Sequelize.DataTypes);
// name differs from database name, Mobile is capitalized, could cause confusion 

// ===================================================