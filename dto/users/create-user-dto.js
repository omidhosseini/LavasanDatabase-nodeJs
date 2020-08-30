import Joi from 'joi';


const createUserSchema = Joi.object({
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    phone: Joi.string().min(10).max(12).required(),
    password: Joi.string().min(3).max(255).required()
});

const getUserSchema = Joi.object({
    firstName: Joi.string().min(3).max(50),
    lastName: Joi.string().min(3).max(50),
    email: Joi.string().min(5).max(255).email(),
    phone: Joi.string().min(10).max(12),
    pageSize: Joi.number().min(1).required(),
    pageNumber: Joi.number().min(1).required()
});


export {createUserSchema , getUserSchema}
