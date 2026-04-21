import cartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";

export async function addToCart() {
  const { productId, variantId } = req.params;

  const product = await productModel.findOne({
    _id: productId,
    "variants._id": variantId,
  });

  if (!product) {
    return res.status(404).json({
      message: "product or variant not found",
      success: false,
    });
  }

  // find product in cart or not if not create/add in cart

  const cart =
    (await cartModel.findOne({ user: req.user._id })) ||
    (await cartModel.create({ user: req.user._id }));

  // product or variant is in cart or not
  const isProductAlreadyInCart = cart.item.some(
    item.product.toString() === productId &&
      item.variant?.toSting() === variantId,
  );

  // product quanitity increase by one if already in cart
  if (isProductAlreadyInCart) {
    const quantityInCart = cart.directModifiedPaths.find(
      (item) =>
        item.product.toString() === productId &&
        item.variant?.toSting() === variantId,
    );

    if (quantityInCart + quantity > stock) {
      return res.status(400).json({
        message: `Only ${stock} items left in stock. and you already have ${quantityInCart} items in your cart`,
        success: false,
      });
    }

    await cartModel.findOneAndUpdate(
      {
        user: req.user._id,
        "items.product": productId,
        "items.variant": variantId,
      },
      { $inc: { "items.$.quantity": quantity } },
      { new: true },
    );
  }
}
