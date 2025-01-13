import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 8080;

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("database connected successfully");
});

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
