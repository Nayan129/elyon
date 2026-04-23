import cartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";
import { stockOfVariant } from "../dao/product.dao.js";

export async function addToCart(req, res) {
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

  // product quantity increase by one if already in cart
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

    return res.status(200).json({
      message: "cart updated successfully",
      success: true,
    });
  }

  // if quantity greter than stock then return
  if (quantity > stock) {
    return res.status(400).json({
      message: `Only ${stock} items left in stock`,
      success: false,
    });
  }

  // add items to cart
  cart.items.push({
    product: productId,
    variant: variantId,
    quantity,
    price: product.price,
  });

  await cart.save();

  return res.status(200).json({
    message: "item added to cart successfully",
    success: true,
  });
}

export async function getCart(req, res) {
  const user = req.user;

  let cart = await cartModel
    .findOne({ user: user._id })
    .populate("items.product");

  if (!cart) {
    cart = await cartModel.create({ user: user._id });
  }

  return res.status(200).json({
    message: "cart fetched successfully",
    success: true,
    cart,
  });
}
