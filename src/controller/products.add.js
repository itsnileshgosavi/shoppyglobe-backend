import ProductModel from "../model/productModel.js";


export const addProduct = async (req, res) => {
    try {
        const product = new ProductModel(req.body);
        await product.save();//creating new product
        res.status(201).json({ message: "product added", success: true });
    } catch (error) {
        if (error.code === 11000) {
            res.status(409).json({ message: "product with this name already exists", success: false });
        }else{
            
            res.status(500).json({ message: "Internal server error", success: false });
        }
    }
}