import { body, validationResult } from "express-validator";

export const validateRegister = [
  body("email").isEmail().withMessage("invalid email format"),
  body("contact").notEmpty().withMessage("contact is required"),

];
