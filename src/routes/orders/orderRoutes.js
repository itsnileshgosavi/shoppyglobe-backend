import express from "express";
import { tokenValidation } from "../../middleware/tokenValidation.js";
import orderModel from "../../model/orderModel.js";

const orderRouter = express.Router();

orderRouter.post("/order/place", tokenValidation, async(req, res) => {
    try {
        const { fname, lname, email, address, phone, products, orderTotal, pincode } = req.body;
        const user = req.user;
        const order = new orderModel({
            userId: user.id,
            firstName: fname,
            lastName: lname,
            email,
            address,
            phone,
            products,
            orderTotal,
            pincode
        });
        await order.save();
        console.log(order._id);
        if (order._id) {
            res.status(201).json({ message: "order placed successfully", success: true, orderId: order._id });
        } else {
            res.status(500).json({ message: "Internal Server Error", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", success: false, error: error });
    }
});

orderRouter.get("/order/get", tokenValidation, async(req, res) => {
    try {
        const user = req.user;
        const orders = await orderModel.find({ userId: user.id });
        if (orders) {
            res.status(200).json({ orders: orders, success: true });
        } else {
            res.status(404).json({ message: "No orders found", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", success: false, error: error });
    }
});

export default orderRouter;