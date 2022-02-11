'use strict';
// ===================================================
// Middleware
const Sequelize = require("sequelize"); // Sequelize is not an object, its about the details of the connection to the db

// ===================================================

// ===================================================
// Creating model and exporting it, this data matches the data in the mysql database

module.exports =function(sequelize, DataTypes){
return  sequelize.define("atmPoint",{
    atmID:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,

        autoIncrement: true

    },
    operator:{
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
        modelName: "AtmPoint", //This should match the const in the import below
        timestamps: false,
        freezeTableName: true,

});
}
// ===================================================
// Import code for queries
// To export copy and paste into routes:

// const AtmPoint = require(path.join("../model/atmPoints.js"))(sequelize, Sequelize.DataTypes);

// ===================================================