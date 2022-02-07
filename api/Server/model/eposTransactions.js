'use strict';
// ===================================================
// Middleware
const Sequelize = require("sequelize"); // Sequelize is not an object, its about the details of the connection to the db

// ===================================================

// ===================================================
// Creating model and exporting it, this data matches the data in the mysql database

module.exports =function(sequelize, DataTypes){
return  sequelize.define("eposTransaction",{
    timestamp:{
        type: Sequelize.STRING,

    },
    eposId:{
        type: Sequelize.INTEGER
       // defaultValue: "Unkown"
    },
    bankCardNumber:{
        type: Sequelize.INTEGER
    },
    payeeAccount:{
        type: Sequelize.INTEGER
    },
    amount:{
        type: Sequelize.DECIMAL,

    }
    },{
        modelName: "EposTransaction", //This should match the const in the import below
        timestamps: false,
        freezeTableName: true,

});
}
// ===================================================
// Import code for queries
// To export copy and paste into routes:

// const EposTransaction = require(path.join("../model/eposTransactions.js"))(sequelize, Sequelize.DataTypes);

// ===================================================