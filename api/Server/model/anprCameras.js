'use strict';
// ===================================================
// Middleware
const Sequelize = require("sequelize"); // Sequelize is not an object, its about the details of the connection to the db

// ===================================================

// ===================================================
// Creating model and exporting it, this data matches the data in the mysql database

module.exports =function(sequelize, DataTypes){
return  sequelize.define("anprcamera",{
    anprId:{
        type: Sequelize.INTEGER,

    },
    streetName:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    latitude:{
        type: Sequelize.DECIMAL
    },
    longitude:{
        type: Sequelize.INTEGER
    }
    },{
        modelName: "ANPRCamera", //This should match the const in the import below
        timestamps: false,
        freezeTableName: true,

});
}
// ===================================================
// Import code for queries
// To export copy and paste into routes:

// const ANPRCamera = require(path.join("../model/anprCameras.js"))(sequelize, Sequelize.DataTypes);
//Here Camera is capitalized unlike the database, could cause confusion
// ===================================================