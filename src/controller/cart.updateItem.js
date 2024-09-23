import jwt from "jsonwebtoken";
import CartItemModel from "../model/cartItemModel.js";
import dotenv from "dotenv";
dotenv.config();

export const updateCartItem = async (req, res) => {
    try {
         
        const itemid = req.params.itemid;
            const updated = await CartItemModel.findByIdAndUpdate(
                itemid, // The id of the item to be updated
                {
                    quantity: req.body.quantity
                }, 
                {
                    new: true, // Return the updated document
                    $currentDate: { lastModified: true } // Set lastModified field
                }
            );
            
            if (updated) {
                res.status(200).json({
                    message: "Item updated in cart", 
                    success: true, 
                    updatedItem: updated
                });
            } else {
                res.status(404).json({
                    message: "Item with this ID does not exist", 
                    success: false
                });
            }
       
  
    } catch (error) {
        if(error.kind === "ObjectId"){
            res.status(404).json({
                message: "Item with this ID does not exist", 
                success: false
            });
        }else{
            res.status(500).json({
                message: "Internal server error", 
                success: false,
                error:error
            });  
        }
       
    }
}