const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddleware.js');
const routes = require('./routes/routes.js')
const cors = require('cors')

const app = express();


app.use(cors({
    origin: ['http://localhost:5173', 'https://client-g64.onrender.com'],
}))
app.use(express.json());

// Rutas
app.use('/', routes);


app.use(errorMiddleware);


module.exports = app