import connectdb from "./helper/connectdb.js";
import express from "express";
import morgan from "morgan";
import userRouter from "./routes/users/userRoutes.js";
import productsRouter from "./routes/products/productRoutes.js";
import cartRouter from "./routes/cartItems/cartRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { corsOptions } from "./helper/corsOptions.js";
import orderRouter from "./routes/orders/orderRoutes.js";
import path from "path";

const app = express(); //initialising express


//connecting to database
connectdb();

//middlewares
// This code makes sure that any request that does not matches a static file
// in the build folder, will just serve index.html. Client side routing is
// going to make sure that the correct content will be loaded.
app.use((req, res, next) => {
  if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
      next();
  } else {
      res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
      res.header('Expires', '-1');
      res.header('Pragma', 'no-cache');
      res.sendFile(path.join(path.resolve(), 'dist', 'index.html'));
  }
});

// app.use(cors(corsOptions));//allowing cross origin access
app.use(cookieParser());//middleware for parsing cookies
app.use(morgan("dev"));// logs request to terminal
app.use(express.json()); //body parsing middleware

//routes
app.use(express.static(path.join(path.resolve(), './dist')));
app.use("/api/", cartRouter) // routes related to cart
app.use("/api/", userRouter) // routes related to users
app.use("/api/", productsRouter)//routes related to products
app.use("/api/", orderRouter); //routes related to orders


app.get("/", (req, res)=>{
  res.sendFile(path.join(path.resolve(), './dist/index.html'));
})

app.listen(8000, () => {
    console.log("server is running at http://localhost:8000");
});

export default app;