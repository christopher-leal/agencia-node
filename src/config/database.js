const Sequelize = require('sequelize');
require('dotenv').config({ path: 'variables.env' });

module.exports = new Sequelize(
	process.env.BD_NOMBRE,
	process.env.BD_USUARIO,
	process.env.BD_PASSWORD,
	{
		host: process.env.BD_HOST,
		port: process.env.BD_PORT,
		dialect: 'mysql',
		define: {
			timestamps: false
		},
		pool: {
			max: 5,
			idle: 30000,
			acquire: 60000
		}
	}
);
