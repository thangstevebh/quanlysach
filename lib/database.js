import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDatabase = async () => {
  try {
    const uri = process.env.DB_URI;

    //connectDatabase
    await mongoose.connect(uri, {});

    //success
    console.log("Connected database");
  } catch (err) {
    console.log(err.messge);
    console.log("Connect DB failed");
  }
};
