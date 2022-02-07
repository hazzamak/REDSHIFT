'use strict';
//===================================================
//controller index must be set up 
const db = require('../db');

exports.orders_get_all = router.get('/', async (req, res, next) => {
    try{
        let results = await db.all();
        res.json(results);
        
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})