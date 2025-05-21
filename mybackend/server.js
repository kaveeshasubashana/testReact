const express = require('express');
const app = express();
const cors = require('cors');
const app = require('./app');
const mongoose = require('mongoose');


app.use(cors());

app.use(express.json());

const url = 'mongodb+srv://kavee:abcd1234@cluster0.h97u6h4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const server = app.listen(3001,'127.0.0.1', () =>{ console.log(`node server  is listening to ${server.address().port}`)});