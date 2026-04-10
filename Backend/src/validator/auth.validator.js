import { body, validationResult } from "express-validator";

function validateRequest(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

export const validateRegisterUser = [
  body("email").isEmail().withMessage("invalid email format"),
  body("contact")
    .notEmpty()
    .withMessage("contact is required")
    .matches(/^\d{10}$/)
    .withMessage("contact must be 10 digit numnber"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be atleast 6 charecters long"),
  body("fullname")
    .notEmpty()
    .withMessage("fullname is required")
    .isLength({ min: 3 })
    .withMessage("full name must be at least 3 charecter long"),
  body("isSeller").isBoolean().withMessage("isSeller must be a boolean value"),

  validateRequest,
];
