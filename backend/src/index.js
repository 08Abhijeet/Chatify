import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

const app = express();

const port = process.env.PORT || 6000;

app.use("/api/auth", authRoutes);
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);

  connectDB()
});
