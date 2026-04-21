import mongoose from "mongoose";

const priceScema = new mongoose.Schema(
  {
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
  {
    _v: false,
    _id: false,
  },
);

export default priceScema;
