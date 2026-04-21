import mongoose, { mongo } from "mongoose";

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  item: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        requird: true,
        ref: "product",
      },
      varient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "varient",
      },
      quantity: {
        type: Number,
        default: 1,
      },
      price: {
        amount: {
          type: Number,
          required: true,
        },
        currency: {
          type: String,
          enum: ["USD", "EUR", "GBP", "JPY", "INR"],
          default: "INR",
        },
      },
    },
  ],
});
