import express from "express"
import { getAllProducts, getSingleProduct } from "../../controller/product.get.js";
import { addProduct } from "../../controller/products.add.js";
import { updateProduct } from "../../controller/products.update.js";
import { deleteProduct } from "../../controller/product.delete.js";
import { addProductDataValidate, updateProductDataValidate } from "../../middleware/dataValidate.js";

const productsRouter = express.Router();

//get all products
productsRouter.get("/products", getAllProducts)

//get single product by id
productsRouter.get("/products/:id", getSingleProduct);

//add product new product
productsRouter.post("/products", addProductDataValidate, addProduct);

//update product
productsRouter.put("/products/:productid", updateProductDataValidate, updateProduct );

//delete product
productsRouter.delete("/products/:productid", deleteProduct );

export default productsRouter;