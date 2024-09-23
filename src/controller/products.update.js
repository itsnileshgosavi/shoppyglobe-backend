import ProductModel from "../model/productModel.js";

export const updateProduct = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.productid;
    if (!id)
      return res
        .status(400)
        .json({ message: "id is required", success: false });
    const dbproduct = await ProductModel.findById(id); //searching product by id
    if (!dbproduct)
      return res
        .status(404)
        .json({
          message: `product with id ${id} does not exist`,
          success: false,
        });
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, data, {
      new: true,
      $currentDate: { lastModified: true },
    });
    res
      .status(200)
      .json({
        message: "product updated",
        updatedproduct: updatedProduct,
        success: true,
      });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      res
        .status(409)
        .json({
          message: "this id is assigned to different product",
          success: false,
        });
    } else {
      res
        .status(500)
        .json({
          message: "Internal server error",
          success: false,
          error: error,
        });
    }
  }
};
