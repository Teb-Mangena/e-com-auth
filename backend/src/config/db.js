import mongoose from "mongoose";
import { ENV } from "./env.js";

export async function connectDB() {
  try {
    await mongoose.connect(ENV.MONGO_URI);

    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connecting to DB",error);
    process.exit(1);
  }
}