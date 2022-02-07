const express = require('express');
const db = require('../db');
const router = express.Router();
const odersController = require('../controller');

// added cors
// const cors = require('cors');
// const app = express();
// app.use(cors());

router.get("/", ordersController.orders_get_all );

module.exports = router;