import express from "express";
import userRouter from "../routes/user.routes.js";

const expressApp = express();

// Middleware
expressApp.use(express.json());

// Routes
expressApp.use('/user', userRouter);

export default expressApp;