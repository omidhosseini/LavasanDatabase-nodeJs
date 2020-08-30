const express = require('express');
const router = express.Router();
const UserService = require('../services/users/user-service');
const {createUserSchema, getUserSchema} = require('../dto/users/create-user-dto');
const service = new UserService();

router.post('/', async (req, res) => {

    const {error} = createUserSchema.validate(req.body);
    if (error) 
        return res.status(400).send(error.details[0].message);
    


    service.addUser(req.body).then(async (result) => {
        res.send(await result);
    }).catch(async (err) => {
        res.status(400).send(await err);
    });
});


router.get('/', async (req, res) => {

    const {error} = getUserSchema.validate(req.query);
    if (error) 
        return res.status(400).send(error.details[0].message);
    


    service.getUsers(req.query).then(async (result) => {
        res.send(await result);
    }).catch(async (err) => {
        res.status(400).send(await err);
    });

});

module.exports = router;
