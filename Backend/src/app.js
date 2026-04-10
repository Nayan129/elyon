import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();

// middlerware - morgan for print requests coming on server
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// server start check
app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is running",
  });
  res.send("hello, welcome to Elyon store");
});

// Routes 
import authRouter from "./routes/auth.routes.js";
app.use("/auth", authRouter);

export default app;
