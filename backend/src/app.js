const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware.js');
const routes = require('./routes/routes.js')

const app = express();

app.use(express.json());

// Rutas
app.use('/', routes);


app.use(errorMiddleware);


module.exports = app