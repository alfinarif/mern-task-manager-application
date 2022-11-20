const express = require('express');
const app = express();

const router = require('./src/routers/api');




app.use('/api/v1', router);

module.exports = app;