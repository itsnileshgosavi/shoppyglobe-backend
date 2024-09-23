import mongoose, { Schema } from "mongoose";

const cartItemSchema = new Schema({
  product: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: Number,
    brand: String,
    dimensions: {
      width: Number,
      height: Number,
      depth: Number,
    },
    thumbnail:{
      type: String,
      required: true,
    },
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

const CartItemModel = mongoose.model("cartItem", cartItemSchema);

export default CartItemModel;