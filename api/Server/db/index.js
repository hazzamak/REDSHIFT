'use strict';

//Nothing here is being used in the main program at the moment
// Needs to be set up to export the sequelize connection below so it can be called in other files rather than being declared each time
//Middleware
const Sequelize = require('sequelize');

// Setting env as the connection details, env.json is in gitignore
const env = require('./env.js');

//Using sequelize to connect to the db
const connection = new Sequelize(env.database, env.user, env.password,{
    host: env.host,
    port: env.port,

    dialect:'mysql'

});
//Sync model, may not be needed here

connection.authenticate().then(function(success){

    console.log("connection to db is a success")
}).catch(function(err){
    console.log("we have this error: ", err);
});

// Test connection to the db

// Exporting sequelize connection details 
module.exports  = connection;


//===================================================
//Nothing here is being used in the main program at the moment