const express = require('express');
const app = express();
const app = require('./app');
const mongoose = require('mongoose');




const server = app.listen(3001,'127.0.0.1', () =>{ console.log(`node server  is listening to ${server.address().port}`)});