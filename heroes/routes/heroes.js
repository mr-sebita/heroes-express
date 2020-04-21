const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

const express = require('express');
const route = express.Router();
const heroesController = require ('../controllers/heroesController');

// Ruta / heroes
route.get('/heroes', heroesController.heroes);



// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
route.get('/heroes/detalle/:id', heroesController.detalle);

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
route.get('/heroes/:id/bio/:ok?', heroesController.bio);
module.exports = route;
