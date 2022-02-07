'use strict';
// ===================================================
// Middleware
const Sequelize = require("sequelize"); // Sequelize is not an object, its about the details of the connection to the db

// ===================================================

// ===================================================
// Creating model and exporting it, this data matches the data in the mysql database

module.exports =function(sequelize, DataTypes){
return  sequelize.define("epos",{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,

        autoIncrement: true

    },
    vendor:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    streetName:{
        type: Sequelize.STRING
    },
    postcode:{
        type: Sequelize.STRING
    },
    latitude:{
        type: Sequelize.DECIMAL,

    },
    longitude:{
        type: Sequelize.DECIMAL
    }
    },{
        modelName: "Epos", //This should match the const in the import below
        timestamps: false,
        freezeTableName: true,

});
}
// ===================================================
// Import code for queries
// To export copy and paste into routes:

// const Epos = require(path.join("../model/epos.js"))(sequelize, Sequelize.DataTypes);

// ===================================================