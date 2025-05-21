const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mount router
app.use('/api', router);

module.exports = app;
