import ProductModel from "../model/productModel.js";
//controller to delete product
export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.productid;
        if (!id) return res.status(400).json({ message: "id is required", success: false });
        const product = await ProductModel.findById(id); //finding product by id
        if (!product) return res.status(404).json({ message: `product with id ${id} does not exist`, success: false });
        await ProductModel.findByIdAndDelete(id); //deleting product by id
        res.status(204).json({ message: "product deleted", success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", success: false, error: error });
    }
}