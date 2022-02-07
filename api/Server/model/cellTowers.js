'use strict';
// ===================================================
// Middleware
const Sequelize = require("sequelize"); // Sequelize is not an object, its about the details of the connection to the db

// ===================================================

// ===================================================
// Creating model and exporting it, this data matches the data in the mysql database

module.exports =function(sequelize, DataTypes){
return  sequelize.define("cellTower",{
    cellTowerId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,

        autoIncrement: true
    },
    operator:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    type:{
        type: Sequelize.STRING
    },
    latitude:{
        type: Sequelize.DECIMAL
    },
    longitude:{
        type: Sequelize.DECIMAL,

    }
    },{
        modelName: "CellTower", //This should match the const in the import below
        timestamps: false,
        freezeTableName: true,

});
}
// ===================================================
// Import code for queries
// To export copy and paste into routes:

// const CellTower = require(path.join("../model/cellTowers.js"))(sequelize, Sequelize.DataTypes);
// name differs from database name, Tower is capitalized, could cause confusion 

// ===================================================