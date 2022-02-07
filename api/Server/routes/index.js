const express = require('express');
const db = require('../db');
const router = express.Router();
const odersController = require('../controller');

// added cors
// const cors = require('cors');
// const app = express();
// app.use(cors());

router.get("/", ordersController.orders_get_all );

router.get('/', async (req, res, next) => {
try{
    let results = await db.all();
    res.json(results);
    
} catch(e){
    console.log(e);
    res.sendStatus(500);
}

});

module.exports = router;