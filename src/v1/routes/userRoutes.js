import express from "express";
import { body, oneOf, validationResult } from 'express-validator';
import userController from "../../controllers/userController.js";

const router = express.Router();

router.get("/", function(req, res) {
    userController.getAllUsers(req, res);
});

router.post('/', body('mail').isEmail(),body('password').isLength({ min: 5 }), function(req, res){

    try {
        validationResult(req).throw();
        userController.createUser(req, res);
    } catch (err) {
        res.status(400).send( { status: "Fail", data: 'Objeto invalido' });
    }
    
});

export default {
    router
}