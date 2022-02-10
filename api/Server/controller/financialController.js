"use strict";
const Sequelize = require("sequelize");
const env = require("../db/env.js");

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    port: env.port,
    logging: console.log,
    dialect: "mysql",
});

exports.getFinancialByName = (req, res) => {
    console.log(req.params);
    sequelize
        .query("SELECT * FROM bank_tables WHERE forenames = '" + req.params.forenames + "' AND surname = '" + req.params.surname + "' AND dateOfBirth = '" + req.params.dateOfBirth + "'", {
            type: sequelize.QueryTypes.SELECT,
        })
        .then((response) => {
            res.status(200).json({
                status: 1,
                message: "Bank records found",
                data: response,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};
