import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import e from "express";
dotenv.config();

export function tokenValidation(req, res, next) {
  try {
    const token = req.cookies.authtoken; //getting token from cookie
    if (!token) { 
      return res
        .status(401)
        .json({
          message: "Token not found: Please login and try again",
          success: false,
        });
    }
    const tokenPayload = jwt.verify(token, process.env.JWT_SECRET); //verifying token
    if (!tokenPayload) {
      return res
        .status(401)
        .json({
          message: "Invalid Token: User is not authorized",
          success: false,
        });
    } else {
      req.user = tokenPayload.user;//setting user in request
      next();
    }
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res
        .status(401)
        .json({
          message: "Invalid Token: User is not authorized",
          success: false,
        });
    }else{
      return res
        .status(500)
        .json({
          message: "Internal Server Error",
          success: false,
          error: error,
        });
    }
  }
  
}
