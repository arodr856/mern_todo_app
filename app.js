const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { todosRoute } = require('./routes/index');
const { mongodbConfig } = require('./config/config');

mongoose.connect(mongodbConfig.uri, {useNewUrlParser: true, useFindAndModify: false})

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/todos', todosRoute);

const port = process.env.NODE_ENV || 5000;
app.listen(port, console.log(`Listening on port ${port}. . .`));