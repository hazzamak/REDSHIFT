'use strict';
// ===================================================
// Middleware
const Sequelize = require("sequelize"); // Sequelize is not an object, its about the details of the connection to the db

// ===================================================

// ===================================================
// Creating model and exporting it, this data matches the data in the mysql database

module.exports =function(sequelize, DataTypes){
return  sequelize.define("atmTransactions",{
    timestamp:{
        type: Sequelize.STRING

    },
    atmId:{
        type: Sequelize.INTEGER
       // defaultValue: "Unkown"
    },
    bankCardNumber:{
        type: Sequelize.INTEGER
    },
    type:{
        type: Sequelize.STRING
    },
    amount:{
        type: Sequelize.DECIMAL,

    }

    },{
        modelName: "AtmTransactions",
        timestamps: false,
        freezeTableName: true,

});
}
// ===================================================
// To export copy and paste into routes:

// const AtmTransactions = require(path.join("../model/atmTransactions.js"))(sequelize, Sequelize.DataTypes);

// ===================================================