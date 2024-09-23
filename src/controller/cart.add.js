import CartItemModel from "../model/cartItemModel.js";
import dotenv from "dotenv";
dotenv.config();

//controller to add product to cart
export const addToCart = async (req, res)=>{
    const { product, quantity } = req.body; //getting product and quantity from request body
    const user = req.user; //getting user from middleware
    try {
            const newcartItem = new CartItemModel({
                product:product,
                quantity:quantity,
                userId:user.id
            })
            const prod = await newcartItem.save(); //saving new cart item
            if(prod){
                res.status(200).json({message:"product added to cart", success:true });
            }else{
                res.status(500).json({message:"failed to add product to cart", success:false });
            }
        
    } catch (error) {
        res.status(500).json({message:"failed to add product to cart", success:false, error:error })
    }
}