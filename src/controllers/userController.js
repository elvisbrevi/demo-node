import bcrypt from 'bcrypt';
import userService from "../services/userService.js";

const getAllUsers = (req, res) => {
    const allUsers = userService.getAllUsers();
    res.send({ status: "OK", data: allUsers });
};

const createUser = (req, res) => {
    
    const { body } = req;

    const newUser = {
        mail: body.mail,
        password: body.password,
    }

    bcrypt.hash(newUser.password, 10, function(err, hash) {
        newUser.password = hash;
        const createdUser = userService.createUser(newUser);
        res.status(201).send( { status: "Ok", data: createdUser });
    });
}

export default {
    getAllUsers,
    createUser
};