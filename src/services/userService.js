import user from "../database/user.js";

const getAllUsers = () => {
    const allUsers= user.getAllUsers();
    return allUsers;
};

const createUser = (newUser) => {
    const userCreated= user.createUser(newUser);
    return userCreated;
};

export default {
    getAllUsers,
    createUser
};