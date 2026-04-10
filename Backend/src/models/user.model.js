import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
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

// this pre check password modified or not before saving to DB
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const hash = await bcryptjs.hash(this.password, 10);
  this.password = hash;
});

// compare DB stored password with user written password
UserSchema.methods.comparePassword = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

const userModel = mongoose.model("user", UserSchema);

export default userModel;
