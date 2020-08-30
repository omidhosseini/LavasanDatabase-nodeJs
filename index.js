
const _ = require('lodash');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./api/users-controller');
const express = require('express');
const app = express();


mongoose.connect('mongodb://localhost/lavasandatabase', {useNewUrlParser : true, useUnifiedTopology : true})
.then(()=> console.log('Connected to MongoDb...'))
.catch(err=> console.error('Could not connect to MongoDb...'));


app.use(express.json());
app.use('/api/users',users);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server start at localhost:${port}`)
});