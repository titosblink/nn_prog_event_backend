import mongoose from "mongoose";

const daySchema = new mongoose.Schema({
  daycode: String,
  title: String,
  date: String
});

export default mongoose.model("Day", daySchema);