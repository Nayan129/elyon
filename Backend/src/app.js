import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();

// middlerware - morgan for print requests coming on server
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// server start check
app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is running",
  });
  res.send("hello, welcome to Elyon store");
});

export default app;
