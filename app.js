const express = require('express');
const app = express();

app.use(express.json());

const usuarioRoutes = require('./routers/usuarioRouters');
const atividadeRoutes = require('./routers/atividadeRouters');

app.use(usuarioRoutes);
app.use(atividadeRoutes);

module.exports = app;
