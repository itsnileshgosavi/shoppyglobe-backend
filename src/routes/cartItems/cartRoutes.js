import express from "express"
import { tokenValidation } from "../../middleware/tokenValidation.js";
import { getCartItems } from "../../controller/cart.get.js";
import { addToCart } from "../../controller/cart.add.js";
import { updateCartItem } from "../../controller/cart.updateItem.js";
import { deleteCartItem } from "../../controller/cart.delete.js";
import { addToCartDataValidate, UpdateCartDataValidate } from "../../middleware/dataValidate.js";

const cartRouter = express.Router();
//get all cart items


//get cart items by userId
cartRouter.get("/cart/items", tokenValidation, getCartItems);

//add cart item
cartRouter.post("/cart/item",tokenValidation, addToCartDataValidate, addToCart);

//update cart item
cartRouter.put("/cart/items/:itemid", tokenValidation,UpdateCartDataValidate ,updateCartItem);


//delete cart item
cartRouter.delete("/cart/items/:itemid", tokenValidation, deleteCartItem );

export default cartRouter;