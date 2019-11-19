const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const configs = require('./config');
require('dotenv').config({ path: 'variables.env' });

//muestra el año actual y genera la ruta
app.use((req, res, next) => {
	let fecha = new Date();
	res.locals.fechaActual = fecha.getFullYear();
	res.locals.ruta = req.path;
	return next();
});
//se inicializa body-parser
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());
//importamos las rutas declaradas en idex
app.use(require('./routes/index'));

//habilitar carpeta publica
app.use(express.static(path.join(__dirname, '../public')));
//validar si estamos en desarrollo o produccion
const config = configs[app.get('env')];
//creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;
//habilitar pug motor de plantillas
app.set('view engine', 'pug');
//añadir las vistas
app.set('views', path.join(__dirname, './views'));
//configuracion de la bd
const db = require('./config/database');
db
	.authenticate()
	.then(() => {
		console.log('DB conectada');
	})
	.catch((err) => {
		console.log(err);
	});

//configuracion del puerto 3000
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, host, () => {
	console.log('escuchando el puerto 3000');
});
