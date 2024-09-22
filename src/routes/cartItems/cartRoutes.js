import express from "express"
import CartItemModel from "../../model/cartItemModel.js"
import jwt from "jsonwebtoken"
import userModel from "../../model/userModel.js";
import { tokenValidation } from "../../middleware/tokenValidation.js";

const cartRouter = express.Router();
//get all cart items
cartRouter.get("/cart/items", async (req, res)=>{
    try {
        const all = await CartItemModel.find({});
        res.status(200).json({items:all, success:true });
    } catch (error) {
        res.status(500).json({message:"Internal server Error", success:false, error:error });
    }
});

//get cart items by userId
cartRouter.get("/cart/items/:userId", tokenValidation ,async (req, res)=>{
    try {
        const userId =req.params.userId;
        const token = req.cookies.authtoken;
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        if(!userId) return res.status(400).json({message:"id is required", success:false });
        if(tokenData && userId == tokenData.user.id){
            const items = await CartItemModel.find({userId:userId});
            if(!items) return res.status(404).json({message:`cart item with id ${id} does not exist`, success:false }); 
            res.status(200).json({items:items, success:true });
        }else{
            res.status(403).json({message:"Invalid Token", success:false });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message:"Internal server Error", success:false, error:error });
    }
})

//add cart item
cartRouter.post("/cart/item", tokenValidation, async (req, res)=>{
    const { product, quantity, userId } = req.body;
    try {
        const token = req.cookies.authtoken;
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        if(tokenData && userId == tokenData.user.id){  //This conditon makes sure that the token is valid and the user sending the request is the owner of the token
            const newcartItem = new CartItemModel({
                product:product,
                quantity:quantity,
                userId:userId
            })
            const prod = await newcartItem.save();
            if(prod){
                res.status(200).json({message:"product added to cart", success:true });
            }else{
                res.status(500).json({message:"failed to add product to cart", success:false });
            }
        }else{
            res.status(401).json({message:"Invalid Token", success:false })
        }
        
    } catch (error) {
        if (error.message ==="invalid signature"){
           return res.status(401).json({message:"Invalid Token", success:false })
        }else
        res.status(500).json({message:"failed to add product to cart", success:false, error:error })
    }
})

//update cart item
cartRouter.put("/cart/items/:id", tokenValidation, async (req, res) => {
    try {
        const id = req.params.id;
        const token = req.cookies.authtoken;   
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        if(tokenData && id == tokenData.user.id){
            const updated = await CartItemModel.findByIdAndUpdate(
                id, 
                req.body, 
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
        }else{
            res.status(401).json({message:"Invalid Token", success:false})
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
});


//delete cart item
cartRouter.delete("/cart/items/:id", tokenValidation, async (req, res)=>{
    try {
        const token = req.cookies.authtoken;  
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);
        const id = req.params.id;
        if(tokenData && id == tokenData.user.id){
            const deleted = await CartItemModel.findByIdAndDelete(id);
            if(deleted){
                res.status(200).json({message: "Item removed from cart", success:true});
            }else{
                res.status(404).json({ message:"Item with this id does not exist", success:false });
            }
        }else{
            res.status(401).json({message:"Invalid Token", success:false })
        }
        
    } catch (error) {
        res.status(500).json({message:"Internal server error", success:false });
    }
});

export default cartRouter;