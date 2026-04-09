import { config, Config } from "dotenv";
import app from "./src/app.js";
config();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

