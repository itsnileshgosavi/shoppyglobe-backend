import ProductModel from "../model/productModel.js";

export const getAllProducts = async (req, res)=>{
    try {
        const products = await ProductModel.find({}); //searching all products
        if(products){
            res.json({products:products, success:true }).status(200);
        }else{
            res.json({message:"no products found in the database", success:false }).status(404);
        }
    } catch (error) {
        console.log(error)
        res.json({ message:"Internal server Error", success:false, error:error }).status(500);
    }   
}
//controller to get single product
export const getSingleProduct =  async (req, res)=>{
    try {
        const id =req.params.id;
        if(!id) return res.status(400).json({message:"id is required", success:false });
        const product = await ProductModel.findById(id); //searching product by id
        if(!product) return res.status(404).json({message:`product with id ${id} does not exist`, success:false });
        res.json({product:product, success:true }).status(200);
    } catch (error) {
        if (error.kind === "ObjectId") {
            res.status(404).json({message:`product with this id does not exist`, success:false });
        }else{
            
            res.json({ message:"Internal server Error", success:false, error:error }).status(500);
        }
    }   
}