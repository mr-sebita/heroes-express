// Require de Express    (require('express'))
const express = require('express');

// Require de FS


// Ejecución de Express
const app = express();

const routeMain= require('./routes/main');
app.use('/',routeMain);

const routeHeroes = require('./routes/heroes');
app.use('/heroes',routeHeroes); 

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));



const routeMain = require('./routes/main');
// Ruta Raíz / ➝ Home

app.use('/',routeMain);

const routeHeroes = require('./routes/heroes');
app.use('/heroes', routeHeroes)

// Ruta Créditos
// ¿?

app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});
