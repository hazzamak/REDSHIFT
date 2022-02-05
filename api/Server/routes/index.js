const express = require('express');
const http = require('http');



// const cors = require('cors');
// likely not needed here
// express.request(cors());

const db = require('../db/index.js');

const router = express.Router();



router.get('/getall', async(req, res,next)=>{
    try{
        let results = await db.all();
        res.json(results);
    } catch(e)
{
    console.log(e);
    res.sendStatus(500);
}});

router.get('/:id', async(req, res,next)=>{
    try{
        let results = await db.one(req.params.id);
        res.json(results);
    } catch(e)
{
    console.log(e);
    res.sendStatus(500);
}});


module.exports = router;