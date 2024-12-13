import express from "express";

import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.listen(5000, () => {
  console.log("Server is running on the port 5000");
  connectDB();
});
