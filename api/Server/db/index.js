const mysql =require('mysql2');

const db = mysql.createConnection({
    host: 'redshiftdb.cfktl8uek976.eu-west-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'Np}annGQ9G&[KT9C'

});

let citzensdb = {};

db.connect((err)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("Database connected");
});


citzensdb.all = ()=>{

    return new Promise((resolve, reject)=>{

        pool.query('SELECT * FROM citzens', (err, results)=>{
            if(err){
                return reject(err);
            }

            return resolve(results);


        });


    });

};
module.exports = citzensdb;