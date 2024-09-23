import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
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
});

const ProductModel = mongoose.model("products", productSchema);

export default ProductModel;
