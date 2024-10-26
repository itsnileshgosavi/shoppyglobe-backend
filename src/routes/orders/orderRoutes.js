import express from "express";
import { tokenValidation } from "../../middleware/tokenValidation.js";
import orderModel from "../../model/orderModel.js";

const orderRouter = express.Router();

orderRouter.post("/order/place", tokenValidation, (req, res) => {
    try {
        const { fName, lName, email, address, phone, products, orderTotal, pincode } = req.body;
        const user = req.user;
        const order = new orderModel({
            userId: user.id,
            firstName: fName,
            lastName: lName,
            email,
            address,
            phone,
            products,
            orderTotal,
            pincode
        });
        order.save();
        if (order) {
            res.status(201).json({ message: "order placed successfully", success: true });
        } else {
            res.status(500).json({ message: "Internal Server Error", success: false });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", success: false, error: error });
    }
});

export default orderRouter;