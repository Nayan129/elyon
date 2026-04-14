import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

// token for authorization checks
async function sendTokenResponse(user, res) {
  const token = jwt.sign(
    {
      id: user._id,
    },
    config.JWT_SECRET,
    { expiresIn: "7d" },
  );

  res.cookie("token", token);

  res.status(200).json({
    success: true,
    user: {
      id: user._id,
      email: user.email,
      contact: user.contact,
      fullname: user.fullname,
      role: user.role,
    },
  });
}

// Register User
export const register = async (req, res) => {
  const { email, password, fullname, contact, isSeller } = req.body;
  try {
    const isUserExist = await userModel.findOne({
      $or: [{ email }, { contact }],
    });

    if (isUserExist) {
      return res.status(400).json({
        message: "user with this email or contact is already exist",
      });
    }

    const user = await userModel.create({
      email,
      fullname,
      contact,
      password,
      role: isSeller ? "seller" : "buyer",
    });

    await sendTokenResponse(user, res, "User registered successfully");
  } catch (error) {
    console.log("REGISTER ERROR:", error.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};
