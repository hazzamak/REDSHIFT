// Middleware
const Sequelize = require("sequelize"); // Sequelize is not an object, its about the details of the connection to the db

// ===================================================

// ===================================================
// Creating model and exporting it, this data matches the data in the mysql database

module.exports =function(sequelize, DataTypes){
return  sequelize.define("bank_tables",{
    accountNumber:{
        type: Sequelize.INTEGER,

    },
    bank:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
       //Default value would be useful if we were making a website with full CRUD functionality 
    },
    forenames:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    surname:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    dateOfBirth:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    homeAddress:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    cardNumber:{
        type: Sequelize.INTEGER
       // defaultValue: "Unkown"
    },
    sortCode:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    timestamp:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    atmId:{
        type: Sequelize.INTEGER
    },
    type:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    amount:{
        type: Sequelize.DECIMAL
    },
    operator:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    streetName:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    postcode:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    latitude:{
        type: Sequelize.DECIMAL
    },
    longitude:{
        type: Sequelize.DECIMAL
    }
    },{
        modelName: "BankTable", //This should match the const in the import below
        timestamps: false,
        freezeTableName: true,

});
}
// ===================================================
// Import code for queries
// To export copy and paste into routes:

// const BankTable = require(path.join("../model/modelViews/bankView.js"))(sequelize, Sequelize.DataTypes);

// ===================================================