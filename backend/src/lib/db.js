import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://abhijeetkadam656:PDWgCGvUYYbaNCfe@cluster0.fvlth.mongodb.net/chat_DB?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Mongo db connected successfully");
  } catch (error) {
    console.log("mongo db error detected:", error);
  }
};
