import mongoose from "mongoose";

const programmeSchema = new mongoose.Schema({
  daycode: { type: String, required: true },
  title: { type: String, required: true },
  time: { type: String, required: true },
  venue: { type: String, required: true }
});

export default mongoose.model("Programme", programmeSchema);