import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
export default async function connectdb() {
  try {
    const mongo = await mongoose.connect(process.env.MONGODB_URL);
    if (mongo.connection._readyState === 1) {
      console.log("MongoDB is Connected");
    }else if(mongo.connection._readyState === 2){
      console.log("mongodb is connecting...")
    }else{
      console.log("db is disconnected")
    }
  } catch (error) {
    console.log(error);
    console.log("Failed to connect to mongodb")
  }
}
