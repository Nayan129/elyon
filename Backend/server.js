import { config } from "dotenv";
import app from "./src/app.js";
import connectToDB from "./src/config/database.js";
config();

const PORT = 3000;
const startServer = async () => {
  try {
    await connectToDB();
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("failed to start server", error.message);
    process.exit(1);
  }
};

startServer();
