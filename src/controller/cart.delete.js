import CartItemModel from "../model/cartItemModel.js";
import dotenv from "dotenv";
dotenv.config();

//controller to delete cart item by itemId
export const deleteCartItem = async (req, res) => {
  try {
    const itemid = req.params.itemid; // Get the itemid of the item to be deleted from the request
    const deleted = await CartItemModel.findByIdAndDelete(itemid); // Find the item and delete it
    console.log(deleted);
    if (deleted) {
      res
        .status(204)
        .json({ message: "Item removed from cart", success: true });
    } else {
      res
        .status(404)
        .json({ message: "Item with this id does not exist", success: false });
    }
  } catch (error) {
    if (error.kind === "ObjectId") {
      res.status(404).json({
        message: "Item with this ID does not exist",
        success: false,
      });
    } else {
      res.status(500).json({
        message: "Internal server error",
        success: false,
        error: error,
      });
    }
  }
};
