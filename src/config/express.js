import express from "express";
import userRouter from "../routes/user.routes.js";
import cors from 'cors';

const expressApp = express();

// Middleware
expressApp.use(express.json());
expressApp.use(cors());

// Routes
expressApp.use('/user', userRouter);

export default expressApp;