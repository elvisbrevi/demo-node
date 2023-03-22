import db from "./db.json" assert { type: "json" };
import utils from "./utils.js";

const getAllUsers = () => {
    return db.users;
};

const createUser = (newUser) => {
    const isAlreadyAdded = 
        db.users.findIndex((user) => user.mail === newUser.mail) > -1;
    
    if (isAlreadyAdded) return

    db.users.push(newUser);
    utils.saveToDatabase(db);
    return newUser;
};

export default {
    getAllUsers,
    createUser
}