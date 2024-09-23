import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
 const userRegister = async (req, res) => {
    try {
      const { email, firstName, lastName, password } = req.body; //getting data from request body
      const pwdHash = await bcrypt.hash(password, 10); //using bcrypt to hash password
      const user = await userModel.create({
        email,
        firstName,
        lastName,
        password:pwdHash,
      }); //creating new user
  
      if (user) {
        res.status(201).json({ message: "user created", success: true });
      } else {
        res.status(500).json({ message: "something went wrong", success: false });
      }
    } catch (error) {
      if (error.code === 11000) {
        res.status(409).json({ message: "user with this email already exists, please login", success: false });
      } else {
        res.status(500).json({
          message: "Internal Server Error",
          success: false,
          error: error,
        });
      }
    }
  }

  export default userRegister