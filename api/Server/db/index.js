const mysql = require('mysql');

const pool = mysql.createPool({
    host: "",
    user: "",
    password: "",
    database: "",
    PORT: "",
})

let redshiftdb = {};

redshiftdb.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM ()()()()', (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}

redshiftdb.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM ()()()() WHERE id = ?', [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}

module.exports = redshiftdb;