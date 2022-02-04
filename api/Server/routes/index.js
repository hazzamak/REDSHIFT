const express = require('express');
const db = require('../db');
const router = express.Router();

// added cors
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

router.get('/', async (req, res, next) => {
    try{
        let results = await db.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        let results = await db.one(req.params.id);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports = router;