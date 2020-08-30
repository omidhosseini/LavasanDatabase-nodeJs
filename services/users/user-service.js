const bcrypt = require("bcrypt");
const _ = require('lodash');
const {User, validate} = require("../../models/user-model");
class UserService {

    async getUsers(req) {

        const user = (await User.findOne({email: req.email})) || (await User.findOne({phone: req.phone}));
        if (! user) 
            return new Promise((resolve, reject) => {
                reject("User already registered");
            });
        


        const users = await User.find().skip((req.pageNumber - 1) * req.pageSize).limit(req.pageSize * 1).sort({_Id: 1});

 
        const mapped = _.map(users, _.partialRight(_.pick, ["firstName", "lastName", "email", "phone"]));

        return mapped;

    }

    async addUser(req) {

        let user = (await User.findOne({email: req.email})) || (await User.findOne({phone: req.phone}));
        if (user) 
            return new Promise((resolve, reject) => {
                reject("User already registered");
            });
        


        user = new User(_.pick(req, "firstName", "lastName", "email", "phone", "password"));
        await user.save().then((r) => {
            return new Promise((resolve, reject) => {
                resolve(_.pick(r, "firstName", "lastName", "email", "phone"));
            })
        }).catch((err) => {
            return new Promise((resolve, reject) => {
                reject("Somthing has wrong...");
            });
        });
    }
}


module.exports = UserService;
