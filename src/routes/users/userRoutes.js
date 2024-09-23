import express from "express";
import { signinDataValidate, signUpdataValidate } from "../../middleware/dataValidate.js";
import dotenv from "dotenv";
import userRegister from "../../controller/user.register.js";
import { userSignin } from "../../controller/user.signin.js";
import { userLogout } from "../../controller/user.logout.js";
dotenv.config();

const userRouter = express.Router();

// register user
userRouter.post("/user/register", signUpdataValidate, userRegister);

// login user
userRouter.post("/user/signin", signinDataValidate ,userSignin);

// logout user
userRouter.get("/user/logout", userLogout);

export default userRouter;
