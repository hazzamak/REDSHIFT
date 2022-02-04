const mysql =require('mysql2');

const db = mysql.createConnection({
    host: '',
    port: '',
    user: '',
    password: ''

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

citzensdb.one = (id)=>{
    return new Promise((resolve, reject)=>{

        pool.query('SELECT * FROM citzens WHERE id =?',id, (err, results)=>{
            if(err){
                return reject(err);
            }

            return resolve(results);


        });


    });

};
module.exports = citzensdb;