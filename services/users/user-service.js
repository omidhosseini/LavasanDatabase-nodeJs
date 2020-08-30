const bcrypt = require("bcrypt");
const _ = require('lodash');
const {User, validate} = require("../../models/user-model");

class UserService {

    async addUser(req) {

        const {error} = validate(req);
        if (error) 
            return new Promise((resolve, reject) => {
                reject(error.details[0].message);
            });

        let user = (await User.findOne({email: req.email})) || (await User.findOne({phone: req.phone}));
        if (user) 
            return new Promise((resolve, reject) => {
                reject("User already registered");
            });
        
        user = new User(_.pick(req, "firstName", "lastName", "email", "phone", "password"));
        const res = await user.save().then((r) => {
            return new Promise((resolve, reject) => {
                resolve(_.pick(r, "firstName", "lastName", "email", "phone"));
            })
        }).catch((err) => {
            return new Promise((resolve, reject) => {
                reject("Somthing has wrong...");
            });
        });

        return res;
    }
}


module.exports = UserService;
