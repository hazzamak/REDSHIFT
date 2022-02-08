// Middleware
const Sequelize = require("sequelize"); // Sequelize is not an object, its about the details of the connection to the db

// ===================================================

// ===================================================
// Creating model and exporting it, this data matches the data in the mysql database

module.exports =function(sequelize, DataTypes){
return  sequelize.define("vehicle_table",{
    registrationDate:{
        type: Sequelize.STRING,

    },
    vehicleRegistrationNo:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    make:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    model:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    colour:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    forenames:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    surname:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    address:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    dateOfBirth:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    driverLicenceID:{
        //driverLicenseId
        type: Sequelize.STRING
    },
    timestamp:{
        type: Sequelize.STRING
       // defaultValue: "Unkown"
    },
    anprId:{
        type: Sequelize.INTEGER
    },
    streetName:{
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
        modelName: "VehicleTable", //This should match the const in the import below
        timestamps: false,
        freezeTableName: true,

});
}
// ===================================================
// Import code for queries
// To export copy and paste into routes:

// const VehicleTable = require(path.join("../model/modelViews/vehicleView.js"))(sequelize, Sequelize.DataTypes);
//Here Camera is capitalized unlike the database, could cause confusion
// ===================================================