const express = require('express');
let route = express.Router();

const mainController = require('../controllers/mainController')
route.get('/',mainController.index );

route.get('/creditos',mainController.creditos);
module.exports = route;