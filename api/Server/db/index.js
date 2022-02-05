const mysql =require('mysql2');
const http = require('http');

const db = mysql.createConnection({
    host: 'redshiftdb.cfktl8uek976.eu-west-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: ''

});

let citizendb = {};

db.connect((err)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("Database connected");
});


citizendb.all = ()=>{

    return new Promise((resolve, reject)=>{

        pool.query('SELECT * FROM citizen', (err, results)=>{
            if(err){
                return reject(err);
            }

            return resolve(results);


        });


    });

};

citizendb.one = (id)=>{
    return new Promise((resolve, reject)=>{

        pool.query('SELECT * FROM citizen WHERE citizenID =?',id, (err, results)=>{
            if(err){
                return reject(err);
            }

            return resolve(results);


        });


    });

};
module.exports = citizendb;