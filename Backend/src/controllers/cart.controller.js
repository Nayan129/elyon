import cartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";

export async function addToCart() {
  const { productId, varientId } = req.params;

  const product = await productModel.findOne({
    _id: productId,
    "varients._id": varientId,
  });

  if (!product) {
    return res.status(404).json({
      message: "product or varient not found",
      success: false,
    });
  }

  // find product in cart or not if not create/add in cart

  const cart =
    (await cartModel.findOne({ user: req.user._id })) ||
    (await cartModel.create({ user: req.user._id })); 

  // product or varient is in cart or not
  const isProductAlreadyInCart = cart.item.some(
    item.product.toString() === productId &&
      item.varient?.toSting() === varientId,
  );

  // product quanitity increase by one if already in cart
  if (isProductAlreadyInCart) {
    
  }
}
