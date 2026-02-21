import mongoose from "mongoose";

const programmeSchema = new mongoose.Schema({
  daycode: String,
  title: String,
  time: String,
  venue: String
});

export default mongoose.model("Programme", programmeSchema);