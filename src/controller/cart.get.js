import jwt from "jsonwebtoken"
import CartItemModel from "../model/cartItemModel.js";
import dotenv from "dotenv";
dotenv.config();
//controller to get cart items 
export const getCartItems =async (req, res)=>{
    try {
        const userId =req.user.id;
            const items = await CartItemModel.find({userId:userId}); //finding cart items by userId
            if(!items) return res.status(404).json({message:`cart item with id ${id} does not exist`, success:false }); //if cart item not found 
            res.status(200).json({items:items, success:true });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message:"Internal server Error", success:false, error:error });
    }
}