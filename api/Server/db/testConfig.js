const connection = require("./index.js");

connection.authenticate().then(function(success){

    console.log("connection to db is a success")
}).catch(function(err){
    console.log("we have this error: ", err);
});