import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    products: [
        {
            title: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                default: 1,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],
    orderTotal: {
        type: Number,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: "pending",
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const orderModel = mongoose.model("orders", orderSchema);
export default orderModel;