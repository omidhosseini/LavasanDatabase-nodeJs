import express from 'express';
import _ from 'lodash';
import Joi from 'joi';
import objectId from 'joi-objectid';
import mongoose from 'mongoose';
import usersRoutes from './routes/users-route.js';


const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/lavasandatabase', {useNewUrlParser : true, useUnifiedTopology : true})
.then(()=> console.log('Connected to MongoDb...'))
.catch(err=> console.error('Could not connect to MongoDb...'));


app.use(express.json());
app.use('/api/users',usersRoutes);

app.listen(PORT, () => {
    console.log(`Server start at localhost:${PORT}`)
});