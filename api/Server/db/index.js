const mysql =require('mysql2');

const db = mysql.createConnection({
    host: '',
    port: '',
    user: '',
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

        pool.query('SELECT * FROM citizen WHERE citizenId =?',id, (err, results)=>{
            if(err){
                return reject(err);
            }

            return resolve(results);


        });


    });

};
module.exports = citizendb;