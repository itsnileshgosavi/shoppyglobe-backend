import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import userModel from "../model/userModel.js";
import dotenv from "dotenv";
dotenv.config();
export const userSignin = async (req, res) => {
    try {
      const { email, password } = req.body; //getting data from request body
      const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //email regex
      if (!email.match(emailregex)) {  //validating email
        return res.status(400).json({ message: "invalid email", success: false });
      }
      const user = await userModel.findOne({ email });//searching for user by email
  
      if(!user) return res.status(404).json({message:"invalid email", success:false }); //if user not found
      const isMatched = await bcrypt.compare(password, user.password); //using bcrypt to compare password
      if (isMatched) {
        const authToken = jwt.sign(
          { user: { id: user._id, firstName:user.firstName, lastName:user.lastName, email:user.email } },
          process.env.JWT_SECRET,
          { expiresIn: "24h" }
        );
        res.cookie("authtoken", authToken,{ //setting cookie
          httpOnly: false, //making cookie accessible by javascript on client
          secure: true, //this is to allow cookie to be sent over https
          sameSite: 'none', //allowing the cookie to be sent across different domains since i am using two different domains for frontend and backend
          maxAge: 86400000,
          domain:"nileshgosavi.tech", // cookie will expire after 24 hours
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
  }