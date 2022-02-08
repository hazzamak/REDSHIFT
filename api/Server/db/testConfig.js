const connection = require("./index.js");
const env = require('./env.js');
const Sequelize = require('sequelize');

const db = connection(env);




db.authenticate().then(function(success){

    console.log("connection to db is a success")
}).catch(function(err){
    console.log("we have this error: ", err);
});