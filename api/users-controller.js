const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserService = require('../services/users/user-service')

router.post('/', async (req, res) => {

    console.log('POST /api/users');

    let service = new UserService();

    await service.addUser(req.body).then(async (result) => {
        console.log("asdasd",await result);

        res.send(await result);
    }).catch(async (err) => {
        console.error(await err);
        res.status(400).send(await err);
    })


    //
});

module.exports = router;
