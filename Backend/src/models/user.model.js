import mongoose from "mongoose";

// this schema has all required things for register/login
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email should be unique"],
  },
  contact: {
    type: String,
    required: [true, "contact is required"],
    unique: [true, "mobile number should be unique"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  fullname: {
    type: String,
    rwquired: true,
  },
  role: {
    type: String,
    enum: ["buyer", "seller"],
    default: "buyer",
  },
});

const userModel = mongoose.model("user", UserSchema);

export default userModel;
