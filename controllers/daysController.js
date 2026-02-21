import Day from "../models/Day.js";

const getAllDays = async (req, res) => {
  try {
    const days = await Day.find().sort({ daycode: 1 }); // sort by daycode if needed
    res.status(200).json(days);
  } catch (err) {
    console.error("Error fetching days:", err);
    res.status(500).json({
      message: "Error fetching days",
      error: err.message
    });
  }
};

export { getAllDays };