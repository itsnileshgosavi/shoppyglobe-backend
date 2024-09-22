import connectdb from "./helper/connectdb.js";
import express from "express";
import morgan from "morgan";
import userRouter from "./routes/users/userRoutes.js";
import productsRouter from "./routes/products/productRoutes.js";
import cartRouter from "./routes/cartItems/cartRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express(); //initialising express


//connecting to database
connectdb();

//middlewares
app.use(cookieParser());//middleware for parsing cookies
app.use(morgan("dev"));// logs request to terminal
app.use(express.json()); //body parsing middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

//routes
app.use("/api/", cartRouter) // routes related to cart
app.use("/api/", userRouter) // routes related to users
app.use("/api/", productsRouter)//routes related to products

app.get("/", (req, res)=>{
  res.send("Hello");
})

app.listen(8000, () => {
    console.log("server is running at http://localhost:8000");
});