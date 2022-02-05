'use strict';
const Sequelize = require('sequelize');
const mysql = require('mysql');

const env = require('./env.json');
const db={};


const sequelize = new Sequelize(env.database,env.user, env.password,{
host: env.host,
port: env.port,
logging: true,
dialect:'mysql',
define: {
    timestamps: false
},
operatorsAliases: false,
pool: {
    max: 5,
    min: 0,
    acquire: 20000,
    idle: 10000
}

});
module.exports = {
    'Sequelize': Sequelize,
    'sequelize': sequelize
};