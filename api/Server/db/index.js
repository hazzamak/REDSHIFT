const mysql = require('mysql');


const http = require("http"); // http package for createServer
require('dotenv').config();
const db = mysql.createPool({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

let citzensdb={};

citzensdb.all = ()=>{

    return new Promise((resolve, reject)=> {
        db.query(`select * FROM citzens`,(err, results)=>{

            if(err){
                return reject(err);
            }
            return resolve(results);

        });
    });

};

module.exports = citzensdb;