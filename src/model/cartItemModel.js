import mongoose, { Schema } from "mongoose";

const cartItemSchema = new Schema({
  product: {
    id: {
      type: Number,
      required: true,
    },
    title: String,
    description: String,
    price: Number,
    rating: Number,
    brand: String,
    dimensions: {
      width: Number,
      height: Number,
      depth: Number,
    },
    thumbnail: String,
    warrantyInformation: String,
    returnPolicy: String,
    shipping: String,
    weight: Number,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "userModel",
  },
});

const CartItemModel = mongoose.model("cart", cartItemSchema);

export default CartItemModel;