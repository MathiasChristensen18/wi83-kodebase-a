// IMPORTS
// ============================================================================
const express = require('express');
const pjson = require('./package.json');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const logger = require('morgan');
const bcrypt = require('bcrypt');
const port = process.env.PORT || 3000;
const debug = require('debug')('kodebase');

// SERVER
// ============================================================================
const app = express();

// CONFIG
// ============================================================================
app.set('views', 'views');           // In which directory are views located
app.set('view engine', 'ejs');       // Which view engine to use
app.use(express.static('./public')); // Where are static files located

app.use(bodyParser.json());          // Accept JSON objects in requests
// Accept extended form elements in requests
app.use(bodyParser.urlencoded({
	'extended': true
}));

// Setup session handling
app.use(session({
	'resave': false,
	'saveUninitialized': true,
	'secret': 'really secret stuffs'
}));

app.use(logger('dev'));						// Setup console logging of route events

// Setup database connection
const db = mysql.createPool({
	'connectionLimit': 10,
	'host': process.env.DB_HOST,
	'user': process.env.DB_USER,
	'password': process.env.DB_PSWD,
	'database': process.env.DB_DTBS
});

// ROUTES
// ============================================================================
app.get('/', (req, res) => {
	res.render('page', { 'title': 'Hello, World!', 'content': `It's nice to meet you :-)` });
});

// Error page 404
app.use((req, res) => {
	res.status(404);
	res.render('page', { 'title': '404: Not Found', 'content': 'The page you are looking for does not exist.' });
});

// Error page 500
app.use((error, req, res, next) => {
	res.status(500);
	res.render('page', { 'title': '500: Internal Server Error', 'content': 'Something went wrong on your server. Check your console log.' });
	debug(error);
});

// SERVER INIT
// ============================================================================
app.listen(port, () => {
	debug(
		`${pjson.name} v${pjson.version} is running on http://${process.env.SITE_HOST}:${port}`
	);
});
