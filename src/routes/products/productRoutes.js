import express from "express"
import ProductModel from "../../Model/productModel.js"

const productsRouter = express.Router();

//get all products
productsRouter.get("/products", async (req, res)=>{
    try {
        const products = await ProductModel.find({});
        if(products){
            res.json({products:products, success:true }).status(200);
        }else{
            res.json({message:"no products found in the database", success:false }).status(404);
        }
    } catch (error) {
        console.log(error)
        res.json({ message:"Internal server Error", success:false, error:error }).status(500);
    }   
})

//get single product by id
productsRouter.get("/products/:id", async (req, res)=>{
    try {
        const id =req.params.id;
        if(!id) return res.status(400).json({message:"id is required", success:false });
        const product = await ProductModel.findById(id);
        if(!product) return res.status(404).json({message:`product with id ${id} does not exist`, success:false });
        res.json({product:product, success:true }).status(200);
    } catch (error) {
        console.log(error)
        res.json({ message:"Internal server Error", success:false, error:error }).status(500);
    }   
})

export default productsRouter;