//require('dotenv').config();
import * as dotenv from 'dotenv';
import express from "express";
import bodyParser from "body-parser";
import v1Routes from "./v1/routes/userRoutes.js";

const env = dotenv.config().parsed;
const app = express();
const PORT = env.PORT;

app.use(bodyParser.json());
app.use("/api/v1/user", v1Routes.router);

app.listen(PORT, () => {
    console.log(`API is listen port: ${PORT}`);
});