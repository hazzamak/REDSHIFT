'use strict';
// ===================================================
// Middleware
const Sequelize = require("sequelize"); // Sequelize is not an object, its about the details of the connection to the db

// ===================================================

// ===================================================
// Creating model and exporting it, this data matches the data in the mysql database

module.exports =function(sequelize, DataTypes){
return  sequelize.define("bankcard",{
    bankCardId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,

        autoIncrement: true

    },
    cardNumber:{
        type: Sequelize.INTEGER
       // defaultValue: "Unkown"
    },
    sortCode:{
        type: Sequelize.STRING
    },
    bankAccountId:{
        type: Sequelize.INTEGER
    },
    accountNumber:{
        type: Sequelize.INTEGER,

    },
    bank:{
        type: Sequelize.STRING
    }
    },{
        modelName: "Bankcard", //This should match the const in the import below
        timestamps: false,
        freezeTableName: true,

});
}
// ===================================================
// Import code for queries
// To export copy and paste into routes:

// const Bankcard = require(path.join("../model/bankcards.js"))(sequelize, Sequelize.DataTypes);

// ===================================================