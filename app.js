const express = require('express');
const mongoose = require('mongoose');

const { todosRoute } = require('./routes/index');
const { mongodbConfig } = require('./config/config');

mongoose.connect(mongodbConfig.uri, {useNewUrlParser: true})

const app = express();

app.use('/api/todos', todosRoute);

const port = process.env.NODE_ENV || 5000;
app.listen(port, console.log(`Listening on port ${port}. . .`));