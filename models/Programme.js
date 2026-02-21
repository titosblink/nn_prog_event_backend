import mongoose from "mongoose";

const programmeSchema = new mongoose.Schema({
  daycode: { type: String, required: true },
  title: { type: String, required: true },
  time: { type: String, required: true },
  venue: { type: String, required: true }
});

// Use the existing model if it exists, otherwise create a new one
const Programme = mongoose.models.Programme || mongoose.model("Programme", programmeSchema);

export default Programme;