import {createUserSchema, getUserSchema} from '../dto/users/user-dto.js';
import UserService from '../services/users/user-service.js';

const service = new UserService();

export const createUser = async (req, res) => {

    const {error} = createUserSchema.validate(req.body);
    if (error) 
        return res.status(400).send(error.details[0].message);
    


    service.addUser(req.body).then(async (result) => {
        res.send(await result);
    }).catch(async (err) => {
        res.status(400).send(await err);
    });
}

export const getUsers = async (req, res) => {

    const {error} = getUserSchema.validate(req.query);
    if (error) 
        return res.status(400).send(error.details[0].message);
    


    service.getUsers(req.query).then(async (result) => {
        res.send(await result);
    }).catch(async (err) => {
        res.status(400).send(await err);
    });

}
