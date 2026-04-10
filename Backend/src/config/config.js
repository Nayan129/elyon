import dotenv from "dotenv";
dotenv.config();

//if MONGO_URI not available in .env
if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined in environmental variable");
}

// writing all secrets here for security and centralization
export const config = {
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};
