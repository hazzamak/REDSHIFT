'use strict';

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