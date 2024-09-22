import express from "express";
import userModel from "../../model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { signUpdataValidate } from "../../middleware/dataValidate.js";
import dotenv from "dotenv";
dotenv.config();

const userRouter = express.Router();

// register user
userRouter.post("/user/register", signUpdataValidate, async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;
    const pwdHash = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      email,
      firstName,
      lastName,
      password:pwdHash,
    });

    if (user) {
      res.status(200).json({ message: "user created", success: true });
    } else {
      res.status(500).json({ message: "something went wrong", success: false });
    }
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "user already exists", success: false });
    } else {
      res.status(500).json({
        message: "Internal Server Error",
        success: false,
        error: error,
      });
    }
  }
});

// login user
userRouter.post("/user/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailregex)) {
      return res.status(400).json({ message: "invalid email", success: false });
    }
    const user = await userModel.findOne({ email });//searching for user by email

    if(!user) return res.status(404).json({message:"invalid email", success:false });
    const isMatched = await bcrypt.compare(password, user.password); //using bcrypt to hash password
    if (isMatched) {
      const authToken = jwt.sign(
        { user: { id: user._id, firstName:user.firstName, lastName:user.lastName, email:user.email } },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
      res.cookie("authtoken", authToken,{
        httpOnly: false,
        secure: true,
        sameSite: 'none'
      });
     return res.status(200).json({ message: "user logged in", success: true, user: { id: user._id, firstName:user.firstName, lastName:user.lastName, email:user.email } });
    } else {
      res.status(401).json({ message: "Invalid Credentials", success: false });
    }
  } catch (error) {
    console.log(error)
    if (error.code === 11000) {
      res.status(401).json({ message: "Invalid Credentials", success: false });
    } else {
      res.status(500).json({
        message: "Internal Server Error",
        success: false,
        error: error,
      });
    }
  }
});

// logout user
userRouter.get("/user/logout", (req, res) => {
  try {
    res.clearCookie("authtoken");
    res.status(200).json({ message: "user logged out", success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
})

export default userRouter;
