import express from "express";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import {
  validateAddToCart,
  validateIncrementCartItemQuantity,
} from "../validator/cart.validator.js";
import {
  addToCart,
  createOrderController,
  getCart,
  incrementCartItemQuantity,
  verifyOrderController,
} from "../controllers/cart.controller.js";

const router = express.Router();

/**
 * @route POST /api/cart/add/:productId/:variantId
 */
router.post(
  "/add/:productId/:variantId",
  authenticateUser,
  validateAddToCart,
  addToCart,
);

/**
 * @route GET /api/cart
 */
router.get("/", authenticateUser, getCart);

/**
 * @route PATCH /api/cart/quantity/increment/:productId/:variantId
 */
router.patch(
  "/quantity/increment/:productId/:variantId",
  authenticateUser,
  validateIncrementCartItemQuantity,
  incrementCartItemQuantity,
);

/**
 * @route POST /api/cart/payment/create/order
 */
router.post("/payment/create/order", authenticateUser, createOrderController);

router.post("/payment/verify/order", authenticateUser, verifyOrderController);

export default router;
