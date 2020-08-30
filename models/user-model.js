const Joi = require('joi');
const mongoose = require('mongoose');


const User = mongoose.model('User', new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    phone: {
        type: String,
        required: true,
        minlength: 11,
        maxlength: 12,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024
    },
}));


function validateUser(user) {
    
    const schema =  Joi.object({
        firstName : Joi.string().min(3).max(50).required(),
        lastName : Joi.string().min(3).max(50).required(),
        email : Joi.string().min(5).max(255).required().email(),
        phone : Joi.string().min(10).max(12).required(),
        password : Joi.string().min(3).max(255).required()
    });

    return schema.validate(user);
}

module.exports.User = User;
module.exports.validate = validateUser;