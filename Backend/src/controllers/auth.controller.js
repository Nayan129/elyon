import userModel from "../models/user.model.js";
const bcrypt = require("bcryptjs");
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import { body } from "express-validator";

export const register = async (req, res) => {
  const { email, password, fullname, contact } = body;
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
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "server error",
    });
  }
};
