const express = require('express');
const router = express.Router();
const http = require('http');



// const cors = require('cors');
// likely not needed here
// express.request(cors());

const sequelize = require('../db/index.js');


router.get('/getalll', async (req, res, next) => {
    await sequelize.query('SELECT * FROM citizen LIMIT 10', { type: sequelize.QueryTypes.SELECT })
        .then((result) => {
            res.status(201).send(result);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "error while carrying out request"
            });
        });
});





module.exports = router;